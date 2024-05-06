<template>
  <FSTextField
    :type="type"
    :editable="$props.editable"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  >
    <template
      v-for="(_, name) in $slots"
      v-slot:[name]="slotData"
    >
      <slot
        :name="name"
        v-bind="slotData"
      />
    </template>
    <template
      #append-inner
    >
      <slot
        name="append-inner"
      >
        <FSButton
          variant="icon"
          :editable="$props.editable"
          :color="ColorEnum.Dark"
          :icon="icon"
          @click="onToggle"
        />
      </slot>
    </template>
  </FSTextField>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";

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
    modelValue: {
      type: String as PropType<string | null>,
      required: false,
      default: null
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

    const style = computed((): { [key: string] : string | undefined } => {
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

    const type = computed((): "password" | "text" => stars.value ? "password" : "text");

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