<template>
  <FSAutocompleteField
    :toggleSet="!$props.toggleSetDisabled && toggleSet"
    :multiple="$props.multiple"
    :placeholder="placeholder"
    :loading="loading"
    :items="roles"
    :modelValue="$props.modelValue"
    @update:modelValue="onUpdate"
    v-bind="$attrs"
  >
    <template
      #item-prepend="{ item }"
    >
      <FSIcon
        v-if="item.icon"
      >
        {{ item.icon }}
      </FSIcon>
    </template>
    <template
      #item-append="{ item }"
    >
      <FSChip
        :color="roleTypeColor(item.type)"
        :label="roleTypeLabel(item.type)"
        :editable="false"
      />
    </template>
    <template
      #toggle-set-item="props"
    >
      <FSButton
        :prependIcon="props.item.icon"
        :variant="props.getVariant(props.item)"
        :color="props.getColor(props.item)"
        :class="props.getClass(props.item)"
        :label="props.item.label"
        @click="props.toggle(props.item)"
      >
        <template
          v-if="props.item.type"
          #append
        >
          <FSChip
            :color="roleTypeColor(props.item.type)"
            :label="roleTypeLabel(props.item.type)"
            :editable="false"
          />
        </template>
      </FSButton>
    </template>
  </FSAutocompleteField>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { type RoleOrganisationFilters, type RoleOrganisationTypeFilters, RoleType } from "@dative-gpi/foundation-core-domain/models";
import { useRoleOrganisations, useRoleOrganisationTypes } from "@dative-gpi/foundation-core-services/composables";
import { useAutocomplete } from "@dative-gpi/foundation-shared-components/composables";
import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui";

import { roleTypeColor, roleTypeLabel } from "../../utils";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";
import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";
import FSChip from "@dative-gpi/foundation-shared-components/components/FSChip.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";

export default defineComponent({
  name: "FSAutocompleteRole",
  components: {
    FSAutocompleteField,
    FSButton,
    FSChip,
    FSIcon
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
    type: {
      type: [Array, Number] as PropType<RoleType[] | RoleType>,
      required: false,
      default: RoleType.None
    },
    ignoreRoleOrganisationTypes: {
      type: Boolean,
      required: false,
      default: false
    },
    ignoreRoleOrganisations: {
      type: Boolean,
      required: false,
      default: false
    },
    multiple: {
      type: Boolean,
      required: false,
      default: false
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
    const { $tr } = useTranslationsProvider();

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

    const loading = computed((): boolean => {
      return init.value && (fetchingRoleOrganisationTypes.value || fetchingRoleOrganisations.value);
    });

    const placeholder = computed((): string | null => {
      if (props.multiple && props.modelValue) {
        return $tr("ui.autocomplete-role.placeholder", "{0} role(s) selected", props.modelValue.length);
      }
      return null;
    });

    const update = (value: Role[] | Role | null) => {
      if (Array.isArray(value)) {
        emit("update:modelValue", value.map(v => v.id));
        emit("update:type", value.map(v => v.type));
      }
      else {
        emit("update:modelValue", value?.id);
        emit("update:type", value?.type);
      }
    };

    const fetch = (search: string | null) => {
      const promises = [];
      if (!props.ignoreRoleOrganisations) {
        promises.push(getManyRoleOrganisations({ ...props.roleOrganisationFilters, search: search ?? undefined }));
      }
      if (!props.ignoreRoleOrganisationTypes) {
        promises.push(getManyRoleOrganisationTypes({ ...props.roleOrganisationTypeFilters, search: search ?? undefined }));
      }
      return Promise.all(promises);
    };

    const { toggleSet, init, onUpdate } = useAutocomplete(
      roles,
      [() => props.roleOrganisationTypeFilters, () => props.roleOrganisationFilters],
      emit,
      fetch,
      update
    );

    return {
      placeholder,
      toggleSet,
      RoleType,
      loading,
      roles,
      roleTypeColor,
      roleTypeLabel,
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