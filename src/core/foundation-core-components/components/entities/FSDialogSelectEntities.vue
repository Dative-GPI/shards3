<template>
  <FSDialogSubmit
    :title="$tr('ui.common.select-entities', 'Select entities')"
    width="1130px"
    :model-value="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    @click:submit-button="onSubmit"
  >
    <template
      #body
    >
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
              v-if="actualSelecteds.length > 0"
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
            v-model="actualSelecteds"
            v-bind="baseTableAttrs"
          />
        </FSCol>
      </FSCol>
    </template>
  </FSDialogSubmit>
</template>

<script lang="ts">
import { defineComponent, type PropType, computed, ref, watch } from "vue";

import { EntityType } from "@dative-gpi/foundation-shared-domain/enums";
import type { DashboardOrganisationFilters, DashboardOrganisationTypeFilters, DeviceOrganisationFilters, FolderFilters, GroupFilters, LocationFilters, ModelFilters, UserOrganisationFilters } from "@dative-gpi/foundation-core-domain/models";

import { TABLES as T } from "../../utils";

import FSSlideGroup from "@dative-gpi/foundation-shared-components/components/FSSlideGroup.vue";
import FSDialogSubmit from "@dative-gpi/foundation-shared-components/components/FSDialogSubmit.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";
import FSText from "@dative-gpi/foundation-shared-components/components/FSText.vue";


import FSSimpleEntitiesList from "./FSSimpleEntitiesList.vue";
import FSBaseEntitiesList from "./FSBaseEntitiesList.vue";

export default defineComponent({
  name: "FSDialogSelectEntities",
  components: {
    FSSimpleEntitiesList,
    FSBaseEntitiesList,
    FSSlideGroup,
    FSDialogSubmit,
    FSCol,
    FSRow,
    FSText
  },
  emits: ["update:modelValue", "update:selecteds"],
  props: {
    entityType: {
      type: Number as PropType<EntityType>,
      required: true
    },
    selecteds: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => []
    },
    filters: {
      type: Object,
      required: false,
      default: null
    },
    modelValue: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(props, { attrs, emit }){
    const actualSelecteds = ref<string[]>([]);

    const simpleListFilters = computed(() => {
      switch(props.entityType) {
        case EntityType.Device:
          return { 
            deviceOrganisationsIds: actualSelecteds.value
          } satisfies DeviceOrganisationFilters;
        case EntityType.Dashboard:
          return {
            dashboardOrganisationsIds: actualSelecteds.value,
            dashboardOrganisationTypesIds: actualSelecteds.value
          } satisfies DashboardOrganisationFilters & DashboardOrganisationTypeFilters;
        case EntityType.Group:
          return {
            groupsIds: actualSelecteds.value
          } satisfies GroupFilters;
        case EntityType.Folder:
          return {
            foldersIds: actualSelecteds.value
          } satisfies FolderFilters;
        case EntityType.Location:
          return {
            locationsIds: actualSelecteds.value
          } satisfies LocationFilters;
        case EntityType.User:
          return {
            userOrganisationsIds: actualSelecteds.value
          } satisfies UserOrganisationFilters;
        case EntityType.Model:
          return {
            modelsIds: actualSelecteds.value
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

    const onSubmit = () => {
      emit("update:selecteds", actualSelecteds.value);
      emit("update:modelValue", false);
    }

    watch(() => props.selecteds, (value) => {
      actualSelecteds.value = value;
    }, { immediate: true });

    return {
      onSubmit,
      actualSelecteds,
      simpleListFilters,
      baseTableAttrs,
      tableCode
    }
  }
});
</script>