<template>
  <v-window
    ref="windowRoot"
    class="fs-window"
    :touch="false"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  >
    <template
      v-for="(_, name) in slots"
      v-slot:[name]="slotData"
    >
      <slot
        :name="name"
        v-bind="slotData"
      />
    </template>
    <v-window-item
      v-for="(component, index) in getChildren()"
      class="fs-window-item"
      :value="value(component, index)"
      :key="index"
    >
      <component
        :is="component"
      />
    </v-window-item>
  </v-window>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, ref, type StyleValue, type VNode, watch } from "vue";

import { useSlots } from "@dative-gpi/foundation-shared-components/composables";
import { sizeToVar } from "@dative-gpi/foundation-shared-components/utils";

export default defineComponent({
  name: "FSWindow",
  props: {
    width: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: null
    },
    height: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: null
    },
    modelValue: {
      type: [String, Number, Object] as PropType<any>,
      required: false,
      default: 0
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { slots, getChildren } = useSlots();

    delete slots.default;

    const windowRoot = ref<HTMLElement | null>(null);

    const style = computed((): StyleValue => ({
      "--fs-window-width"   : sizeToVar(props.width),
      "--fs-window-height"  : sizeToVar(props.height)
    }));

    const value = (component: VNode, index: number): any => {
      return component?.props?.value ?? index;
    };

    // Hide horizontal overflow when switching windows, otherwise let it visible for the FSFadeOut scrollbar
    watch(() => props.modelValue, (): void => {
      if (windowRoot.value == null) {
        return;
      }
      (windowRoot.value as any).$el.style.setProperty("overflow", "hidden", "important");
      setTimeout(() => {
        (windowRoot.value as any).$el.style.setProperty("overflow", "visible", "important");
      }, 520);
    });

    return {
      windowRoot,
      slots,
      style,
      getChildren,
      value
    };
  }
});
</script>