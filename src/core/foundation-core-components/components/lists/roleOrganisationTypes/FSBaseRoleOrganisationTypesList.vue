<template>
  <FSDataTable
    :items="roleOrganisationTypes"
    :itemTo="$props.itemTo"
    :loading="fetchingRoleOrganisations"
    :showSelect="$props.editable"
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

import type { RoleOrganisationTypeFilters, RoleOrganisationTypeInfos } from "@dative-gpi/foundation-core-domain/models";
import { userTypeIcon, userTypeLabel } from "@dative-gpi/foundation-core-components/utils";
import { useRoleOrganisationTypes } from "@dative-gpi/foundation-core-services/composables";

import FSDataTable from "../FSDataTable.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";
import FSText from "@dative-gpi/foundation-shared-components/components/FSText.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSTagGroup from "@dative-gpi/foundation-shared-components/components/FSTagGroup.vue";
  
export default defineComponent({
  name: "FSBaseRoleOrganisationTypesList",
  components: {
    FSRow,
    FSIcon,
    FSText,
    FSTagGroup,
    FSDataTable,
  },
  props: {
    tableCode: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    roleOrganisationTypesFilters: {
      type: Object as PropType<RoleOrganisationTypeFilters | null>,
      required: false,
      default: null
    },
    itemTo: {
      type: Function as PropType<(item: RoleOrganisationTypeInfos) => Partial<RouteLocation>>,
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
    const { getMany: getManyRoleOrganisationTypes, entities: roleOrganisationTypes, fetching: fetchingRoleOrganisations } = useRoleOrganisationTypes();

    const isSelected = (id: string): boolean => {
      return props.modelValue.includes(id);
    };

    watch(() => props.roleOrganisationTypesFilters, (next, previous) => {
      if ((!next && !previous) || !_.isEqual(next, previous)) {
        getManyRoleOrganisationTypes(props.roleOrganisationTypesFilters ?? undefined);
      }
    }, { immediate: true });

    return {
      fetchingRoleOrganisations,
      roleOrganisationTypes,
      userTypeLabel,
      userTypeIcon,
      isSelected
    };
  }
});
</script>