<template>
  <FSSelectField
    :clearable="false"
    :items="months"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import type { PropType} from "vue";
import { computed, defineComponent } from "vue";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import { Months } from "@dative-gpi/foundation-shared-domain/models";

import FSSelectField from "../fields/FSSelectField.vue";

export default defineComponent({
  name: "FSSelectMonths",
  components: {
    FSSelectField
  },
  props: {
    modelValue: {
      type: Number as PropType<Months>,
      required: false,
      default: Months.January
    },
    useAllMonths: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { $tr } = useTranslationsProvider();

    const months = computed((): { id: Months; label: string }[] => {
      const items = [
        { id: Months.January, label: $tr("ui.months.january", "January") },
        { id: Months.February, label: $tr("ui.months.february", "February") },
        { id: Months.March, label: $tr("ui.months.march", "March") },
        { id: Months.April, label: $tr("ui.months.april", "April") },
        { id: Months.May, label: $tr("ui.months.may", "May") },
        { id: Months.June, label: $tr("ui.months.june", "June") },
        { id: Months.July, label: $tr("ui.months.july", "July") },
        { id: Months.August, label: $tr("ui.months.august", "August") },
        { id: Months.September, label: $tr("ui.months.september", "September") },
        { id: Months.October, label: $tr("ui.months.october", "October") },
        { id: Months.November, label: $tr("ui.months.november", "November") },
        { id: Months.December, label: $tr("ui.months.december", "December") }
      ];
      if (props.useAllMonths) {
        items.unshift({ id: Months.AllMonths, label: $tr("ui.months.all-months", "All months") });
      }
      return items;
    });

    return {
      months
    };
  }
});
</script>