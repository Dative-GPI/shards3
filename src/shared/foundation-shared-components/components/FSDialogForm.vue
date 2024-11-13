<template>
  <FSDialog
    :subtitle="$props.subtitle"
    :title="$props.title"
    :width="$props.width"
    :modelValue="$props.modelValue"
    @update:modelValue="onClose"
    v-bind="$attrs"
  >
    <template
      #body
    >
      <FSDialogFormBody 
        ref="bodyRef"
        v-bind="$attrs"
        :subtitle="$props.subtitle"
        :validation="$props.validation"
        @click:cancelButton="$emit('update:modelValue', false)"
        @click:submitButton="$emit('click:submitButton')"
        @click:validateButton="onValidate"
        @update:validForm="validForm = $event"
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
      </FSDialogFormBody>
    </template>
  </FSDialog>
</template>

<script lang="ts">
import type { PropType } from "vue";
import { defineComponent, ref } from "vue";

import FSDialogFormBody from "./FSDialogFormBody.vue";
import FSDialog from "./FSDialog.vue";

export default defineComponent({
  name: "FSDialogForm",
  components: {
    FSDialogFormBody,
    FSDialog
  },
  props: {
    title: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    subtitle: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    modelValue: {
      type: Boolean,
      required: false,
      default: false
    },
    validation: {
      type: Boolean,
      required: false,
      default: false
    },
    width: {
      type: [Array, String, Number] as PropType<"hug" | "fill" | string[] | number[] | string | number | null>,
      required: false,
      default: "auto"
    }
  },
  emits: ["update:modelValue", "click:validateButton", "click:submitButton"],
  setup(props, { emit }) {
    const bodyRef = ref<typeof FSDialogFormBody | null>(null);
    const validForm = ref(false);

    const onClose = () => {
      if (props.validation) {
        emit("click:validateButton");
      }
      emit("update:modelValue", false);
    };

    const onValidate = () => {
      emit("click:validateButton");
      emit("update:modelValue", false);
    };

    const resetFormValidation = () => {
      if (bodyRef.value) {
        bodyRef.value.resetFormValidation();
      }
    };

    const validateForm = async () => {
      if (bodyRef.value) {
        await bodyRef.value.validateForm();
      }
    };

    return {
      resetFormValidation,
      validateForm,
      onValidate,
      validForm,
      bodyRef,
      onClose
    };
  }
});
</script>