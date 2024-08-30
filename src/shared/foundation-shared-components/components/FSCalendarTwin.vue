<template>
  <FSCol
    width="hug"
  >
    <FSRow
      v-if="$props.label"
    >
      <FSSpan
        class="fs-calendar-label"
        font="text-overline"
      >
        {{ $props.label }}
      </FSSpan>
    </FSRow>
    <FSRow
      class="fs-calendar-twin"
      align="top-center"
      width="hug"
      :height="['380px', '375px']"
      :style="style"
    >
      <FSCol
        align="top-center"
        width="hug"
        :class="leftClasses"
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
            {{ leftText }}
          </FSSpan>
          <div />
        </FSRow>
        <div
          class="fs-calendar-divider"
          :style="style"
        />
        <v-locale-provider
          :locale="languageCode"
        >
          <v-date-picker-month
            :month="innerLeftMonth"
            :year="innerLeftYear"
            :multiple="true"
            :allowedDates="allowedDates"
            :modelValue="innerLeftValue.map(epochToPicker)"
            @update:modelValue="onClickLeft"
            @update:month="null"
            @update:year="null"
          />
        </v-locale-provider>
      </FSCol>
      <FSCol
        align="top-center"
        width="hug"
        :class="rightClasses"
        :style="style"
      >
        <FSRow
          class="fs-calendar-header"
          align="center-center"
        >
          <div />
          <FSSpan
            class="fs-calendar-text"
            font="text-h3"
          >
            {{ rightText }}
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
            :month="innerRightMonth"
            :year="innerRightYear"
            :multiple="true"
            :allowedDates="allowedDates"
            :modelValue="innerRightValue.map(epochToPicker)"
            @update:modelValue="onClickRight"
            @update:month="null"
            @update:year="null"
          />
        </v-locale-provider>
      </FSCol>
    </FSRow>
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, type PropType, ref, type StyleValue } from "vue";

import { useDateFormat, useAppLanguageCode } from "@dative-gpi/foundation-shared-services/composables";
import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";

import FSButton from "./FSButton.vue";
import FSSpan from "./FSSpan.vue";
import FSCol from "./FSCol.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSCalendarTwin",
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
      type: Array as PropType<number[] | null>,
      required: false,
      default: null
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Dark
    },
    limit: {
      type: String as PropType<"none" | "past" | "future">,
      required: false,
      default: "none"
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { epochToPicker, epochToPickerHeader, pickerToEpoch, todayToEpoch } = useDateFormat();
    const { languageCode } = useAppLanguageCode();
    const { getColors } = useColors();
    
    const innerLeftMonth = ref(new Date().getMonth());
    const innerLeftYear = ref(new Date().getFullYear());

    const innerRightMonth = ref(new Date().getMonth());
    const innerRightYear = ref(new Date().getFullYear());

    const toggle = ref((props.modelValue?.length ?? 0) % 2);

    const colors = computed(() => getColors(props.color));
    const backgrounds = getColors(ColorEnum.Background);
    const darks = getColors(ColorEnum.Dark);

    const style = computed((): StyleValue => ({
      "--fs-calendar-background-color"       : backgrounds.base,
      "--fs-calendar-hover-background-color" : colors.value.light,
      "--fs-calendar-active-background-color": colors.value.base,
      "--fs-calendar-border-color"           : darks.base,
      "--fs-calendar-hover-border-color"     : colors.value.base,
      "--fs-calendar-active-border-color"    : colors.value.base,
      "--fs-calendar-color"                  : darks.base,
      "--fs-calendar-hover-color"            : colors.value.base,
      "--fs-calendar-active-color"           : colors.value.light
    }));

    const innerLeftValue = computed((): number[] => {
      if (!props.modelValue || !props.modelValue.length) {
        return [];
      }
      return props.modelValue.filter(value =>
        compare("during", "left", epochToPickerHeader(value)) || compare("before", "left", epochToPickerHeader(value))
      );
    });

    const innerRightValue = computed((): number[] => {
      if (!props.modelValue || !props.modelValue.length) {
        return [];
      }
      return props.modelValue.filter(value =>
        compare("during", "right", epochToPickerHeader(value)) || compare("after", "right", epochToPickerHeader(value))
      );
    });

    const leftText = computed(() => {
      const date = new Date(0);
      date.setMonth(innerLeftMonth.value);
      date.setFullYear(innerLeftYear.value);
      return new Intl.DateTimeFormat(languageCode.value, { month: "long", year: "numeric" }).format(date);
    });

    const rightText = computed(() => {
      const date = new Date(0);
      date.setMonth(innerRightMonth.value);
      date.setFullYear(innerRightYear.value);
      return new Intl.DateTimeFormat(languageCode.value, { month: "long", year: "numeric" }).format(date);
    });

    const leftClasses = computed((): string[] => {
      const classNames = ["fs-calendar-half", "fs-calendar-left"];
      if (props.modelValue && props.modelValue.length > 1) {
        const first = epochToPickerHeader(props.modelValue[0]);
        const last = epochToPickerHeader(props.modelValue[1]);
        if (compare("before", "left", first) && compare("after", "left", last)) {
          classNames.push("fs-calendar-full");
        }
        else if (compare("during", "left", first) && compare("during", "left", last)) {
          if (first.d !== last.d) {
            classNames.push("fs-calendar-part");
          }
        }
        else if (compare("during", "left", first)) {
          classNames.push("fs-calendar-start");
        }
        else if (compare("during", "left", last)) {
          classNames.push("fs-calendar-end");
        }
      }
      return classNames;
    });

    const rightClasses = computed((): string[] => {
      const classNames = ["fs-calendar-half", "fs-calendar-right"];
      if (props.modelValue && props.modelValue.length > 1) {
        const first = epochToPickerHeader(props.modelValue[0]);
        const last = epochToPickerHeader(props.modelValue[1]);
        if (compare("before", "right", first) && compare("after", "right", last)) {
          classNames.push("fs-calendar-full");
        }
        else if (compare("during", "right", first) && compare("during", "right", last)) {
          if (first.d !== last.d) {
            classNames.push("fs-calendar-part");
          }
        }
        else if (compare("during", "right", first)) {
          classNames.push("fs-calendar-start");
        }
        else if (compare("during", "right", last)) {
          classNames.push("fs-calendar-end");
        }
      }
      return classNames;
    });

    const compare = (operator: "before" | "during" | "after", side: "left" | "right", date: { d: number, m: number, y: number }): boolean => {
      switch (operator) {
        case "before":
          switch (side) {
            case "left":
              return innerLeftYear.value > date.y || (innerLeftYear.value === date.y && innerLeftMonth.value > date.m);
            default:
              return innerRightYear.value > date.y || (innerRightYear.value === date.y && innerRightMonth.value > date.m);
          }
        case "during":
          switch (side) {
            case "left":
              return innerLeftYear.value === date.y && innerLeftMonth.value === date.m;
            default:
              return innerRightYear.value === date.y && innerRightMonth.value === date.m;
          }
        case "after":
          switch (side) {
            case "left":
              return innerLeftYear.value < date.y || (innerLeftYear.value === date.y && innerLeftMonth.value < date.m);
            default:
              return innerRightYear.value < date.y || (innerRightYear.value === date.y && innerRightMonth.value < date.m);
          }
      }
    };

    const onClickPrevious = (): void => {
      if (innerLeftMonth.value === 11) {
        innerLeftMonth.value--;
        innerRightMonth.value = 11;
        innerRightYear.value--;
      }
      else if (innerLeftMonth.value === 0) {
        innerLeftYear.value--;
        innerLeftMonth.value = 11;
        innerRightMonth.value--;
      }
      else {
        innerLeftMonth.value--;
        innerRightMonth.value--;
      }
    };

    const onClickNext = (): void => {
      if (innerRightMonth.value === 11) {
        innerRightMonth.value = 0;
        innerRightYear.value++;
        innerLeftMonth.value++;
      }
      else if (innerRightMonth.value === 0) {
        innerRightMonth.value++;
        innerLeftMonth.value = 0;
        innerLeftYear.value++;
      }
      else {
        innerRightMonth.value++;
        innerLeftMonth.value++;
      }
    };

    const onClickLeft = (value: unknown): void => {
      const dates = value as Date[];
      const clicked = pickerToEpoch(dates[dates.length - 1]);
      if (!props.modelValue || !props.modelValue.length) {
        emit("update:modelValue", [clicked, clicked]);
      }
      else if (props.modelValue.length === 1) {
        emit("update:modelValue", [props.modelValue[0], clicked].sort());
      }
      else {
        if (innerLeftValue.value.length === 0) {
          emit("update:modelValue", [clicked, props.modelValue[1]]);
        }
        else {
          emit("update:modelValue", [clicked, props.modelValue[toggle.value]].sort());
          toggle.value = (++toggle.value) % 2;
        }
      }
    };

    const onClickRight = (value: unknown): void => {
      const dates = value as Date[];
      const clicked = pickerToEpoch(dates[dates.length - 1]);
      if (!props.modelValue || !props.modelValue.length) {
        emit("update:modelValue", [clicked, clicked]);
      }
      else if (props.modelValue.length === 1) {
        emit("update:modelValue", [props.modelValue[0], clicked].sort());
      }
      else {
        if (innerRightValue.value.length === 0) {
          emit("update:modelValue", [props.modelValue[0], clicked]);
        }
        else {
          emit("update:modelValue", [clicked, props.modelValue[toggle.value]].sort());
          toggle.value = (++toggle.value) % 2;
        }
      }
      toggle.value = (++toggle.value) % 2;
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

    onMounted((): void => {
      if (!props.modelValue || !props.modelValue.length) {
        innerLeftMonth.value = new Date().getMonth();
        innerLeftYear.value = new Date().getFullYear();
        if (innerLeftMonth.value < 11) {
          innerRightMonth.value = innerLeftMonth.value + 1;
          innerRightYear.value = innerLeftYear.value;
        }
        else {
          innerRightMonth.value = 0;
          innerRightYear.value = innerLeftYear.value + 1;
        }
      }
      else {
        innerLeftMonth.value = epochToPickerHeader(props.modelValue[0]).m;
        innerLeftYear.value = epochToPickerHeader(props.modelValue[0]).y;
        if (innerLeftMonth.value < 11) {
          innerRightMonth.value = innerLeftMonth.value + 1;
          innerRightYear.value = innerLeftYear.value;
        }
        else {
          innerRightMonth.value = 0;
          innerRightYear.value = innerLeftYear.value + 1;
        }
      }
    });

    return {
      ColorEnum,
      languageCode,
      style,
      leftClasses,
      leftText,
      innerLeftMonth,
      innerLeftYear,
      innerLeftValue,
      rightClasses,
      rightText,
      innerRightMonth,
      innerRightYear,
      innerRightValue,
      epochToPicker,
      onClickPrevious,
      onClickNext,
      onClickLeft,
      onClickRight,
      allowedDates
    };
  }
});
</script>