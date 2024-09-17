<template>
  <FSCol
    gap="24px"  
  >
    <FSCol>
      <FSText
        font="text-button"
      >
        {{ $tr("ui.common.selection-reminder", "Selection reminder") }}
      </FSText>
      <FSRow
        align="center-left"
        height="50px"
      >
        <FSSlideGroup
          v-if="$props.modelValue && $props.modelValue.length > 0"
        >
          <FSSimpleEntitiesList
            :entity-type="$props.entityType"
            :filters="simpleListFilters"
            :showEdit="false"
            :showRemove="false"
            direction="row"
          />
        </FSSlideGroup>
        <FSText
          v-else
        >
          {{ $tr("ui.common.no-selection", "No selection") }}
        </FSText>
      </FSRow>
    </FSCol>

    <FSCol>
      <FSText
        font="text-button"
      >
        {{ $tr("ui.common.entities-list", "Entities list") }}
      </FSText>
      <FSBaseEntitiesList
        :entity-type="$props.entityType"
        :tableCode="tableCode"
        :modelValue="$props.modelValue"
        @update:modelValue="$emit('update:modelValue', $event)"
        v-bind="baseTableAttrs"
      />
    </FSCol>
  </FSCol>
</template>

<script lang="ts">
import { defineComponent, type PropType, computed } from "vue";

import { EntityType } from "@dative-gpi/foundation-shared-domain/enums";
import type { DashboardOrganisationFilters, DashboardOrganisationTypeFilters, DeviceOrganisationFilters, FolderFilters, GroupFilters, LocationFilters, ModelFilters, UserOrganisationFilters } from "@dative-gpi/foundation-core-domain/models";

import { TABLES as T } from "../../utils";

import FSSlideGroup from "@dative-gpi/foundation-shared-components/components/FSSlideGroup.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";
import FSText from "@dative-gpi/foundation-shared-components/components/FSText.vue";


import FSSimpleEntitiesList from "./FSSimpleEntitiesList.vue";
import FSBaseEntitiesList from "./FSBaseEntitiesList.vue";

export default defineComponent({
  name: "FSSelectEntitiesList",
  components: {
    FSSimpleEntitiesList,
    FSBaseEntitiesList,
    FSSlideGroup,
    FSCol,
    FSRow,
    FSText
  },
  emits: ["update:modelValue"],
  props: {
    entityType: {
      type: Number as PropType<EntityType>,
      required: true
    },
    modelValue: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => []
    },
    filters: {
      type: Object,
      required: false,
      default: null
    }
  },
  setup(props, { attrs }){
    const simpleListFilters = computed(() => {
      switch(props.entityType) {
        case EntityType.Device:
          return { 
            deviceOrganisationsIds: props.modelValue
          } satisfies DeviceOrganisationFilters;
        case EntityType.Dashboard:
          return {
            dashboardOrganisationsIds: props.modelValue,
            dashboardOrganisationTypesIds: props.modelValue
          } satisfies DashboardOrganisationFilters & DashboardOrganisationTypeFilters;
        case EntityType.Group:
          return {
            groupsIds: props.modelValue
          } satisfies GroupFilters;
        case EntityType.Folder:
          return {
            foldersIds: props.modelValue
          } satisfies FolderFilters;
        case EntityType.Location:
          return {
            locationsIds: props.modelValue
          } satisfies LocationFilters;
        case EntityType.User:
          return {
            userOrganisationsIds: props.modelValue
          } satisfies UserOrganisationFilters;
        case EntityType.Model:
          return {
            modelsIds: props.modelValue
          } satisfies ModelFilters;
        default:
          return undefined;
      };
    })

    const tableCode = computed(() => {
      switch(props.entityType) {
        case EntityType.Device:
          return T.DEVICES_SELECT;
        default:
          return null;
      };
    })

    const baseTableAttrs = computed(() => {
      switch(props.entityType) {
        case EntityType.Device:
          return { 
            deviceOrganisationFilters: props.filters,
            ...attrs
          };
        case EntityType.Dashboard:
          return {
            dashboardShallowsFilters: props.filters,
            dashboardOrganisationsFilters: props.filters,
            dashboardOrganisationTypeFetchFilter: props.filters,
            ...attrs
          };
        case EntityType.Group:
          return {
            groupsFilters: props.filters,
            ...attrs
          };
        case EntityType.Folder:
          return {
            foldersFilters: props.filters,
            ...attrs
          };
        case EntityType.Location:
          return {
            locationsFilters: props.filters,
            ...attrs
          };
        case EntityType.User:
          return {
            userOrganisationsFilters: props.filters,
            ...attrs
          };
        case EntityType.Model:
          return {
            modelsFilters: props.filters,
            ...attrs
          };
        default:
          return null;
      };
    });

    return {
      simpleListFilters,
      baseTableAttrs,
      tableCode
    }
  }
});
</script>