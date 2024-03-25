<template>
  <FSRow
    gap="32px"
  >
    <FSRow
      v-for="(gridItem, index) in  gridItems"
      :width="width"
      :style="style"
      :key="index"
    >
      <FSCol
        gap="16px"
      >
        <FSText
          font="text-h3"
        >
          {{ gridItem.categoryLabel }}
        </FSText>
        <FSCol
          gap="0"
        >
          <FSRow
            v-for="(item, index)  in  gridItem.items"
            padding="0 8px"
            align="center-center"
            class="fs-grid-item"
            height="hug"
            :key="index"
          >
            <FSCol
              gap="2px"
            >
              <slot :name="`item-header.${gridItem.categoryCode}-${item.code}`" v-bind="{ item }">
                <FSText
                  :font="item.hideDefault ? 'text-body' : 'text-overline'"
                >
                  {{ item.label }}
                </FSText>
              </slot>
              <FSRow
                v-if="!item.hideDefault"
              >
                <slot
                  :name="`item-value-left.${gridItem.categoryCode}-${item.code}`"
                  v-bind="{ item }"
                >
                  <FSText>
                    {{ item.value }}
                  </FSText>
                </slot>
              </FSRow>
            </FSCol>
            <v-spacer />
            <FSRow
              v-if="useSlot(`item-value-right.${gridItem.categoryCode}-${item.code}`)"
              align="center-right"
            >
              <slot
                :name="`item-value-right.${gridItem.categoryCode}-${item.code}`"
                v-bind="{ item }"
              >
                <FSText
                  font="text-body"
                >
                  {{ item.value }}
                </FSText>
              </slot>
            </FSRow>
          </FSRow>
        </FSCol>
      </FSCol>
    </FSRow>
  </FSRow>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { useBreakpoints, useColors, useSlots } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum, GridItem } from "@dative-gpi/foundation-shared-components/models";

import FSDivider from "../FSDivider.vue";
import FSText from "../FSText.vue";

export default defineComponent({
  name: "FSGrid",
  components: {
    FSDivider,
    FSText
  },
  props: {
    gridItems: {
      type: Array as PropType<GridItem[]>,
      default: [],
      required: false
    },
    cols: {
      type: Number as PropType<1 | 2>,
      required: false,
      default: 1
    }
  },
  setup(props) {
    const { isExtraSmall } = useBreakpoints();
    const { getColors } = useColors();
    const { slots } = useSlots();

    const lights = getColors(ColorEnum.Light);

    const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
      return {
        "--fs-grid-border-color": lights.dark
      };
    });

    const width = computed(() => {
        return props.cols == 2 && !isExtraSmall.value ? "calc(50% - 16px)" : "100%";
    });

    const useSlot = (name: string): boolean => {
      return !!slots[name];
    };

    return {
      width,
      style,
      useSlot
    }
  }
})
</script>