<template>
  <FSSelectField
    :clearable="false"
    :items="days"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import type { PropType} from "vue";
import { computed, defineComponent } from "vue";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import { Days } from "@dative-gpi/foundation-shared-domain/enums";

import FSSelectField from "../fields/FSSelectField.vue";

export default defineComponent({
  name: "FSSelectDays",
  components: {
    FSSelectField
  },
  props: {
    modelValue: {
      type: Number as PropType<Days>,
      required: false,
      default: Days.Monday
    },
    useAllDays: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { $tr } = useTranslationsProvider();

    const days = computed((): { id: Days; label: string }[] => {
      const items = [
        { id: Days.Monday, label: $tr("ui.common.monday", "Monday") },
        { id: Days.Tuesday, label: $tr("ui.common.tuesday", "Tuesday") },
        { id: Days.Wednesday, label: $tr("ui.common.wednesday", "Wednesday") },
        { id: Days.Thursday, label: $tr("ui.common.thursday", "Thursday") },
        { id: Days.Friday, label: $tr("ui.common.friday", "Friday") },
        { id: Days.Saturday, label: $tr("ui.common.saturday", "Saturday") },
        { id: Days.Sunday, label: $tr("ui.common.sunday", "Sunday") }
      ];
      if (props.useAllDays) {
        items.unshift({ id: Days.AllDays, label: $tr("ui.common.all-days", "All days") });
      }
      return items;
    });

    return {
      days
    };
  }
});
</script>