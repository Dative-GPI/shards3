<template>
  <FSDataTable
    :loading="fetchingChartOrganisationTypes || fetchingChartOrganisations"
    :items="charts"
    :tableCode="$props.tableCode"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
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

import {ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import type { ChartOrganisationFilters, ChartOrganisationTypeFilters } from "@dative-gpi/foundation-core-domain/models";

import { useChartOrganisations, useChartOrganisationTypes } from "@dative-gpi/foundation-core-services/composables";

import FSChartTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSChartTileUI.vue";
import FSTagGroup from "@dative-gpi/foundation-shared-components/components/FSTagGroup.vue";
import FSImage from "@dative-gpi/foundation-shared-components/components/FSImage.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSDataTable from "../FSDataTable.vue";

export default defineComponent({
  name: "FSBaseChartsList",
  components: {
    FSChartTileUI,
    FSDataTable,
    FSTagGroup,
    FSImage,
    FSIcon
  },
  props: {
    modelValue: {
      type: Array as PropType<string[]>,
      default: () => [],
      required: false
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
    tableCode: {
      type: String,
      required: true
    }
  },
  emits: ["update:modelValue"],
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
      return chartOrganisations.value.map(c => {
        return {
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
        }
      })
        .concat(chartOrganisationTypes.value.map(c => {
          return {
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
          }
        }))
    })

    const update = (value : string) =>
    {
      const item = isSelected(value);

      if(item){
        emit("update:modelValue", props.modelValue.filter(m => m != value))
      }
      else{
        emit("update:modelValue", [...props.modelValue, value])
      }
    }
 
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
      ColorEnum,
      charts,
      isSelected,
      update
    };
  }
});
</script>
