<template>
  <FSDataTable
    defaultMode="iterator"
    :items="items"
    :itemTo="$props.itemTo"
    :loading="fetchingDashboardOrganisationTypes || fetchingDashboardOrganisations || fetchingDashboardShallows"
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
      #item.tile="{ item, toggleSelect }"
    >
      <FSDashboardOrganisationTypeTileUI
        v-if="item.dashboardType == DashboardType.OrganisationType"
        :bottomColor="item.colors"
        :to="$props.itemTo && $props.itemTo(item)"
        :modelValue="isSelected(item.id)"
        @update:modelValue="toggleSelect(item)"
        v-bind="item"
      />
      <FSDashboardOrganisationTileUI
        v-if="item.dashboardType == DashboardType.Organisation"
        :bottomColor="item.colors"
        :to="$props.itemTo && $props.itemTo(item)"
        :modelValue="isSelected(item.id)"
        @update:modelValue="toggleSelect(item)"
        v-bind="item"
      />
      <FSDashboardShallowTileUI
        v-if="item.dashboardType == DashboardType.Shallow"
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

import { useAppOrganisationId, useCurrentUserOrganisation, useDashboardOrganisations, useDashboardOrganisationTypes, useDashboardShallows } from "@dative-gpi/foundation-core-services/composables";
import type { DashboardOrganisationTypeFilters, DashboardOrganisationFilters, DashboardShallowFilters, DashboardInfos } from "@dative-gpi/foundation-core-domain/models";
import { useOrganisation } from "@dative-gpi/foundation-shared-services/composables";

import type { DashboardsListItem } from "@/core/foundation-core-components/utils";
import { DashboardType } from "@dative-gpi/foundation-shared-domain/enums";

import FSDataTable from "../FSDataTable.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSDashboardShallowTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSDashboardShallowTileUI.vue";
import FSDashboardOrganisationTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSDashboardOrganisationTileUI.vue";
import FSDashboardOrganisationTypeTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSDashboardOrganisationTypeTileUI.vue";

export default defineComponent({
  name: "FSBaseDashboardsList",
  components: {
    FSDataTable,
    FSIcon,
    FSDashboardOrganisationTileUI,
    FSDashboardOrganisationTypeTileUI,
    FSDashboardShallowTileUI
  },
  props: {
    tableCode: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    dashboardOrganisationTypeFetchFilter: {
      type: Object as PropType<DashboardOrganisationTypeFilters>,
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
    itemTo: {
      type: Function as PropType<(item: DashboardInfos) => Partial<RouteLocation>>,
      required: false
    },
    modelValue: {
      type: Array as PropType<string[]>,
      default: () => [],
      required: false
    }
  },
  emits: ["update:modelValue", "update:type"],
  setup(props, { emit }) {
    const { entities: dashboardOrganisationTypes, fetching: fetchingDashboardOrganisationTypes, getMany: getManyDashboardOrganisationTypes } = useDashboardOrganisationTypes();
    const { entities: dashboardOrganisations, fetching: fetchingDashboardOrganisations, getMany: getManyDashboardOrganisations } = useDashboardOrganisations();
    const { entities: dashboardShallows, fetching: fetchingDashboardShallows, getMany: getManyDashboardShallows } = useDashboardShallows();
    const { fetch: fetchUserOrganisation, entity: userOrganisation } = useCurrentUserOrganisation();
    const { entity: organisation, get: getOrganisation } = useOrganisation();
    const { organisationId } = useAppOrganisationId();

    const selecteds = ref<string[]>(props.modelValue);

    const items = computed((): DashboardsListItem[] => {
      return _.sortBy([
        ...dashboardOrganisationTypes.value.map(g => ({
          ...g,
          dashboardType: DashboardType.OrganisationType
        })) as DashboardsListItem[],
        ...dashboardOrganisations.value.map(d => ({
          ...d,
          dashboardType: DashboardType.Organisation
        })) as DashboardsListItem[],
        ...dashboardShallows.value.map(d => ({
          ...d,
          dashboardType: DashboardType.Shallow
        })) as DashboardsListItem[]
      ], d => d.label);
    });

    const mainUserDashboardId = computed(() => {
      return userOrganisation.value?.mainDashboardId;
    });

    const mainOrganisationDashboardId = computed(() => {
      return organisation.value?.mainDashboardId;
    });

    const onSelect = (values: string[]) => {
      selecteds.value = values;
      const selectedItems = items.value.filter(i => selecteds.value!.includes(i.id));
      emit("update:modelValue", selectedItems.map(i => i.id));
      emit("update:type", selectedItems.map(i => i.dashboardType));
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

    watch(() => props.dashboardOrganisationTypeFetchFilter, (next, previous) => {
      if ((!next && !previous) || !_.isEqual(next, previous)) {
        getManyDashboardOrganisationTypes(props.dashboardOrganisationTypeFetchFilter);
      }
    }, { immediate: true });

    watch(() => props.dashboardOrganisationsFilters, (next, previous) => {
      if ((!next && !previous) || !_.isEqual(next, previous)) {
        getManyDashboardOrganisations(props.dashboardOrganisationsFilters);
      }
    }, { immediate: true });

    watch(() => props.dashboardShallowsFilters, (next, previous) => {
      if ((!next && !previous) || !_.isEqual(next, previous)) {
        getManyDashboardShallows(props.dashboardShallowsFilters);
      }
    }, { immediate: true });

    return {
      fetchingDashboardOrganisationTypes,
      fetchingDashboardOrganisations,
      fetchingDashboardShallows,
      selecteds,
      items,
      mainUserDashboardId,
      mainOrganisationDashboardId,
      onSelect,
      isSelected,
      DashboardType
    };
  }
});
</script>