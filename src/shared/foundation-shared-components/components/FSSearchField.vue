<template>
  <FSTextField
      :label="$props.label"
      :description="$props.description"
      :color="$props.color"
      :required="$props.required"
      :editable="$props.editable"
      :modelValue="innerValue"
      @update:modelValue="(value) => innerValue = value"
      @keydown.enter="onUpdate"
      v-bind="$attrs"
  >
    <template #append>
      <slot name="append">
        <FSButton
          :prependIcon="$props.buttonPrependIcon"
          :label="$props.buttonLabel"
          :appendIcon="$props.buttonAppendIcon"
          :variant="$props.buttonVariant"
          :color="$props.buttonColor"
          :editable="$props.editable"
          @click="onUpdate"
        />
      </slot>
    </template>
    <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
      <slot :name="name" v-bind="slotData" />
    </template>
  </FSTextField>
</template>

<script lang="ts">
import { defineComponent, PropType, Ref, ref, toRefs } from "vue";

import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSTextField from "./FSTextField.vue";
import FSButton from "./FSButton.vue";

export default defineComponent({
  name: "FSSearchField",
  components: {
    FSTextField,
    FSButton
  },
  props: {
    label: {
      type: String,
      required: false,
      default: null
    },
    description: {
      type: String,
      required: false,
      default: null
    },
    buttonPrependIcon: {
      type: String,
      required: false,
      default: "mdi-magnify"
    },
    buttonLabel: {
      type: String,
      required: false,
      default: null
    },
    buttonAppendIcon: {
      type: String,
      required: false,
      default: null
    },
    buttonVariant: {
      type: String as PropType<"standard" | "full" | "icon">,
      required: false,
      default: "standard"
    },
    modelValue: {
      type: String,
      required: false,
      default: null
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Dark
    },
    buttonColor: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { editable } = toRefs(props);

    const innerValue: Ref<String> = ref(props.modelValue);

    const onUpdate = (): void => {
      if (!editable.value) {
        return;
      }
      emit("update:modelValue", innerValue.value);
    };

    return {
      innerValue,
      onUpdate
    };
  }
});
</script>