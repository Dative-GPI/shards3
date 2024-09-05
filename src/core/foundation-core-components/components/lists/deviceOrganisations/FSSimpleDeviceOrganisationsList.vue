<template>
  <FSSimpleList
    :items="deviceOrganisations"
    :loading="fetching"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { defineComponent, type PropType, watch } from "vue";

import type { DeviceOrganisationFilters } from "@dative-gpi/foundation-core-domain/models";
import { useDeviceOrganisations } from "@dative-gpi/foundation-core-services/composables";

import FSSimpleList from "@dative-gpi/foundation-shared-components/components/lists/FSSimpleList.vue";

export default defineComponent({
  name: "FSSimpleDeviceOrganisationsList",
  components: {
    FSSimpleList,
  },
  props: {
    deviceOrganisationFilters: {
      type: Object as PropType<DeviceOrganisationFilters>,
      required: false,
      default: () => ({})
    }
  },
  setup(props){
    const { entities: deviceOrganisations, getMany, fetching } = useDeviceOrganisations();

    const fetch = () => {
      getMany(props.deviceOrganisationFilters);
    }

    watch(() => props.deviceOrganisationFilters, fetch, { immediate: true });

    return {
      deviceOrganisations,
      fetching
    }
  }
});
</script>