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
    :modelValue="toShortTimeFormat"
    @click="onClick"
    @update:modelValue="onClear"
    @blur="blurred = true"
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
    :rightButtonColor="$props.color"
    @click:rightButton="onSubmit"
    v-model="dialog"
  >
    <template
      #body
    >
      <FSCol>
        <FSCalendarTwin
          :color="$props.color"
          v-model="innerDateRange"
        />
        <FSRow
          width="100%"
        >
          <FSCol
            width="calc(50% - 4px)"
          >
            <FSClock
              :color="$props.color"
              :date="innerDateLeft"
              v-model="innerTimeLeft"
            />
          </FSCol>
          <FSCol
            width="calc(50% - 4px)"
          >
            <FSClock
              :color="$props.color"
              :date="innerDateRight"
              v-model="innerTimeRight"
            />
          </FSCol>
        </FSRow>
      </FSCol>
    </template>
  </FSDialogSubmit>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";

import { useColors, useRules } from "@dative-gpi/foundation-shared-components/composables";
import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useAppTimeZone } from "@dative-gpi/foundation-shared-services/composables";

import FSDialogSubmit from "../FSDialogSubmit.vue";
import FSCalendarTwin from "../FSCalendarTwin.vue";
import FSTextField from "./FSTextField.vue";
import FSButton from "../FSButton.vue";
import FSClock from "../FSClock.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSDateTimeRangeField",
  components: {
    FSDialogSubmit,
    FSCalendarTwin,
    FSTextField,
    FSButton,
    FSClock,
    FSCol,
    FSRow
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
    const { getUserOffsetMillis, epochToShortTimeFormat } = useAppTimeZone();
    const { validateOn, blurred, getMessages } = useRules();
    const { getColors } = useColors();

    const errors = getColors(ColorEnum.Error);
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const dialog = ref(false);
    const innerDateRange = ref<number[] | null>(null);
    const innerTimeRight = ref(0);
    const innerTimeLeft = ref(0);

    if (props.modelValue && Array.isArray(props.modelValue)) {
      // FSClock just gives two numbers without consideration for the time zone
      // We must adjust the time to the user's time zone
      switch (props.modelValue.length) {
        case 0: {
          break;
        }
        case 1: {
          innerTimeLeft.value = Math.floor((props.modelValue[0] + getUserOffsetMillis()) % (24 * 60 * 60 * 1000));
          innerDateRange.value = [props.modelValue[0] - innerTimeLeft.value];
          break;
        }
        default: {
          innerTimeLeft.value = Math.floor((props.modelValue[0] + getUserOffsetMillis()) % (24 * 60 * 60 * 1000));
          innerTimeRight.value = Math.floor((props.modelValue[1] + getUserOffsetMillis()) % (24 * 60 * 60 * 1000));
          innerDateRange.value = [props.modelValue[0] - innerTimeLeft.value, props.modelValue[1] - innerTimeRight.value];
          break;
        }
      }
    }

    const style = computed((): { [key: string] : string | null | undefined } => {
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

    const toShortTimeFormat = computed((): string => {
      if (!props.modelValue || !Array.isArray(props.modelValue) || !props.modelValue.length) {
        return "";
      }
      return props.modelValue.map((epoch) => epochToShortTimeFormat(epoch)).join(" - ");
    });

    const innerDateLeft = computed((): number | null => {
      if (innerDateRange.value && Array.isArray(innerDateRange.value) && innerDateRange.value.length) {
        return innerDateRange.value[0];
      }
      return null;
    });

    const innerDateRight= computed((): number | null => {
      if (innerDateRange.value && Array.isArray(innerDateRange.value) && innerDateRange.value.length > 1) {
        return innerDateRange.value[1];
      }
      return null;
    });

    const messages = computed((): string[] => getMessages(props.modelValue, props.rules, true));

    const onClick = (): void => {
      if (props.editable) {
        dialog.value = true;
      }
    };

    const onClear = (): void => {
      emit("update:modelValue", null);
      innerTimeLeft.value = 0;
      innerTimeRight.value = 0;
      innerDateRange.value = null;
    };

    const onSubmit = (): void => {
      if (innerDateRange.value && Array.isArray(innerDateRange.value) && innerDateRange.value.length > 1) {
        emit("update:modelValue", [innerDateRange.value[0] + innerTimeLeft.value, innerDateRange.value[1] + innerTimeRight.value]);
      }
      dialog.value = false;
    };

    return {
      ColorEnum,
      validateOn,
      messages,
      blurred,
      style,
      dialog,
      toShortTimeFormat,
      innerDateLeft,
      innerTimeLeft,
      innerDateRight,
      innerTimeRight,
      innerDateRange,
      onClick,
      onClear,
      onSubmit
    };
  }
});
</script>