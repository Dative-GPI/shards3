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
import { defineComponent } from "vue";

import { useTranslations } from "@dative-gpi/bones-ui";
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
      type: Number,
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
        case 1:
          return $tr("ui.common.january", "January");
        case 2:
          return $tr("ui.common.february", "February");
        case 3:
          return $tr("ui.common.march", "March");
        case 4:
          return $tr("ui.common.april", "April");
        case 5:
          return $tr("ui.common.may", "May");
        case 6:
          return $tr("ui.common.june", "June");
        case 7:
          return $tr("ui.common.july", "July");
        case 8:
          return $tr("ui.common.august", "August");
        case 9:
          return $tr("ui.common.september", "September");
        case 10:
          return $tr("ui.common.october", "October");
        case 11:
          return $tr("ui.common.november", "November");
        case 12:
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