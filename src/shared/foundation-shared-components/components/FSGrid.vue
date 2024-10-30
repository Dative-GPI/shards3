<template>
  <FSCol
    gap="0"
  >
    <FSRow
      v-for="(item, index) in $props.items"
      align="center-center"
      class="fs-grid-item"
      padding="0 8px"
      height="hug"
      :style="style"
      :key="index"
    >
      <FSCol
        gap="2px"
      >
        <template
          v-if="headerSlot(item.code)"
        >
          <component
            :is="headerSlot(item.code)"
            v-bind="{ item }"
          />
        </template>
        <template
          v-else
        >
          <FSText
            :font="item.hideDefault ? 'text-body' : 'text-overline'"
            variant="soft"
          >
            {{ item.label }}
          </FSText>
        </template>
        <template
          v-if="!item.hideDefault"
        >
          <template
            v-if="itemSlot(item.code)"
          >
            <component
              :is="itemSlot(item.code)"
              v-bind="{ item }"
            />
          </template>
          <template
            v-else
          >
            <FSText>
              {{ item.value }}
            </FSText>
          </template>
        </template>
      </FSCol>
      <FSRow
        v-if="itemEndSlot(item.code)"
        align="center-right"
      >
        <component
          :is="itemEndSlot(item.code)"
          v-bind="{ item }"
        />
      </FSRow>
    </FSRow>
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, type StyleValue } from "vue";

import { ColorEnum, type FSGridItem } from "@dative-gpi/foundation-shared-components/models";
import { useColors, useSlots } from "@dative-gpi/foundation-shared-components/composables";

import FSText from "./FSText.vue";
import FSCol from "./FSCol.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSGrid",
  components: {
    FSText,
    FSCol,
    FSRow
  },
  props: {
    items: {
      type: Array as PropType<FSGridItem[]>,
      required: false,
      default: () => []
    }
  },
  setup() {
    const { getColors } = useColors();
    const { slots } = useSlots();

    const lights = getColors(ColorEnum.Light);

    const style = computed((): StyleValue => ({
      "--fs-grid-border-color": lights.dark
    }));

    const headerSlot = (code: string) => {
      if (slots[`header.${code}`]) {
        return slots[`header.${code}`];
      }
      else if (slots[`header`]) {
        return slots[`header`];
      }
      return null;
    };

    const itemSlot = (code: string) => {
      if (slots[`item.${code}`]) {
        return slots[`item.${code}`];
      }
      else if (slots[`item`]) {
        return slots[`item`];
      }
      return null;
    };

    const itemEndSlot = (code: string) => {
      if (slots[`item-end.${code}`]) {
        return slots[`item-end.${code}`];
      }
      else if (slots[`item-end`]) {
        return slots[`item-end`];
      }
      return null;
    };

    return {
      style,
      itemEndSlot,
      headerSlot,
      itemSlot
    };
  }
});
</script>