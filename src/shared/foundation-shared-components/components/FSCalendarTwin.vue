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
    <FSRow>
      <FSCol
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
        <v-locale-provider :locale="languageCode">
          <v-date-picker-month
            :month="innerLeftMonth"
            :year="innerLeftYear"
            :multiple="true"
            :modelValue="datesTools.epochToPicker(innerLeftValue)"
            @update:modelValue="onClickLeft"
            @update:month="null"
            @update:year="null"
          />
        </v-locale-provider>
      </FSCol>
      <FSCol
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
            @click="onClickNext"
          />
        </FSRow>
        <div
          class="fs-calendar-divider"
          :style="style"
        />
        <v-locale-provider :locale="languageCode">
          <v-date-picker-month
            :month="innerRightMonth"
            :year="innerRightYear"
            :multiple="true"
            :modelValue="datesTools.epochToPicker(innerRightValue)"
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
import { computed, defineComponent, onMounted, PropType, ref, toRefs } from "vue";
import { useDate as useAdapter } from "vuetify/lib/composables/date/index.mjs";

import { useColors, useDates } from "@dative-gpi/foundation-shared-components/composables";
import { useLanguageCode } from "@dative-gpi/foundation-shared-services/composables";
import { ColorBase } from "@dative-gpi/foundation-shared-components/themes";

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
      type: String,
      required: false,
      default: null
    },
    modelValue: {
      type: Array as PropType<Array<number>>,
      required: false,
      default: null
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorBase.Dark
    },
    buttonColor: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorBase.Primary
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { modelValue, color, buttonColor } = toRefs(props);

    const languageCode = useLanguageCode().languageCode;
    const datesTools = useDates();
    const adapter = useAdapter();

    const colors = useColors().getColors(color.value);
    const buttonColors = useColors().getColors(buttonColor.value);

    const backgrounds = useColors().getColors(ColorBase.Background);
    
    const innerLeftMonth = ref(new Date().getMonth());
    const innerLeftYear = ref(new Date().getFullYear());

    const innerRightMonth = ref(new Date().getMonth());
    const innerRightYear = ref(new Date().getFullYear());

    const toggle = ref(modelValue.value.length % 2);

    onMounted((): void => {
      switch (modelValue.value.length) {
        case 0:
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
          break;
        default:
          innerLeftMonth.value = datesTools.epochToPickerHeader(modelValue.value[0]).m;
          innerLeftYear.value = datesTools.epochToPickerHeader(modelValue.value[0]).y;
          if (innerLeftMonth.value < 11) {
            innerRightMonth.value = innerLeftMonth.value + 1;
            innerRightYear.value = innerLeftYear.value;
          }
          else {
            innerRightMonth.value = 0;
            innerRightYear.value = innerLeftYear.value + 1;
          }
          break;
      }
    });

    const compare = (operator: "before" | "during" | "after", side: "left" | "right", date: { d: number, m: number, y: number }): boolean => {
      switch (operator) {
        case "before":
          switch (side) {
            case "left":
              return innerLeftYear.value > date.y || (innerLeftYear.value === date.y && innerLeftMonth.value > date.m);
            case "right":
              return innerRightYear.value > date.y || (innerRightYear.value === date.y && innerRightMonth.value > date.m);
          }
        case "during":
          switch (side) {
            case "left":
              return innerLeftYear.value === date.y && innerLeftMonth.value === date.m;
            case "right":
              return innerRightYear.value === date.y && innerRightMonth.value === date.m;
          }
        case "after":
          switch (side) {
            case "left":
              return innerLeftYear.value < date.y || (innerLeftYear.value === date.y && innerLeftMonth.value < date.m);
            case "right":
              return innerRightYear.value < date.y || (innerRightYear.value === date.y && innerRightMonth.value < date.m);
          }
      }
    }

    const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
      return {
        "--fs-calendar-background-color"       : backgrounds.base,
        "--fs-calendar-hover-background-color" : buttonColors.light,
        "--fs-calendar-active-background-color": buttonColors.base,
        "--fs-calendar-border-color"           : colors.base,
        "--fs-calendar-hover-border-color"     : buttonColors.base,
        "--fs-calendar-active-border-color"    : buttonColors.base,
        "--fs-calendar-color"                  : colors.base,
        "--fs-calendar-hover-color"            : buttonColors.base,
        "--fs-calendar-active-color"           : buttonColors.light
      };
    });

    const innerLeftValue = computed((): number[] => {
      return modelValue.value.filter(value =>
        compare("during", "left", datesTools.epochToPickerHeader(value)) || compare("before", "left", datesTools.epochToPickerHeader(value))
      );
    });

    const innerRightValue = computed((): number[] => {
      return modelValue.value.filter(value =>
        compare("during", "right", datesTools.epochToPickerHeader(value)) || compare("after", "right", datesTools.epochToPickerHeader(value))
      );
    });

    const leftText = computed(() => {
      adapter.locale = languageCode;
      return adapter.format(
        adapter.setYear(adapter.setMonth(adapter.date(), innerLeftMonth.value), innerLeftYear.value),
        'monthAndYear',
      );
    });

    const rightText = computed(() => {
      adapter.locale = languageCode;
      return adapter.format(
        adapter.setYear(adapter.setMonth(adapter.date(), innerRightMonth.value), innerRightYear.value),
        'monthAndYear',
      );
    });

    const leftClasses = computed((): string[] => {
      const classes = ["fs-calendar", "fs-calendar-left"];
      if (modelValue.value.length > 1) {
        const first = datesTools.epochToPickerHeader(modelValue.value[0]);
        const last = datesTools.epochToPickerHeader(modelValue.value[1]);
        if (compare("before", "left", first) && compare("after", "left", last)) {
          classes.push("fs-calendar-full");
        }
        else if (compare("during", "left", first) && compare("during", "left", last)) {
          if (first.d !== last.d) {
            classes.push("fs-calendar-part");
          }
        }
        else if (compare("during", "left", first)) {
          classes.push("fs-calendar-start");
        }
        else if (compare("during", "left", last)) {
          classes.push("fs-calendar-end");
        }
      }
      return classes;
    });

    const rightClasses = computed((): string[] => {
      const classes = ["fs-calendar", "fs-calendar-right"];
      if (modelValue.value.length > 1) {
        const first = datesTools.epochToPickerHeader(modelValue.value[0]);
        const last = datesTools.epochToPickerHeader(modelValue.value[1]);
        if (compare("before", "right", first) && compare("after", "right", last)) {
          classes.push("fs-calendar-full");
        }
        else if (compare("during", "right", first) && compare("during", "right", last)) {
          if (first.d !== last.d) {
            classes.push("fs-calendar-part");
          }
        }
        else if (compare("during", "right", first)) {
          classes.push("fs-calendar-start");
        }
        else if (compare("during", "right", last)) {
          classes.push("fs-calendar-end");
        }
      }
      return classes;
    });

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

    const onClickLeft = (value: Date[]): void => {
      const clicked = datesTools.pickerToEpoch([value[value.length - 1]])[0];
      if (modelValue.value.length === 0) {
        emit("update:modelValue", [clicked, clicked]);
      }
      else if (modelValue.value.length === 1) {
        emit("update:modelValue", [modelValue.value[0], clicked].sort());
      }
      else {
        if (innerLeftValue.value.length === 0) {
          emit("update:modelValue", [clicked, modelValue.value[1]]);
        }
        else {
          emit("update:modelValue", [clicked, modelValue.value[toggle.value]].sort());
          toggle.value = (++toggle.value) % 2;
        }
      }
    };

    const onClickRight = (value: Date[]): void => {
      const clicked = datesTools.pickerToEpoch([value[value.length - 1]])[0];
      if (modelValue.value.length === 0) {
        emit("update:modelValue", [clicked, clicked]);
      }
      else if (modelValue.value.length === 1) {
        emit("update:modelValue", [modelValue.value[0], clicked].sort());
      }
      else {
        if (innerRightValue.value.length === 0) {
          emit("update:modelValue", [modelValue.value[0], clicked]);
        }
        else {
          emit("update:modelValue", [clicked, modelValue.value[toggle.value]].sort());
          toggle.value = (++toggle.value) % 2;
        }
      }
      toggle.value = (++toggle.value) % 2;
    };

    return {
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
      datesTools,
      onClickPrevious,
      onClickNext,
      onClickLeft,
      onClickRight
    };
  }
});
</script>