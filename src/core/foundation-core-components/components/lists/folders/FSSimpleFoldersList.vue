<template>
  <FSSimpleList
    :items="folders"
    :loading="fetching"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { defineComponent, type PropType, watch } from "vue";

import type { FolderFilters } from "@dative-gpi/foundation-core-domain/models";
import { useFolders } from "@dative-gpi/foundation-core-services/composables";

import FSSimpleList from "@dative-gpi/foundation-shared-components/components/lists/FSSimpleList.vue";

export default defineComponent({
  name: "FSSimpleFoldersList",
  components: {
    FSSimpleList,
  },
  props: {
    folderFilters: {
      type: Object as PropType<FolderFilters>,
      required: false,
      default: () => ({})
    }
  },
  setup(props){
    const { entities: folders, getMany, fetching } = useFolders();

    const fetch = () => {
      getMany(props.folderFilters);
    }

    watch(() => props.folderFilters, fetch, { immediate: true });

    return {
      folders,
      fetching
    }
  }
});
</script>