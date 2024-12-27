<template>
  <FSAutocompleteField
    :label="$props.label ?? $tr('ui.common.dashboard', 'Dashboard')"
    :toggleSet="!$props.toggleSetDisabled && toggleSet"
    :multiple="$props.multiple"
    :placeholder="placeholder"
    :items="dashboards"
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
    <template
      #item-append="{ item }"
    >
      <FSChip
        :color="dashboardTypeColor(item.type)"
        :label="dashboardTypeLabel(item.type)"
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
import { computed, defineComponent, type PropType } from "vue";

import { type DashboardOrganisationFilters, type DashboardOrganisationTypeFilters, type DashboardShallowFilters } from "@dative-gpi/foundation-core-domain/models";
import { useDashboardOrganisations, useDashboardOrganisationTypes, useDashboardShallows } from "@dative-gpi/foundation-core-services/composables";
import { useAutocomplete } from "@dative-gpi/foundation-shared-components/composables";
import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui";

import { DashboardType } from "@dative-gpi/foundation-shared-domain/enums";
import { dashboardTypeColor, dashboardTypeLabel } from "../../utils";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";
import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";
import FSChip from "@dative-gpi/foundation-shared-components/components/FSChip.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";


export default defineComponent({
  name: "FSAutocompleteDashboard",
  components: {
    FSAutocompleteField,
    FSButton,
    FSChip,
    FSIcon
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
      type: [Array, Number] as PropType<DashboardType[] | DashboardType>,
      required: false,
      default: DashboardType.None
    },
    ignoreDashboardOrganisationTypes: {
      type: Boolean,
      required: false,
      default: false
    },
    ignoreDashboardOrganisations: {
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
    },
    label: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    }
  },
  emits: ["update", "update:modelValue", "update:type"],
  setup(props, { emit }) {
    const { getMany: getManyDashboardOrganisationTypes, fetching: fetchingDashboardOrganisationTypes, entities: dashboardOrganisationTypes } = useDashboardOrganisationTypes();
    const { getMany: getManyDashboardOrganisations, fetching: fetchingDashboardOrganisations, entities: dashboardOrganisations } = useDashboardOrganisations();
    const { getMany: getManyDashboardShallows, fetching: fetchingDashboardShallows, entities: dashboardShallows } = useDashboardShallows();
    const { $tr } = useTranslationsProvider();

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

    const placeholder = computed((): string | null => {
      if (props.multiple && props.modelValue) {
        return $tr("autocomplete.dashboard.placeholder", "{0} dashboard(s) selected", props.modelValue.length);
      }
      return null;
    });

    const update = (value: Dashboard[] | Dashboard | null) => {
      if (Array.isArray(value)) {
        const newModelValue = value.map(v => v.id);
        const newType = value.map(v => v.type);
        emit("update:modelValue", newModelValue);
        emit("update:type", newType);
        emit("update", { modelValue: newModelValue, type: newType });
      }
      else {
        emit("update:modelValue", value?.id);
        emit("update:type", value?.type);
        emit("update", { modelValue: value?.id, type: value?.type });
      }
    };

    const fetch = (search: string | null) => {
      const promises = [];
      if (!props.ignoreDashboardOrganisationTypes) {
        promises.push(getManyDashboardOrganisationTypes({ ...props.dashboardOrganisationTypeFilters, search: search ?? undefined }));
      }
      if (!props.ignoreDashboardOrganisations) {
        promises.push(getManyDashboardOrganisations({ ...props.dashboardOrganisationFilters, search: search ?? undefined }));
        promises.push(getManyDashboardShallows({ ...props.dashboardShallowFilters, search: search ?? undefined }));
      }
      return Promise.all(promises);
    };

    const { toggleSet, init, onUpdate } = useAutocomplete(
      dashboards,
      [() => props.dashboardOrganisationTypeFilters, () => props.dashboardOrganisationFilters, () => props.dashboardShallowFilters],
      emit,
      fetch,
      update
    );

    return {
      placeholder,
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