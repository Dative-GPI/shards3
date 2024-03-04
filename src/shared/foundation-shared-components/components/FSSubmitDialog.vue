<template>
  <FSDialog
    cardClasses="fs-submit-dialog"
    :width="$props.width"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  >
    <template #header>
      <slot name="header">
        <FSCol v-if="$props.title">
          <FSSpan font="text-h2">
            {{ $props.title }}
          </FSSpan>
          <FSSpan v-if="$props.subtitle">
            {{ $props.subtitle }}
          </FSSpan>
        </FSCol>
      </slot>
    </template>
    <template #body>
      <slot name="body" />
    </template>
    <template #footer>
      <slot name="footer">
        <FSRow
          class="fs-submit-dialog-actions"
          align="top-right"
          :wrap="false"
        >
          <FSButton
            :prependIcon="$props.leftButtonPrependIcon"
            :label="cancelButtonLabel"
            :appendIcon="$props.leftButtonAppendIcon"
            :variant="$props.leftButtonVariant"
            :color="$props.leftButtonColor"
            @click="() => $emit('update:modelValue', false)"
          />
          <FSButton
            :prependIcon="$props.rightButtonPrependIcon"
            :label="submitButtonLabel"
            :appendIcon="$props.rightButtonAppendIcon"
            :variant="$props.rightButtonVariant"
            :color="$props.rightButtonColor"
            :editable="$props.editable"
            @click="() => $emit('click:rightButton')"
          />
        </FSRow>
      </slot>
    </template>
  </FSDialog>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSDialog from "./FSDialog.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSSubmitDialog",
  components: {
    FSDialog,
    FSRow
  },
  props: {
    modelValue: {
      type: Boolean,
      required: false,
      default: false
    },
    width: {
      type: [String, Number],
      required: false,
      default: "auto"
    },
    title: {
      type: String,
      required: false,
      default: null
    },
    subtitle: {
      type: String,
      required: false,
      default: null
    },
    leftButtonPrependIcon: {
      type: String,
      required: false,
      default: null
    },
    leftButtonLabel: {
      type: String,
      required: false,
      default: null
    },
    leftButtonAppendIcon: {
      type: String,
      required: false,
      default: null
    },
    leftButtonVariant: {
      type: String as PropType<"standard" | "full" | "icon">,
      required: false,
      default: "standard"
    },
    rightButtonPrependIcon: {
      type: String,
      required: false,
      default: null
    },
    rightButtonLabel: {
      type: String,
      required: false,
      default: null
    },
    rightButtonAppendIcon: {
      type: String,
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
    editable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["update:modelValue", "click:rightButton"],
  setup(props) {
    const { $tr } = useTranslationsProvider();

    const cancelButtonLabel = computed(() => {
      return props.leftButtonLabel ?? $tr("ui.button.cancel", "Cancel");
    });

    const submitButtonLabel = computed(() => {
      return props.rightButtonLabel ??  $tr("ui.button.validate", "Validate");
    });

    return {
      ColorEnum,
      cancelButtonLabel,
      submitButtonLabel
    };
  }
});
</script>