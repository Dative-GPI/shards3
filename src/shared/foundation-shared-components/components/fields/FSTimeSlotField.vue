<template>
  <FSCol>
    <slot v-if="!$props.hideHeader" name="label">
      <FSRow :wrap="false">
        <FSSpan
          v-if="$props.label"
          class="fs-time-slot-field-label"
          font="text-overline"
          :style="style"
        >
          {{ $props.label }}
        </FSSpan>
        <FSSpan
          v-if="$props.label && $props.required"
          class="fs-time-slot-field-label"
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
          class="fs-time-slot-field-messages"
          font="text-overline"
          :style="style"
        >
          {{ messages.join(", ") }}
        </FSSpan>
      </FSRow>
    </slot>
    <FSRow>
      <FSSelectField
        class="fs-time-slot-field-select"
        :editable="$props.editable"
        :items="daysObject"
        :hideHeader="true"
        :clearable="false"
        :style="style"
        :modelValue="dayStart"
        @update:modelValue="onChangeDayStart"
      >
        <template v-for="(_, name) in slots" v-slot:[name]="slotData">
          <slot :name="name" v-bind="slotData" />
        </template>
        <template #append>
          <FSClock
            class="fs-time-slot-field-number"
            :editable="$props.editable"
            :color="ColorEnum.Light"
            :reminder="false"
            :slider="false"
            :style="style"
            :modelValue="$props.modelValue[0][1]"
            @update:modelValue="onChangeHourStart"
          />
        </template>
      </FSSelectField>
      <FSSelectField
        class="fs-time-slot-field-select"
        :editable="$props.editable"
        :items="daysObject"
        :hideHeader="true"
        :clearable="false"
        :style="style"
        :modelValue="dayEnd"
        @update:modelValue="onChangeDayEnd"
      >
        <template #append>
          <FSClock
            class="fs-time-slot-field-number"
            :editable="$props.editable"
            :color="ColorEnum.Light"
            :reminder="false"
            :slider="false"
            :style="style"
            :modelValue="$props.modelValue[1][1]"
            @update:modelValue="onChangeHourEnd"
          />
        </template>
      </FSSelectField>
    </FSRow>
    <slot name="description">
      <FSSpan
        v-if="$props.description"
        class="fs-time-slot-field-description"
        font="text-underline"
        :style="style"
      >
        {{ $props.description }}
      </FSSpan>
    </slot>
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { useColors, useRules, useSlots } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { Days } from "@dative-gpi/foundation-shared-domain/models";

import FSSelectField from "./FSSelectField.vue";
import FSClock from "../FSClock.vue";
import FSSpan from "../FSSpan.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSTimeSlotField",
  components: {
    FSSelectField,
    FSClock,
    FSSpan,
    FSCol,
    FSRow
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
      type: Array as PropType<number[][]>,
      required: true,
      default: null
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
    messages: {
      type: Array as PropType<string[]>,
      required: false,
      default: null
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { validateOn, blurred, getMessages } = useRules();
    const { getColors } = useColors();
    const { slots } = useSlots();

    delete slots.label;
    delete slots.description;

    const errors = getColors(ColorEnum.Error);
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);
    
    const daysObject: { id: number; label: string }[]  = Object.keys(Days).reduce((acc, key) => {
      if(isNaN(Number(key))){
        acc.push({
          id: Days[key],
          label: key
        });
      }
      return acc;
    }, []);

    const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
      if (!props.editable) {
        return {
          "--fs-time-slot-field-cursor"             : "default",
          "--fs-time-slot-field-border-color"       : lights.base,
          "--fs-time-slot-field-color"              : lights.dark,
          "--fs-time-slot-field-active-border-color": lights.base
        };
      }
      return {
        "--fs-time-slot-field-cursor"             : "text",
        "--fs-time-slot-field-border-color"       : lights.dark,
        "--fs-time-slot-field-color"              : darks.base,
        "--fs-time-slot-field-active-border-color": darks.dark,
        "--fs-time-slot-field-error-color"        : errors.base,
        "--fs-time-slot-field-error-border-color" : errors.base
      };
    });

    const dayStart = computed((): number => {
      return props.modelValue[1][0] === 7 ? 7 : props.modelValue[0][0];
    });

    const dayEnd = computed((): number => {
      return props.modelValue[0][0] === 7 ? 7 : props.modelValue[1][0];
    });

    const messages = computed((): string[] => props.messages ?? getMessages(props.modelValue, props.rules));

    const onChangeDayStart = (value: number) => {
      if (value === 7) {
        emit("update:modelValue", [[7, props.modelValue[0][1]], [7, props.modelValue[1][1]]]);
        return;
      }
      if (props.modelValue[1][0] === 7) {
        emit("update:modelValue", [[value, props.modelValue[0][1]], [value, props.modelValue[1][1]]]);
        return;
      }
      emit("update:modelValue", [[value, props.modelValue[0][1]], props.modelValue[1]]);
    };

    const onChangeHourStart = (value: number) => {
      emit("update:modelValue", [[props.modelValue[0][0], value], props.modelValue[1]]);
    };

    const onChangeDayEnd = (value: number) => {
      if (value === 7) {
        emit("update:modelValue", [[7, props.modelValue[0][1]], [7, props.modelValue[1][1]]]);
        return;
      }
      if (props.modelValue[0][0] === 7) {
        emit("update:modelValue", [[value, props.modelValue[0][1]], [value, props.modelValue[1][1]]]);
        return;
      }
      emit("update:modelValue", [props.modelValue[0], [value, props.modelValue[1][1]]]);
    };

    const onChangeHourEnd = (value: number) => {
      emit("update:modelValue", [props.modelValue[0], [props.modelValue[1][0], value]]);
    };

    return {
      ColorEnum,
      daysObject,
      dayStart,
      dayEnd,
      validateOn,
      messages,
      blurred,
      slots,
      style,
      onChangeDayStart,
      onChangeHourStart,
      onChangeDayEnd,
      onChangeHourEnd
    };
  }
});
</script>