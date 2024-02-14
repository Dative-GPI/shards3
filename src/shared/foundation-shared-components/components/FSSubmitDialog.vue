<template>
  <FSDialog
    cardClasses="fs-submit-dialog"
    :width="$props.width"
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
          :color="ColorEnum.Dark"
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
import { computed, defineComponent, PropType } from "vue";

import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useTranslationsProvider } from "@dative-gpi/foundation-shared-services";

import FSDialog from "./FSDialog.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSSubmitDialog",
  components: {
    FSDialog,
    FSRow
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