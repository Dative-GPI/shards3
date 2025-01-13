<template>
  <template
    v-if="!$props.validation"
  >
    <FSForm
      ref="formRef"
      :variant="$props.variant"
      @submit="onSubmit"
      v-model="isValidForm"
    >
      <FSCol
        gap="24px"
      >
        <FSFadeOut
          :maxHeight="maxHeight"
        >
          <slot
            name="body"
          />
        </FSFadeOut>
        <FSRow>
          <slot
            name="left-footer"
          />
          <FSRow
            class="fs-dialog-actions"
            align="top-right"
            :wrap="false"
          >
            <FSButton
              v-if="$props.showCancelButton"
              :prependIcon="$props.cancelButtonPrependIcon"
              :appendIcon="$props.cancelButtonAppendIcon"
              :variant="$props.cancelButtonVariant"
              :color="$props.cancelButtonColor"
              :label="cancelLabel"
              @click="() => $emit('click:cancelButton', false)"
            />
            <FSButton
              v-if="$props.showSubmitButton"
              type="submit"
              :prependIcon="$props.submitButtonPrependIcon"
              :appendIcon="$props.submitButtonAppendIcon"
              :variant="$props.submitButtonVariant"
              :color="$props.submitButtonColor"
              :editable="$props.editable"
              :label="submitLabel"
              :load="$props.load"
            />
          </FSRow>
        </FSRow>
      </FSCol>
    </FSForm>
  </template>
  <template
    v-else
  >
    <FSCol
      gap="24px"
    >
      <FSFadeOut
        :maxHeight="maxHeight"
      >
        <slot
          name="validation"
        />
      </FSFadeOut>
      <FSRow>
        <slot
          name="left-footer"
        />
        <FSRow
          class="fs-dialog-actions"
          align="top-right"
          :wrap="false"
        >
          <FSButton
            :prependIcon="$props.validateButtonPrependIcon"
            :appendIcon="$props.validateButtonAppendIcon"
            :variant="$props.validateButtonVariant"
            :color="$props.validateButtonColor"
            :label="validateLabel"
            @click="onValidate"
          />
        </FSRow>
      </FSRow>
    </FSCol>
  </template>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, ref, watch } from "vue";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useBreakpoints } from "@dative-gpi/foundation-shared-components/composables";

import FSFadeOut from "./FSFadeOut.vue";
import FSButton from "./FSButton.vue";
import FSForm from "./FSForm.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSDialogFormBody",
  components: {
    FSFadeOut,
    FSButton,
    FSForm,
    FSRow
  },
  props: {
    variant: {
      type: String as PropType<"standard" | "submit">,
      required: false,
      default: "submit"
    },
    subtitle: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    showCancelButton: {
      type: Boolean,
      required: false,
      default: true
    },
    cancelButtonPrependIcon: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    cancelButtonLabel: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    cancelButtonAppendIcon: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    cancelButtonVariant: {
      type: String as PropType<"standard" | "full" | "icon">,
      required: false,
      default: "standard"
    },
    cancelButtonColor: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Light
    },
    showSubmitButton: {
      type: Boolean,
      required: false,
      default: true
    },
    submitButtonPrependIcon: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    submitButtonLabel: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    submitButtonAppendIcon: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    submitButtonVariant: {
      type: String as PropType<"standard" | "full" | "icon">,
      required: false,
      default: "full"
    },
    submitButtonColor: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    },
    validateButtonPrependIcon: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    validateButtonLabel: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    validateButtonAppendIcon: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    validateButtonVariant: {
      type: String as PropType<"standard" | "full" | "icon">,
      required: false,
      default: "standard"
    },
    validateButtonColor: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Light
    },
    validation: {
      type: Boolean,
      required: false,
      default: false
    },
    load: {
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
  emits: ["click:cancelButton", "click:submitButton", "click:validateButton", "update:isValidForm"],
  setup(props, { emit }) {
    const { isMobileSized } = useBreakpoints();
    const { $tr } = useTranslationsProvider();

    const formRef = ref<typeof FSForm | null>(null);
    const isValidForm = ref(null);

    const maxHeight = computed(() => {
      const other = 24 + 24                                          // Paddings
        + (isMobileSized.value ? 24 : 32) + 24                       // Title
        + (props.subtitle ? (isMobileSized.value ? 16 : 20) + 8 : 0) // Subtitle
        + (isMobileSized.value ? 36 : 40) + 24;                      // Footer
      return `calc(100dvh - 12px - ${other}px)`;
    });

    const cancelLabel = computed(() => {
      return props.cancelButtonLabel ?? $tr("ui.common.cancel", "Cancel");
    });

    const submitLabel = computed(() => {
      return props.submitButtonLabel ??  $tr("ui.common.submit", "Submit");
    });

    const validateLabel = computed(() => {
      return props.validateButtonLabel ??  $tr("ui.common.validate", "Validate");
    });

    const resetFormValidation = () => {
      if (formRef.value) {
        formRef.value.resetValidation();
      }
    };

    const validateForm =  async () => {
      if (formRef.value) {
        return await formRef.value.validate();
      }
    };

    const onSubmit = () => {
      if (isValidForm.value) {
        emit("click:submitButton");
      }
    };

    const onValidate = () => {
      emit("click:validateButton");
    };
    
    watch(() => isValidForm.value, () => {
      emit("update:isValidForm", isValidForm.value);
    }, { immediate: true });

    return {
      validateLabel,
      isValidForm,
      cancelLabel,
      submitLabel,
      ColorEnum,
      maxHeight,
      formRef,
      resetFormValidation,
      validateForm,
      onValidate,
      onSubmit
    };
  }
});
</script>