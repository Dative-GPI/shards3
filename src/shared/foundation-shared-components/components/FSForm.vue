<template>
  <v-form
    class="fs-form"
    ref="formRef"
    :validateOn="validateOn"
    @submit.stop="onSubmit"
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
  emits: ["update:modelValue", "submit"],
  setup(props, { emit }) {
    const formRef = ref<HTMLFormElement | null>(null);
    const submitted = ref(false);

    const validateOn = computed((): "submit" | "blur" | "input"  => {
      switch (props.variant) {
        case "standard": return "input";
        case "lazy":     return "blur";
        case "submit":   return "submit";
      }
    });

    const onSubmit = async (event: SubmitEvent) => {
      event.stopImmediatePropagation();
      event.preventDefault();
      submitted.value = true;
      await formRef.value.validate();
      emit("update:modelValue", !!formRef.value.isValid);
      emit("submit", !!formRef.value.isValid);
      
    }; 

    provide("validateOn", validateOn);
    provide("submitted", submitted);

    return {
      validateOn,
      submitted,
      formRef,
      onSubmit
    };
  }
});
</script>