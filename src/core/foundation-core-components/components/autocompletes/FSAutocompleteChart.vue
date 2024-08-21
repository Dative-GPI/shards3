<template>
  <FSAutocompleteField
    :toggleSet="!$props.toggleSetDisabled && toggleSet"
    :multiple="$props.multiple"
    :loading="loading"
    :items="charts"
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
          :color="chartOriginColor(item.raw.type)"
          :label="chartOriginLabel(item.raw.type)"
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
          :color="chartOriginColor(item.raw.type)"
          :label="chartOriginLabel(item.raw.type)"
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

import { type ChartOrganisationFilters, ChartOrigin, type ChartOrganisationTypeFilters } from "@dative-gpi/foundation-core-domain/models";
import { useChartOrganisations, useChartOrganisationTypes } from "@dative-gpi/foundation-core-services/composables";
import { useAutocomplete } from "@dative-gpi/foundation-shared-components/composables";

import { chartOriginColor, chartOriginLabel } from "../../utils";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";
import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";
import FSChip from "@dative-gpi/foundation-shared-components/components/FSChip.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSSpan from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";

export default defineComponent({
  name: "FSAutocompleteChart",
  components: {
    FSAutocompleteField,
    FSButton,
    FSChip,
    FSIcon,
    FSSpan,
    FSRow
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
      type: Number as PropType<ChartOrigin>,
      required: false,
      default: ChartOrigin.None
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
      return Promise.all([
        getManyChartOrganisationTypes({ ...props.chartOrganisationTypeFilters, search: search ?? undefined }),
        getManyChartOrganisations({ ...props.chartOrganisationFilters, search: search ?? undefined })
      ]);
    };

    const { toggleSet, search, init, onUpdate } = useAutocomplete(
      charts,
      [() => props.chartOrganisationTypeFilters, () => props.chartOrganisationFilters],
      emit,
      fetch,
      update
    );

    return {
      toggleSet,
      loading,
      search,
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