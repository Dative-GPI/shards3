<template>
  <FSAutocompleteField
    :toggleSet="!$props.toggleSetDisabled && toggleSet"
    :toggleSetItems="roles"
    :loading="loading"
    :items="roles"
    :modelValue="$props.modelValue"
    @update:modelValue="onUpdate"
    v-model:search="search"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { RoleOrganisationFilters, RoleOrganisationTypeFilters, RoleType } from "@dative-gpi/foundation-core-domain/models";
import { useRoleOrganisations, useRoleOrganisationTypes } from "@dative-gpi/foundation-core-services/composables";
import { useAutocomplete } from "@dative-gpi/foundation-shared-components/composables";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";

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
    },
    toggleSetDisabled: {
      type: Boolean,
      required: false,
      default: false
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

    const innerUpdate = (value: Role[] | Role | null) => {
      if (Array.isArray(value)) {
        emit("update:modelValue", value.map(v => v.id));
        emit("update:type", value.map(v => v.type));
      }
      else {
        emit("update:modelValue", value?.id);
        emit("update:type", value?.type);
      }
    };

    const innerFetch = (search: string | null) => {
      return Promise.all([
        getManyRoleOrganisationTypes({ ...props.roleOrganisationTypeFilters, search: search ?? undefined }),
        getManyRoleOrganisations({ ...props.roleOrganisationFilters, search: search ?? undefined })
      ]);
    };

    const { toggleSet, search, init, onUpdate } = useAutocomplete(
      roles,
      [() => props.roleOrganisationTypeFilters, () => props.roleOrganisationFilters],
      emit,
      innerFetch,
      innerUpdate
    );

    const loading = computed((): boolean => {
      return init.value && (fetchingRoleOrganisationTypes.value || fetchingRoleOrganisations.value);
    });

    return {
      toggleSet,
      loading,
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
}
</script>