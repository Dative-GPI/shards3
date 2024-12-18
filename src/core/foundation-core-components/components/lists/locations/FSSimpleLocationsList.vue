<template>
  <FSSimpleList
    :items="locations"
    :loading="fetching"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { defineComponent, type PropType, watch } from "vue";
import _ from "lodash";

import type { LocationFilters } from "@dative-gpi/foundation-core-domain/models";
import { useLocations } from "@dative-gpi/foundation-core-services/composables";

import FSSimpleList from "@dative-gpi/foundation-shared-components/components/lists/FSSimpleList.vue";

export default defineComponent({
  name: "FSSimpleLocationsList",
  components: {
    FSSimpleList,
  },
  props: {
    locationFilters: {
      type: Object as PropType<LocationFilters>,
      required: false,
      default: () => ({})
    }
  },
  setup(props){
    const { entities: locations, getMany, fetching } = useLocations();

    const fetch = () => {
      getMany(props.locationFilters);
    }

    watch(() => props.locationFilters, (newVal, oldVal) => {
      if(!_.isEqual(newVal, oldVal)){
        fetch();
      }
    }, { immediate: true });

    return {
      locations,
      fetching
    }
  }
});
</script>