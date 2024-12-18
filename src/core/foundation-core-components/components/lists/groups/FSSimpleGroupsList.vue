<template>
  <FSSimpleList
    :items="groups"
    :loading="fetching"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { defineComponent, type PropType, watch } from "vue";
import _ from "lodash";

import type { GroupFilters } from "@dative-gpi/foundation-core-domain/models";
import { useGroups } from "@dative-gpi/foundation-core-services/composables";

import FSSimpleList from "@dative-gpi/foundation-shared-components/components/lists/FSSimpleList.vue";

export default defineComponent({
  name: "FSSimpleGroupsList",
  components: {
    FSSimpleList,
  },
  props: {
    groupFilters: {
      type: Object as PropType<GroupFilters>,
      required: false,
      default: () => ({})
    }
  },
  setup(props){
    const { entities: groups, getMany, fetching } = useGroups();

    const fetch = () => {
      getMany(props.groupFilters);
    }

    watch(() => props.groupFilters, (newVal, oldVal) => {
      if(!_.isEqual(newVal, oldVal)){
        fetch();
      }
    }, { immediate: true });

    return {
      groups,
      fetching
    }
  }
});
</script>