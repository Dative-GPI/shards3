<template>
  <FSDataTable
    :items="scenarioOrganisations"
    :itemTo="$props.itemTo"
    :loading="fetchingScenarioOrganisations"
    :modelValue="$props.modelValue"
    :tableCode="$props.tableCode"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  >
    <template
      v-for="(_, name) in $slots"
      v-slot:[name]="slotData"
    >
      <slot
        :name="name"
        v-bind="slotData"
      />
    </template>

    <template
      #item.icon="{ item }"
    >
      <FSIcon>
        {{ item.icon }}
      </FSIcon>
    </template>

    <template
      #item.tags="{ item }"
    >
      <FSTagGroup
        variant="slide"
        :editable="false"
        :tags="item.tags"
      />
    </template>
  </FSDataTable>
</template>

<script lang="ts">
import { defineComponent, type PropType, watch } from "vue";
import type { RouteLocation } from "vue-router";
import _ from "lodash";

import type { ScenarioOrganisationFilters, ScenarioOrganisationInfos } from "@dative-gpi/foundation-core-domain/models";
import { useScenarioOrganisations } from "@dative-gpi/foundation-core-services/composables";

import FSDataTable from "../FSDataTable.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSTagGroup from "@dative-gpi/foundation-shared-components/components/FSTagGroup.vue";

export default defineComponent({
  name: "FSBaseScenarioOrganisationsList",
  components: {
    FSDataTable,
    FSIcon,
    FSTagGroup
  },
  props: {
    modelValue: {
      type: Array as PropType<string[]>,
      default: () => [],
      required: false
    },
    scenarioOrganisationFilters: {
      type: Object as PropType<ScenarioOrganisationFilters>,
      required: false,
      default: null
    },
    tableCode: {
      type: String,
      required: true
    },
    itemTo: {
      type: Function as PropType<(item: ScenarioOrganisationInfos) => Partial<RouteLocation>>,
      required: false
    },
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { entities: scenarioOrganisations, fetching: fetchingScenarioOrganisations, getMany: getManyScenarioOrganisations } = useScenarioOrganisations();

    const isSelected = (id: string): boolean => {
      return props.modelValue.includes(id);
    };

    watch(() => props.scenarioOrganisationFilters, (next, previous) => {
      if ((!next && !previous) || !_.isEqual(next, previous)) {
        getManyScenarioOrganisations(props.scenarioOrganisationFilters);
      }
    }, { immediate: true });

    return {
      fetchingScenarioOrganisations,
      scenarioOrganisations,
      isSelected
    };
  }
});
</script>
