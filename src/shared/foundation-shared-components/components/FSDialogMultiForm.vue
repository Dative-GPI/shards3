<template>
  <FSDialog
    :title="$props.title"
    :subtitle="$props.subtitle"
    :width="$props.width"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  >
    <template
      #body
    >
      <FSWindow
        width="100%"
        :modelValue="currentStep - 1"
      >
        <FSForm
          v-for="(step, index) in $props.steps"
          :key="index"
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
                  :prependIcon="$props.leftButtonPrependIcon"
                  :label="previousButtonLabel"
                  :appendIcon="$props.leftButtonAppendIcon"
                  :variant="$props.leftButtonVariant"
                  :color="$props.leftButtonColor"
                  @click="onPrevious()"
                />
                <FSButton
                  type="submit"
                  :prependIcon="$props.rightButtonPrependIcon"
                  :label="nextButtonLabel"
                  :appendIcon="$props.rightButtonAppendIcon"
                  :variant="nextButtonVariant"
                  :color="$props.rightButtonColor"
                  :load="$props.load"
                  :editable="$props.editable"
                />
              </FSRow>
            </FSRow>
          </FSCol>
        </FSForm>
      </FSWindow>
    </template>
  </FSDialog>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useBreakpoints } from "@dative-gpi/foundation-shared-components/composables";

import FSFadeOut from "./FSFadeOut.vue";
import FSButton from "./FSButton.vue";
import FSDialog from "./FSDialog.vue";
import FSForm from "./FSForm.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSDialogMultiForm",
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
    steps: {
      type: Number,
      required: true
    },
    leftButtonPrependIcon: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    leftButtonLabel: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    leftButtonAppendIcon: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    leftButtonVariant: {
      type: String as PropType<"standard" | "full" | "icon">,
      required: false,
      default: "standard"
    },
    rightButtonPrependIcon: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    rightButtonLabel: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    rightButtonAppendIcon: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    rightButtonVariant: {
      type: String as PropType<"standard" | "full" | "icon">,
      required: false,
      default: "full"
    },
    leftButtonColor: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Light
    },
    rightButtonColor: {
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
  emits: ["update:modelValue", "click:rightButton"],
  setup(props, { emit }) {
    const { isMobileSized } = useBreakpoints();
    const { $tr } = useTranslationsProvider();

    const currentStep = ref(1);
    const valid = ref(false);
    const valids = ref(Array.from({ length: props.steps }, () => false));

    const height = computed(() => {
      const other = 24 + 24                                            // Paddings
        + (props.title ? isMobileSized.value ? 24 : 32 : 0)            // Title
        + (props.subtitle ? isMobileSized.value ? 14 + 8 : 16 + 8 : 0) // Subtitle
        + (isMobileSized.value ? 36 : 40)                              // Footer
        + 64;                                                          // Debug mask
      return `calc(90vh - ${other}px)`;
    });

    const previousButtonLabel = computed(() => {
      return currentStep.value == 1
        ? props.leftButtonLabel ?? $tr("ui.button.cancel", "Cancel")
        : $tr("ui.button.back", "Back");
    });

    const nextButtonLabel = computed(() => {
      return currentStep.value == props.steps
        ? props.rightButtonLabel ?? $tr("ui.button.validate", "Validate")
        : $tr("ui.button.next", "Next");
    });

    const nextButtonVariant = computed(() => {
      return currentStep.value == props.steps
        ? props.rightButtonVariant ?? "full"
        : "standard";
    });

    const onPrevious = () => {
      if (currentStep.value > 1) {
        currentStep.value--;
      } else {
        emit("update:modelValue", false);
      }
    };

    const onSubmit = () => {
      console.log(valid.value)
      if (valid.value) {
        switch (currentStep.value) {
          case props.steps:
            emit("click:rightButton");
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
      height,
      valids,
      valid,
      onSubmit,
      onPrevious
    };
  }
});
</script>