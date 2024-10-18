<template>
  <FSDataTable
    :items="scenarioOrganisations"
    :itemTo="$props.itemTo"
    :loading="fetchingScenarioOrganisations"
    :showSelect="$props.editable"
    :tableCode="$props.tableCode"
    :modelValue="$props.modelValue"
    :headersOptions="headersOptions"
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
      #item.criticity="{ item }"
    >
      <FSRow
        align="center-left"
      >
        <FSIcon
          :color="AlertTools.criticityColor(item.criticity)"
        >
          {{ AlertTools.criticityIcon(item.criticity) }}
        </FSIcon>
        <FSSpan>
          {{ AlertTools.criticityLabel(item.criticity) }}
        </FSSpan>
      </FSRow>
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
import { computed, defineComponent, type PropType, watch } from "vue";
import type { RouteLocation } from "vue-router";
import _ from "lodash";

import { Criticity } from "@dative-gpi/foundation-shared-domain/enums";
import { getEnumEntries } from "@dative-gpi/foundation-shared-domain/tools";
import { AlertTools } from "@dative-gpi/foundation-shared-components/tools";

import type { ScenarioOrganisationFilters, ScenarioOrganisationInfos } from "@dative-gpi/foundation-core-domain/models";
import { useScenarioOrganisations } from "@dative-gpi/foundation-core-services/composables";

import FSDataTable from "../FSDataTable.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSTagGroup from "@dative-gpi/foundation-shared-components/components/FSTagGroup.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";

export default defineComponent({
  name: "FSBaseScenarioOrganisationsList",
  components: {
    FSDataTable,
    FSTagGroup,
    FSIcon,
    FSRow
  },
  props: {
    tableCode: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    scenarioOrganisationFilters: {
      type: Object as PropType<ScenarioOrganisationFilters>,
      required: false,
      default: null
    },
    itemTo: {
      type: Function as PropType<(item: ScenarioOrganisationInfos) => Partial<RouteLocation>>,
      required: false
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    },
    modelValue: {
      type: Array as PropType<string[]>,
      default: () => [],
      required: false
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { entities: scenarioOrganisations, fetching: fetchingScenarioOrganisations, getMany: getManyScenarioOrganisations } = useScenarioOrganisations();


    const headersOptions = computed(() => ({
      criticity: {
        fixedFilters: getEnumEntries(Criticity).filter(f => f.value != Criticity.None).map(e => ({
          value: e.value,
          text: AlertTools.criticityLabel(e.value)
        })),
        methodFilter: (value: Criticity, item: Criticity) => value == item
      }
    }));

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
      headersOptions,
      AlertTools,
      isSelected
    };
  }
});
</script>
