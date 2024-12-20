<template>
  <FSCol
    gap="16px"
    style="position: relative;"
  >
    <FSRow
      v-if="$props.showSearch || (!isMobileSized && ($slots.prependToolbar || $slots.toolbar )) || (!$props.disableTable && !$props.disableIterator)"
      align="bottom-left"
      :wrap="isMobileSized ? false : true"
      width="fill"
    >
      <slot
        v-if="!isMobileSized"
        name="prepend-toolbar"
      />
      <template
        v-if="$props.showSearch"
      >
        <FSSearchField
          :hideHeader="true"
          v-model="innerSearch"
        />
        <FSButton
          v-if="filterableHeaders.length > 0"
          prependIcon="mdi-filter-variant"
          :variant="innerShowFilters ? 'full' : 'standard'"
          @click="innerShowFilters = !innerShowFilters"
        />
      </template>
      <slot
        v-if="!isMobileSized"
        name="toolbar"
      />
      <template
        v-if="$slots.appendToolbar || (!$props.disableTable && !$props.disableIterator)"
      >
        <FSRow
          align="center-right"
          :width="isExtraSmall ? 'hug' : 'fill'"
        >
          <slot
            v-if="!isMobileSized"
            name="append-toolbar"
          />
          <FSOptionGroup
            v-if="!$props.disableTable && !$props.disableIterator"
            :values="modeOptions"
            :singleColor="true"
            :required="true"
            variant="slide"
            v-model="innerMode"
          />
        </FSRow>
      </template>
    </FSRow>
    <FSRow
      v-if="isMobileSized && ($slots.prependToolbar || $slots.toolbar || $slots.appendToolbar)"
    >
      <FSSlideGroup>
        <slot
          name="prepend-toolbar"
        />
        <slot
          name="toolbar"
        />
        <slot
          name="append-toolbar"
        />
      </FSSlideGroup>
    </FSRow>
    <FSRow
      v-if="showFiltersRow"
      gap="16px"
    >
      <FSCol
        v-if="innerShowFilters && hasVisibleFilters"
        width="hug"
      >
        <FSRow
          gap="8px"
        >
          <FSFilterButton
            v-for="(header, index) in filterableHeaders"
            :key="index"
            :header="header"
            :filters="filters[header.value]"
            @update:filter="(value) => toggleFilter(header.value, value)"
          >
            <template
              #default="{ filter }"
            >
              <slot
                :name="filterSlot(header)"
                v-bind="{ filter }"
              />
            </template>
          </FSFilterButton>
        </FSRow>
      </FSCol>
      <FSDivider
        v-if="showFiltersDivider"
        :size="['30px', '24px']"
        :vertical="true"
      />
      <FSCol>
        <FSRow
          gap="8px"
        >
          <FSChip
            v-if="innerShowFilters && resetable"
            variant="standard"
            :label="$tr('data-table.reset-filters', 'Reset')"
            :height="['30px', '24px']"
            :color="ColorEnum.Error"
            :editable="true"
            @click="resetFilter"
          />
          <FSHiddenButton
            v-if="innerMode === 'table' && hiddenHeaders.length > 0"
            :headers="hiddenHeaders"
            :color="$props.color"
            @update:show="(value) => updateHeader(value, 'hidden', false)"
          />
        </FSRow>
      </FSCol>
    </FSRow>
    <template
      v-if="innerMode === 'table'"
    >
      <v-data-table
        v-if="!isExtraSmall"
        loadingText=""
        :selectStrategy="$props.singleSelect ? 'single' : 'all'"
        :groupBy="$props.groupBy ? [$props.groupBy] : []"
        :headers="extraHeaders.concat(innerHeaders)"
        :sortBy="innerSortBy ? [innerSortBy] : []"
        :itemsPerPage="innerRowsPerPage"
        :showSelect="$props.showSelect"
        :hover="!$props.sortDraggable"
        :itemValue="$props.itemValue"
        :loading="$props.loading"
        :rowProps="rowProps"
        :fixedHeader="true"
        :items="innerItems"
        :multiSort="false"
        :page="innerPage"
        :class="classes"
        :style="style"
        :modelValue="$props.modelValue"
        @auxclick:row="onClickLibrary.row"
        @click:row="onClickLibrary.row"
        @update:sortBy="innerSortBy = $event ? $event[0] : null"
        @dragover.prevent
        @drop:row="(event, row) => onDrop(event, row, 'tr.v-data-table__tr')"
        @dragover="onDragOver($event, 'tr.v-data-table__tr', 'tbody')"
        @dragleave="onDragLeave"
      >
        <template
          #no-data
        >
          <FSText
            font="text-overline"
          >
            {{ $tr("ui.common.no-data", "No data") }}
          </FSText>
        </template>
        <template
          #header.data-table-select="props"
        >
          <FSRow
            v-if="!$props.singleSelect"
            class="fs-data-table-select"
            align="bottom-center"
            width="hug"
          >
            <FSCheckbox
              :indeterminate="props.someSelected && !props.allSelected"
              :modelValue="props.allSelected"
              @update:modelValue="toggleSelectAll(props.allSelected)"
            />
          </FSRow>
        </template>
        <template
          #item.data-table-select="props"
        >
          <FSRow
            class="fs-data-table-select"
            align="bottom-center"
            width="hug"
          >
            <FSCheckbox
              :modelValue="$props.modelValue.includes(props.item[$props.itemValue])"
              @update:modelValue="toggleSelect(props.item)"
            />
          </FSRow>
        </template>
        <template
          #item.data-table-draggable="props"
        >
          <FSDraggable
            elementSelector="tr.v-data-table__tr"
            :disabled="draggableDisabled"
            :item="props"
            @update:dragend="(event, dragged) => onDragEnd(event, dragged, 'tbody')"
          >
            <FSRow
              class="fs-data-table-draggable"
              align="bottom-center"
              width="hug"
            >
              <FSIcon
                size="l"
              >
                mdi-drag-vertical
              </FSIcon>
            </FSRow>
          </FSDraggable>
        </template>
        <template
          #header.data-table-group="props"
        >
          <slot
            name="header.data-table-group"
            v-bind="props"
          />
        </template>
        <template
          #item.data-table-group="props"
        >
          <slot
            name="item.data-table-group"
            v-bind="props"
          />
        </template>
        <template
          #group-header="props"
        >
          <template
            :ref="() => { if (!props.isGroupOpen(props.item)) { props.toggleGroup(props.item) } }"
          />
          <tr
            class="fs-data-table-group-header"
          >
            <td />
            <td
              class="fs-data-table-group-header"
              :colspan="extraHeaders.concat(innerHeaders).length + 1"
            >
              <slot
                name="group-header"
                v-bind="{ ...props, toggleSelectGroup }"
              >
                <FSCard
                  padding="12px 16px"
                >
                  <FSRow
                    align="center-left"
                    width="hug"
                  >
                    <FSCheckbox
                      v-if="$props.showSelect"
                      :modelValue="props.item.items.every((item) => $props.modelValue.includes(item.key))"
                      :indeterminate="$props.modelValue.some((id) => props.item.items.some((item) => item.key === id)) && !props.item.items.every((item) => $props.modelValue.includes(item.key))"
                      @update:modelValue="toggleSelectGroup(props.item)"
                    />
                    <FSText>
                      <slot
                        name="group-header-title"
                        v-bind="props"
                      >
                        {{ props.item.value }}
                      </slot>
                    </FSText>
                  </FSRow>
                </FSCard>
              </slot>
            </td>
          </tr>
        </template>
        <template
          v-for="(header, index) in headersSlots"
          #[header.slotName]="props"
        >
          <slot
            :name="header.slotName"
            v-bind="props"
          >
            <FSRow
              align="center-left"
              :wrap="false"
              :key="index"
            >
              <slot
                :name="`${header.slotName}-prepend`"
              />
              <slot
                :name="`${header.slotName}-title`"
              >
                <FSText>
                  {{ header.text }}
                </FSText>
              </slot>
              <slot
                :name="`${header.slotName}-append`"
              />
              <FSRow
                align="center-right"
                :wrap="false"
              >
                <slot
                  :name="`${header.slotName}-configuration`"
                >
                  <FSHeaderButton
                    :first="index === 0"
                    :last="index === headersSlots.length - 1"
                    @update:hide="updateHeader(header, 'hidden', !header.hidden)"
                    @update:left="updateHeader(header, 'index', -1)"
                    @update:right="updateHeader(header, 'index', 1)"
                  />
                  <FSButton
                    v-if="header.sortable"
                    variant="icon"
                    :color="sortColor(header, props)"
                    :icon="sortIcon(header, props)"
                    @click="toggleSort(header)"
                  />
                </slot>
              </FSRow>
            </FSRow>
          </slot>
        </template>
        <template
          v-for="item in itemsSlots"
          #[item.slotName]="props"
        >
          <div
            class="fs-td-color"
          >
            <slot
              :name="item.slotName"
              v-bind="props"
            >
              <FSRow
                align="center-left"
              >
                <FSSpan
                  font="text-overline"
                >
                  {{ props.item[item.value] }}
                </FSSpan>
              </FSRow>
            </slot>
          </div>
        </template>
        <template
          #bottom
        >
          <FSRow
            class="fs-data-table-footer"
            align="center-right"
            padding="16px"
            gap="24px"
          >
            <template
              v-if="$props.modelValue.length"
            >
              <template
                v-if="$props.modelValue.length >= innerItems.length"
              >
                <FSRow
                  gap="2px"
                >
                  <FSText
                    font="text-button"
                  >
                    {{ $tr("data-table.all-selected-bold", "Warning:") }}
                  </FSText>
                  <FSText>
                    {{ $tr("data-table.all-selected-regular", "All elements selected") }}
                  </FSText>
                </FSRow>
              </template>
              <template
                v-else
              >
                <FSRow>
                  <FSText>
                    {{ $tr("data-table.some-selected", "{0} element(s) selected", $props.modelValue.length.toString()) }}
                  </FSText>
                </FSRow>
              </template>
            </template>
            <FSRow
              align="center-right"
              width="hug"
              :wrap="false"
            >
              <FSText
                font="text-overline"
              >
                {{ $tr("data-table.rows-per-page", "Rows per page") }}
              </FSText>
              <FSSelectField
                class="fs-data-table-rows-per-page fs-small-input"
                :clearable="false"
                :hideHeader="true"
                :items="rowsPerPageOptions"
                v-model="innerRowsPerPage"
              />
            </FSRow>
            <FSToggleSet
              v-if="innerRowsPerPage !== -1"
              class="fs-data-table-pagination fs-small-input"
              variant="slide"
              :values="pageOptions"
              :required="true"
              v-model="innerPage"
            />
          </FSRow>
        </template>
        <template
          v-for="(_, name) in innerSlots"
          #[name]="props"
        >
          <slot
            :name="name"
            v-bind="props"
          />
        </template>
      </v-data-table>
      <v-data-iterator
        v-else
        class="fs-data-table-iterator"
        :itemsPerPage="innerRowsPerPage"
        :loading="$props.loading"
        :items="innerItems"
        :page="innerPage"
      >
        <template
          #loader
        >
          <v-progress-linear
            height="2"
            :indeterminate="true"
          />
        </template>
        <template
          #no-data
        >
          <FSText
            font="text-overline"
          >
            {{ $tr("ui.common.no-data", "No data") }}
          </FSText>
        </template>
        <template
          #default="{ items }"
        >
          <FSCol
            class="fs-data-iterator-container"
            width="fill"
          >
            <FSDraggable
              v-for="(item, index) in items"
              elementSelector=".fs-draggable-item"
              :disabled="draggableDisabled"
              :item="{ ...item, index }"
              :key="index"
              @update:dragend="(event, dragged) => onDragEnd(event, dragged, '.fs-data-iterator-container')"
              @dragover="(event) => onDragOver(event, '.fs-draggable-item', '.fs-data-iterator-container')"
              @drop="(event) => onDrop(event, item, '.fs-draggable-item')"
              @dragleave="onDragLeave"
              @dragover.prevent
            >
              <slot
                name="item.iterator"
                v-bind="{ item, index }"
              >
                <FSDataIteratorItem
                  v-if="item.type === 'item'"
                  :itemColor="$props.rowColor ? $props.rowColor(item.raw) : ColorEnum.Background"
                  :headers="innerHeaders.filter(h => !$props.sneakyHeaders.includes(h.value))"
                  :clickable="onClickLibrary.clickable"
                  :showSelect="$props.showSelect"
                  :itemTo="$props.itemTo"
                  :color="$props.color"
                  :item="item.raw"
                  :key="index"
                  :modelValue="$props.modelValue.includes(item.raw[$props.itemValue])"
                  @update:modelValue="toggleSelect"
                  @auxclick="() => onClickLibrary.mobile($event, item)"
                  @click="() => onClickLibrary.mobile($event, item)"
                >
                  <template
                    #item.top="props"
                  >
                    <slot
                      name="item.top"
                      v-bind="props"
                    />
                  </template>
                  <template
                    v-for="item in itemsSlots"
                    #[item.slotName]="props"
                  >
                    <slot
                      :name="item.slotName"
                      v-bind="props"
                    >
                      <FSSpan
                        font="text-overline"
                      >
                        {{ props.item[item.value] }}
                      </FSSpan>
                    </slot>
                  </template>
                  <template
                    #item.bottom="props"
                  >
                    <slot
                      name="item.bottom"
                      v-bind="props"
                    />
                  </template>
                </FSDataIteratorItem>
              </slot>
            </FSDraggable>
          </FSCol>
        </template>
        <template
          #footer
        >
          <FSRow
            class="fs-data-table-footer"
            align="center-right"
            padding="16px"
            gap="24px"
          >
            <template
              v-if="$props.modelValue.length"
            >
              <template
                v-if="$props.modelValue.length >= innerItems.length"
              >
                <FSRow
                  gap="2px"
                >
                  <FSText
                    font="text-button"
                  >
                    {{ $tr("data-table.all-selected-bold", "Warning:") }}
                  </FSText>
                  <FSText>
                    {{ $tr("data-table.all-selected-regular", "All elements selected") }}
                  </FSText>
                </FSRow>
              </template>
              <template
                v-else
              >
                <FSRow>
                  <FSText>
                    {{ $tr("data-table.some-selected", "{0} element(s) selected", $props.modelValue.length.toString()) }}
                  </FSText>
                </FSRow>
              </template>
            </template>
            <FSRow
              align="center-right"
              :wrap="false"
            >
              <FSText
                font="text-overline"
              >
                {{ $tr("data-table.rows-per-page", "Rows per page") }}
              </FSText>
              <FSRow
                width="120px"
              >
                <FSSelectField
                  class="fs-data-table-rows-per-page fs-small-input"
                  :clearable="false"
                  :hideHeader="true"
                  :items="rowsPerPageOptions"
                  v-model="innerRowsPerPage"
                />
              </FSRow>
            </FSRow>
            <FSToggleSet
              v-if="innerRowsPerPage !== -1"
              class="fs-data-table-pagination fs-small-input"
              variant="slide"
              :values="pageOptions"
              :required="true"
              v-model="innerPage"
            />
          </FSRow>
        </template>
      </v-data-iterator>
    </template>
    <template
      v-else
    >
      <v-data-iterator
        class="fs-data-table-iterator"
        :loading="$props.loading"
        :itemsPerPage="size"
        :items="innerItems"
      >
        <template
          #loader
        >
          <v-progress-linear
            height="2"
            :indeterminate="true"
          />
        </template>
        <template
          #no-data
        >
          <FSText
            font="text-overline"
          >
            {{ $tr("ui.common.no-data", "No data") }}
          </FSText>
        </template>
        <template
          #default="{ items }"
        >
          <FSRow
            width="hug"
            class="fs-data-iterator-container"
            :gap="$props.tileGap"
          >
            <FSDraggable
              v-for="(item, index) in items.filter((item) => item.type === 'item')"
              elementSelector=".fs-draggable-item"
              :disabled="draggableDisabled"
              :item="{ ...item, index }"
              :key="index"
              @update:dragend="(event, dragged) => onDragEnd(event, dragged, '.fs-data-iterator-container')"
              @dragover="(event) => onDragOver(event, '.fs-draggable-item', '.fs-data-iterator-container')"
              @drop="(event) => onDrop(event, item, '.fs-draggable-item')"
              @dragleave="onDragLeave"
              @dragover.prevent
            >
              <slot
                name="item.tile"
                v-bind="{ index, item: item.raw, toggleSelect }"
              >
                <FSDataIteratorItem
                  :itemColor="$props.rowColor ? $props.rowColor(item.raw) : ColorEnum.Background"
                  :headers="innerHeaders.filter(h => !$props.sneakyHeaders.includes(h.value))"
                  :clickable="onClickLibrary.clickable"
                  :showSelect="$props.showSelect"
                  :itemTo="$props.itemTo"
                  :color="$props.color"
                  :item="item.raw"
                  :key="index"
                  :modelValue="$props.modelValue.includes(item.raw[$props.itemValue])"
                  @update:modelValue="toggleSelect"
                  @auxclick="() => onClickLibrary.mobile($event, item)"
                  @click="() => onClickLibrary.mobile($event, item)"
                >
                  <template
                    #item.top="props"
                  >
                    <slot
                      name="item.top"
                      v-bind="props"
                    />
                  </template>
                  <template
                    v-for="item in itemsSlots"
                    #[item.slotName]="props"
                  >
                    <slot
                      :name="item.slotName"
                      v-bind="props"
                    >
                      <FSSpan
                        font="text-overline"
                      >
                        {{ props.item[item.value] }}
                      </FSSpan>
                    </slot>
                  </template>
                  <template
                    #item.bottom="props"
                  >
                    <slot
                      name="item.bottom"
                      v-bind="props"
                    />
                  </template>
                </FSDataIteratorItem>
              </slot>
            </FSDraggable>
          </FSRow>
        </template>
      </v-data-iterator>
    </template>
    <div
      class="fs-data-table-intersection"
      :id="elementId"
    /> 
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, onMounted, onUnmounted, type PropType, type Ref, ref, type Slot, type StyleValue, watch } from "vue";
import { useRouter } from "vue-router";

import { ColorEnum, type FSDataTableColumn, type FSDataTableFilter, type FSDataTableOrder, type FSToggle } from "@dative-gpi/foundation-shared-components/models";
import { useBreakpoints, useColors, useSlots } from "@dative-gpi/foundation-shared-components/composables";
import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import { useRouting } from "@dative-gpi/foundation-shared-services/composables";
import { uuidv4 } from "@dative-gpi/bones-ui/tools/uuid"

import { alphanumericSort, containsSearchTerm, sizeToVar } from "../../utils";

import FSDataIteratorItem from "./FSDataIteratorItem.vue";
import FSSearchField from "../fields/FSSearchField.vue";
import FSSelectField from "../fields/FSSelectField.vue";
import FSFilterButton from "./FSFilterButton.vue";
import FSHiddenButton from "./FSHiddenButton.vue";
import FSHeaderButton from "./FSHeaderButton.vue";
import FSOptionGroup from "../FSOptionGroup.vue";
import FSToggleSet from "../FSToggleSet.vue";
import FSDraggable from "./FSDraggable.vue";
import FSCheckbox from "../FSCheckbox.vue";
import FSDivider from "../FSDivider.vue";
import FSCard from "../FSCard.vue";
import FSChip from "../FSChip.vue";
import FSIcon from "../FSIcon.vue";
import FSSpan from "../FSSpan.vue";
import FSText from "../FSText.vue";
import FSRow from "../FSRow.vue";
import FSCol from "../FSCol.vue";

export default defineComponent({
  name: "FSDataTableUI",
  components: {
    FSDataIteratorItem,
    FSFilterButton,
    FSHiddenButton,
    FSHeaderButton,
    FSSearchField,
    FSSelectField,
    FSOptionGroup,
    FSDraggable,
    FSToggleSet,
    FSCheckbox,
    FSDivider,
    FSCard,
    FSChip,
    FSIcon,
    FSSpan,
    FSText,
    FSRow,
    FSCol
  },
  props: {
    headers: {
      type: Array as PropType<FSDataTableColumn[]>,
      required: true
    },
    showFilters: {
      type: Boolean,
      required: false,
      default: false
    },
    filters: {
      type: Object as PropType<{ [key: string]: FSDataTableFilter[] }>,
      required: false,
      default: () => ({})
    },
    sneakyHeaders: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => []
    },
    items: {
      type: Array as PropType<any[]>,
      required: true
    },
    itemValue: {
      type: String,
      required: false,
      default: "id"
    },
    itemTo: {
      type: Function,
      required: false,
      default: null
    },
    ["onClick:row"]: {
      type: Function,
      required: false,
      default: null
    },
    rowsPerPage: {
      type: Number,
      required: false,
      default: 10
    },
    page: {
      type: Number,
      required: false,
      default: 1
    },
    groupBy: {
      type: Object as PropType<FSDataTableOrder>,
      required: false,
      default: null
    },
    sortBy: {
      type: Object as PropType<FSDataTableOrder | null>,
      required: false,
      default: null
    },
    modelValue: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => []
    },
    color: {
      type: String as PropType<ColorEnum>,
      required: false,
      default: ColorEnum.Primary
    },
    showSelect: {
      type: Boolean,
      required: false,
      default: true
    },
    showSearch: {
      type: Boolean,
      required: false,
      default: true
    },
    noSearch: {
      type: Boolean,
      required: false,
      default: false
    },
    singleSelect: {
      type: Boolean,
      required: false,
      default: false
    },
    selectedOnly: {
      type: Boolean,
      required: false,
      default: false
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    mode: {
      type: String as PropType<"table" | "iterator">,
      required: false,
      default: "table"
    },
    disableTable: {
      type: Boolean,
      required: false,
      default: false
    },
    disableIterator: {
      type: Boolean,
      required: false,
      default: false
    },
    sizeIterator: {
      type: Number,
      required: false,
      default: 20
    },
    sortDraggable: {
      type: Boolean,
      required: false,
      default: false
    },
    includeDraggable: {
      type: Boolean,
      required: false,
      default: false
    },
    rowColor: {
      type: Function,
      required: false,
      default: null
    },
    rowGap: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: "0"
    },
    rowBorderRadius: {
      type: [String, Number],
      required: false,
      default: "4px"
    },
    tileGap: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: "12px"
    },
  },
  emits: ["update:modelValue", "update:headers", "update:search", "update:showFilters", "update:filters", "update:mode", "update:sortBy", "update:rowsPerPage", "update:page", "update:include", "update:items", "click:row"],
  setup(props, { emit }) {
    const { isExtraSmall, isMobileSized } = useBreakpoints();
    const { handleRoutingEvent } = useRouting();
    const { $tr } = useTranslationsProvider();
    const { getColors } = useColors();
    const router = useRouter();

    const backgrounds = getColors(ColorEnum.Background);
    const lights = getColors(ColorEnum.Light);

    const filters = ref<{ [key: string]: FSDataTableFilter[] }>({});
    const innerSearch: Ref<string | null> = ref(null);
    const innerRowsPerPage = ref(props.rowsPerPage);
    const innerSortBy = ref(props.sortBy);
    const innerMode = ref(props.disableTable ? "iterator" : props.disableIterator ? "table" : props.mode);
    const innerPage = ref(props.page);
    const innerShowFilters = ref(props.showFilters);
    const resetable = ref(false);

    const intersectionObserver = ref<IntersectionObserver | null>(null);
    const size = ref(props.sizeIterator);

    const elementId = `id${uuidv4()}`;

    const modeOptions: FSToggle[] = [
      { id: "iterator", prependIcon: "mdi-view-grid-outline" },
      { id: "table", prependIcon: "mdi-format-list-bulleted" }
    ];

    const rowsPerPageOptions: { id: number, label: string }[] = [
      { id: 5, label: "5" },
      { id: 10, label: "10" },
      { id: 30, label: "30" },
      { id: -1, label: $tr("ui.common.all", "All") }
    ];

    const showFiltersRow = computed((): boolean => {
      switch (innerMode.value) {
        case "iterator": {
          return (props.showSearch && innerShowFilters.value && filterableHeaders.value.length > 0);
        }
        case "table": {
          return (props.showSearch && innerShowFilters.value && filterableHeaders.value.length > 0) || hiddenHeaders.value.length > 0;
        }
      }
    });

    const hasVisibleFilters = computed((): boolean => {
      return filterableHeaders.value.some((header) => !hiddenHeaders.value.includes(header));
    });

    const showFiltersDivider = computed((): boolean => {
      switch (innerMode.value) {
        case "iterator": {
          return resetable.value;
        }
        case "table": {
          return resetable.value || (hiddenHeaders.value.length > 0 && hasVisibleFilters.value);
        }
      }
      
    });

    const innerSlots = computed((): { [label: string]: Slot<any> } => {
      const slots = { ...useSlots().slots };
      delete slots["toolbar"];
      delete slots["no-data"];
      delete slots["header.data-table-select"];
      delete slots["item.data-table-select"];
      delete slots["header.data-table-draggable"];
      delete slots["item.data-table-draggable"];
      delete slots["header.data-table-group"];
      delete slots["item.data-table-group"];
      delete slots["group-header"];
      delete slots["group-header-title"];
      delete slots["bottom"];
      for (const header of filterableHeaders.value) {
        delete slots[filterSlot(header)];
      }
      for (const header of headersSlots.value) {
        delete slots[header.slotName!];
        delete slots[header.slotName + "-prepend"];
        delete slots[header.slotName + "-title"];
        delete slots[header.slotName + "-append"];
        delete slots[header.slotName + "-configuration"];
      }
      for (const item of itemsSlots.value) {
        delete slots[item.slotName!];
      }
      return slots;
    });

    const style = computed((): StyleValue => ({
      "--fs-data-table-background-color": backgrounds.base,
      "--fs-data-table-border-color": lights.base,
      "--fs-data-table-row-gap": sizeToVar(props.rowGap)
    }));

    const classes = computed((): string[] => {
      const classNames = ["fs-data-table"];
      if (props.groupBy) {
        classNames.push("fs-data-table-grouped");
      }
      return classNames;
    });

    const extraHeaders = computed((): any[] => {
      const extra: { key: string, width: string }[] = [];
      if (props.groupBy) {
        extra.push({
          key: "data-table-group",
          width: "0%"
        });
      }
      if (props.sortDraggable || props.includeDraggable) {
        extra.push({
          key: "data-table-draggable",
          width: "0%"
        });
      }
      if (props.showSelect) {
        extra.push({
          key: "data-table-select",
          width: "0%"
        });
      }
      return extra;
    });

    const innerHeaders = computed((): FSDataTableColumn[] => {
      return props.headers.filter(c => !c.hidden)
        .sort((c1, c2) => c1.index - c2.index).map((c) => {
          if (c.sort) {
            return c;
          }
          return {
            ...c,
            sort: alphanumericSort
          };
        })
    });

    const hiddenHeaders = computed((): FSDataTableColumn[] => {
      return props.headers.filter(c => c.hidden);
    });

    const filterableHeaders = computed((): FSDataTableColumn[] => {
      return innerHeaders.value.filter((c) => c.filterable);
    });

    const innerItems = computed((): any[] => {
      const activeFilters: { [key: string]: FSDataTableFilter[] } = {};
      for (const property in filters.value) {
        activeFilters[property] = filters.value[property].filter((filter) => !filter.hidden);
      }

      if (props.items && props.items.length) {
        const innerSearchFormatted = innerSearch.value ? innerSearch.value.toLowerCase() : null;
        return props.items.filter((item) => {
          if (props.selectedOnly && !props.modelValue.includes(item[props.itemValue])) {
            return false;
          }
          for (const property in activeFilters) {
            if (!activeFilters[property].some((filter) => filter.filter && filter.filter(filter.value, item[property], item))) {
              return false;
            }
          }
          if (!props.noSearch && innerSearchFormatted) {
            return containsSearchTerm(item, innerSearchFormatted);
          }
          return true;
        });
      }
      return [];
    });

    const headersSlots = computed((): FSDataTableColumn[] => {
      return innerHeaders.value.map((c) => ({ ...c, slotName: `header.${c.value}` }));
    });

    const itemsSlots = computed((): FSDataTableColumn[] => {
      return innerHeaders.value.map((c) => ({ ...c, slotName: `item.${c.value}` }));
    });

    const groups = computed((): { [key: string]: any[] } => {
      if (props.groupBy && props.groupBy.key) {
        return innerItems.value.reduce((acc, item) => {
          const key = item[props.groupBy.key!];
          if (!acc[key]) {
            acc[key] = [];
          }
          acc[key].push(item);
          return acc;
        }, {});
      }
      return {};
    });

    const pageOptions = computed((): { id: number, label: string }[] => {
      if (innerRowsPerPage.value === -1) {
        return [];
      }
      else {
        const total = Math.ceil((innerItems.value.length + Object.keys(groups.value).length) / innerRowsPerPage.value);
        return Array.from(Array(total).keys()).map(i => ({
          id: i + 1,
          label: (i + 1).toString()
        }));
      }
    });

    const onClickLibrary = computed((): { [key: string]: Function | boolean } => {
      if (props["onClick:row"] || props.itemTo) {
        return {
          clickable: true,
          row: (event: PointerEvent, row: any) => {
            if (props.itemTo && router) {
              handleRoutingEvent(event, props.itemTo(row.item), true);
            }
            else {
              emit("click:row", row.item);
            }
          },
          mobile: (event: any, item: any) => {
            if (props.itemTo && router) {
              router.push(props.itemTo(item.raw));
            }
            else {
              emit("click:row", item.raw);
            }
          }
        }
      }
      return {
        clickable: false,
        row: null,
        mobile: () => null
      };
    });

    const draggableDisabled = computed(() => {
      return (!props.sortDraggable && !props.includeDraggable) || !(innerSortBy.value === null || innerSortBy.value === undefined);
    });

    const toggleSelectAll = (allSelected: boolean): void => {
      if (allSelected) {
        emit("update:modelValue", []);
      }
      else {
        emit("update:modelValue", innerItems.value.map((item) => item[props.itemValue]));
      }
    };

    const toggleSelectGroup = (group: any): void => {
      if (group.items.every((item: any) => props.modelValue.includes(item.key))) {
        emit("update:modelValue", props.modelValue.filter((id) => !group.items.some((item: any) => item.key === id)));
      }
      else {
        emit("update:modelValue", [...new Set(props.modelValue.concat(group.items.map((item: any) => item.key)))]);
      }
    };

    const toggleSelect = (item: any): void => {
      let values = props.modelValue.slice();
      const index = values.indexOf(item[props.itemValue]);
      if (index > -1) {
        values.splice(index, 1);
      }
      else {
        if (props.singleSelect) {
          values = [item[props.itemValue]];
        }
        else {
          values.push(item[props.itemValue]);
        }
      }
      emit("update:modelValue", values);
    };

    const toggleFilter = (header: string, value: FSDataTableFilter[]): void => {
      filters.value[header] = value;
      emit("update:filters", filters.value);
    };

    const resetFilter = (): void => {
      for (const key in filters.value) {
        filters.value[key] = filters.value[key].map((filter) => ({ ...filter, hidden: false }));
      }
      emit("update:filters", filters.value);
    };

    const filterSlot = (header: FSDataTableColumn): string => {
      return `filter.${header.value}`;
    };

    const updateHeader = (header: FSDataTableColumn, property: "hidden" | "index", value: boolean | number) => {
      const innerColumns = props.headers.slice(0);
      const innerColumn = innerColumns.find((column) => column.value === header.value);
      if (innerColumn) {
        switch (property) {
          case "hidden":
            innerColumn.hidden = value as boolean;
            if (value && filters.value[header.value!]) {
              filters.value[header.value!] = filters.value[header.value!].map((filter) => ({ ...filter, hidden: false }));
              emit("update:filters", filters.value);
            }
            break;
          case "index":
            switch (value) {
              case 1:
                for (const column of innerColumns) {
                  if (column.index === header.index + 1) {
                    column.index--;
                  }
                }
                break;
              case -1:
                for (const column of innerColumns) {
                  if (column.index === header.index - 1) {
                    column.index++;
                  }
                }
                break;
            }
            innerColumn.index += value as number;
            innerColumns.sort((c1, c2) => c1.index - c2.index);
            for (let i = 0; i < innerColumns.length; i++) {
              innerColumns[i].index = i;
            }
            break;
        }
        emit("update:headers", innerColumns);
      }
    };

    const computeFilters = (): void => {
      const filterDictionary: { [key: string]: FSDataTableFilter[] } = {};

      for (const header of innerHeaders.value.filter((h) => h.filterable)) {
        const key = header.value!;
        const currentFilters = filters.value[key];

        const getPath = (object: any, keys: string[]) => keys.reduce((acc, key) => acc[key] ?? null, object);

        let value: FSDataTableFilter[] = [];

        if (header.fixedFilters) {
          value = header.fixedFilters.map((ff): FSDataTableFilter => ({
            hidden: currentFilters?.find((cf) => cf.value == (ff.value || null))?.hidden ?? false,
            text: ff.text?.toString() ?? "—",
            value: ff.value ?? null,
            filter: header.methodFilter ?? ((_, property, item) => {
              if (header.methodFilterRaw) {
                return header.methodFilterRaw(ff.value, item);
              }
              const flat = property = [property].flat();
              return (!ff.value && flat.length == 0) || flat.some(f => f == ff.value);
            })
          }));
          filterDictionary[key] = value;
        }
        else {
          if (props.items && props.items.length) {
            const mapToInnerValue = header.innerValue ? header.innerValue : (i: any) => i;
            const itemValues = props.items.flatMap((item) => {
              return Array.isArray(getPath(item, key.split("."))) && getPath(item, key.split(".")).length == 0 ? undefined : getPath(item, key.split("."))
            }).map(mapToInnerValue);
            const distinctValues = [...new Set(itemValues)];

            value = distinctValues.map((dv): FSDataTableFilter => {
              return {
                hidden: currentFilters?.find((cf) => cf.value == (dv || null))?.hidden ?? false,
                text: dv?.toString() ?? "—",
                value: dv || null,
                filter: header.methodFilter ?? ((_, property, item) => {
                  if (header.methodFilterRaw) {
                    return header.methodFilterRaw(dv, item);
                  }
                  const flat = [property].flat().map(mapToInnerValue);
                  return (!dv && flat.length == 0) || flat.some(f => f == dv);
                })
              }
            });
          }
          filterDictionary[key] = value.sort((v1, v2) => {
            return v1.text.localeCompare(v2.text, undefined, { numeric: true });
          });
        }
      }
      for (const [key, filters] of Object.entries(props.filters)) {
        for (const filter of filters) {
          const fromDictionary = filterDictionary[key]?.find(f => f.value == filter.value);
          if (fromDictionary) {
            fromDictionary.hidden = filter.hidden;
          }
        }
      }
      filters.value = filterDictionary;
    };

    const sortColor = (header: FSDataTableColumn, slotProps: any) => {
      const sort = slotProps.sortBy.find((s: any) => s.key == header.value);
      if (sort) {
        return props.color;
      }
      return ColorEnum.Light;
    };

    const sortIcon = (header: FSDataTableColumn, slotProps: any) => {
      const sort = slotProps.sortBy.find((s: any) => s.key == header.value);
      if (sort) {
        switch (sort.order) {
          case "asc": return "mdi-sort-reverse-variant";
          case "desc": return "mdi-sort-variant";
        }
      }
      return "mdi-sort-variant-off";
    };

    const toggleSort = (header: FSDataTableColumn) => {
      if (header.value == null) {
        return;
      }
      if (innerSortBy.value?.key !== header.value) {
        innerSortBy.value = { key: header.value, order: 'asc' };
      }
      else if (innerSortBy.value.order === 'asc') {
        innerSortBy.value.order = 'desc' ;
      }
      else {
        innerSortBy.value = null;
      }
    }

    const observeIntersection = (): void => {
      switch (innerMode.value) {
        case "table":
          if (intersectionObserver.value && document.querySelector(`#${elementId}`)) {
            intersectionObserver.value.unobserve(document.querySelector(`#${elementId}`)!);
          }
          return;
        case "iterator":
          if (!intersectionObserver.value) {
            intersectionObserver.value = new IntersectionObserver(entries => {
              entries.forEach((entry) => {
                if (entry.boundingClientRect.bottom < window.innerHeight * 1.25) {
                  if (innerItems.value.length > size.value) {
                    size.value = Math.min(size.value + props.sizeIterator, innerItems.value.length);
                  }
                }
              });
            }, { threshold: [0.9] });
          }
          if (document.querySelector(`#${elementId}`)) {
            intersectionObserver.value.unobserve(document.querySelector(`#${elementId}`)!);
            intersectionObserver.value.observe(document.querySelector(`#${elementId}`)!);
          }
          return;
      }
    }

    const rowProps = (row: any): Record<string, any> => {
      if (props.rowColor && row.item) {
        const rowColors = getColors(props.rowColor(row.item));
        return {
          class: "fs-data-table-custom-row",
          style: {
            "--fs-data-table-row-border-size": "1px",
            "--fs-data-table-row-border-radius": sizeToVar(props.rowBorderRadius),
            "--fs-data-table-row-background-color": rowColors.light,
            "--fs-data-table-row-border-color": rowColors.lightContrast,
            "--fs-data-table-row-color": rowColors.lightContrast
          }
        };
      }
      else {
        return {};
      }
    };

    const changeIndex = (oldIndex: number, newIndex: number) => {
      if (oldIndex === newIndex) {
        return;
      }
      const items = innerItems.value.slice();
      const itemToMove = items.splice(oldIndex, 1)[0];
      items.splice(newIndex, 0, itemToMove);
      return items;
    };

    const resetRowIndex = (initialIndex: number, currentIndex: number, draggedElement: HTMLElement, tbodyElement: HTMLElement) => {
      if (initialIndex > currentIndex && tbodyElement.children[initialIndex]) {
        tbodyElement.children[initialIndex].insertAdjacentElement("afterend", draggedElement);
      }
      else if(tbodyElement.children[initialIndex]) {
        tbodyElement.children[initialIndex].insertAdjacentElement("beforebegin", draggedElement);
      }
    };

    const onDragOver = (event: DragEvent, elementSelector: string, elementContainerSelector: string) => {
      const dragged = document.querySelector(".fs-draggable-dragging") as HTMLElement;

      if (dragged != null) {
        const target = (event.target as HTMLElement)?.closest(elementSelector);
        dragged.classList.remove("fs-draggable-dragging-grabbegin");

        if (target != null && (target !== dragged || (props.sortDraggable && props.includeDraggable))) {
          if (props.includeDraggable) {
            if (!props.sortDraggable) {
              target.classList.add("fs-dropzone-include");
            }
            else {
              const rowHeight = target.clientHeight;
              const y = event.clientY - target.getBoundingClientRect().top;

              if (y > rowHeight * (3 / 4)) {
                target.insertAdjacentElement("afterend", dragged);
                target.classList.remove("fs-dropzone-include");
              }
              else if (y < rowHeight * (1 / 4)) {
                target.insertAdjacentElement("beforebegin", dragged);
                target.classList.remove("fs-dropzone-include");
              }
              else if (dragged!.getAttribute("data-initial-index") !== null) {
                target.classList.add("fs-dropzone-include");
                const tbodyElement = (event.target as HTMLElement)?.closest(elementContainerSelector) as HTMLElement ?? null;
                if (tbodyElement !== null) {
                  resetRowIndex(+dragged!.getAttribute('data-initial-index')!, Array.from(tbodyElement.children).indexOf(dragged), dragged, tbodyElement);
                }
              }
            }
          }
          else if (props.sortDraggable) {
            const draggedY = dragged.getBoundingClientRect().top;
            const targetY = target.getBoundingClientRect().top;
            if (draggedY < targetY) {
              target.insertAdjacentElement("afterend", dragged);
            }
            else if (draggedY > targetY) {
              target.insertAdjacentElement("beforebegin", dragged);
            }
            else {
              const draggedX = dragged.getBoundingClientRect().left;
              const targetX = target.getBoundingClientRect().left;
              if (draggedX < targetX) {
                target.insertAdjacentElement("afterend", dragged);
              }
              else {
                target.insertAdjacentElement("beforebegin", dragged);
              }
            }
          }
        }

      }
    };

    const onDragLeave = (event: DragEvent) => {
      const dropzone = (event.target as HTMLElement)?.closest(".fs-dropzone-include");
      if (dropzone && !(event.relatedTarget as HTMLElement)?.closest(".fs-dropzone-include")) {
        dropzone.classList.remove("fs-dropzone-include");
      }
    };

    const onDragEnd = (event: DragEvent, draggedElement: HTMLElement, elementContainerSelector: string) => {
      const initialIndex = +(draggedElement.getAttribute("data-initial-index") ?? -1);

      if (draggedElement != null && initialIndex !== -1) {
        if (props.sortDraggable) {
          const tbodyElement = (event.target as HTMLElement)?.closest(elementContainerSelector) as HTMLElement;
          const currentIndex = Array.from(tbodyElement.children).indexOf(draggedElement);
          const newItems = changeIndex(initialIndex, currentIndex);

          if (newItems !== null && newItems !== undefined) {
            emit("update:items", newItems);
          }
          resetRowIndex(initialIndex, currentIndex, draggedElement, tbodyElement);
        }
      }
    };

    const onDrop = (event: DragEvent, row: any, elementSelector: string) => {
      const draggedElement = document.querySelector(".fs-draggable-dragging") as HTMLElement;

      if (draggedElement != null) {
        const target = (event.target as HTMLElement)?.closest(elementSelector);
        const draggedData = JSON.parse(event.dataTransfer?.getData("text/plain") ?? draggedElement.dataset.item ?? '{}');
        const itemsData = draggedData.item ?? draggedData.raw;
        const rowData = row.item ?? row.raw;

        if (target != null && target !== draggedElement) {
          if (props.includeDraggable && itemsData[props.itemValue] != rowData[props.itemValue]) {
            emit("update:include", { draggedItem: itemsData, targetItem: rowData })
          }
          target.closest(".fs-dropzone-include")?.classList.remove("fs-dropzone-include");
        }
      }
    };

    onMounted(() => {
      computeFilters();
      observeIntersection();
    });

    onUnmounted(() => {
      if (intersectionObserver.value) {
        intersectionObserver.value.disconnect();
      }
    });

    watch(() => props.showFilters, () => {
      innerShowFilters.value = props.showFilters;
    });

    watch(innerSearch, () => {
      innerPage.value = 1;
      emit("update:search", innerSearch.value);
    });

    watch(innerShowFilters, () => {
      emit("update:showFilters", innerShowFilters.value);
    });

    watch(filters, () => {
      resetable.value = Object.keys(filters.value)
        .some((key) => filters.value[key].some((filter) => filter.hidden));
    }, { deep: true });

    watch(size, () => {
      observeIntersection();
    });

    watch(innerMode, () => {
      emit("update:mode", innerMode.value);
      size.value = props.sizeIterator;
      observeIntersection();
    });

    watch(innerSortBy, () => {
      emit("update:sortBy", innerSortBy.value);
    });

    watch(innerPage, () => {
      emit("update:page", innerPage.value);
    });

    watch(innerRowsPerPage, () => {
      emit("update:rowsPerPage", innerRowsPerPage.value);
    });

    watch(() => props.headers, () => {
      computeFilters();
    });

    watch(() => props.items, async () => {
      computeFilters();
      observeIntersection();
      if (innerPage.value !== 1) {
        const formerPage = innerPage.value;
        innerPage.value = 1;
        await nextTick();
        innerPage.value = formerPage;
      }
    });

    return {
      ColorEnum,
      innerSlots,
      rowsPerPageOptions,
      innerRowsPerPage,
      innerSearch,
      innerMode,
      modeOptions,
      innerPage,
      pageOptions,
      innerShowFilters,
      showFiltersRow,
      showFiltersDivider,
      hasVisibleFilters,
      extraHeaders,
      innerHeaders,
      hiddenHeaders,
      filterableHeaders,
      filters,
      resetable,
      innerSortBy,
      innerItems,
      headersSlots,
      itemsSlots,
      classes,
      style,
      size,
      isMobileSized,
      isExtraSmall,
      draggableDisabled,
      elementId,
      onClickLibrary,
      toggleSelectAll,
      toggleSelectGroup,
      toggleSelect,
      toggleSort,
      updateHeader,
      toggleFilter,
      resetFilter,
      filterSlot,
      sortColor,
      sortIcon,
      rowProps,
      onDrop,
      onDragOver,
      onDragLeave,
      onDragEnd
    };
  }
})
</script>