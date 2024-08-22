<template>
  <FSWindow
    width="100%"
    :modelValue="currentStep - 1"
  >
    <FSForm
      v-for="(step, index) in $props.steps"
      :variant="$props.variant"
      :key="index"
      @submit="onSubmit"
      v-model="valid"
    >
      <FSCol
        gap="24px"
      >
        <FSFadeOut
          padding="0 8px 0 0"
          :maxHeight="maxHeight"
        >
          <slot
            :name="`step-${step}`"
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
              :label="previousButtonLabel"
              @click="onPrevious()"
            />
            <FSButton
              type="submit"
              :prependIcon="$props.submitButtonPrependIcon"
              :appendIcon="$props.submitButtonAppendIcon"
              :color="$props.submitButtonColor"
              :variant="nextButtonVariant"
              :editable="$props.editable"
              :label="nextButtonLabel"
              :load="$props.load"
            />
          </FSRow>
        </FSRow>
      </FSCol>
    </FSForm>
  </FSWindow>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, ref } from "vue";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useBreakpoints } from "@dative-gpi/foundation-shared-components/composables";

import FSFadeOut from "./FSFadeOut.vue";
import FSButton from "./FSButton.vue";
import FSForm from "./FSForm.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSDialogMultiFormBody",
  components: {
    FSFadeOut,
    FSButton,
    FSForm,
    FSRow
  },
  props: {
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
      type: String as PropType<"standard" | "submit">,
      required: false,
      default: "submit"
    },
    steps: {
      type: Number,
      required: true
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
  emits: ["click:cancelButton", "click:submitButton"],
  setup(props, { emit }) {
    const { isMobileSized } = useBreakpoints();
    const { $tr } = useTranslationsProvider();

    const currentStep = ref(1);
    const valid = ref(false);
    const valids = ref(Array.from({ length: props.steps }, () => false));

    const maxHeight = computed(() => {
      const other = 24 + 24                                          // Paddings
        + (isMobileSized.value ? 24 : 32) + 24                       // Title
        + (props.subtitle ? (isMobileSized.value ? 14 : 16) + 8 : 0) // Subtitle
        + (isMobileSized.value ? 36 : 40) + 24;                      // Footer
      return `calc(100vh - 40px - ${other}px)`;
    });

    const previousButtonLabel = computed(() => {
      return currentStep.value == 1
        ? props.cancelButtonLabel ?? $tr("ui.button.cancel", "Cancel")
        : $tr("ui.button.back", "Back");
    });

    const nextButtonLabel = computed(() => {
      return currentStep.value == props.steps
        ? props.submitButtonLabel ?? $tr("ui.button.validate", "Validate")
        : $tr("ui.button.next", "Next");
    });

    const nextButtonVariant = computed(() => {
      return currentStep.value == props.steps
        ? props.submitButtonVariant ?? "full" : "standard";
    });

    const onPrevious = () => {
      if (currentStep.value > 1) {
        currentStep.value--;
      }
      else {
        emit("click:cancelButton");
      }
    };

    const onSubmit = () => {
      if (valid.value) {
        switch (currentStep.value) {
          case props.steps:
            emit("click:submitButton");
            break;
          default:
            currentStep.value++;
            break;
        }
      }
    };

    return {
      previousButtonLabel,
      nextButtonVariant,
      nextButtonLabel,
      currentStep,
      ColorEnum,
      maxHeight,
      valids,
      valid,
      onPrevious,
      onSubmit
    };
  }
});
</script>