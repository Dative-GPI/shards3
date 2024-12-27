<template>
  <FSDataTable
    :loading="fetchingScenarioOrganisationTypes || fetchingScenarioOrganisations"
    :headersOptions="headersOptions"
    :extraHeaders="headerAssociation"
    :items="scenarios"
    :itemTo="routerLink"
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
import { defineComponent, type PropType, watch, computed } from "vue";
import _ from "lodash";

import { useTranslations } from "@dative-gpi/bones-ui";

import { Criticity, ApplicationScope } from "@dative-gpi/foundation-shared-domain/enums";
import { getEnumEntries } from "@dative-gpi/foundation-shared-domain/tools";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { AlertTools } from "@dative-gpi/foundation-shared-components/tools"

import type { ScenarioOrganisationFilters, ScenarioOrganisationTypeFilters } from "@dative-gpi/foundation-core-domain/models";
import { useScenarioOrganisations, useScenarioOrganisationTypes, useRouteOrganisation } from "@dative-gpi/foundation-core-services/composables";

import FSDataTable from "../FSDataTable.vue";
import FSTagGroup from "@dative-gpi/foundation-shared-components/components/FSTagGroup.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";

export default defineComponent({
  name: "FSBaseScenariosList",
  components:{
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
    showAssociation: {
      type: Boolean,
      required: false,
      default: true
    },
    scope: {
      type: Number as PropType<ApplicationScope>,
      required: false,
      default: ApplicationScope.None
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { $tr } = useTranslations();
    const { entities: scenarioOrganisations, fetching: fetchingScenarioOrganisations, getMany: getManyScenarioOrganisations } = useScenarioOrganisations();
    const { entities: scenarioOrganisationTypes, fetching: fetchingScenarioOrganisationTypes, getMany: getManyScenarioOrganisationTypes } = useScenarioOrganisationTypes();

    const { $r } = useRouteOrganisation();

    const headerAssociation = computed(() => {
      if(props.showAssociation){
        return [{
          columnId: "association",
          text: $tr("ui.common.association", "Association"),
          value: "association",
          sortable: false,
          filterable: false,
          index: -1,
          hidden: false
        }];
      }
    });

    const headersOptions = computed(() => ({
      criticity: {
        fixedFilters: getEnumEntries(Criticity).map(e => ({
          value: e.value,
          text: AlertTools.criticityLabel(e.value)
        })),
        methodFilter: (value: Criticity, item: Criticity) => value == item
      }
    }));
    
    const scenarios = computed(() => {
      if(props.scope == ApplicationScope.Organisation){
        return scenarioOrganisations.value
      }
      else if(props.scope == ApplicationScope.OrganisationType){
        return scenarioOrganisationTypes.value
      }
      else{
        return scenarioOrganisations.value.map(c => {
          return {
            id: c.id,
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
              id: c.id,
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
          }));
      }
    });

    const routerLink = (item: any) => {
      if(item.scope == ApplicationScope.OrganisationType){
        return $r({ name: "scenario-organisation-type", params: { entityId: item.id } });
      }
      else
      {
        return $r({ name: "scenario-organisation", params: { entityId: item.id } });
      }
    };

    const fetch = () =>{
      if(props.scope == ApplicationScope.OrganisationType){
        getManyScenarioOrganisationTypes(props.scenarioOrganisationTypeFilters)
      }
      else if(props.scope == ApplicationScope.Organisation){
        getManyScenarioOrganisations(props.scenarioOrganisationFilters);
      }
      else{
        getManyScenarioOrganisations(props.scenarioOrganisationFilters);
        getManyScenarioOrganisationTypes(props.scenarioOrganisationTypeFilters)
      }
    }

    watch(() => [props.scenarioOrganisationFilters,props.scenarioOrganisationTypeFilters, props.scope], (next, previous) => {
      if ((!next && !previous) || !_.isEqual(next, previous)) {
        fetch();
      }
    }, { immediate: true });


    return {
      fetchingScenarioOrganisationTypes,
      fetchingScenarioOrganisations,
      scenarioOrganisationTypes,
      scenarioOrganisations,
      headerAssociation,
      ApplicationScope,
      headersOptions,
      AlertTools,
      ColorEnum,
      scenarios,
      routerLink
    };
  }
});
</script>
