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
      type: Boolean as PropType<boolean | null>,
      required: false,
      default: null
    },
    variant: {
      type: String as PropType<"standard" | "lazy" | "submit">,
      required: false,
      default: "submit"
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
        default:         return "submit";
      }
    });

    const onSubmit = async (event: SubmitEvent) => {
      event.stopImmediatePropagation();
      event.preventDefault();
      submitted.value = true;
      await (formRef.value as any).validate();
      emit("update:modelValue", !!((formRef.value as any).isValid ?? true));
      emit("submit", !!((formRef.value as any).isValid ?? true));
    }; 

    const validate = async () => {
      submitted.value = true;
      await (formRef.value as any).validate();
      emit("update:modelValue", !!((formRef.value as any).isValid ?? true));
    };

    provide("validateOn", validateOn);
    provide("submitted", submitted);

    return {
      validateOn,
      submitted,
      formRef,
      onSubmit,
      validate
    };
  }
});
</script>