<template>
  <FSDataTable
    defaultMode="iterator"
    :loading="fetchingDashboardOrganisationTypes"
    :items="dashboardOrganisationTypes"
    :itemTo="$props.itemTo"
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
      #item.main="{ item }"
    >
      <FSRow>
        <FSIcon
          v-if="item.id === organisationMainDashboardId"
        >
          mdi-account-group-outline
        </FSIcon>
        <FSIcon
          v-if="item.id === userOrganisationMainDashboardId"
        >
          mdi-home
        </FSIcon>
      </FSRow>
    </template>
    <template
      #item.icon="{ item }"
    >
      <FSIcon>
        {{ item.icon }}
      </FSIcon>
    </template>
    <template
      #item.organisationTypeLabel="{ item }"
    >
      <FSText
        v-if="item.organisationTypeId"
        :label="item.organisationTypeLabel"
      />
      <FSChip
        v-else
        variant="standard"
        :label="$tr('ui.common.all', 'All')"
      />
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
      <FSDashboardOrganisationTypeTileUI
        :bottomColor="item.colors"
        :to="$props.itemTo && $props.itemTo(item)"
        :modelValue="isSelected(item.id)"
        @update:modelValue="toggleSelect(item)"
        v-bind="item"
      />
    </template>
  </FSDataTable>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, type PropType, watch } from "vue";
import type { RouteLocation } from "vue-router";
import _ from "lodash";

import { useAppOrganisationId, useCurrentUserOrganisation, useDashboardOrganisationTypes } from "@dative-gpi/foundation-core-services/composables";
import type { DashboardOrganisationTypeFilters, DashboardOrganisationTypeInfos } from "@dative-gpi/foundation-core-domain/models";
import { useOrganisation } from "@dative-gpi/foundation-shared-services/composables";

import FSTagGroup from "@dative-gpi/foundation-shared-components/components/FSTagGroup.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";
import FSText from "@dative-gpi/foundation-shared-components/components/FSText.vue";
import FSChip from "@dative-gpi/foundation-shared-components/components/FSChip.vue";
import FSDashboardOrganisationTypeTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSDashboardOrganisationTypeTileUI.vue";

import FSDataTable from "../FSDataTable.vue";

export default defineComponent({
  name: "FSBaseDashboardOrganisationTypesList",
  components: {
    FSDataTable,
    FSTagGroup,
    FSIcon,
    FSRow,
    FSText,
    FSChip,
    FSDashboardOrganisationTypeTileUI
  },
  props: {
    tableCode: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    dashboardOrganisationTypeFilters: {
      type: Object as PropType<DashboardOrganisationTypeFilters>,
      default: undefined,
      required: false
    },
    itemTo: {
      type: Function as PropType<(item: DashboardOrganisationTypeInfos) => Partial<RouteLocation>>,
      required: false
    },
    modelValue: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => []
    }
  },
  setup(props) {
    const { getMany: getDashboardOrganisationTypes, fetching: fetchingDashboardOrganisationTypes, entities: dashboardOrganisationTypes } = useDashboardOrganisationTypes();
    const { fetch: fetchUserOrganisation, entity: userOrganisation } = useCurrentUserOrganisation();
    const { get: fetchOrganisation, entity: organisation } = useOrganisation();
    const { organisationId } = useAppOrganisationId();

    const userOrganisationMainDashboardId = computed((): string | null => {
      if (userOrganisation.value) {
        return userOrganisation.value.mainDashboardId;
      }
      return null;
    });

    const organisationMainDashboardId = computed((): string | null => {
      if (organisation.value) {
        return organisation.value.mainDashboardId;
      }
      return null;
    });
  
    const isSelected = (id: string): boolean => {
      return props.modelValue.includes(id);
    };

    onMounted(() => {
      fetchUserOrganisation();
    });

    watch(organisationId, () => {
      if (organisationId.value) {
        fetchOrganisation(organisationId.value);
      }
    }, { immediate: true });

    watch(() => props.dashboardOrganisationTypeFilters, (next, previous) => {
      if ((!next && !previous) || !_.isEqual(next, previous)) {
        getDashboardOrganisationTypes(props.dashboardOrganisationTypeFilters);
      }
    }, { immediate: true });

    return {
      fetchingDashboardOrganisationTypes,
      userOrganisationMainDashboardId,
      organisationMainDashboardId,
      dashboardOrganisationTypes,
      isSelected,
    };
  }
});
</script>
