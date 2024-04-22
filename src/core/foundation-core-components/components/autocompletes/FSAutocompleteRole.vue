<template>
  <FSAutocompleteField
    :loading="fetchingRoleOrganisations && fetchingRoleOrganisationTypes"
    :items="roles"
    :modelValue="$props.modelValue"
    @update:modelValue="onUpdate"
    v-model:search="search"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, watch } from "vue";
import _ from "lodash";

import { useRoleOrganisations, useRoleOrganisationTypes } from "@dative-gpi/foundation-core-services/composables";
import { RoleOrganisationFilters, RoleOrganisationTypeFilters, RoleType } from "@dative-gpi/foundation-core-domain/models";

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
    }
  },
  emits: ["update:modelValue", "update:type"],
  setup(props, { emit }) {
    const { getMany: getManyRoleOrganisationTypes, fetching: fetchingRoleOrganisationTypes, entities: roleOrganisationTypes } = useRoleOrganisationTypes();
    const { getMany: getManyRoleOrganisations, fetching: fetchingRoleOrganisations, entities: roleOrganisations } = useRoleOrganisations();

    const search = ref<string | null>(null);

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

    const onUpdate = (value: string[] | string | null) => {
      emit("update:modelValue", value);
      if (Array.isArray(value)) {
        emit("update:type", value.map(v => roles.value.find(r => r.id === v)?.type));
      }
      else {
        emit("update:type", roles.value.find(r => r.id === value)?.type);
      }
    };

    watch([() => props.roleOrganisationTypeFilters, () => props.roleOrganisationFilters, () => search.value], async (newValue, oldValue) => {
      if (!_.isEqual(newValue, oldValue)) {
        await getManyRoleOrganisationTypes({ ...props.roleOrganisationTypeFilters, search: search.value ?? undefined });
        await getManyRoleOrganisations({ ...props.roleOrganisationFilters, search: search.value ?? undefined });
      }
    }, { immediate: true });

    return {
      fetchingRoleOrganisationTypes,
      fetchingRoleOrganisations,
      roles,
      onUpdate
    };
  }
});
</script>