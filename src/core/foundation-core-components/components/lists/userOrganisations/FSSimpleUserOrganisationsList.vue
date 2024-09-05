<template>
  <FSSimpleList
    :items="userOrganisations"
    :loading="fetching"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { defineComponent, type PropType, watch } from "vue";

import type { UserOrganisationFilters } from "@dative-gpi/foundation-core-domain/models";
import { useUserOrganisations } from "@dative-gpi/foundation-core-services/composables";

import FSSimpleList from "@dative-gpi/foundation-shared-components/components/lists/FSSimpleList.vue";

export default defineComponent({
  name: "FSSimpleUserOrganisationsList",
  components: {
    FSSimpleList,
  },
  props: {
    userOrganisationFilters: {
      type: Object as PropType<UserOrganisationFilters>,
      required: false,
      default: () => ({})
    }
  },
  setup(props){
    const { entities: userOrganisations, getMany, fetching } = useUserOrganisations();

    const fetch = () => {
      getMany(props.userOrganisationFilters);
    }

    watch(() => props.userOrganisationFilters, fetch, { immediate: true });

    return {
      userOrganisations,
      fetching
    }
  }
});
</script>