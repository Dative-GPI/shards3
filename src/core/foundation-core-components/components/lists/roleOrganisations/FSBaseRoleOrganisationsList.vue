<template>
  <FSDataTable
    :items="roleOrganisations"
    :itemTo="$props.itemTo"
    :loading="fetchingRoleOrganisations"
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
import type { PropType} from "vue";
import { defineComponent, watch } from "vue";
import type { RouteLocation } from "vue-router";
import _ from "lodash";

import type { RoleOrganisationFilters, RoleOrganisationInfos } from "@dative-gpi/foundation-core-domain/models";
import { userTypeIcon, userTypeLabel } from "@dative-gpi/foundation-core-components/utils";
import { useRoleOrganisations } from "@dative-gpi/foundation-core-services/composables";

import FSDataTable from "../FSDataTable.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSText from "@dative-gpi/foundation-shared-components/components/FSText.vue";
import FSTagGroup from "@dative-gpi/foundation-shared-components/components/FSTagGroup.vue";

export default defineComponent({
  name: "FSBaseRoleOrganisationsList",
  components: {
    FSDataTable,
    FSRow,
    FSIcon,
    FSText,
    FSTagGroup
  },
  props: {
    roleOrganisationsFilters: {
      type: Object as PropType<RoleOrganisationFilters | null>,
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
    },
    itemTo: {
      type: Function as PropType<(item: RoleOrganisationInfos) => Partial<RouteLocation>>,
      required: false
    },
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { getMany: getManyRoleOrganisations, entities: roleOrganisations, fetching: fetchingRoleOrganisations } = useRoleOrganisations();

    const isSelected = (id: string): boolean => {
      return props.modelValue.includes(id);
    };

    watch(() => props.roleOrganisationsFilters, (next, previous) => {
      if ((!next && !previous) || !_.isEqual(next, previous)) {
        getManyRoleOrganisations(props.roleOrganisationsFilters ?? undefined);
      }
    }, { immediate: true });

    return {
      fetchingRoleOrganisations,
      roleOrganisations,
      userTypeLabel,
      userTypeIcon,
      isSelected
    };
  }
});
</script>