<template>
  <v-data-table
    v-bind="$attrs"
    class="d-data-table"
    fixed-header
    :hide-default-header="!showDefaultHeader"
    :headers="headers"
    :items="filteredItems"
    :single-select="singleSelect"
  >
    <template v-slot:headers="headerss" v-if="showCustomHeader">
      <thead>
        <tr>
          <th
            v-for="header in headers"
            class="d-data-table-header"
            :key="header.value"
            :style="{
              width: (header.width && header.width + 'px') || undefined,
            }"
          >
            <v-row
              v-if="header.value == 'data-table-select' && !singleSelect"
              no-gutters
              class="justify-center"
            >
              <FSCheckbox
                class="d-toggle-select-all"
                :value="headerss.allSelected"
                :indeterminate="headerss.someSelected && headerss.allSelected"
                @click="
                  headerss.selectAll(
                    !(headerss.allSelected || headerss.someSelected)
                  )
                "
              />
            </v-row>

            <v-row
              v-else
              no-gutters
              class="align-center text-body-1 h-100"
              :class="{
                'flex-row-reverse': header.align === 'end',
                'justify-center': header.align === 'center',
              }"
            >
              <slot :name="`header.${header.value}-left-prepend`" />

              <slot :name="`header.${header.value}`">
                <span class="d-data-table-header-text grey-3--text text-body-1">
                  {{ header.text }}
                </span>
              </slot>

              <FSButton
                v-if="header.configurable"
                @click="
                  configured === header.value
                    ? (configured = null)
                    : (configured = header.value?.toString()!)
                "
              >
                <FSIcon
                  small
                  :color="
                    configured === header.value ? 'alert-orange' : 'grey-1'
                  "
                >
                  {{ configurationIcon }}
                </FSIcon>
              </FSButton>

              <slot :name="`header.${header.value}-left-append`" />

              <template v-if="header.sortable || header.canBeFiltered">
                <v-spacer />

                <slot :name="`header.${header.value}-right-prepend`" />

                <FSButton v-if="header.sortable" @click="header.sort">
                  <template
                    v-if="headerss.sortBy.includes({key : header.value!, order : 'desc'})"
                  >
                    <FSIcon color="blue-1" small> mdi-sort-descending </FSIcon>
                  </template>

                  <template v-else>
                    <FSIcon color="grey-1" small>mdi-sort-ascending</FSIcon>
                  </template>
                </FSButton>

                <FSMenuButton
                  v-if="header.canBeFiltered && filters[header.value?.toString()!]"
                  :value="filters[header.value?.toString()!]"
                  :sortable="false"
                  @input="(value) => toggleFilters(header.value?.toString()!, value)"
                >
                  <template #activator="{ on }">
                    <FSButton v-on="on">
                      <FSIcon
                        small
                        :color="
                          filters[header.value?.toString()!].every((c) => !c.hidden)
                            ? 'grey-1'
                            : 'blue-1'
                        "
                      >
                        mdi-filter
                      </FSIcon>
                    </FSButton>
                  </template>

                  <template #item="{ defaultValue, item, on }">
                    <slot
                      :name="`header.${header.value}.filter.item`"
                      v-bind="{ item, on }"
                    >
                      {{ defaultValue }}
                    </slot>
                  </template>
                </FSMenuButton>

                <slot :name="`header.${header.value}-right-append`" />
              </template>
            </v-row>
          </th>
        </tr>
      </thead>
    </template>

    <template #[`item.data-table-select`]="{ isSelected, toggleSelect }">
      <v-row no-gutters class="align-bottom justify-center">
        <FSCheckbox :value="isSelected" @click="toggleSelect" />
      </v-row>
    </template>

    <slot></slot>
    <template v-for="(index, name) in $slots" v-slot:[name]>
      <slot :name="name" />
    </template>
    <template v-for="(index, name) in $slots" v-slot:[name]="data">
      <slot :name="name" v-bind="data"></slot>
    </template>

    <template v-for="header in itemsSlots" v-slot:[header.index]="data">
      <slot
        :name="header.slotName"
        v-bind="{ configure: header.value == configured, ...data }"
      ></slot>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
  onMounted,
  watch,
  toRefs,
  PropType,
} from "vue";

import FSCheckbox from "./FSCheckbox.vue";
import FSButton from "./FSButton.vue";
import FSIcon from "./FSIcon.vue";

import _ from "lodash";

import { Column, FilterValue } from "../models";

import { useVuetify } from "../composables";

export default defineComponent({
  name: "FSDataTable",
  components: {
    FSCheckbox,
    FSButton,
    FSIcon,
  },
  props: {
    columns: {
      type: Array<Column> as PropType<Column[]>,
      required: true,
      default: "fill",
    },
    columnText: {
      type: String,
      required: false,
      default: "text",
    },
    columnValue: {
      type: String,
      required: false,
      default: "value",
    },
    columnPosition: {
      type: String,
      required: false,
      default: "index",
    },
    configurationIcon: {
      type: String,
      required: false,
      default: "$cog",
    },
    singleSelect: {
      type: Boolean,
      required: false,
      default: false,
    },
    handleFilters: {
      type: Boolean,
      required: false,
      default: true,
    },
    items: {
      type: Array<any>,
      required: true,
    },
    hideHeader: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props, { emit }) {
    const vuetify = useVuetify();

    const filters = ref<{ [key: string]: FilterValue[] }>({});
    const configured = ref<string | null>(null);

    const showDefaultHeader = computed((): boolean => {
      return !props.hideHeader && vuetify!.display.xs;
    });

    const showCustomHeader = computed((): boolean => {
      return !props.hideHeader && !vuetify!.display.xs;
    });

    const headers = computed((): Column[] => {
      const visibleColumns = props.columns.filter((c) => !c.hidden);

      const sortedVisibleColumns = visibleColumns.sort(
        (c1, c2) => c1[props.columnPosition] - c2[props.columnPosition]
      );

      return sortedVisibleColumns.map((c): Column => {
        const { text, value, filterable, canBeFiltered, ...others } = c;
        return {
          text: c[props.columnText] || text,
          value: c[props.columnValue] || value,
          slotName: `item.${c[props.columnValue] || value}`,
          canBeFiltered: canBeFiltered || filterable,
          ...others,
        };
      });
    });

    const itemsSlots = computed((): Column[] => {
      return headers.value.filter((c) => c.slotName);
    });

    const filteredItems = computed((): any[] => {
      if (props.handleFilters) {
        return props.items.filter((i) =>
          _(filters.value).reduce<boolean>(
            (include, filterValues, key) =>
              include && filterItem(filterValues, i[key], i),
            true
          )
        );
      } else {
        return props.items;
      }
    });

    const toggleFilters = (header: string, value: FilterValue[]) => {
      filters.value[header] = value;
      emit("update:filters", filters.value);
    };

    const computeFilters = () => {
      const filterableHeaders = headers.value.filter((h) => h.canBeFiltered);
      const filterDict: { [key: string]: FilterValue[] } = {};

      for (const col of filterableHeaders) {
        const key = col.value!;
        const currentFilters = filters.value[key];

        if (col.fixedFilters != null) {
          const value = col.fixedFilters.map(
            (ff): FilterValue => ({
              hidden:
                currentFilters != null &&
                currentFilters.find((f) => f.value == (ff.value || null)) !=
                  null
                  ? currentFilters.find((f) => f.value == (ff.value || null))!
                      .hidden
                  : false,
              text: (ff.text && ff.text.toString()) || "—",
              value: ff.value || null,

              filter:
                col.methodFilter != null
                  ? col.methodFilter
                  : (value, property) => {
                      property = [property].flat();
                      return Array.isArray(property)
                        ? property.includes(value) ||
                            (!value && property.length == 0)
                        : (!value && !property) || value == property;
                    },
            })
          );

          const sortedValue = value.sort((v1, v2) => {
            return v1.text.localeCompare(v2.text, undefined, { numeric: true });
          });

          filterDict[key] = sortedValue;
        } else {
          const mapToInnerValue = col.innerValue
            ? col.innerValue
            : (i: any) => i;
          const itemValues = props.items
            .flatMap((item) =>
              Array.isArray(item[key]) && item[key].length == 0
                ? undefined
                : item[key]
            )
            .map(mapToInnerValue);

          const distinctValues = [...new Set(itemValues)];

          const value = distinctValues.map(
            (v): FilterValue => ({
              hidden:
                currentFilters != null &&
                currentFilters.find((f) => f.value == (v || null)) != null
                  ? currentFilters.find((f) => f.value == (v || null))!.hidden
                  : false,
              text: (v && v.toString()) || "—",
              value: v || null,

              filter:
                col.methodFilter != null
                  ? col.methodFilter
                  : (value, property) => {
                      property = [property].flat().map(mapToInnerValue);
                      return Array.isArray(property)
                        ? property.includes(v) || (!v && property.length == 0)
                        : (!v && !property) || v == property;
                    },
            })
          );

          const sortedValue = value.sort((v1, v2) => {
            return v1.text.localeCompare(v2.text, undefined, { numeric: true });
          });

          filterDict[key] = sortedValue;
        }
      }
      filters.value = filterDict;
    };

    const filterItem = (
      values: FilterValue[],
      property: any,
      item: any
    ): boolean => {
      return values
        .filter((v) => !v.hidden)
        .some((v) => !!v.filter && v.filter(v.value, property, item));
    };

    onMounted(computeFilters);

    watch(
      () => props.items,
      () => {
        computeFilters();
      }
    );

    return {
      showCustomHeader,
      showDefaultHeader,
      headers,
      filteredItems,
      filters,
      configured,
      itemsSlots,
      toggleFilters,
      filterItem,
    };
  },
});
</script>
