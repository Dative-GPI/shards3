<template>
  <FSCol
    width="hug"
  >
    <FSRow>
      <FSSelectField
        :hideHeader="true"
        :clearable="false"
        :items="years"
        v-model="innerYear"
      />
      <FSRow
        align="center-right"
      >
        <FSButton
          :label="$tr('ui.common.today', 'Today')"
          @click="onClickToday"
        />
      </FSRow>
    </FSRow>
    <FSCol
      class="fs-calendar"
      :height="['380px', '375px']"
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
      <v-locale-provider
        :locale="languageCode"
      >
        <v-date-picker-month
          :month="innerMonth"
          :year="innerYear"
          :multiple="false"
          :showAdjacentMonths="true"
          :allowedDates="allowedDates"
          :modelValue="[epochToPicker($props.modelValue)]"
          @update:modelValue="onClickDate"
          @update:month="null"
          @update:year="null"
        />
      </v-locale-provider>
    </FSCol>
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, type PropType, ref, type StyleValue } from "vue";

import { useDateFormat, useAppLanguageCode } from "@dative-gpi/foundation-shared-services/composables";
import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";

import FSSelectField from "./fields/FSSelectField.vue";
import FSButton from "./FSButton.vue";
import FSSpan from "./FSSpan.vue";
import FSCol from "./FSCol.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSCalendar",
  components: {
    FSSelectField,
    FSButton,
    FSSpan,
    FSCol,
    FSRow
  },
  props: {
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
    limit: {
      type: String as PropType<"none" | "past" | "future">,
      required: false,
      default: "none"
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { epochToPicker, pickerToEpoch, todayToEpoch } = useDateFormat();
    const { languageCode } = useAppLanguageCode();
    const { getColors } = useColors();
    
    const innerMonth = ref(new Date().getMonth());
    const innerYear = ref(new Date().getFullYear());

    const colors = computed(() => getColors(props.color));
    const backgrounds = getColors(ColorEnum.Background);
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const style = computed((): StyleValue => ({
      "--fs-calendar-background-color"       : backgrounds.base,
      "--fs-calendar-hover-background-color" : colors.value.light,
      "--fs-calendar-active-background-color": colors.value.base,
      "--fs-calendar-border-color"           : lights.dark,
      "--fs-calendar-hover-border-color"     : colors.value.base,
      "--fs-calendar-active-border-color"    : colors.value.base,
      "--fs-calendar-color"                  : darks.base,
      "--fs-calendar-hover-color"            : colors.value.base,
      "--fs-calendar-active-color"           : colors.value.light
    }));

    const text = computed((): string => {
      const date = new Date(0);
      date.setMonth(innerMonth.value);
      date.setFullYear(innerYear.value);
      return new Intl.DateTimeFormat(languageCode.value, { month: "long", year: "numeric" }).format(date);
    });

    const years = computed((): any[] => {
      const years = [];
      switch (props.limit) {
        case "past":
          for (let i = 1900; i < new Date().getFullYear(); i++) {
            years.push({ label: i.toString(), id: i });
          }
          break;
        case "future":
          for (let i = new Date().getFullYear(); i < 2100; i++) {
            years.push({ label: i.toString(), id: i });
          }
          break;
        default:
          for (let i = 1900; i < 2100; i++) {
            years.push({ label: i.toString(), id: i });
          }
          break;
      }
      return years;
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

    const onClickDate = (value: unknown): void => {
      if (!Array.isArray(value) || !(value[0] instanceof Date)) {
        return;
      }
      emit("update:modelValue", pickerToEpoch(value[0]));
    };

    const onClickToday = (): void => {
      const today = new Date();
      innerMonth.value = today.getMonth();
      innerYear.value = today.getFullYear();

      today.setHours(0, 0, 0, 0);
      emit("update:modelValue", pickerToEpoch(today));
    };

    const allowedDates = (value: unknown): boolean => {
      if (!(value instanceof Date)) {
        return false;
      }
      switch (props.limit) {
        case "past"  : return pickerToEpoch(value) <= todayToEpoch();
        case "future": return pickerToEpoch(value) >= todayToEpoch();
        default      : return true;
      }
    };

    onMounted(() => {
      if (props.modelValue) {
        innerMonth.value = epochToPicker(props.modelValue).getMonth();
        innerYear.value = epochToPicker(props.modelValue).getFullYear();
      }
    });

    return {
      ColorEnum,
      languageCode,
      style,
      text,
      innerMonth,
      innerYear,
      years,
      epochToPicker,
      pickerToEpoch,
      onClickPrevious,
      onClickNext,
      onClickDate,
      onClickToday,
      allowedDates
    };
  }
});
</script>