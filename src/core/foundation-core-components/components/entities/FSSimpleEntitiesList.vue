<template>
  <component 
    :is="component"
    v-bind="componentProps"
  />
</template>


<script lang="ts">
import { defineComponent, defineAsyncComponent, type PropType, computed } from "vue";

import { EntityType } from "@dative-gpi/foundation-shared-domain/enums";

export default defineComponent({
  name: "FSSimpleEntitiesList",
  components: {
  },
  props: {
    entityType: {
      type: Number as PropType<EntityType>,
      required: true
    },
    filters: {
      type: Object,
      required: false,
      default: null
    }
  },
  setup(props, { attrs }) {
    const component = computed(() => {
      switch(props.entityType) {
        case EntityType.Device:
          return defineAsyncComponent(() => import("../lists/deviceOrganisations/FSSimpleDeviceOrganisationsList.vue"));
        case EntityType.Dashboard:
          return defineAsyncComponent(() => import("../lists/dashboards/FSSimpleDashboardsList.vue"));
        case EntityType.Folder:
          return defineAsyncComponent(() => import("../lists/folders/FSSimpleFoldersList.vue"));
        case EntityType.User:
          return defineAsyncComponent(() => import("../lists/userOrganisations/FSSimpleUserOrganisationsList.vue"));
        case EntityType.Group:
          return defineAsyncComponent(() => import("../lists/groups/FSSimpleGroupsList.vue"));
        case EntityType.Location:
          return defineAsyncComponent(() => import("../lists/locations/FSSimpleLocationsList.vue"));
        case EntityType.Model:
          return defineAsyncComponent(() => import("../lists/models/FSSimpleModelsList.vue"));
        default:
          return null;
      };
    });

    const componentProps = computed(() => {
      switch(props.entityType) {
        case EntityType.Device:
          return {
            ...attrs,
            deviceOrganisationFilters : props.filters
          };
        case EntityType.Dashboard:
          return {
            ...attrs,
            dashboardOrganisationFilters : props.filters,
            dashboardOrganisationTypeFilters : props.filters
          };
        case EntityType.Folder:
          return {
            ...attrs,
            folderFilters : props.filters
          };
        case EntityType.User:
          return {
            ...attrs,
            userFilters : props.filters
          };
        case EntityType.Group:
          return {
            ...attrs,
            groupFilters : props.filters
          };
        case EntityType.Location:
          return {
            ...attrs,
            locationFilters : props.filters
          };
        case EntityType.Model:
          return {
            ...attrs,
            modelFilters : props.filters
          };
        default:
          return null;
      }
    });

    return {
      component,
      componentProps
    }
  }
});
</script>