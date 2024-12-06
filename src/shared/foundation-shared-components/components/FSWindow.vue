<template>
  <template 
    v-if="noMatch"
  >
    <slot 
      name="error"
      v-bind="{ goBack, width: $props.width, height: $props.height }"
    />
  </template>
  <v-window
    class="fs-window"
    ref="windowRef"
    :touch="false"
    :style="style"
    :modelValue="$props.modelValue"
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
  emits: ["update:modelValue", "error"],
  setup(props, { emit }) {
    const { slots, getChildren } = useSlots();

    delete slots.default;

    const windowRef = ref<any | null>(null);
    
    const showOverflow = ref(true);
    const overflowTimeout = ref<NodeJS.Timeout | null>(null);

    const style = computed((): StyleValue => ({
      "--fs-window-overflow": showOverflow.value ? "visible" : "hidden",
      "--fs-window-height"  : sizeToVar(props.height),
      "--fs-window-width"   : sizeToVar(props.width)
    }));

    const value = (component: VNode, index: number): any => {
      return component?.props?.value ?? index;
    };

    // Hide horizontal overflow when switching windows, otherwise let it visible for the FSFadeOut scrollbar
    watch(() => props.modelValue, (): void => {
      showOverflow.value = false;
      if (overflowTimeout.value) {
        clearTimeout(overflowTimeout.value);
      }
      overflowTimeout.value = setTimeout(() => {
        showOverflow.value = true;
      }, 560);
    });

    const noMatch = computed(() => {
      if (!windowRef.value) {
        return;
      }

      // https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VWindow/VWindow.tsx
      // https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/composables/group.ts#L161
      const group = windowRef.value.group;
      return !group.items.value.find((item: any) => item.value === props.modelValue);
    });

    const goBack = (): void => {
      if (!windowRef.value) {
        emit("error");
        return;
      }
      
      const group = windowRef.value.group;
      if (!group.items.value.length) {
        emit("error");
        return;
      }
      emit("update:modelValue", group.items.value[0].value);
    };

    return {
      windowRef,
      noMatch,
      slots,
      style,
      getChildren,
      goBack,
      value
    };
  }
});
</script>