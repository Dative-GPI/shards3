<template>
  <FSDataTable
    :loading="fetchingScenarioOrganisationTypes || fetchingScenarioOrganisations"
    :headers="headers"
    :items="scenarios"
    :tableCode="$props.tableCode"
    :modelValue="$props.modelValue"
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
import { defineComponent, type PropType, watch, computed } from "vue";
import _ from "lodash";

import { useTranslations } from "@dative-gpi/bones-ui";

import {ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import type { ScenarioOrganisationFilters, ScenarioOrganisationTypeFilters } from "@dative-gpi/foundation-core-domain/models";

import { useScenarioOrganisations, useScenarioOrganisationTypes } from "@dative-gpi/foundation-core-services/composables";

import FSDataTable from "../FSDataTable.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSTagGroup from "@dative-gpi/foundation-shared-components/components/FSTagGroup.vue";

export default defineComponent({
  name: "FSBaseScenariosList",
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
    scenarioOrganisationTypeFilters: {
      type: Object as PropType<ScenarioOrganisationTypeFilters>,
      required: false,
      default: null
    },
    tableCode: {
      type: String,
      required: true
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { $tr } = useTranslations();
    const { entities: scenarioOrganisations, fetching: fetchingScenarioOrganisations, getMany: getManyScenarioOrganisations } = useScenarioOrganisations();
    const { entities: scenarioOrganisationTypes, fetching: fetchingScenarioOrganisationTypes, getMany: getManyScenarioOrganisationTypes } = useScenarioOrganisationTypes();

    const isSelected = (value : string): boolean => {
      return props.modelValue.includes(value);
    };

    const headers = computed(() => {
      return [
        {
          text: $tr("entity.scenario.icon", "Icon"),
          value: "icon",
          sortable: false,
        },
        {
          text: $tr("entity.scenario.label", "Label"),
          value: "label",
          sortable: true
        },
        {
          text: $tr("entity.scenario.modelLabel", "Model label"),
          value: "modelLabel",
          sortable: true
        },
        {
          text: $tr("entity.scenario.dataCategoryLabel", "Data category label"),
          value: "dataCategoryLabel",
          sortable: true
        },
        {
          text: $tr("ui.common.action", ""),
          value: "action",
          sortable: false
        }
      ];
    });

    
    const scenarios = computed(() => {
      return scenarioOrganisations.value.map(c => {
        return {
          id: `${c.id}_${c.scope}`,
          modelId: c.modelId,
          dataCategoryId : c.dataCategoryId,
          dataCategoryLabel: c.dataCategoryLabel,
          scenarioId: c.scenarioId,
          scope: c.scope,
          label: c.label,
          modelLabel: c.modelLabel,
          code: c.code,
          icon: c.icon,
          tags: c.tags,
          criticity: c.criticity,
          parameters: c.parameters
        }
      })
        .concat(scenarioOrganisationTypes.value.map(c => {
          return {
            id: `${c.id}_${c.scope}`,
            modelId: c.modelId,
            dataCategoryId : c.dataCategoryId,
            dataCategoryLabel: c.dataCategoryLabel,
            scenarioId: c.scenarioId,
            scope: c.scope,
            label: c.label,
            modelLabel: c.modelLabel,
            code: c.code,
            icon: c.icon,
            tags: c.tags,
            criticity: c.criticity,
            parameters: c.parameters
          }
        }))
    })

    const fetch = () =>{
      getManyScenarioOrganisations(props.scenarioOrganisationFilters);
      getManyScenarioOrganisationTypes(props.scenarioOrganisationTypeFilters)
    }

    const update = (value : string) =>
    {
      const item = isSelected(value);

      if(item){
        emit("update:modelValue", props.modelValue.filter(m => m != value))
      }
      else{
        emit("update:modelValue", [...props.modelValue, value])
      }
    }
 
    watch(() => [props.scenarioOrganisationFilters,props.scenarioOrganisationTypeFilters], (next, previous) => {
      if ((!next && !previous) || !_.isEqual(next, previous)) {
        fetch();
      }
    }, { immediate: true });
    

    return {
      fetchingScenarioOrganisationTypes,
      fetchingScenarioOrganisations,
      scenarioOrganisationTypes,
      scenarioOrganisations,
      ColorEnum,
      scenarios,
      headers,
      isSelected,
      update
    };
  }
});
</script>
