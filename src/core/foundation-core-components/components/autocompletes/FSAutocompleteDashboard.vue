<template>
  <FSAutocompleteField
    :toggleSet="!$props.toggleSetDisabled && toggleSet"
    :multiple="$props.multiple"
    :loading="loading"
    :items="dashboards"
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
        <FSChip
          :color="dashboardTypeColor(item.raw.type)"
          :label="dashboardTypeLabel(item.raw.type)"
          :editable="false"
        />
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
        <FSChip
          :color="dashboardTypeColor(item.raw.type)"
          :label="dashboardTypeLabel(item.raw.type)"
          :editable="false"
        />
      </FSRow>
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
          #append
        >
          <FSChip
            :color="dashboardTypeColor(props.item.type)"
            :label="dashboardTypeLabel(props.item.type)"
            :editable="false"
          />
        </template>
      </FSButton>
    </template>
  </FSAutocompleteField>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { DashboardOrganisationFilters, DashboardOrganisationTypeFilters, DashboardShallowFilters } from "@dative-gpi/foundation-core-domain/models";
import { useDashboardOrganisations, useDashboardOrganisationTypes, useDashboardShallows } from "@dative-gpi/foundation-core-services/composables";
import { useAutocomplete } from "@dative-gpi/foundation-shared-components/composables";
import { DashboardType } from "@dative-gpi/foundation-shared-domain/models";

import { dashboardTypeColor, dashboardTypeLabel } from "../../utils";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";
import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";
import FSChip from "@dative-gpi/foundation-shared-components/components/FSChip.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSSpan from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";


export default defineComponent({
  name: "FSAutocompleteDashboard",
  components: {
    FSAutocompleteField,
    FSButton,
    FSChip,
    FSIcon,
    FSSpan,
    FSRow
  },
  props: {
    dashboardOrganisationTypeFilters: {
      type: Object as PropType<DashboardOrganisationTypeFilters>,
      required: false,
      default: null
    },
    dashboardOrganisationFilters: {
      type: Object as PropType<DashboardOrganisationFilters>,
      required: false,
      default: null
    },
    dashboardShallowFilters: {
      type: Object as PropType<DashboardShallowFilters>,
      required: false,
      default: null
    },
    modelValue: {
      type: [Array, String] as PropType<string[] | string | null>,
      required: false,
      default: null
    },
    type: {
      type: Number as PropType<DashboardType>,
      required: false,
      default: DashboardType.None
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
    const { getMany: getManyDashboardOrganisationTypes, fetching: fetchingDashboardOrganisationTypes, entities: dashboardOrganisationTypes } = useDashboardOrganisationTypes();
    const { getMany: getManyDashboardOrganisations, fetching: fetchingDashboardOrganisations, entities: dashboardOrganisations } = useDashboardOrganisations();
    const { getMany: getManyDashboardShallows, fetching: fetchingDashboardShallows, entities: dashboardShallows } = useDashboardShallows();

    const dashboards = computed(() => {
      return dashboardOrganisationTypes.value.map(rot => ({
        id: rot.id,
        icon: rot.icon,
        label: rot.label,
        type: DashboardType.OrganisationType
      })).concat(dashboardOrganisations.value.map(ro => ({
        id: ro.id,
        icon: ro.icon,
        label: ro.label,
        type: DashboardType.Organisation
      }))).concat(dashboardShallows.value.map(rs => ({
        id: rs.id,
        icon: rs.icon,
        label: rs.label,
        type: DashboardType.Shallow
      })));
    });

    const loading = computed((): boolean => {
      return init.value && (fetchingDashboardOrganisationTypes.value || fetchingDashboardOrganisations.value || fetchingDashboardShallows.value);
    });

    const innerUpdate = (value: Dashboard[] | Dashboard | null) => {
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
        getManyDashboardOrganisationTypes({ ...props.dashboardOrganisationTypeFilters, search: search ?? undefined }),
        getManyDashboardOrganisations({ ...props.dashboardOrganisationFilters, search: search ?? undefined }),
        getManyDashboardShallows({ ...props.dashboardShallowFilters, search: search ?? undefined })
      ]);
    };

    const { toggleSet, init, onUpdate } = useAutocomplete(
      dashboards,
      [() => props.dashboardOrganisationTypeFilters, () => props.dashboardOrganisationFilters, () => props.dashboardShallowFilters],
      emit,
      innerFetch,
      innerUpdate
    );

    return {
      dashboards,
      toggleSet,
      loading,
      dashboardTypeColor,
      dashboardTypeLabel,
      onUpdate
    };
  }
});

interface Dashboard {
  id: string;
  icon: string;
  label: string;
  type: DashboardType;
}
</script>