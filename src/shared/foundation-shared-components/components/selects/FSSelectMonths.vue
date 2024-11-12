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
import { Months } from "@dative-gpi/foundation-shared-domain/enums";

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
        { id: Months.January, label: $tr("ui.common.january", "January") },
        { id: Months.February, label: $tr("ui.common.february", "February") },
        { id: Months.March, label: $tr("ui.common.march", "March") },
        { id: Months.April, label: $tr("ui.common.april", "April") },
        { id: Months.May, label: $tr("ui.common.may", "May") },
        { id: Months.June, label: $tr("ui.common.june", "June") },
        { id: Months.July, label: $tr("ui.common.july", "July") },
        { id: Months.August, label: $tr("ui.common.august", "August") },
        { id: Months.September, label: $tr("ui.common.september", "September") },
        { id: Months.October, label: $tr("ui.common.october", "October") },
        { id: Months.November, label: $tr("ui.common.november", "November") },
        { id: Months.December, label: $tr("ui.common.december", "December") }
      ];
      if (props.useAllMonths) {
        items.unshift({ id: Months.AllMonths, label: $tr("ui.common.all-months", "All months") });
      }
      return items;
    });

    return {
      months
    };
  }
});
</script>