<template>
  <FSDialogSubmit>
    <component 
      :is="component"
      v-bind="$attrs"
    />
  </FSDialogSubmit>
</template>


<script lang="ts">

import { defineComponent, defineAsyncComponent, type PropType, computed } from "vue";

import { EntityType } from "@dative-gpi/foundation-shared-domain/enums";

import FSDialogSubmit from "@dative-gpi/foundation-shared-components/components/FSDialogSubmit.vue";

export default defineComponent({
  name: "FSSimpleEntitiesList",
  components: {
    FSDialogSubmit
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
          return defineAsyncComponent(() => import("../lists/devices/FSSimpleDeviceOrganisationsList.vue"));
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