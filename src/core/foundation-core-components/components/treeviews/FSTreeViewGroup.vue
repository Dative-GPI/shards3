<template>
  <FSTreeViewField
    :label="$props.label ?? $tr('ui.common.group', 'Group')"
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
import { computed, defineComponent, type PropType } from "vue";

import { type GroupFilters, type GroupInfos } from "@dative-gpi/foundation-core-domain/models";
import { useTreeView } from "@dative-gpi/foundation-shared-components/composables";
import { useGroups } from "@dative-gpi/foundation-core-services/composables";

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
    },
    label: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    } 
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { getMany: getManyGroups, fetching: fetchingGroups, entities } = useGroups();

    const groups = computed((): GroupInfos[] => {
      if (!props.exclude) {
        return entities.value;
      }
      return entities.value.filter(g => g.id !== props.exclude && !g.path.some(p => p.id === props.exclude));
    });

    const fetch = () => {
      return getManyGroups({ ...props.groupFilters });
    };

    const { onUpdate } = useTreeView(
      groups,
      [() => props.groupFilters],
      emit,
      fetch
    );

    return {
      fetchingGroups,
      groups,
      onUpdate
    };
  }
});
</script>