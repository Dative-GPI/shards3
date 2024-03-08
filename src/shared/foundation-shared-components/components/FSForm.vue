<template>
  <v-form
    ref="formRef"
    :validateOn="validateOn"
    @submit="submitted = true"
    @update:modelValue="$emit('update:modelValue', $event)"
  >
    <slot />
  </v-form>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, provide, ref } from "vue";

export default defineComponent({
  name: "FSForm",
  props: {
    modelValue: {
      type: Boolean,
      required: false,
      default: null
    },
    variant: {
      type: String as PropType<"standard" | "lazy" | "submit">,
      required: false,
      default: "standard"
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const formRef = ref<HTMLFormElement | null>(null);
    const submitted = ref(false);

    const validateOn = computed((): "submit" | "blur" | "input"  => {
      switch (props.variant) {
        case "standard": return "input";
        case "lazy":     return "blur";
        case "submit":   return "submit";
      }
    });

    provide("validateOn", validateOn.value);
    provide("submitted", submitted.value);

    return {
      formRef,
      validateOn,
      submitted
    };
  }
});
</script>