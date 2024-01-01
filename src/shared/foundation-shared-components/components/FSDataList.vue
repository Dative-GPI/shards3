<template>
  <div>
    <slot name="header">
      <v-row no-gutters class="align-center mb-1">
        <FSSearchInput v-if="searchable" class="mr-2" v-model="searching" />
        <FSMenuBtn
          v-if="mode == 'table' && vuetify?.display.xs && !hideColumns"
          :btn-class="'mr-2'"
          :sortable="columnSortable"
          :value="columns"
          @input="$emit('update:columns', $event)"
        />
        <slot name="header-action" />
        <template v-if="!disableTable && !disableTiles">
          <v-spacer />
          <FSButtonToggle mandatory v-model="mode">
            <FSButton
              width="40"
              value="table"
              class="ma-0 pa-0 transparent--background"
              :ripple="false"
            >
              <FSIcon>list_alt</FSIcon>
            </FSButton>
            <FSButton
              width="40"
              value="tile"
              class="ma-0 pa-0 transparent--background"
              :ripple="false"
            >
              <FSIcon>$tile</FSIcon>
            </FSButton>
          </FSButtonToggle>
        </template>
      </v-row>
    </slot>

    <div>
      <slot name="table" v-bind="{ items }">
        <FSDataTable
          v-if="mode == 'table'"
          :columns="columns"
          :items="searchItems(items, searching)"
          :item-key="itemKey"
          :no-data-text="noDataText"
          :no-results-text="noResultsText"
          :footer-props="footerProps"
          v-bind="$attrs"
        >
          <template v-for="(index, name) in $slots" v-slot:[name]="data">
            <slot :name="'table-' + name" v-bind="data">{{ name }}</slot>
          </template>
        </FSDataTable>
      </slot>

      <slot name="tile" v-bind="{ items }">
        <v-data-iterator
          v-if="mode == 'tile'"
          :items="searchItems(items, searching).slice(0, size)"
          :no-data-text="noDataText"
          :no-results-text="noResultsText"
          disable-pagination
          hide-default-footer
          style="width: 100%"
        >
          <template v-slot:default="props">
            <v-row no-gutters align="center">
              <div
                v-for="(item, index) in props.items"
                :key="item[itemKey]"
                :class="tileClass"
              >
                <slot name="tile-item" v-bind="{ index, item }" />
              </div>
            </v-row>
          </template>
        </v-data-iterator>
      </slot>
    </div>
    <div :style="lastChildStyle" />
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
  onMounted,
  watch,
  toRefs,
  useSlots,
  PropType,
  onBeforeUnmount,
} from "vue";

import FSCheckbox from "./FSCheckbox.vue";
import FSButton from "./FSButton.vue";
import FSIcon from "./FSIcon.vue";

import _ from "lodash";

import { searchItems } from "../tools";

import { Column, FilterValue } from "../models";

import { useVuetify } from "../composables";

export default defineComponent({
  name: "FSDataList",
  components: {
    FSCheckbox,
    FSButton,
    FSIcon,
  },
  props: {
    items: {
      type: Array<any>,
      required: true,
    },
    columns: {
      type: Array<Column> as PropType<Column[]>,
      required: true,
    },
    itemKey: {
      type: String,
      required: false,
      default: "id",
    },
    disableTiles: {
      type: Boolean,
      required: false,
      default: false,
    },
    disableTable: {
      type: Boolean,
      required: false,
      default: false,
    },
    initialMode: {
      type: String as PropType<"table" | "tile">,
      required: false,
      default: "table",
    },
    hideColumns: {
      type: Boolean,
      required: false,
      default: false,
    },
    noResultsText: {
      type: String,
      required: false,
      default: "",
    },
    noDataText: {
      type: String,
      required: false,
      default: "",
    },
    showAllText: {
      type: String,
      required: false,
      default: "Show all",
    },
    searchable: {
      type: Boolean,
      required: false,
      default: true,
    },
    columnSortable: {
      type: Boolean,
      required: false,
      default: true,
    },
    tileClass: {
      type: String,
      required: false,
      default: "mr-2",
    },
    footerProps: {
      type: Object as PropType<{ itemsPerPageOptions: number[] }>,
      required: false,
      default: () => ({ itemsPerPageOptions: [10, 30, -1] }),
    },
  },
  setup(props, { emit }) {
    const vuetify = useVuetify();

    const slot = useSlots();
    const el = ref<HTMLElement | null>(null);

    const searching = ref<string>("");
    const mode = ref<"table" | "tile">("tile");
    const size = ref<number>(20);
    const intersectionObserver = ref<IntersectionObserver | null>(null);

    const lastChildStyle = computed((): { [key: string]: any } => {
      return {
        height: mode.value === "tile" ? "10px" : "0px",
        width: "100%",
      };
    });

    onMounted(() => {
      if (props.disableTable) {
        mode.value = "tile";
      } else if (props.disableTiles) {
        mode.value = "table";
      } else {
        mode.value = props.initialMode;
      }

      buildIntersection();
    });

    onBeforeUnmount(() => {
      if (intersectionObserver.value && el.value?.lastChild) {
        intersectionObserver.value.unobserve(el.value?.lastChild as any);
      }
    });

    const buildIntersection = () => {
      if (intersectionObserver.value) {
        return;
      }
      let formerRatio = 0;
      intersectionObserver.value = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (formerRatio < entry.intersectionRatio) {
              if (
                mode.value === "tile" &&
                entry.boundingClientRect.bottom < window.innerHeight * 1.25
              ) {
                if (
                  searchItems(props.items, searching.value).length > size.value
                ) {
                  size.value = Math.min(size.value + 20, props.items.length);
                }
              }
            }
            formerRatio = entry.intersectionRatio;
          });
        },
        {
          threshold: [0.9],
        }
      );
      toggleIntersection();
    };

    const toggleIntersection = () => {
      if (!intersectionObserver.value || !el.value?.lastChild) {
        return;
      }
      switch (mode.value) {
        case "tile": {
          intersectionObserver.value.observe(el.value?.lastChild as any);
          break;
        }
        default: {
          intersectionObserver.value.unobserve(el.value?.lastChild as any);
          break;
        }
      }
    };

    watch(
      () => mode.value,
      (newValue: "table" | "tile", oldValue: "table" | "tile") => {
        if (newValue !== oldValue) {
          toggleIntersection();
          emit("update:mode", mode.value);
        }
      }
    );

    watch(
      () => size.value,
      (newValue: number, oldValue: number) => {
        if (newValue !== oldValue) {
          emit("update:size", size.value);
        }
      }
    );

    return {
      searching,
      mode,
      size,
      lastChildStyle,
      vuetify,
      searchItems,
    };
  },
});
</script>
