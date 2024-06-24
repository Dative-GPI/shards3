<template>
  <FSAutocompleteField
    :toggleSet="!$props.toggleSetDisabled && toggleSet"
    :loading="loading"
    :items="dashboardOrganisations"
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
import { computed, defineComponent, PropType } from "vue";

import { DashboardOrganisationFilters } from "@dative-gpi/foundation-core-domain/models";
import { useDashboardOrganisations } from "@dative-gpi/foundation-core-services/composables";
import { useAutocomplete } from "@dative-gpi/foundation-shared-components/composables";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSSpan from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";


export default defineComponent({
  name: "FSAutocompleteDashboard",
  components: {
    FSAutocompleteField,
    FSIcon,
    FSSpan,
    FSRow
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
    toggleSetDisabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { getMany: getManyDashboardOrganisations, fetching: fetchingDashboardOrganisations, entities: dashboardOrganisations } = useDashboardOrganisations();

    const loading = computed((): boolean => {
      return init.value && fetchingDashboardOrganisations.value;
    });

    const innerFetch = (search: string | null) => {
      return getManyDashboardOrganisations({ ...props.dashboardOrganisationFilters, search: search ?? undefined });
    };

    const { toggleSet, init, onUpdate } = useAutocomplete(
      dashboardOrganisations,
      [() => props.dashboardOrganisationFilters],
      emit,
      innerFetch
    );

    return {
      dashboardOrganisations,
      toggleSet,
      loading,
      onUpdate
    };
  }
});
</script>