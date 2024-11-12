<template>
  <FSTextField
    class="fs-date-field"
    :label="$props.label"
    :description="$props.description"
    :color="$props.color"
    :hideHeader="$props.hideHeader"
    :required="$props.required"
    :editable="$props.editable"
    :readonly="true"
    :rules="$props.rules"
    :messages="messages"
    :validateOn="validateOn"
    :validationValue="$props.modelValue"
    :modelValue="toShortDateFormat"
    @click="onClick"
    @update:modelValue="onClear"
    v-bind="$attrs"
  >
    <template
      #prepend-inner
    >
      <slot
        name="prepend-inner"
      >
        <FSButton
          variant="icon"
          icon="mdi-calendar"
          :editable="$props.editable"
          :color="ColorEnum.Dark"
        />
      </slot>
    </template>
    <template
      v-for="(_, name) in $slots"
      v-slot:[name]="slotData"
    >
      <slot
        :name="name"
        v-bind="slotData"
      />
    </template>
  </FSTextField>
  <FSDialogSubmit
    :title="$props.label"
    :submitButtonColor="$props.color"
    @click:submitButton="onSubmit"
    v-model="dialog"
  >
    <template
      #body
    >
      <FSCalendarTwin
        :color="$props.color"
        v-model="innerDateRange"
      />
    </template>
  </FSDialogSubmit>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, ref, watch } from "vue";
import _ from "lodash";

import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useDateFormat } from "@dative-gpi/foundation-shared-services/composables";
import { useRules } from "@dative-gpi/foundation-shared-components/composables";

import FSDialogSubmit from "../FSDialogSubmit.vue";
import FSCalendarTwin from "../FSCalendarTwin.vue";
import FSTextField from "./FSTextField.vue";
import FSButton from "../FSButton.vue";

export default defineComponent({
  name: "FSDateRangeField",
  components: {
    FSDialogSubmit,
    FSCalendarTwin,
    FSTextField,
    FSButton
  },
  props: {
    label: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    description: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    modelValue: {
      type: Array as PropType<number[] | null>,
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
      type: Array as PropType<any[]>,
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
    const { validateOn, getMessages } = useRules();
    const { epochToShortDateFormat } = useDateFormat();

    const dialog = ref(false);
    
    const innerDateRange = ref<number[] | null>(props.modelValue);

    const toShortDateFormat = computed((): string => {
      if (!props.modelValue || !Array.isArray(props.modelValue) || !props.modelValue.length) {
        return "";
      }
      return props.modelValue.map((epoch) => epochToShortDateFormat(epoch)).join(" - ");
    });

    const messages = computed((): string[] => getMessages(props.modelValue, props.rules, true));

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

    watch(() => props.modelValue, () => {
      if (!_.isEqual(innerDateRange.value, props.modelValue)) {
        innerDateRange.value = props.modelValue;
      }
    });

    return {
      toShortDateFormat,
      innerDateRange,
      validateOn,
      ColorEnum,
      messages,
      dialog,
      onClick,
      onClear,
      onSubmit
    };
  }
});
</script>