<template>
  <FSTextField
    class="fs-date-field"
    :label="$props.label"
    :description="$props.description"
    :color="$props.color"
    :hideHeader="$props.hideHeader"
    :required="$props.required"
    :editable="$props.editable"
    :error="messages.length > 0"
    :readonly="true"
    :modelValue="placeholder"
    @click="onClick"
    @click:clear="onClear"
  >
    <template v-if="!$props.hideHeader" #label>
      <slot name="label">
        <FSRow :wrap="false">
          <FSSpan
            v-if="$props.label"
            class="fs-date-field-label"
            font="text-overline"
            :style="style"
          >
            {{ $props.label }}
          </FSSpan>
          <FSSpan
            v-if="$props.label && $props.required"
            class="fs-date-field-label"
            style="margin-left: -8px;"
            font="text-overline"
            :ellipsis="false"
            :style="style"
          >
            *
          </FSSpan>
          <v-spacer style="min-width: 40px;" />
          <FSSpan
            v-if="messages.length > 0"
            class="fs-date-field-messages"
            font="text-overline"
            :style="style"
          >
            {{ messages.join(", ") }}
          </FSSpan>
        </FSRow>
      </slot>
    </template>
    <template #prepend-inner>
      <slot name="prepend-inner">
        <FSButton
          variant="icon"
          icon="mdi-calendar"
          :editable="$props.editable"
          :color="ColorEnum.Dark"
        />
      </slot>
    </template>
    <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
      <slot :name="name" v-bind="slotData" />
    </template>
  </FSTextField>
  <FSSubmitDialog
    :title="$props.label"
    :rightButtonColor="$props.color"
    @click:rightButton="onSubmit"
    v-model="dialog"
  >
    <template #body>
      <FSCalendarTwin
        :color="$props.color"
        v-model="innerDateRange"
      />
    </template>
  </FSSubmitDialog>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";

import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useTimeZone } from "@dative-gpi/foundation-shared-services/composables";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";

import FSSubmitDialog from "./FSSubmitDialog.vue";
import FSCalendarTwin from "./FSCalendarTwin.vue";
import FSTextField from "./FSTextField.vue";
import FSButton from "./FSButton.vue";
import FSCard from "./FSCard.vue";
import FSCol from "./FSCol.vue";

export default defineComponent({
  name: "FSDateRangeField",
  components: {
    FSSubmitDialog,
    FSCalendarTwin,
    FSTextField,
    FSButton,
    FSCard,
    FSCol
  },
  props: {
    label: {
      type: String,
      required: false,
      default: null
    },
    description: {
      type: String,
      required: false,
      default: null
    },
    modelValue: {
      type: Array as PropType<number[]>,
      required: false,
      default: null
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    },
    hideHeader: {
      type: Boolean,
      required: false,
      default: false
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    rules: {
      type: Array as PropType<Function[]>,
      required: false,
      default: () => []
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { epochToShortDateFormat } = useTimeZone();
    const { getColors } = useColors();

    const errors = getColors(ColorEnum.Error);
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const dialog = ref(false);
    const innerDateRange = ref(props.modelValue);

    const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
      if (!props.editable) {
        return {
          "--fs-date-field-color": lights.dark
        };
      }
      return {
        "--fs-date-field-color"      : darks.base,
        "--fs-date-field-error-color": errors.base
      };
    });

    const placeholder = computed((): string => {
      if (!props.modelValue || !Array.isArray(props.modelValue) || !props.modelValue.length) {
        return "";
      }
      return props.modelValue.map((epoch) => epochToShortDateFormat(epoch)).join(" - ");
    });

    const messages = computed((): string[] => {
      const messages = [];
      for (const rule of props.rules) {
        if (props.modelValue && Array.isArray(props.modelValue)) {
          for (const value of props.modelValue) {
            const message = rule(value);
            if (typeof(message) === "string") {
              messages.push(message);
              break;
            }
          }
        }
        else {
          const message = rule(null);
          if (typeof(message) === "string") {
            messages.push(message);
          }
        }
      }
      return messages;
    });

    const onClick = (): void => {
      if (props.editable) {
        dialog.value = true;
      }
    };

    const onClear = (): void => {
      emit("update:modelValue", null);
      innerDateRange.value = null;
    };

    const onSubmit = (): void => {
      emit("update:modelValue", innerDateRange.value);
      dialog.value = false;
    };

    return {
      ColorEnum,
      messages,
      style,
      dialog,
      placeholder,
      innerDateRange,
      onClick,
      onClear,
      onSubmit
    };
  }
});
</script>