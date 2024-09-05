<template>
  <FSDataTable
    :loading="fetchingGroups"
    :items="groups"
    :tableCode="$props.tableCode"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  >
    <template
      v-for="(_, name) in $slots"
      v-slot:[name]="slotData"
    >
      <slot
        :name="name"
        v-bind="slotData"
      />
    </template>
    <template
      #item.imageId="{ item }"
    >
      <FSImage
        v-if="item.imageId"
        height="38px"
        width="38px"
        :imageId="item.imageId"
      />
    </template>
    <template
      #item.icon="{ item }"
    >
      <FSIcon>
        {{ item.icon }}
      </FSIcon>
    </template>
    <template
      #item.tags="{ item }"
    >
      <FSTagGroup
        variant="slide"
        :editable="false"
        :tags="item.tags"
      />
    </template>
    <template
      #item.tile="{ item, toggleSelect }"
    >
      <FSGroupTileUI
        :modelValue="isSelected(item.id)"
        @update:modelValue="toggleSelect(item)"
        v-bind="item"
      />
    </template>
  </FSDataTable>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import type { PropType} from "vue";
import _ from "lodash";

import type { GroupFilters } from "@dative-gpi/foundation-core-domain/models";
import { useGroups } from "@dative-gpi/foundation-core-services/composables";

import FSDataTable from "../FSDataTable.vue";

import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSImage from "@dative-gpi/foundation-shared-components/components/FSImage.vue";
import FSTagGroup from "@dative-gpi/foundation-shared-components/components/FSTagGroup.vue";
import FSGroupTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSGroupTileUI.vue";


export default defineComponent({
  name: "FSBaseGroupsList",
  components: {
    FSDataTable,
    FSImage,
    FSIcon,
    FSGroupTileUI,
    FSTagGroup
  },
  props: {
    groupsFilters: {
      type: Object as PropType<GroupFilters>,
      required: false,
      default: null
    },
    modelValue: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => []
    },
    tableCode: {
      type: String,
      required: true
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { getMany: fetchGroups, fetching: fetchingGroups, entities: groups } = useGroups();

    const isSelected = (id: string) => {
      return props.modelValue.includes(id);
    };

    watch(() => props.groupsFilters, (next, previous) => {
      if ((!next && !previous) || !_.isEqual(next, previous)) {
        fetchGroups(props.groupsFilters);
      }
    }, { immediate: true });

    return {
      fetchingGroups,
      groups,
      isSelected
    };
  }
});
</script>