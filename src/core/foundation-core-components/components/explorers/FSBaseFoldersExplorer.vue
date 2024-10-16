<template>
  <FSDataTable
    :items="items"
    :item-to="$props.itemTo"
    :loading="fetchingFolders || fetchingDashboardOrganisations || fetchingDashboardShallows"
    :tableCode="$props.tableCode"
    :modelValue="selecteds"
    @update:modelValue="onSelect"
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
      #header.imageId-title
    >
      <FSIcon>
        mdi-panorama-variant-outline
      </FSIcon>
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
      #item.main="{ item }"
    >
      <FSIcon
        v-if="item.id === mainOrganisationDashboardId"
      >
        mdi-account-group-outline
      </FSIcon>
      <FSIcon
        v-if="item.id === mainUserDashboardId"
      >
        mdi-home
      </FSIcon>
    </template>
    <template
      #item.locked="{ item }"
    >
      <FSIconCheck
        :value="item.locked"
      />
    </template>
    <template
      #item.tile="{ item, toggleSelect }"
    >
      <FSFolderTileUI
        v-if="item.type == FoldersListType.Folder"
        :bottomColor="item.colors"
        v-bind="item"
        :modelValue="isSelected(item.id)"
        @update:modelValue="toggleSelect(item)"
        :to="$props.itemTo && $props.itemTo(item)"
      />
      <FSDashboardOrganisationTileUI
        v-if="item.type == FoldersListType.Dashboard && item.dashboardType == DashboardType.Organisation"
        :bottomColor="item.colors"
        :modelValue="isSelected(item.id)"
        @update:modelValue="toggleSelect(item)"
        :to="$props.itemTo && $props.itemTo(item)"
        v-bind="item"
      />
      <FSDashboardShallowTileUI
        v-if="item.type == FoldersListType.Dashboard && item.dashboardType == DashboardType.Shallow"
        :bottomColor="item.colors"
        :modelValue="isSelected(item.id)"
        @update:modelValue="toggleSelect(item)"
        :to="$props.itemTo && $props.itemTo(item)"
        v-bind="item"
      />
    </template>
  </FSDataTable>
</template>

<script lang="ts">
import _ from "lodash";
import type { PropType} from "vue";
import type { RouteLocation } from "vue-router";
import { computed, defineComponent, onMounted, ref, watch } from "vue";

import { useOrganisation } from "@dative-gpi/foundation-shared-services/composables";
import { useDashboardOrganisations, useFolders, useDashboardShallows, useAppOrganisationId, useCurrentUserOrganisation } from "@dative-gpi/foundation-core-services/composables";

import { DashboardType } from "@dative-gpi/foundation-shared-domain/enums";
import { FoldersListType, type FoldersListItem } from "@dative-gpi/foundation-core-components/utils";
import type { FolderFilters, DashboardOrganisationFilters, DashboardShallowFilters, DashboardInfos } from "@dative-gpi/foundation-core-domain/models";

import FSDataTable from "../lists/FSDataTable.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSFolderTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSFolderTileUI.vue";
import FSDashboardOrganisationTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSDashboardOrganisationTileUI.vue";
import FSDashboardShallowTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSDashboardShallowTileUI.vue";
import FSIconCheck from "@dative-gpi/foundation-shared-components/components/FSIconCheck.vue";

export default defineComponent({
  name: "FSBaseFoldersExplorer",
  components: {
    FSDataTable,
    FSIcon,
    FSFolderTileUI,
    FSDashboardOrganisationTileUI,
    FSDashboardShallowTileUI,
    FSIconCheck
  },
  props: {
    foldersFilters: {
      type: Object as PropType<FolderFilters>,
      default: undefined,
      required: false
    },
    dashboardOrganisationsFilters: {
      type: Object as PropType<DashboardOrganisationFilters>,
      default: undefined,
      required: false
    },
    dashboardShallowsFilters: {
      type: Object as PropType<DashboardShallowFilters>,
      default: undefined,
      required: false
    },
    modelValue: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => []
    },
    itemTo: {
      type: Function as PropType<(item: DashboardInfos) => Partial<RouteLocation>>,
      required: false
    },
    tableCode: {
      type: String,
      required: true
    }
  },
  emits: ["update", "update:modelValue", "update:type", "update:dashboard-type"],
  setup(props, { emit }) {

    const { fetch: fetchUserOrganisation, entity: userOrganisation } = useCurrentUserOrganisation();
    const { entity: organisation, get: getOrganisation } = useOrganisation();
    const { organisationId } = useAppOrganisationId();

    const { entities: dashboardOrganisations, fetching: fetchingDashboardOrganisations, getMany: getManyDashboardOrganisations } = useDashboardOrganisations();
    const { entities: dashboardShallows, fetching: fetchingDashboardShallows, getMany: getManyDashboardShallows } = useDashboardShallows();
    const { entities: folders, fetching: fetchingFolders, getMany: getManyFolders } = useFolders();

    const selecteds = ref<string[]>([]);

    const mainUserDashboardId = computed(() => {
      return userOrganisation.value?.mainDashboardId;
    });

    const mainOrganisationDashboardId = computed(() => {
      return organisation.value?.mainDashboardId;
    });

    const items = computed((): FoldersListItem[] => {
      return [
        ...folders.value.map(g => ({
          ...g,
          type: FoldersListType.Folder,
          dashboardType: DashboardType.None
        })) as FoldersListItem[],
        ..._.sortBy([
          ...dashboardOrganisations.value.map(d => ({
            ...d,
            type: FoldersListType.Dashboard,
            dashboardType: DashboardType.Organisation
          })) as FoldersListItem[],
          ...dashboardShallows.value.map(d => ({
            ...d,
            type: FoldersListType.Dashboard,
            dashboardType: DashboardType.Shallow
          })) as FoldersListItem[]
        ], d => d.label)
      ]
    })

    const onSelect = (values: string[]) => {
      selecteds.value = values;
      const selectedItems = items.value.filter(i => selecteds.value!.includes(i.id));
      emit("update:dashboard-type", selectedItems.map(i => i.dashboardType));
      emit("update:modelValue", selectedItems.map(i => i.id));
      emit("update:type", selectedItems.map(i => i.type));
      emit("update", { dashboardType: selectedItems.map(i => i.dashboardType), modelValue: selectedItems.map(i => i.id), type: selectedItems.map(i => i.type) });
    };

    const isSelected = (id: string) => {
      return selecteds.value?.includes(id);
    };

    onMounted(() => {
      fetchUserOrganisation();
    })

    watch(() => organisationId.value, () => {
      if (organisationId.value) {
        getOrganisation(organisationId.value);
      }
    }, { immediate: true });

    watch(() => props.foldersFilters, (next, previous) => {
      if ((!next && !previous) || !_.isEqual(next, previous)) {
        getManyFolders(props.foldersFilters, f => f.parentId == props.foldersFilters?.parentId);
      }
    }, { immediate: true });

    watch(() => props.dashboardOrganisationsFilters, (next, previous) => {
      if ((!next && !previous) || !_.isEqual(next, previous)) {
        getManyDashboardOrganisations(props.dashboardOrganisationsFilters, f => f.folderId == props.foldersFilters?.parentId);
      }
    }, { immediate: true });

    watch(() => props.dashboardShallowsFilters, (next, previous) => {
      if ((!next && !previous) || !_.isEqual(next, previous)) {
        getManyDashboardShallows(props.dashboardShallowsFilters, f => f.folderId == props.foldersFilters?.parentId);
      }
    }, { immediate: true });

    watch(() => props.modelValue, (next) => {
      selecteds.value = next;
    }, { immediate: true });

    return {
      fetchingDashboardOrganisations,
      fetchingDashboardShallows,
      fetchingFolders,
      mainOrganisationDashboardId,
      mainUserDashboardId,
      selecteds,
      items,
      onSelect,
      isSelected,
      FoldersListType,
      DashboardType
    };
  }
});
</script>
