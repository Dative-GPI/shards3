<template>
  <v-menu
    :closeOnContentClick="false"
    :modelValue="menu && $props.editable"
    @update:modelValue="(value) => menu = value"
  >
    <template #activator="{ props }">
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
        :modelValue="epochToLongDateFormat($props.modelValue)"
        @click:clear="onClear"
        @blur="blurred = true"
        v-bind="props"
      >
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
    </template>
    <FSCard
      width="346px"
      :elevation="true"
      :border="false"
    >
      <FSCol width="fill">
        <FSCalendar
          :color="$props.color"
          v-model="innerDate"
        />
        <FSButton
          :color="$props.color"
          :label="$tr('ui.date-menu.validate', 'Validate')"
          @click="onSubmit"
        />
      </FSCol>
    </FSCard>
  </v-menu>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";

import { useColors, useRules } from "@dative-gpi/foundation-shared-components/composables";
import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useAppTimeZone } from "@dative-gpi/foundation-shared-services/composables";

import FSTextField from "./FSTextField.vue";
import FSCalendar from "../FSCalendar.vue";
import FSButton from "../FSButton.vue";
import FSCard from "../FSCard.vue";
import FSCol from "../FSCol.vue";

export default defineComponent({
  name: "FSDateField",
  components: {
    FSTextField,
    FSCalendar,
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
      type: Number as PropType<number | null>,
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
    const {validateOn, blurred, getMessages} = useRules();
    const { epochToLongDateFormat } = useAppTimeZone();
    const { getColors } = useColors();

    const errors = getColors(ColorEnum.Error);
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const menu = ref(false);
    const innerDate = ref<number | null>(props.modelValue);

    const style = computed((): { [key: string] : string } => {
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

    const messages = computed((): string[] => getMessages(props.modelValue, props.rules));

    const onClear = (): void => {
      emit("update:modelValue", null);
      innerDate.value = null;
    };

    const onSubmit = (): void => {
      emit("update:modelValue", innerDate.value);
      menu.value = false;
    };

    return {
      ColorEnum,
      innerDate,
      validateOn,
      messages,
      blurred,
      style,
      menu,
      onClear,
      onSubmit,
      epochToLongDateFormat
    };
  }
});
</script>