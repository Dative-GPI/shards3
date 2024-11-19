<template>
  <template 
    v-if="showDefault"
  >
    <slot 
      name="error" 
    >
      <FSCard 
        padding="20px"
        :width="width"
        :height="height"
        :color="ColorEnum.Warning"
        variant="standard"
      >
        <FSRow>
          <FSIcon>
            mdi-alert-circle
          </FSIcon>
          <FSSpan>
            {{ $tr("ui.error", "You should not be there ...") }}
          </FSSpan>
        </FSRow>
      </FSCard>
    </slot>
  </template>
  <v-window
    class="fs-window"
    :touch="false"
    :mandatory="true"
    :style="style"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
    ref="window"
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

import { ColorEnum } from "../models";

import FSCard from "./FSCard.vue";
import FSIcon from "./FSIcon.vue";
import FSRow from "./FSRow.vue";
import FSSpan from "./FSSpan.vue";

export default defineComponent({
  name: "FSWindow",
  components: {
    FSCard,
    FSRow,
    FSIcon,
    FSSpan
  },
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

    const window = ref<any | null>(null);
    
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

    const showDefault = computed(() => {
      if(!window.value) { return; }

      // https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VWindow/VWindow.tsx
      // https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/composables/group.ts#L161
      const group = window.value.group;

      return !group.items.value.find((item: any) => item.value === props.modelValue);
    })

    return {
      ColorEnum,
      showDefault,
      window,
      slots,
      style,
      getChildren,
      value,
    };
  }
});
</script>