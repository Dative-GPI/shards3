<template>
  <FSCol>
    <FSRow>
      <FSSpan
        v-if="$props.label"
        class="fs-calendar-label"
        font="text-overline"
      >
        {{ $props.label }}
      </FSSpan>
    </FSRow>
    <FSCol
      class="fs-calendar"
      :style="style"
    >
      <FSRow
        class="fs-calendar-header"
        align="center-center"
      >
        <FSButton
          size="l"
          variant="icon"
          icon="mdi-chevron-left"
          :color="ColorEnum.Dark"
          @click="onClickPrevious"
        />
        <FSSpan
          class="fs-calendar-text"
          font="text-h3"
        >
          {{ text }}
        </FSSpan>
        <FSButton
          size="l"
          variant="icon"
          icon="mdi-chevron-right"
          :color="ColorEnum.Dark"
          @click="onClickNext"
        />
      </FSRow>
      <div
        class="fs-calendar-divider"
        :style="style"
      />
      <v-locale-provider :locale="languageCode">
        <v-date-picker-month
          :month="innerMonth"
          :year="innerYear"
          :multiple="false"
          :showAdjacentMonths="true"
          :allowedDates="allowedDates"
          :modelValue="epochToPicker($props.modelValue)"
          @update:modelValue="(value) => $emit('update:modelValue', pickerToEpoch(value[0]))"
          @update:month="null"
          @update:year="null"
        />
      </v-locale-provider>
    </FSCol>
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, toRefs } from "vue";

import { useTimeZone, useLanguageCode } from "@dative-gpi/foundation-shared-services/composables";
import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";

import FSButton from "./FSButton.vue";
import FSSpan from "./FSSpan.vue";
import FSCol from "./FSCol.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSCalendar",
  components: {
    FSButton,
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
    modelValue: {
      type: Number,
      required: false,
      default: null
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    },
    limit: {
      type: String as PropType<"none" | "past" | "future">,
      required: false,
      default: "none"
    }
  },
  setup(props) {
    const { modelValue, color, limit } = toRefs(props);

    const { epochToPicker, pickerToEpoch, todayToEpoch } = useTimeZone();
    const { languageCode } = useLanguageCode();

    const colors = computed(() => useColors().getColors(color.value));
    const backgrounds = useColors().getColors(ColorEnum.Background);
    const darks = useColors().getColors(ColorEnum.Dark);
    
    const innerMonth = ref(modelValue.value ? epochToPicker(modelValue.value).getMonth() : new Date().getMonth());
    const innerYear = ref(modelValue.value ? epochToPicker(modelValue.value).getFullYear() : new Date().getFullYear());

    const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
      return {
        "--fs-calendar-background-color"       : backgrounds.base,
        "--fs-calendar-hover-background-color" : colors.value.light,
        "--fs-calendar-active-background-color": colors.value.base,
        "--fs-calendar-border-color"           : darks.base,
        "--fs-calendar-hover-border-color"     : colors.value.base,
        "--fs-calendar-active-border-color"    : colors.value.base,
        "--fs-calendar-color"                  : darks.base,
        "--fs-calendar-hover-color"            : colors.value.base,
        "--fs-calendar-active-color"           : colors.value.light
      };
    });

    const text = computed((): string => {
      const date = new Date(0);
      date.setMonth(innerMonth.value);
      date.setFullYear(innerYear.value);
      return new Intl.DateTimeFormat(languageCode.value, { month: "long", year: "numeric" }).format(date);
    });

    const onClickPrevious = (): void => {
      if (innerMonth.value > 0) {
        innerMonth.value--;
      }
      else {
        innerYear.value--;
        innerMonth.value = 11;
      }
    };

    const onClickNext = (): void => {
      if (innerMonth.value < 11) {
        innerMonth.value++;
      }
      else {
        innerYear.value++;
        innerMonth.value = 0;
      }
    };

    const allowedDates = (value: Date): boolean => {
      const valueEpoch = pickerToEpoch(value);
      switch (limit.value) {
        case "past":
          return valueEpoch <= todayToEpoch(true);
        case "future":
          return valueEpoch >= todayToEpoch(true);
        default:
          return true;
      }
    };

    return {
      ColorEnum,
      languageCode,
      style,
      text,
      innerMonth,
      innerYear,
      epochToPicker,
      pickerToEpoch,
      onClickPrevious,
      onClickNext,
      allowedDates
    };
  }
});
</script>