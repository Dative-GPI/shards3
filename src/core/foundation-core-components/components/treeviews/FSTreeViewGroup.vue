<template>
  <FSTreeViewField
    :multiple="$props.multiple"
    :loading="fetchingGroups"
    :items="groups"
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
import { defineComponent, PropType } from "vue";

import { useTreeView } from "@dative-gpi/foundation-shared-components/composables";
import { useGroups } from "@dative-gpi/foundation-core-services/composables";
import { GroupFilters } from "@dative-gpi/foundation-core-domain/models";

import FSTreeViewField from "@dative-gpi/foundation-shared-components/components/fields/FSTreeViewField.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";

export default defineComponent({
  name: "FSTreeViewGroup",
  components: {
    FSTreeViewField,
    FSIcon
  },
  props: {
    groupFilters: {
      type: Object as PropType<GroupFilters>,
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
    const { getMany: getManyGroups, fetching: fetchingGroups, entities: groups } = useGroups();

    const innerFetch = () => {
      return getManyGroups({ ...props.groupFilters });
    };

    const { onUpdate } = useTreeView(
      groups,
      [() => props.groupFilters],
      emit,
      innerFetch
    );

    return {
      fetchingGroups,
      groups,
      onUpdate
    };
  }
});
</script>