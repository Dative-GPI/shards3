<template>
  <FSAutocompleteField :loading="fetchingRoleOrganisations && fetchingRoleOrganisationTypes"
    :items="roles"
    :modelValue="$props.modelValue"
    @update:modelValue="onUpdate"
    v-model:search="search"
    v-bind="$attrs" />
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, watch } from "vue";
import _ from "lodash";

import { RoleOrganisationFilters, RoleOrganisationTypeFilters, RoleType } from "@dative-gpi/foundation-core-domain/models";
import { useRoleOrganisations, useRoleOrganisationTypes } from "@dative-gpi/foundation-core-services/composables";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";

import { useAutocomplete } from "./useAutocomplete";

export default defineComponent({
  name: "FSAutocompleteRole",
  components: {
    FSAutocompleteField
  },
  props: {
    roleOrganisationTypeFilters: {
      type: Object as PropType<RoleOrganisationTypeFilters>,
      required: false,
      default: null
    },
    roleOrganisationFilters: {
      type: Object as PropType<RoleOrganisationFilters>,
      required: false,
      default: null
    },
    modelValue: {
      type: [Array, String] as PropType<string[] | string | null>,
      required: false,
      default: null
    }
  },
  emits: ["update:modelValue", "update:type"],
  setup(props, { emit }) {
    const { getMany: getManyRoleOrganisationTypes, fetching: fetchingRoleOrganisationTypes, entities: roleOrganisationTypes } = useRoleOrganisationTypes();
    const { getMany: getManyRoleOrganisations, fetching: fetchingRoleOrganisations, entities: roleOrganisations } = useRoleOrganisations();

    const roles = computed(() => {
      return roleOrganisationTypes.value.map(rot => ({
        id: rot.id,
        icon: rot.icon,
        label: rot.label,
        type: RoleType.OrganisationType
      })).concat(roleOrganisations.value.map(ro => ({
        id: ro.id,
        icon: ro.icon,
        label: ro.label,
        type: RoleType.Organisation
      })));
    });

    const customUpdate = (value: Role[] | Role | null) => {
      if (Array.isArray(value)) {
        emit("update:modelValue", value.map(v => v.id));
        emit("update:type", value.map(v => v.type));
      }
      else {
        emit("update:modelValue", value?.id);
        emit("update:type", value?.type);
      }
    };

    const customFetch = (search: string | null) => {
      return Promise.all([
        getManyRoleOrganisationTypes({ ...props.roleOrganisationTypeFilters, search: search ?? undefined }),
        getManyRoleOrganisations({ ...props.roleOrganisationFilters, search: search ?? undefined })
      ]);
    };

    const { search, fetch, onUpdate } = useAutocomplete(
      roles,
      customFetch,
      emit,
      (role) => role.label,
      customUpdate
    )

    watch([() => props.roleOrganisationTypeFilters, () => props.roleOrganisationFilters], async (newValue, oldValue) => {
      if (!_.isEqual(newValue, oldValue)) {
        fetch()
      }
    }, { immediate: true });

    return {
      fetchingRoleOrganisationTypes,
      fetchingRoleOrganisations,
      search,
      roles,
      onUpdate
    };
  }
});

interface Role {
  id: string;
  icon: string;
  label: string;
  type: RoleType;
};
</script>