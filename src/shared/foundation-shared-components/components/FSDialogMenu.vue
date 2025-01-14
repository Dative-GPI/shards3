<template>
  <v-dialog
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  >
    <FSCard
      width="calc(100vw - 48px)"
      padding="8px"
      :color="$props.color"
      :class="classes"
    >
      <FSCol
        gap="24px"
      >
        <slot
          name="header"
        />
        <slot
          name="body"
        />
        <slot
          name="footer"
        />
      </FSCol>
    </FSCard>
  </v-dialog>
</template>
  
<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useBreakpoints } from "@dative-gpi/foundation-shared-components/composables";

import FSCard from "./FSCard.vue";

export default defineComponent({
  name: "FSDialogMenu",
  components: {
    FSCard
  },
  props: {
    cardClasses: {
      type: [Array, String] as PropType<string[] | string | null>,
      required: false,
      default: null
    },
    modelValue: {
      type: Boolean,
      required: false,
      default: false
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Dark
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { isExtraSmall } = useBreakpoints();

    const classes = computed((): string[] => {
      const classNames = ["fs-dialog-menu"];
      if (props.cardClasses) {
        if (Array.isArray(props.cardClasses)) {
          classNames.push(...props.cardClasses);
        }
        else {
          classNames.push(props.cardClasses);
        }
      }
      return classNames;
    });

    return {
      isExtraSmall,
      ColorEnum,
      classes
    };
  }
});
</script>