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
import type { PropType} from "vue";

import type VForm from "vuetify/lib/components/VForm";

import { computed, defineComponent, provide, ref } from "vue";

export default defineComponent({
  name: "FSForm",
  props: {
    modelValue: {
      type: Boolean as PropType<boolean | null>,
      required: false,
      default: null
    },
    variant: {
      type: String as PropType<"standard" | "submit">,
      required: false,
      default: "submit"
    }
  },
  emits: ["update:modelValue", "submit"],
  setup(props, { emit }) {
    const formRef = ref<typeof VForm | null>(null);
    const submitted = ref(false);

    const validateOn = computed((): "submit" | "input"  => {
      switch (props.variant) {
        case "standard": return "input";
        default:         return "submit";
      }
    });

    const onSubmit = async (event: SubmitEvent) => {
      event.stopImmediatePropagation();
      event.preventDefault();
      submitted.value = true;
      await formRef.value.validate();
      emit("update:modelValue", !!(formRef.value.isValid ?? true));
      emit("submit", !!(formRef.value.isValid ?? true));
    }; 

    const validate = async () => {
      submitted.value = true;
      return await formRef.value.validate();
    };

    const reset = () => {
      submitted.value = false;
      formRef.value.reset();
    };

    const resetValidation = () => {
      submitted.value = false;
      formRef.value.resetValidation();
    };

    provide("validateOn", validateOn);
    provide("submitted", submitted);

    return {
      validateOn,
      submitted,
      formRef,
      resetValidation,
      onSubmit,
      validate,
      reset
    };
  }
});
</script>