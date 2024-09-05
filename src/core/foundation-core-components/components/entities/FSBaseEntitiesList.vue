<template>
  <component 
    :is="component"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, type PropType, computed } from "vue";

import { EntityType } from "@dative-gpi/foundation-shared-domain/enums";

export default defineComponent({
  name: "FSBaseEntitiesList",
  components: {
  },
  props: {
    entityType: {
      type: Number as PropType<EntityType>,
      required: true
    }
  },
  setup(props) {
    const component = computed(() => {
      switch(props.entityType) {
        case EntityType.Device:
          return defineAsyncComponent(() => import("../lists/deviceOrganisations/FSBaseDeviceOrganisationsList.vue"));
        case EntityType.Dashboard:
          return defineAsyncComponent(() => import("../lists/dashboards/FSBaseDashboardsList.vue"));
        case EntityType.Folder:
          return defineAsyncComponent(() => import("../lists/folders/FSBaseFoldersList.vue"));
        case EntityType.User:
          return defineAsyncComponent(() => import("../lists/userOrganisations/FSBaseUserOrganisationsList.vue"));
        case EntityType.Group:
          return defineAsyncComponent(() => import("../lists/groups/FSBaseGroupsList.vue"));
        case EntityType.Location:
          return defineAsyncComponent(() => import("../lists/locations/FSBaseLocationsList.vue"));
        // case EntityType.Model:
        //   return defineAsyncComponent(() => import("../lists/models/FSBaseModelsList.vue"));
        default:
          return null;
      };
    });

    return {
      component,
    }
  }
});
</script>