<template>
  <FSDataTable
    :items="scenarioOrganisationTypes"
    :itemTo="$props.itemTo"
    :loading="fetchingScenarioOrganisationTypes"
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
      #item.imageId="{ item }"
    >
      <FSImage
        v-if="item.imageId"
        height="32px"
        width="32px"
        :imageId="item.imageId"
      />
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

import type { ScenarioOrganisationTypeFilters, ScenarioOrganisationTypeInfos } from "@dative-gpi/foundation-core-domain/models";
import { useScenarioOrganisationTypes } from "@dative-gpi/foundation-core-services/composables";

import FSDataTable from "../FSDataTable.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSImage from "@dative-gpi/foundation-shared-components/components/FSImage.vue";
import FSTagGroup from "@dative-gpi/foundation-shared-components/components/FSTagGroup.vue";

export default defineComponent({
  name: "FSBaseScenarioOrganisationTypesList",
  components: {
    FSDataTable,
    FSIcon,
    FSImage,
    FSTagGroup
  },
  props: {
    modelValue: {
      type: Array as PropType<string[]>,
      default: () => [],
      required: false
    },
    scenarioOrganisationTypeFilters: {
      type: Object as PropType<ScenarioOrganisationTypeFilters>,
      required: false,
      default: null
    },
    tableCode: {
      type: String,
      required: true
    },
    itemTo: {
      type: Function as PropType<(item: ScenarioOrganisationTypeInfos) => Partial<RouteLocation>>,
      required: false
    },
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { entities: scenarioOrganisationTypes, fetching: fetchingScenarioOrganisationTypes, getMany: getManyScenarioOrganisationTypes } = useScenarioOrganisationTypes();

    const isSelected = (id: string): boolean => {
      return props.modelValue.includes(id);
    };

    watch(() => props.scenarioOrganisationTypeFilters, (next, previous) => {
      if ((!next && !previous) || !_.isEqual(next, previous)) {
        getManyScenarioOrganisationTypes(props.scenarioOrganisationTypeFilters);
      }
    }, { immediate: true });

    return {
      fetchingScenarioOrganisationTypes,
      scenarioOrganisationTypes,
      isSelected
    };
  }
});
</script>
