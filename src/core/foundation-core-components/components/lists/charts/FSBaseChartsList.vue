<template>
  <FSDataTable
    defaultMode="iterator"
    :loading="fetchingChartOrganisationTypes || fetchingChartOrganisations"
    :headersOptions="headersOptions"
    :items="charts"
    :tableCode="$props.tableCode"
    :modelValue="$props.modelValue"
    @update:modelValue="onSelect"
    v-bind="$attrs"
  >
    <template
      v-for="(_, name) in $slots"
      v-slot:[name]="slotData"
    >
      <slot
        :name="name"
        v-bind="slotData"
      />
    </template>
    <template
      #header.imageId-title
    >
      <FSIcon>
        mdi-panorama-variant-outline
      </FSIcon>
    </template>
    <template
      #item.icon="{ item }"
    >
      <FSIcon>
        {{ item.icon }}
      </FSIcon>
    </template>
    <template
      #item.imageId="{ item }"
    >
      <FSImage
        v-if="item.imageId"
        height="32px"
        width="32px"
        :imageId="item.imageId"
      />
    </template>
    <template
      #item.tags="{ item }"
    >
      <FSTagGroup
        variant="slide"
        :editable="false"
        :tags="item.tags"
      />
    </template>
    <template
      #item.chartType="{ item }"
    >
      <FSRow
        :wrap="false"
      >
        <FSIcon
          :icon="chartIcon(item.chartType)"
        />
        <FSText>
          {{ chartTypeLabel(item.chartType) }}
        </FSText>
      </FSRow>
    </template>
    <template
      #item.modelsLabels="{ item }"
    >
      <FSTagGroup
        :editable="false"
        :tags="item.modelsLabels.map((d: any) => d.label)"
      />
    </template>
    <template
      #item.tile="{ item }"
    >
      <FSChartTileUI
        :label="item.label"
        :categoryLabel="item.chartCategoryLabel"
        :icon="item.icon"
        :imageId="item.imageId"
        :type="item.chartType"
        :color="isSelected(item.id) ? ColorEnum.Primary : ColorEnum.Dark"
        @click="update(item.id)"
      />
    </template>
  </FSDataTable>
</template>

<script lang="ts">
import { defineComponent, type PropType, watch, computed } from "vue";
import _ from "lodash";

import { ChartType } from "@dative-gpi/foundation-shared-domain/enums";
import { getEnumEntries } from "@dative-gpi/foundation-shared-domain/tools";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { chartTypeLabel, chartIcon } from "@dative-gpi/foundation-shared-components/tools";

import type { ChartModelLabel, ChartOrganisationFilters, ChartOrganisationTypeFilters } from "@dative-gpi/foundation-core-domain/models";
import { useChartOrganisations, useChartOrganisationTypes } from "@dative-gpi/foundation-core-services/composables";

import FSChartTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSChartTileUI.vue";
import FSTagGroup from "@dative-gpi/foundation-shared-components/components/FSTagGroup.vue";
import FSImage from "@dative-gpi/foundation-shared-components/components/FSImage.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";

import FSDataTable from "../FSDataTable.vue";

export default defineComponent({
  name: "FSBaseChartsList",
  components: {
    FSChartTileUI,
    FSDataTable,
    FSTagGroup,
    FSImage,
    FSIcon,
    FSRow
  },
  props: {
    tableCode: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    chartOrganisationFilters: {
      type: Object as PropType<ChartOrganisationFilters>,
      required: false,
      default: null
    },
    chartOrganisationTypeFilters: {
      type: Object as PropType<ChartOrganisationTypeFilters>,
      required: false,
      default: null
    },
    modelValue: {
      type: Array as PropType<string[]>,
      default: () => [],
      required: false
    }
  },
  emits: ["update", "update:modelValue", "update:scope"],
  setup(props, { emit }) {
    const { entities: chartOrganisations, fetching: fetchingChartOrganisations, getMany: getManyChartOrganisations } = useChartOrganisations();
    const { entities: chartOrganisationTypes, fetching: fetchingChartOrganisationTypes, getMany: getManyChartOrganisationTypes } = useChartOrganisationTypes();

    const isSelected = (value : string): boolean => {
      return props.modelValue.includes(value);
    };

    const fetch = () =>{
      getManyChartOrganisations(props.chartOrganisationFilters);
      getManyChartOrganisationTypes(props.chartOrganisationTypeFilters)
    }

    const charts = computed(() => {
      return chartOrganisations.value.map(c => ({
        id: c.id,
        imageId: c.imageId,
        chartId: c.chartId,
        chartCategoryId: c.chartCategoryId,
        chartCategoryLabel: c.chartCategoryLabel,
        scope: c.scope,
        label: c.label,
        title: c.title,
        code: c.code,
        icon: c.icon,
        tags: c.tags,
        multiple: c.multiple,
        chartType: c.chartType,
        modelsLabels: c.modelsLabels
      })).concat(chartOrganisationTypes.value.map(c => ({
        id: c.id,
        imageId: c.imageId,
        chartId: c.chartId,
        chartCategoryId: c.chartCategoryId,
        chartCategoryLabel: c.chartCategoryLabel,
        scope: c.scope,
        label: c.label,
        title: c.title,
        code: c.code,
        icon: c.icon,
        tags: c.tags,
        multiple: c.multiple,
        chartType: c.chartType,
        modelsLabels: c.modelsLabels
      })));
    });

    const headersOptions = computed(() => ({
      modelsLabels: {
        fixedFilters: chartOrganisationTypes.value.map(c => c.modelsLabels).reduce((acc, models) => {
          for(const m of models){
            if(!acc.map((m) => m.id).includes(m.id)){
              acc.push(m);
            }
          }
          return acc;
        }, []).map((m) =>  ({
          value: m.id,
          text: m.label
        })),
        methodFilter: (value: string, items: ChartModelLabel[]) => items.some(ml => ml.id == value)
      },
      chartType: {
        fixedFilters: getEnumEntries(ChartType).filter(f => f.value != ChartType.None).map(e => ({
          value: e.value,
          text: chartTypeLabel(e.value)
        })),
        methodFilter: (value: ChartType, item: ChartType) => value == item
      }
    }));

    const update = (value : string) => {
      const item = isSelected(value);
      if (item) {
        onSelect(props.modelValue.filter(m => m != value));
      }
      else {
        onSelect([...props.modelValue, value]);
      }
    }

    const onSelect = (values: string[] | null) => {
      if(!values){
        emit("update:modelValue", []);
        emit("update:scope", []);
        emit("update", { modelValue: [], scope: [] });
        return;
      }
      const selectedItems = charts.value.filter(i => values.includes(i.id));
      emit("update:modelValue", selectedItems.map(i => i.id));
      emit("update:scope", selectedItems.map(i => i.scope));
      emit("update", { modelValue: selectedItems.map(i => i.id), scope: selectedItems.map(i => i.scope) });
    };
 
    watch(() => [props.chartOrganisationFilters,props.chartOrganisationTypeFilters], (next, previous) => {
      if ((!next && !previous) || !_.isEqual(next, previous)) {
        fetch();
      }
    }, { immediate: true });
    
    return {
      fetchingChartOrganisationTypes,
      fetchingChartOrganisations,
      chartOrganisationTypes,
      chartOrganisations,
      headersOptions,
      ColorEnum,
      charts,
      chartTypeLabel,
      isSelected,
      chartIcon,
      onSelect,
      update
    };
  }
});
</script>
