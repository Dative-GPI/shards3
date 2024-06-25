<template>
  <FSCol
    width="hug"
  >
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
import type { PropType} from "vue";
import { computed, defineComponent, ref } from "vue";

import { useAppTimeZone, useAppLanguageCode } from "@dative-gpi/foundation-shared-services/composables";
import type { ColorBase} from "@dative-gpi/foundation-shared-components/models";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
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
      type: String as PropType<string | null>,
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
    limit: {
      type: String as PropType<"none" | "past" | "future">,
      required: false,
      default: "none"
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { epochToPicker, pickerToEpoch, todayToEpoch } = useAppTimeZone();
    const { languageCode } = useAppLanguageCode();
    const { getColors } = useColors();

    const colors = computed(() => getColors(props.color));
    const backgrounds = getColors(ColorEnum.Background);
    const darks = getColors(ColorEnum.Dark);
    
    const innerMonth = ref(props.modelValue ? epochToPicker(props.modelValue).getMonth() : new Date().getMonth());
    const innerYear = ref(props.modelValue ? epochToPicker(props.modelValue).getFullYear() : new Date().getFullYear());

    const style = computed((): { [key: string] : string | null | undefined } => {
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

    const onClickDate = (value: unknown): void => {
      const date = (value as Date[])[0];
      const epoch = pickerToEpoch(date);
      emit("update:modelValue", epoch);
    };

    const allowedDates = (value: unknown): boolean => {
      const date = value as Date;
      const valueEpoch = pickerToEpoch(date);
      switch (props.limit) {
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
      onClickDate,
      allowedDates
    };
  }
});
</script>