<template>
  <FSAutocompleteField
    :toggleSet="!$props.toggleSetDisabled && toggleSet"
    :multiple="$props.multiple"
    :placeholder="placeholder"
    :loading="loading"
    :items="charts"
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
        :color="chartOriginColor(item.type)"
        :label="chartOriginLabel(item.type)"
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
            :color="chartOriginColor(props.item.type)"
            :label="chartOriginLabel(props.item.type)"
            :editable="false"
          />
        </template>
      </FSButton>
    </template>
  </FSAutocompleteField>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { type ChartOrganisationFilters, type ChartOrganisationTypeFilters } from "@dative-gpi/foundation-core-domain/models";
import { useChartOrganisations, useChartOrganisationTypes } from "@dative-gpi/foundation-core-services/composables";
import { useAutocomplete } from "@dative-gpi/foundation-shared-components/composables";
import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui";

import { chartOriginColor, chartOriginLabel } from "@dative-gpi/foundation-shared-components/tools";
import { ChartOrigin } from "@dative-gpi/foundation-shared-domain/enums";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";
import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";
import FSChip from "@dative-gpi/foundation-shared-components/components/FSChip.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";

export default defineComponent({
  name: "FSAutocompleteChart",
  components: {
    FSAutocompleteField,
    FSButton,
    FSChip,
    FSIcon
  },
  props: {
    chartOrganisationTypeFilters: {
      type: Object as PropType<ChartOrganisationTypeFilters>,
      required: false,
      default: null
    },
    chartOrganisationFilters: {
      type: Object as PropType<ChartOrganisationFilters>,
      required: false,
      default: null
    },
    modelValue: {
      type: [Array, String] as PropType<string[] | string | null>,
      required: false,
      default: null
    },
    type: {
      type: [Array, Number] as PropType<ChartOrigin[] | ChartOrigin>,
      required: false,
      default: ChartOrigin.None
    },
    ignoreChartOrganisationTypes: {
      type: Boolean,
      required: false,
      default: false
    },
    ignoreChartOrganisations: {
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
    const { getMany: getManyChartOrganisationTypes, fetching: fetchingChartOrganisationTypes, entities: chartOrganisationTypes } = useChartOrganisationTypes();
    const { getMany: getManyChartOrganisations, fetching: fetchingChartOrganisations, entities: chartOrganisations } = useChartOrganisations();
    const { $tr } = useTranslationsProvider();

    const charts = computed(() => {
      return chartOrganisationTypes.value.map(rot => ({
        id: rot.id,
        icon: rot.icon,
        label: rot.label,
        type: ChartOrigin.OrganisationType
      })).concat(chartOrganisations.value.map(ro => ({
        id: ro.id,
        icon: ro.icon,
        label: ro.label,
        type: ChartOrigin.Organisation
      })));
    });

    const loading = computed((): boolean => {
      return init.value && (fetchingChartOrganisationTypes.value || fetchingChartOrganisations.value);
    });

    const placeholder = computed((): string | null => {
      if (props.multiple && props.modelValue) {
        return $tr("ui.autocomplete-chart.placeholder", "{0} chart(s) selected", props.modelValue.length);
      }
      return null;
    });

    const update = (value: Chart[] | Chart | null) => {
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
      if (!props.ignoreChartOrganisationTypes) {
        promises.push(getManyChartOrganisationTypes({ ...props.chartOrganisationTypeFilters, search: search ?? undefined }));
      }
      if (!props.ignoreChartOrganisations) {
        promises.push(getManyChartOrganisations({ ...props.chartOrganisationFilters, search: search ?? undefined }));
      }
      return Promise.all(promises);
    };

    const { toggleSet, init, onUpdate } = useAutocomplete(
      charts,
      [() => props.chartOrganisationTypeFilters, () => props.chartOrganisationFilters],
      emit,
      fetch,
      update
    );

    return {
      placeholder,
      toggleSet,
      loading,
      charts,
      chartOriginColor,
      chartOriginLabel,
      onUpdate
    };
  }
});

interface Chart {
  id: string;
  icon: string;
  label: string;
  type: ChartOrigin;
}
</script>