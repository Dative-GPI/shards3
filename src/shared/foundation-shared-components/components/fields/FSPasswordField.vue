<template>
  <FSTextField
    :type="type"
    :label="$props.label"
    :description="$props.description"
    :hideHeader="$props.hideHeader"
    :required="$props.required"
    :editable="$props.editable"
    :modelValue="$props.modelValue"
    @update:modelValue="(value) => $emit('update:modelValue', value)"
    v-bind="$attrs"
  >
    <template #append-inner>
      <slot name="append-inner">
        <FSButton
          variant="icon"
          :icon="icon"
          :editable="$props.editable"
          :color="ColorEnum.Dark"
          @click="onToggle"
        />
      </slot>
    </template>
    <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
      <slot :name="name" v-bind="slotData" />
    </template>
  </FSTextField>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";

import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSTextField from "./FSTextField.vue";
import FSButton from "../FSButton.vue";

export default defineComponent({
  name: "FSPasswordField",
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
    modelValue: {
      type: String,
      required: false,
      default: null
    },
    hideHeader: {
      type: Boolean,
      required: false,
      default: false
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
  setup(props) {
    const { getColors } = useColors();

    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const stars = ref(true);

    const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
      if (!props.editable) {
        return {
          "--fs-password-field-cursor"   : "default",
          "--fs-password-field-color": lights.dark,
          "--fs-password-field-hover-color": lights.dark
        };
      }
      return {
        "--fs-password-field-cursor"   : "pointer",
        "--fs-password-field-color": darks.base,
        "--fs-password-field-hover-color": darks.dark
      };
    });

    const type = computed((): string => stars.value ? "password" : "text");

    const icon = computed((): string => stars.value ? "mdi-eye-off-outline" : "mdi-eye-outline");

    const onToggle = (): void => {
      if (!props.editable) {
        return;
      }
      stars.value = !stars.value;
    };

    return {
      ColorEnum,
      type,
      icon,
      style,
      onToggle
    };
  }
});
</script>