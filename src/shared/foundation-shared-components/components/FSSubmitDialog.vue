<template>
  <FSDialog
    cardClasses="fs-submit-dialog"
    :width="$props.width"
    :color="$props.color"
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
        <v-spacer />
        <FSButton
          variant="icon"
          icon="mdi-close"
          :color="$props.color"
          @click="$emit('update:modelValue', false)"
        />
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
import { computed, defineComponent, PropType, toRefs, useSlots } from "vue";

import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useTranslationsProvider } from "@dative-gpi/foundation-shared-services";

import FSDialog from "./FSDialog.vue";

export default defineComponent({
  name: "FSSubmitDialog",
  components: {
    FSDialog
  },
  props: {
    width: {
      type: String,
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
    actions: {
      type: Boolean,
      required: false,
      default: true
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
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Dark
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
  setup(props) {
    const { leftButtonLabel, rightButtonLabel } = toRefs(props);

    const { $tr } = useTranslationsProvider();

    const cancelButtonLabel = computed(() => {
      return leftButtonLabel.value ?? $tr("ui.shared.submit-dialog.left-button", "Cancel");
    });

    const submitButtonLabel = computed(() => {
      return rightButtonLabel.value ??  $tr("ui.shared.submit-dialog.right-button", "Save");
    });

    return {
      cancelButtonLabel,
      submitButtonLabel
    };
  }
});
</script>