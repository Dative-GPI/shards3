<template>
  <FSAutocompleteField
    :label="$props.label ?? $tr('autocomplete.service-account-role.label', 'Service account role')"
    :toggleSet="!$props.toggleSetDisabled && toggleSet"
    :items="serviceAccountRoleOrganisations"
    :multiple="$props.multiple"
    :placeholder="placeholder"
    :loading="loading"
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
  </FSAutocompleteField>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { type ServiceAccountRoleOrganisationFilters } from "@dative-gpi/foundation-core-domain/models";
import { useServiceAccountRoleOrganisations } from "@dative-gpi/foundation-core-services/composables";
import { useAutocomplete } from "@dative-gpi/foundation-shared-components/composables";
import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";

export default defineComponent({
  name: "FSAutocompleteServiceAccountRoleOrganisation",
  components: {
    FSAutocompleteField,
    FSIcon
  },
  props: {
    serviceAccountRoleOrganisationsFilters: {
      type: Object as PropType<ServiceAccountRoleOrganisationFilters>,
      required: false,
      default: null
    },
    modelValue: {
      type: [Array, String] as PropType<string[] | string | null>,
      required: false,
      default: null
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
    },
    label: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { getMany: getManyServiceAccountRoleOrganisations, fetching: fetchingServiceAccountRoleOrganisations, entities: serviceAccountRoleOrganisations } = useServiceAccountRoleOrganisations();
    const { $tr } = useTranslationsProvider();

    const loading = computed((): boolean => {
      return init.value && fetchingServiceAccountRoleOrganisations.value;
    });

    const placeholder = computed((): string | null => {
      if (props.multiple && props.modelValue) {
        return $tr("autocomplete.service-account-role.placeholder", "{0} role(s) selected", props.modelValue.length);
      }
      return null;
    });

    const fetch = (search: string | null) => {
      return getManyServiceAccountRoleOrganisations({ ...props.serviceAccountRoleOrganisationsFilters, search: search ?? undefined })
    };

    const { toggleSet, init, onUpdate } = useAutocomplete(
      serviceAccountRoleOrganisations,
      [() => props.serviceAccountRoleOrganisationsFilters],
      emit,
      fetch
    );

    return {
      serviceAccountRoleOrganisations,
      placeholder,
      toggleSet,
      loading,
      onUpdate
    };
  }
});
</script>