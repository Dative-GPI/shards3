<template>
  <FSCol
    :gap="16"
  >
    <FSRow>
      <FSSearchField
        prependInnerIcon="mdi-magnify"
        :hideHeader="true"
        v-model="innerSearch"
      />
      <FSButton
        prependIcon="mdi-filter-variant"
        :variant="showFilters ? 'full' : 'standard'"
        @click="showFilters = !showFilters"
      />
      <slot name="toolbar" />
      <v-spacer />
      <FSToggleSet

      />
    </FSRow>
    <FSRow
      v-if="(showFilters && filterableHeaders.length > 0) || hiddenHeaders.length > 0"
    >
      <template v-if="showFilters">
        <FSFilterButton
          v-for="(header, index) in filterableHeaders"
          :key="index"
          :header="header"
          :filters="filters[header.value]"
          @update:filter="(value) => toggleFilter(header.value, value)"
        />
      </template>
      <FSHiddenButton
        v-if="hiddenHeaders.length > 0"
        :headers="hiddenHeaders"
        :color="$props.color"
        @update:show="(value) => updateHeader(value, 'hidden', false)"
      />
    </FSRow>
    <v-data-table
      class="fs-data-table"
      :itemValue="$props.itemValue"
      :showSelect="$props.showSelect"
      :singleSelect="$props.singleSelect"
      :headers="extraHeaders.concat(innerHeaders)"
      :items="innerItems"
      :fixedHeader="true"
      :multiSort="true"
      :hover="true"
      :style="style"
      :page="innerPage"
      :itemsPerPage="innerRowsPerPage"
      :modelValue="innerValue"
      :search="innerSearch"
      v-bind="$attrs"
    >
      <template #no-data>
        <FSText
          font="text-overline"
        >
          {{ $tr("ui.data-table.empty", "No data") }}
        </FSText>
      </template>
      <template #[`header.data-table-select`]="{ allSelected, someSelected }">
        <FSRow
          v-if="!$props.singleSelect"
          class="fs-data-table-select"
          align="bottom-center"
          width="hug"
        >
          <FSCheckbox
            :modelValue="allSelected"
            :indeterminate="someSelected && !allSelected"
            @update:modelValue="toggleSelectAll(allSelected)"
          />
        </FSRow>
      </template>
      <template #[`item.data-table-select`]="props">
        <FSRow
          class="fs-data-table-select"
          align="bottom-center"
          width="hug"
        >
          <FSCheckbox
            :modelValue="innerValue.includes(props.item[$props.itemValue])"
            @update:modelValue="toggleSelect(props.item)"
          />
        </FSRow>
      </template>
      <template v-for="(header, index) in headersSlots" v-slot:[header.slotName]="slotData">
        <slot :name="header.slotName" v-bind="slotData">
          <FSRow
            align="center-left"
            :wrap="false"
            :key="index"
          >
            <slot :name="`${header.slotName}-prepend`" />
            <slot :name="`${header.slotName}-title`">
              <FSText>
                {{ header.text }}
              </FSText>
            </slot>
            <slot :name="`${header.slotName}-append`" />
            <v-spacer />
            <slot :name="`${header.slotName}-configuration`">
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
                :color="sortColor(header, slotData)"
                :icon="sortIcon(header, slotData)"
              />
            </slot>
          </FSRow>
        </slot>
      </template>
      <template v-for="(item, index) in itemsSlots" v-slot:[item.slotName]="slotData">
        <slot :name="item.slotName" v-bind="slotData">
          <FSRow
            align="center-left"
            :key="index"
          >
            <FSText
              font="text-overline"
            >
              {{ slotData.item[item.value] }}
            </FSText>
          </FSRow>
        </slot>
      </template>
      <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
      <template #bottom>
        <FSRow
          class="fs-data-table-footer"
          align="center-right"
          padding="16px"
          :gap="24"
        >
          <FSRow
            align="center-right"
          >
            <FSText
              font="text-overline"
            >
              {{ $tr("ui.data-table.rows-per-page", "Rows per page") }}
            </FSText>
            <FSRow
              width="120px"
            >
              <FSSelectField
                :hideHeader="true"
                :items="rowsPerPageOptions"
                v-model="innerRowsPerPage"
              />
            </FSRow>
          </FSRow>
          <FSToggleSet
            v-if="innerRowsPerPage !== -1"
            class="fs-data-table-pagination"
            variant="slide"
            :values="pageOptions"
            :required="true"
            v-model="innerPage"
          />
        </FSRow>
      </template>
    </v-data-table>
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, PropType, ref, watch } from "vue";

import { ColorEnum, FSDataTableColumn, FSDataTableFilter } from "@dative-gpi/foundation-shared-components/models";
import { useTranslationsProvider } from "@dative-gpi/foundation-shared-services/composables";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";

import FSFilterButton from "./FSFilterButton.vue";
import FSHiddenButton from "./FSHiddenButton.vue";
import FSHeaderButton from "./FSHeaderButton.vue";
import FSSearchField from "../FSSearchField.vue";
import FSSelectField from "../FSSelectField.vue";
import FSToggleSet from "../FSToggleSet.vue";
import FSCheckbox from "../FSCheckbox.vue";
import FSText from "../FSText.vue";
import FSIcon from "../FSIcon.vue";
import FSRow from "../FSRow.vue";
import FSCol from "../FSCol.vue";

export default defineComponent({
  name: "FSDataTable",
  components: {
    FSFilterButton,
    FSHiddenButton,
    FSHeaderButton,
    FSSearchField,
    FSSelectField,
    FSToggleSet,
    FSCheckbox,
    FSText,
    FSIcon,
    FSRow,
    FSCol
  },
  props: {
    headers: {
      type: Array as PropType<FSDataTableColumn[]>,
      required: true
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
    selectStrategy: {
      type: String as PropType<"page" | "all">,
      required: false,
      default: "page"
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
    handleFilters: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["update:modelValue", "update:headers", "update:filters", "update:rowsPerPage", "update:page"],
  setup(props, { emit }) {
    const { $tr } = useTranslationsProvider();

    const backgrounds = useColors().getColors(ColorEnum.Background);
    const lights = useColors().getColors(ColorEnum.Light);

    const filters = ref<{ [key: string]: FSDataTableFilter[] }>({});
    const innerRowsPerPage = ref(props.rowsPerPage);
    const innerValue = ref(props.modelValue);
    const innerPage = ref(props.page);
    const innerSearch = ref(null);
    const showFilters = ref(true);

    const style = computed((): { [code: string]: string } & Partial<CSSStyleDeclaration> => {
      return {
        "--fs-data-table-background-color": backgrounds.base,
        "--fs-data-table-border-color": lights.base
      };
    });

    const extraHeaders = computed((): any[] => {
      const extra = [];
      if (props.showSelect) {
        extra.push({
          key: "data-table-select",
          width: "3%"
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
            sort: (a: any, b: any): number => JSON.stringify(a)
              .localeCompare(JSON.stringify(b), undefined, { numeric: true })
          };
        })
    });

    const hiddenHeaders = computed((): FSDataTableColumn[] => {
      return props.headers.filter(c => c.hidden);
    });

    const filterableHeaders = computed((): FSDataTableColumn[] => {
      return innerHeaders.value.filter((c) => c.filterable);
    });

    const headersSlots = computed((): FSDataTableColumn[] => {
      return innerHeaders.value.map((c) => ({ ...c, slotName: `header.${c.value}` }));
    });

    const itemsSlots = computed((): FSDataTableColumn[] => {
      return innerHeaders.value.map((c) => ({ ...c, slotName: `item.${c.value}` }));
    });

    const innerItems = computed((): any[] => {
      if (props.handleFilters) {
        return props.items.filter((item) => {
          if (props.selectedOnly && !innerValue.value.includes(item[props.itemValue])) {
            return false;
          }
          return Object.keys(filters.value).reduce((visible, key) => {
            return visible && filters.value[key]
              .filter((filter) => !filter.hidden)
              .some((filter) => !!filter.filter && filter.filter(filter.value, item[key], item));
          }, true);
        });
      }
      return props.items;
    });

    const toggleSelectAll = (allSelected: boolean): void => {
      if (allSelected) {
        switch (props.selectStrategy) {
          case "page":
            innerValue.value = innerValue.value.filter((value) => !innerItems.value
              .slice((innerPage.value - 1) * innerRowsPerPage.value, innerPage.value * innerRowsPerPage.value)
              .map((item) => item[props.itemValue])
              .includes(value));
            break;
          case "all":
            innerValue.value = [];
            break;
        }
      }
      else {
        switch (props.selectStrategy) {
          case "page":
            innerValue.value = innerValue.value.concat(innerItems.value
              .slice((innerPage.value - 1) * innerRowsPerPage.value, innerPage.value * innerRowsPerPage.value)
              .map((item) => item[props.itemValue]));
              innerValue.value = [...new Set(innerValue.value)];
            break;
          case "all":
            innerValue.value = innerItems.value
              .map((item) => item[props.itemValue]);
            break;
        }
      }
      emit("update:modelValue", innerValue.value);
    };

    const toggleSelect = (item: any): void => {
      const index = innerValue.value.indexOf(item[props.itemValue]);
      if (index > -1) {
        innerValue.value.splice(index, 1);
      }
      else {
        innerValue.value.push(item[props.itemValue]);
      }
      emit("update:modelValue", innerValue.value);
    };

    const toggleFilter = (header: string, value: FSDataTableFilter[]): void => {
      filters.value[header] = value;
      emit("update:filters", filters.value);
    };

    const updateHeader = (header: FSDataTableColumn, property: "hidden" | "index", value: boolean | number) => {
      const innerColumns = props.headers.slice(0);
      const innerColumn = innerColumns.find((column) => column.value === header.value);
      if (innerColumn) {
        switch (property) {
          case "hidden":
            innerColumn.hidden = value as boolean;
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
    }

    const computeFilters = (): void => {
      const filterDictionary: { [key: string]: FSDataTableFilter[] } = {};

      for (const header of innerHeaders.value.filter((h) => h.filterable)) {
        const key = header.value!;
        const currentFilters = filters.value[key];

        let value: FSDataTableFilter[] = [];

        if (header.fixedFilters) {
          value = header.fixedFilters.map((ff): FSDataTableFilter => ({
            hidden: currentFilters?.find((cf) => cf.value == (ff.value || null))?.hidden ?? false,
            text: ff.text?.toString() ?? "—",
            value: ff.value || null,
            filter: header.methodFilter ?? ((value, property) => {
              property = [property].flat();
              return Array.isArray(property) ? property.includes(value) || (!value && property.length == 0) : (!value && !property) || value == property;
            })
          }));
        }
        else {
          const mapToInnerValue = header.innerValue ? header.innerValue : (i: any) => i;
          const itemValues = props.items.flatMap((item) => Array.isArray(item[key]) && item[key].length == 0 ? undefined : item[key]).map(mapToInnerValue);
          const distinctValues = [...new Set(itemValues)];

          value = distinctValues.map((dv): FSDataTableFilter => ({
            hidden: currentFilters?.find((cf) => cf.value == (dv || null))?.hidden ?? false,
            text: dv?.toString() ?? "—",
            value: dv || null,
            filter: header.methodFilter ?? ((_, property) => {
              property = [property].flat().map(mapToInnerValue);
              return Array.isArray(property) ? property.includes(dv) || (!dv && property.length == 0) : (!dv && !property) || dv == property;
            })
          }));
        }
        filterDictionary[key] = value.sort((v1, v2) => {
          return v1.text.localeCompare(v2.text, undefined, { numeric: true });
        });
      }
      filters.value = filterDictionary;
    };

    const sortIcon = (header: FSDataTableColumn, slotData: any) => {
      const sort = slotData.sortBy.find((s: any) => s.key == header.value);
      if (sort) {
        switch (sort.order) {
          case "asc": return "mdi-sort-reverse-variant";
          case "desc": return "mdi-sort-variant";
        }
      }
      return "mdi-sort-variant-off";
    };

    const sortColor = (header: FSDataTableColumn, slotData: any) => {
      const sort = slotData.sortBy.find((s: any) => s.key == header.value);
      if (sort) {
        return props.color;
      }
      return ColorEnum.Light;
    };

    onMounted(() => {
      computeFilters();
    });

    watch(innerSearch, () => {
      innerPage.value = 1;
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

    const rowsPerPageOptions = [
      { id: 10, label: "10" },
      { id: 30, label: "30" },
      { id: -1, label: $tr("ui.data-table.all-rows", "All") }
    ];

    const pageOptions = computed(() => {
      if (innerRowsPerPage.value === -1) {
        return [];
      }
      if (innerSearch.value) {
        var searched = innerItems.value.filter(item => innerHeaders.value.some((header) => {
          return JSON.stringify(item[header.value]).toString().toLowerCase().includes(innerSearch.value.toString().toLowerCase());
        }));
        const total = Math.ceil(searched.length / innerRowsPerPage.value);
        return Array.from(Array(total).keys()).map(i => ({
          id: i + 1,
          label: (i + 1).toString()
        }));
      }
      else {
        const total = Math.ceil(innerItems.value.length / innerRowsPerPage.value);
        return Array.from(Array(total).keys()).map(i => ({
          id: i + 1,
          label: (i + 1).toString()
        }));
      }
    });

    return {
      rowsPerPageOptions,
      innerRowsPerPage,
      innerSearch,
      innerPage,
      pageOptions,
      showFilters,
      extraHeaders,
      innerHeaders,
      hiddenHeaders,
      filterableHeaders,
      filters,
      innerItems,
      headersSlots,
      itemsSlots,
      innerValue,
      style,
      toggleSelectAll,
      toggleSelect,
      toggleFilter,
      updateHeader,
      sortIcon,
      sortColor
    };
  }
})
</script>