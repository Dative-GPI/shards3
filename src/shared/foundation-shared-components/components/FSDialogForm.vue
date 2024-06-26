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
      <template
        v-if="!$props.validation"
      >
        <FSForm
          ref="formRef"
          :variant="$props.variant"
          @submit="onSubmit"
          v-model="valid"
        >
          <FSCol
            gap="24px"
          >
            <FSFadeOut
              :height="height"
              padding="0 8px 0 0"
            >
              <slot
                name="body"
              />
            </FSFadeOut>
            <FSRow
              padding="0 16px 0 0"
            >
              <slot
                name="left-footer"
              />
              <FSRow
                class="fs-dialog-actions"
                align="top-right"
                :wrap="false"
              >
                <FSButton
                  :prependIcon="$props.cancelButtonPrependIcon"
                  :appendIcon="$props.cancelButtonAppendIcon"
                  :variant="$props.cancelButtonVariant"
                  :color="$props.cancelButtonColor"
                  :label="cancelLabel"
                  @click="() => $emit('update:modelValue', false)"
                />
                <FSButton
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
            :height="height"
            padding="0 8px 0 0"
          >
            <slot
              name="validation"
            />
          </FSFadeOut>
          <FSRow
            padding="0 16px 0 0"
          >
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
  </FSDialog>
</template>

<script lang="ts">
import type { PropType} from "vue";
import { computed, defineComponent, ref } from "vue";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import type { ColorBase} from "@dative-gpi/foundation-shared-components/models";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useBreakpoints } from "@dative-gpi/foundation-shared-components/composables";

import FSFadeOut from "./FSFadeOut.vue";
import FSButton from "./FSButton.vue";
import FSDialog from "./FSDialog.vue";
import FSForm from "./FSForm.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSDialogForm",
  components: {
    FSFadeOut,
    FSButton,
    FSDialog,
    FSForm,
    FSRow
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
    width: {
      type: [Array, String, Number] as PropType<"hug" | "fill" | string[] | number[] | string | number | null>,
      required: false,
      default: "auto"
    },
    variant: {
      type: String as PropType<"standard" | "lazy" | "submit">,
      required: false,
      default: "submit"
    },
    modelValue: {
      type: Boolean,
      required: false,
      default: false
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
  emits: ["update:modelValue", "click:submitButton", "click:validateButton"],
  setup(props, { emit }) {
    const { isMobileSized } = useBreakpoints();
    const { $tr } = useTranslationsProvider();

    const formRef = ref<HTMLElement | null>(null);
    const valid = ref(false);

    const height = computed(() => {
      const other = 24 + 24                                          // Paddings
        + (isMobileSized.value ? 24 : 32) + 24                       // Title
        + (props.subtitle ? (isMobileSized.value ? 14 : 16) + 8 : 0) // Subtitle
        + (isMobileSized.value ? 36 : 40) + 24;                      // Footer
      return `calc(100vh - 40px - ${other}px)`;
    });

    const cancelLabel = computed(() => {
      return props.cancelButtonLabel ?? $tr("ui.button.cancel", "Cancel");
    });

    const submitLabel = computed(() => {
      return props.submitButtonLabel ??  $tr("ui.button.submit", "Submit");
    });

    const validateLabel = computed(() => {
      return props.validateButtonLabel ??  $tr("ui.button.validate", "Done");
    });

    const onClose = () => {
      if (props.validation) {
        emit("click:validateButton");
      }
      emit("update:modelValue", false);
    };

    const onSubmit = () => {
      if (valid.value) {
        emit("click:submitButton");
      }
    };

    const onValidate = () => {
      emit("click:validateButton");
      emit("update:modelValue", false);
    };

    return {
      validateLabel,
      cancelLabel,
      submitLabel,
      ColorEnum,
      formRef,
      height,
      valid,
      onValidate,
      onSubmit,
      onClose
    };
  }
});
</script>