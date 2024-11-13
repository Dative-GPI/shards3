<template>
  <FSDialog
    :subtitle="$props.subtitle"
    :title="$props.title"
    :width="$props.width"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  >
    <template
      #body
    >
      <FSFadeOut
        :maxHeight="maxHeight"
      >
        <slot
          name="body"
        />
      </FSFadeOut>
    </template>
    <template
      #footer
    >
      <slot
        name="footer"
      >
        <FSRow>
          <slot
            name="left-footer"
          />
          <FSRow
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
              @click="$emit('update:modelValue', false)"
            />
            <FSButton
              v-if="$props.showSubmitButton"
              :prependIcon="$props.submitButtonPrependIcon"
              :appendIcon="$props.submitButtonAppendIcon"
              :variant="$props.submitButtonVariant"
              :color="$props.submitButtonColor"
              :editable="$props.editable"
              :label="submitLabel"
              :load="$props.load"
              @click="$emit('click:submitButton')"
            />
          </FSRow>
        </FSRow>
      </slot>
    </template>
  </FSDialog>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useBreakpoints } from "@dative-gpi/foundation-shared-components/composables";

import FSFadeOut from "./FSFadeOut.vue";
import FSButton from "./FSButton.vue";
import FSDialog from "./FSDialog.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSDialogSubmit",
  components: {
    FSFadeOut,
    FSButton,
    FSDialog,
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
    modelValue: {
      type: Boolean,
      required: false,
      default: false
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
  emits: ["update:modelValue", "click:submitButton"],
  setup(props) {
    const { isMobileSized } = useBreakpoints();
    const { $tr } = useTranslationsProvider();

    const maxHeight = computed(() => {
      const other = 24 + 24                                          // Paddings
        + (isMobileSized.value ? 24 : 32) + 24                       // Title
        + (props.subtitle ? (isMobileSized.value ? 16 : 20) + 8 : 0) // Subtitle
        + (isMobileSized.value ? 36 : 40) + 24;                      // Footer
      return `calc(100vh - 42px - ${other}px)`;
    });

    const cancelLabel = computed(() => {
      return props.cancelButtonLabel ?? $tr("button.cancel", "Cancel");
    });

    const submitLabel = computed(() => {
      return props.submitButtonLabel ??  $tr("button.validate", "Validate");
    });

    return {
      cancelLabel,
      submitLabel,
      ColorEnum,
      maxHeight
    };
  }
});
</script>