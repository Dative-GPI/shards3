<template>
  <FSDataTable
    :loading="fetchingServiceAccountRoleOrganisations"
    :items="serviceAccountRoleOrganisations"
    :showSelect="$props.editable"
    :tableCode="$props.tableCode"
    :itemTo="$props.itemTo"
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
      #item.userType="{ item }"
    >
      <FSRow
        align="center-left"
      >
        <FSIcon>
          {{ userTypeIcon(item.userType) }}
        </FSIcon>
        <FSText>
          {{ userTypeLabel(item.userType) }}
        </FSText>
      </FSRow>
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
  </FSDataTable>
</template>
  
<script lang="ts">
import { defineComponent, type PropType, watch } from "vue";
import { type RouteLocation } from "vue-router";
import _ from "lodash";

import { type ServiceAccountRoleOrganisationFilters, type ServiceAccountRoleOrganisationInfos } from "@dative-gpi/foundation-core-domain/models";
import { useServiceAccountRoleOrganisations } from "@dative-gpi/foundation-core-services/composables";
import { userTypeIcon, userTypeLabel } from "@dative-gpi/foundation-core-components/utils";

import FSTagGroup from "@dative-gpi/foundation-shared-components/components/FSTagGroup.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSText from "@dative-gpi/foundation-shared-components/components/FSText.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";

import FSDataTable from "../FSDataTable.vue";

export default defineComponent({
  name: "FSBaseServiceAccountRoleOrganisationsList",
  components: {
    FSDataTable,
    FSTagGroup,
    FSIcon,
    FSText,
    FSRow
  },
  props: {
    tableCode: {
      type: String,
      required: true
    },
    serviceAccountRoleOrganisationsFilters: {
      type: Object as PropType<ServiceAccountRoleOrganisationFilters | null>,
      required: false,
      default: null
    },
    itemTo: {
      type: Function as PropType<(item: ServiceAccountRoleOrganisationInfos) => Partial<RouteLocation>>,
      required: false
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    },
    modelValue: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => []
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { getMany: getManyServiceAccountRoleOrganisations, fetching: fetchingServiceAccountRoleOrganisations, entities: serviceAccountRoleOrganisations } = useServiceAccountRoleOrganisations();

    const isSelected = (id: string): boolean => {
      return props.modelValue.includes(id);
    };

    watch(() => props.serviceAccountRoleOrganisationsFilters, (next, previous) => {
      if ((!next && !previous) || !_.isEqual(next, previous)) {
        getManyServiceAccountRoleOrganisations(props.serviceAccountRoleOrganisationsFilters ?? undefined);
      }
    }, { immediate: true });

    return {
      fetchingServiceAccountRoleOrganisations,
      serviceAccountRoleOrganisations,
      userTypeLabel,
      userTypeIcon,
      isSelected
    };
  }
});
</script>