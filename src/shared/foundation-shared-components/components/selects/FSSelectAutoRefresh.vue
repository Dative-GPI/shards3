<template>
  <FSSelectField
    :items="autoRefreshes"
    :clearable="false"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import type { PropType} from "vue";
import { computed, defineComponent } from "vue";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import { AutoRefresh } from "@dative-gpi/foundation-shared-domain/enums";

import FSSelectField from "../fields/FSSelectField.vue";

export default defineComponent({
  name: "FSSelectAutoRefresh",
  components: {
    FSSelectField
  },
  props: {
    modelValue: {
      type: Number as PropType<AutoRefresh>,
      required: false,
      default: AutoRefresh.FifteenSeconds
    },
    useNone: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { $tr } = useTranslationsProvider();

    const autoRefreshes = computed((): { id: AutoRefresh; label: string }[] => {
      const items = [
        { id: AutoRefresh.FifteenSeconds, label: $tr("ui.auto-refresh.fifteen-seconds", "Fifteen seconds") },
        { id: AutoRefresh.ThirtySeconds, label: $tr("ui.auto-refresh.thirty-seconds", "Thirty seconds") },
        { id: AutoRefresh.OneMinute, label: $tr("ui.auto-refresh.one-minute", "One minute") },
        { id: AutoRefresh.FiveMinutes, label: $tr("ui.auto-refresh.five-minutes", "Five minutes") },
        { id: AutoRefresh.FifteenMinutes, label: $tr("ui.auto-refresh.fifteen-minutes", "Fifteen minutes") },
        { id: AutoRefresh.ThirtyMinutes, label: $tr("ui.auto-refresh.thirty-minutes", "Thirty minutes") },
        { id: AutoRefresh.OneHour, label: $tr("ui.auto-refresh.one-hour", "One hour") },
      ];
      if (props.useNone) {
        items.unshift({ id: AutoRefresh.None, label: $tr("ui.auto-refresh.none", "None") });
      }
      return items;
    });

    return {
      autoRefreshes
    };
  }
});
</script>