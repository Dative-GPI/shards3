<template>
  <FSRow
    align="center-center"
  >
    <FSButtonPreviousIcon
      @click="onPrevious"
    />
    <FSRow>
      <!-- TODO : mettre un VMenu sur le FSColor pour pouvoir changer d'année plus vite -->
      <FSColor
        :border="false"
        padding="0px 30px"
        :color="$props.color"
        width="100%"
        :height="[40, 36]"
        style="min-width: 210px;"
      >
        <FSRow
          width="100%"
          height="100%"
          align="center-center"
        >
          <FSSpan
            font="text-h3"
          >
            {{ monthToString($props.month) }}
          </FSSpan>
          <FSSpan
            font="text-h3"
          >
            {{ $props.year }}
          </FSSpan>
        </FSRow>
      </FSColor>
    </FSRow>
    <FSButtonNextIcon
      @click="onNext"
    />
  </FSRow>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

import { useTranslations } from "@dative-gpi/bones-ui";
import { Months } from '@dative-gpi/foundation-shared-domain/enums';
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSRow from "../FSRow.vue";
import FSSpan from "../FSSpan.vue";
import FSColor from "../FSColor.vue";

import FSButtonNextIcon from "../buttons/FSButtonNextIcon.vue";
import FSButtonPreviousIcon from "../buttons/FSButtonPreviousIcon.vue";

export default defineComponent({
  name: "FSMonthSelector",
  components: {
    FSRow,
    FSSpan,
    FSColor,
    FSButtonNextIcon,
    FSButtonPreviousIcon
  },
  props: {
    color: {
      type: String,
      required: false,
      default: ColorEnum.Primary
    },
    month: {
      type: Number as PropType<Months>,
      required: true
    },
    year: {
      type: Number,
      required: true
    }
  },
  emits: ["update:month", "update:year", "update"],
  setup(props, { emit }) {
    const { $tr } = useTranslations();

    const monthToString = (month: number) => {
      switch(month) {
        case Months.January:
          return $tr("ui.common.january", "January");
        case Months.February:
          return $tr("ui.common.february", "February");
        case Months.March:
          return $tr("ui.common.march", "March");
        case Months.April:
          return $tr("ui.common.april", "April");
        case Months.May:
          return $tr("ui.common.may", "May");
        case Months.June:
          return $tr("ui.common.june", "June");
        case Months.July:
          return $tr("ui.common.july", "July");
        case Months.August:
          return $tr("ui.common.august", "August");
        case Months.September:
          return $tr("ui.common.september", "September");
        case Months.October:
          return $tr("ui.common.october", "October");
        case Months.November:
          return $tr("ui.common.november", "November");
        case Months.December:
          return $tr("ui.common.december", "December");
      }
    }

    const onNext = () => {
      emit("update:month", props.month === 12 ? 1 : props.month + 1);
      emit("update:year", props.month === 12 ? props.year + 1 : props.year);
      emit("update", {
        month: props.month === 12 ? 1 : props.month + 1,
        year: props.month === 12 ? props.year + 1 : props.year
      })
    }

    const onPrevious = () => {
      emit("update:month", props.month === 1 ? 12 : props.month - 1);
      emit("update:year", props.month === 1 ? props.year - 1 : props.year);
      emit("update", {
        month: props.month === 1 ? 12 : props.month - 1,
        year: props.month === 1 ? props.year - 1 : props.year
      })
    }

    return {
      monthToString,
      onNext,
      onPrevious
    };
  }
});
</script>