<template>
  <FSCol
    gap="24px"
  >
    <FSRow>
      <FSButton
        prependIcon="mdi-vector-link"
        borderRadius="999px"
        :border="false"
        :color="ColorEnum.Primary"
        :label="$tr('page.scenarios.my-scenarios', 'My scenarios')"
        :variant="scopeFilter == ApplicationScope.Organisation ? 'full' : 'standard'"
        @click="setScope(ApplicationScope.Organisation)"
      />
      <FSButton
        prepend-icon="mdi-share-variant-outline"
        borderRadius="999px"
        :border="false"
        :color="ColorEnum.Primary"
        :label="$tr('page.scenarios.shared-scenarios', 'Shared scenarios')"
        :variant="scopeFilter == ApplicationScope.OrganisationType ? 'full' : 'standard'"
        @click="setScope(ApplicationScope.OrganisationType)"
      />
    </FSRow>
    <FSDataTable
      :loading="fetchingScenarioOrganisationTypes || fetchingScenarioOrganisations"
      :headers="headers"
      :items="scenarios"
      :itemTo="routerLink"
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
  </FSCol>
  
</template>

<script lang="ts">
import { defineComponent, type PropType, watch, computed, onMounted, ref } from "vue";
import _ from "lodash";

import { useTranslations } from "@dative-gpi/bones-ui";

import { Criticity, ApplicationScope } from "@dative-gpi/foundation-shared-domain/enums";
import { getEnumEntries } from "@dative-gpi/foundation-shared-domain/tools";
import { ColorEnum, type FSDataTableColumn } from "@dative-gpi/foundation-shared-components/models";
import { AlertTools } from "@dative-gpi/foundation-shared-components/tools"

import type { ScenarioOrganisationFilters, ScenarioOrganisationTypeFilters } from "@dative-gpi/foundation-core-domain/models";
import { useScenarioOrganisations, useScenarioOrganisationTypes, useRouteOrganisation, useUserOrganisationTable } from "@dative-gpi/foundation-core-services/composables";

import FSDataTable from "../FSDataTable.vue";
import FSTagGroup from "@dative-gpi/foundation-shared-components/components/FSTagGroup.vue";
import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";

export default defineComponent({
  name: "FSBaseScenariosList",
  components:{
    FSDataTable,
    FSTagGroup,
    FSButton,
    FSIcon   
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
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { $tr } = useTranslations();
    const {get : getTable, entity : table } = useUserOrganisationTable();
    const { entities: scenarioOrganisations, fetching: fetchingScenarioOrganisations, getMany: getManyScenarioOrganisations } = useScenarioOrganisations();
    const { entities: scenarioOrganisationTypes, fetching: fetchingScenarioOrganisationTypes, getMany: getManyScenarioOrganisationTypes } = useScenarioOrganisationTypes();

    const { $r } = useRouteOrganisation();

    const scopeFilter = ref<ApplicationScope>(ApplicationScope.None);

    const headers = computed(() => {
      let h = table.value?.columns as FSDataTableColumn[];
      if (h) {
        if(props.showAssociation){
          h.push({
            columnId: "action",
            text: $tr("ui.common.action", ""),
            value: "action",
            sortable: false,
            filterable: false,
            index: -1,
            hidden: false
          });
        }
        const headerCriticty = h.find(h => h.value == "criticity");

        if(!headerCriticty){
          return h;
        }

        h = h.filter(h => h.value != "criticity");
        h.push({
          ...headerCriticty, 
          fixedFilters: getEnumEntries(Criticity).filter(f => f.value != Criticity.None).map(e => ({
            value: e.value,
            text: AlertTools.criticityLabel(e.value)
          })),
          methodFilter: (value: Criticity, item: Criticity) => value == item
        });
        return h;
      }
      else{
        return  []
      }
    });
    
    const scenarios = computed(() => {
      if(scopeFilter.value == ApplicationScope.Organisation){
        return scenarioOrganisations.value
      }
      else if(scopeFilter.value == ApplicationScope.OrganisationType){
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
      if(item.scope == ApplicationScope.OrganisationType)
      {return $r({ name: "scenario-organisation-type", params: { entityId: item.id } });}
      else
      {
        return $r({ name: "scenario-organisation", params: { entityId: item.id } });
      }
    };

    const fetch = () =>{
      if(scopeFilter.value == ApplicationScope.OrganisationType){
        getManyScenarioOrganisationTypes(props.scenarioOrganisationTypeFilters)
      }
      else if(scopeFilter.value == ApplicationScope.Organisation){
        getManyScenarioOrganisations(props.scenarioOrganisationFilters);
      }
      else{
        getManyScenarioOrganisations(props.scenarioOrganisationFilters);
        getManyScenarioOrganisationTypes(props.scenarioOrganisationTypeFilters)
      }
    }

    const setScope = (scope: ApplicationScope) => {
      if(scopeFilter.value != scope){
        scopeFilter.value = scope;
      }
      else{
        scopeFilter.value = ApplicationScope.None;
      }
    }

    onMounted(() => {
      if(props.tableCode){
        getTable(props.tableCode);
      }
    });

 
    watch(() => [props.scenarioOrganisationFilters,props.scenarioOrganisationTypeFilters, scopeFilter.value], (next, previous) => {
      if ((!next && !previous) || !_.isEqual(next, previous)) {
        fetch();
      }
    }, { immediate: true });


    return {
      fetchingScenarioOrganisationTypes,
      fetchingScenarioOrganisations,
      scenarioOrganisationTypes,
      scenarioOrganisations,
      ApplicationScope,
      scopeFilter,
      AlertTools,
      ColorEnum,
      scenarios,
      headers,
      routerLink,
      setScope
    };
  }
});
</script>
