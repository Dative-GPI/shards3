<template>
  <FSDataTable
    defaultMode="iterator"
    :items="folders"
    :itemTo="$props.itemTo"
    :loading="fetchingFolders"
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
      <FSFolderTileUI
        :bottomColor="item.colors"
        v-bind="item"
        :modelValue="isSelected(item.id)"
        @update:modelValue="toggleSelect(item)"
        :to="$props.itemTo && $props.itemTo(item)"
      />
    </template>
  </FSDataTable>
</template>

<script lang="ts">
import _ from "lodash";
import type { RouteLocation } from "vue-router";
import { defineComponent, type PropType, watch } from "vue";

import { useFolders } from "@dative-gpi/foundation-core-services/composables";

import { DashboardType } from "@dative-gpi/foundation-shared-domain/enums";
import { FoldersListType } from "@dative-gpi/foundation-core-components/utils";
import type { FolderFilters, DashboardInfos } from "@dative-gpi/foundation-core-domain/models";

import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSTagGroup from "@dative-gpi/foundation-shared-components/components/FSTagGroup.vue";
import FSFolderTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSFolderTileUI.vue";

import FSDataTable from "../FSDataTable.vue";

export default defineComponent({
  name: "FSBaseFoldersList",
  components: {
    FSFolderTileUI,
    FSDataTable,
    FSTagGroup,
    FSIcon
  },
  props: {
    tableCode: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    foldersFilters: {
      type: Object as PropType<FolderFilters>,
      default: undefined,
      required: false
    },
    itemTo: {
      type: Function as PropType<(item: DashboardInfos) => Partial<RouteLocation>>,
      required: false
    },
    modelValue: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => []
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { entities: folders, fetching: fetchingFolders, getMany: getManyFolders } = useFolders();

    const onSelect = (values: string[]) => {
      emit("update:modelValue", values);
    };

    const isSelected = (id: string) => {
      return props.modelValue?.includes(id);
    };
    
    watch(() => props.foldersFilters, (next, previous) => {
      if ((!next && !previous) || !_.isEqual(next, previous)) {
        getManyFolders(props.foldersFilters, f => f.parentId == props.foldersFilters?.parentId);
      }
    }, { immediate: true });

    return {
      fetchingFolders,
      folders,
      onSelect,
      isSelected,
      FoldersListType,
      DashboardType
    };
  }
});
</script>
