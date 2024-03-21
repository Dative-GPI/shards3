<template>
  <v-dialog
    transition="dialog-bottom-transition"
    :width="width"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  >
    <FSCard
      padding="24px"
      gap="24px"
      :width="width"
      :class="classes"
      :color="$props.color"
      :border="!isExtraSmall"
    >
      <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
    </FSCard>
    <FSButton
      class="fs-dialog-close-button"
      variant="icon"
      icon="mdi-close"
      :color="ColorEnum.Dark"
      @click="$emit('update:modelValue', false)"
    />
  </v-dialog>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useBreakpoints } from "@dative-gpi/foundation-shared-components/composables";

import FSButton from "./FSButton.vue";
import FSCard from "./FSCard.vue";
import FSCol from "./FSCol.vue";

export default defineComponent({
  name: "FSDialog",
  components: {
    FSButton,
    FSCard,
    FSCol
  },
  props: {
    modelValue: {
      type: Boolean,
      required: false,
      default: false
    },
    width: {
      type: [String, Number],
      required: false,
      default: "auto"
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Dark
    },
    cardClasses: {
      type: [Array, String] as PropType<string[] | string>,
      required: false,
      default: null
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { isExtraSmall } = useBreakpoints();

    const classes = computed((): string[] => {
      const innerClasses = ["fs-dialog"];
      if (Array.isArray(props.cardClasses)) {
        innerClasses.push(...props.cardClasses);
      }
      else {
        innerClasses.push(props.cardClasses);
      }
      if (isExtraSmall.value) {
        innerClasses.push("fs-dialog-mobile");
      }
      return innerClasses;
    });

    const width = computed((): string | number => {
      if (isExtraSmall.value) {
        return "100%";
      }
      return props.width;
    });

    return {
      isExtraSmall,
      ColorEnum,
      classes,
      width
    };
  }
});
</script>