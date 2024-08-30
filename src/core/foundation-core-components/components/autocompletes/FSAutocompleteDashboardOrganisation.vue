<template>
  <FSAutocompleteField
    :toggleSet="!$props.toggleSetDisabled && toggleSet"
    :items="dashboardOrganisations"
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

import { type DashboardOrganisationFilters } from "@dative-gpi/foundation-core-domain/models";
import { useDashboardOrganisations } from "@dative-gpi/foundation-core-services/composables";
import { useAutocomplete } from "@dative-gpi/foundation-shared-components/composables";
import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";


export default defineComponent({
  name: "FSAutocompleteDashboard",
  components: {
    FSAutocompleteField,
    FSIcon
  },
  props: {
    dashboardOrganisationFilters: {
      type: Object as PropType<DashboardOrganisationFilters>,
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
    const { getMany: getManyDashboardOrganisations, fetching: fetchingDashboardOrganisations, entities: dashboardOrganisations } = useDashboardOrganisations();
    const { $tr } = useTranslationsProvider();

    const loading = computed((): boolean => {
      return init.value && fetchingDashboardOrganisations.value;
    });

    const placeholder = computed((): string | null => {
      if (props.multiple && props.modelValue) {
        return $tr("ui.autocomplete-dashboard-organisation.placeholder", "{0} dashboard(s) selected", props.modelValue.length);
      }
      return null;
    });

    const fetch = (search: string | null) => {
      return getManyDashboardOrganisations({ ...props.dashboardOrganisationFilters, search: search ?? undefined });
    };

    const { toggleSet, init, onUpdate } = useAutocomplete(
      dashboardOrganisations,
      [() => props.dashboardOrganisationFilters],
      emit,
      fetch
    );

    return {
      dashboardOrganisations,
      placeholder,
      toggleSet,
      loading,
      onUpdate
    };
  }
});
</script>