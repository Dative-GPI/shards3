<template>
  <FSAutocompleteField
    :toggleSet="!$props.toggleSetDisabled && toggleSet"
    :items="serviceAccountRoleOrganisations"
    :multiple="$props.multiple"
    :loading="loading"
    :modelValue="$props.modelValue"
    @update:modelValue="onUpdate"
    v-bind="$attrs"
  >
    <template
      #autocomplete-selection="{ item }"
    >
      <FSRow
        v-if="$props.modelValue"
        align="center-center"
        :wrap="false"
      >
        <FSIcon
          v-if="item.raw.icon"
        >
          {{ item.raw.icon }}
        </FSIcon>
        <FSSpan>
          {{ item.raw.label }}
        </FSSpan>
      </FSRow>
    </template>
    <template
      #item-label="{ item, font }"
    >
      <FSRow
        align="center-left"
        :wrap="false"
      >
        <FSIcon
          v-if="item.raw.icon"
        >
          {{ item.raw.icon }}
        </FSIcon>
        <FSSpan
          :font="font"
        >
          {{ item.raw.label }}
        </FSSpan>
      </FSRow>
    </template>
  </FSAutocompleteField>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { type ServiceAccountRoleOrganisationsFilters } from "@dative-gpi/foundation-core-domain/models";
import { useServiceAccountRoleOrganisations } from "@dative-gpi/foundation-core-services/composables";
import { useAutocomplete } from "@dative-gpi/foundation-shared-components/composables";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSSpan from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";

export default defineComponent({
  name: "FSAutocompleteServiceAccountRoleOrganisation",
  components: {
    FSAutocompleteField,
    FSIcon,
    FSSpan,
    FSRow
  },
  props: {
    serviceAccountRoleOrganisationsFilters: {
      type: Object as PropType<ServiceAccountRoleOrganisationsFilters>,
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
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { getMany: getManyServiceAccountRoleOrganisations, fetching: fetchingServiceAccountRoleOrganisations, entities: serviceAccountRoleOrganisations } = useServiceAccountRoleOrganisations();

    const loading = computed((): boolean => {
      return init.value && fetchingServiceAccountRoleOrganisations.value;
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
      toggleSet,
      loading,
      onUpdate
    };
  }
});
</script>