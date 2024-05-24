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
      <v-spacer />
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
import { computed, defineComponent, PropType } from "vue";

import { useColors, useSlots } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum, FSGridItem } from "@dative-gpi/foundation-shared-components/models";

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
      default: [],
      required: false
    }
  },
  setup() {
    const { getColors } = useColors();
    const { slots } = useSlots();

    const lights = getColors(ColorEnum.Light);

    const style = computed((): { [key: string] : string | undefined } => {
      return {
        "--fs-grid-border-color": lights.dark
      };
    });

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
      itemSlot,
      headerSlot,
      itemEndSlot
    };
  }
});
</script>