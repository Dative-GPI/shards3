<template>
  <FSSelectField
    :items="dashboardVariableTypes"
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
import { DashboardVariableType } from "@dative-gpi/foundation-shared-domain/models";

import FSSelectField from "../fields/FSSelectField.vue";

export default defineComponent({
  name: "FSSelectDashboardVariableType",
  components: {
    FSSelectField
  },
  props: {
    modelValue: {
      type: Number as PropType<DashboardVariableType>,
      required: false,
      default: DashboardVariableType.Number
    }
  },
  emits: ["update:modelValue"],
  setup() {
    const { $tr } = useTranslationsProvider();

    const dashboardVariableTypes = computed((): { id: DashboardVariableType; label: string }[] => ([
      { id: DashboardVariableType.Number, label: $tr("ui.dashboard-variable-type.number", "Number") },
      { id: DashboardVariableType.String, label: $tr("ui.dashboard-variable-type.string", "String") },
      { id: DashboardVariableType.TimeStep, label: $tr("ui.dashboard-variable-type.time-step", "Time step") }
    ]));

    return {
      dashboardVariableTypes
    };
  }
});
</script>