<template>
  <FSTreeViewField
    :multiple="$props.multiple"
    :loading="fetchingFolders"
    :items="folders"
    :modelValue="$props.modelValue"
    @update:modelValue="onUpdate"
    v-bind="$attrs"
  >
    <template
      #menu-prepend="{ item }"
    >
      <FSIcon
        v-if="item.icon"
      >
        {{ item.icon }}
      </FSIcon>
    </template>
  </FSTreeViewField>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { type FolderFilters, type FolderInfos } from "@dative-gpi/foundation-core-domain/models";
import { useTreeView } from "@dative-gpi/foundation-shared-components/composables";
import { useFolders } from "@dative-gpi/foundation-core-services/composables";

import FSTreeViewField from "@dative-gpi/foundation-shared-components/components/fields/FSTreeViewField.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";

export default defineComponent({
  name: "FSTreeViewFolder",
  components: {
    FSTreeViewField,
    FSIcon
  },
  props: {
    folderFilters: {
      type: Object as PropType<FolderFilters>,
      required: false,
      default: null
    },
    exclude: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    modelValue: {
      type: [Array, String] as PropType<string[] | string | null>,
      required: false,
      default: null
    },
    multiple: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { getMany: getManyFolders, fetching: fetchingFolders, entities } = useFolders();

    const folders = computed((): FolderInfos[] => {
      if (!props.exclude) {
        return entities.value;
      }
      return entities.value.filter(g => g.id !== props.exclude && !g.path.some(p => p.id === props.exclude));
    });

    const fetch = () => {
      return getManyFolders({ ...props.folderFilters });
    };

    const { onUpdate } = useTreeView(
      folders,
      [() => props.folderFilters],
      emit,
      fetch
    );

    return {
      fetchingFolders,
      folders,
      onUpdate
    };
  }
});
</script>