<template>
  <FSDataTable
    :items="chartOrganisations"
    :itemTo="$props.itemTo"
    :loading="fetchingChartOrganisations"
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
        :to="$props.itemTo && $props.itemTo(item)"
      />
    </template>
  </FSDataTable>
</template>

<script lang="ts">
import { defineComponent, type PropType, watch } from "vue";
import type { RouteLocation } from "vue-router";
import _ from "lodash";

import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { PlotPer } from "@dative-gpi/foundation-shared-domain/enums";

import { type ChartOrganisationFilters, type ChartOrganisationInfos } from "@dative-gpi/foundation-core-domain/models";
import { useChartOrganisations } from "@dative-gpi/foundation-core-services/composables";

import FSDataTable from "../FSDataTable.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSImage from "@dative-gpi/foundation-shared-components/components/FSImage.vue";
import FSTagGroup from "@dative-gpi/foundation-shared-components/components/FSTagGroup.vue";
import FSChartTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSChartTileUI.vue";

export default defineComponent({
  name: "FSBaseChartOrganisationsList",
  components: {
    FSDataTable,
    FSIcon,
    FSImage,
    FSTagGroup,
    FSChartTileUI
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
    plotPer: {
      type: Number as PropType<PlotPer>,
      required: false,
      default: PlotPer.None
    },
    tableCode: {
      type: String,
      required: true
    },
    itemTo: {
      type: Function as PropType<(item: ChartOrganisationInfos) => Partial<RouteLocation>>,
      required: false
    }
  },
  emits: ["update:modelValue"],
  setup(props) {

    const { entities: chartOrganisations, fetching: fetchingChartOrganisations, getMany: getManyChartOrganisations } = useChartOrganisations();

    const isSelected = (id: string): boolean => {
      return props.modelValue.includes(id);
    };

    const fetch = () =>{
      if(props.plotPer === PlotPer.None) {
        getManyChartOrganisations(props.chartOrganisationFilters);
      } else {
        getManyChartOrganisations({...props.chartOrganisationFilters, plotPer: props.plotPer});
      }
    }
 
    watch(() => [props.chartOrganisationFilters, props.plotPer], (next, previous) => {
      if ((!next && !previous) || !_.isEqual(next, previous)) {
        fetch();
      }
    }, { immediate: true });
    

    return {
      ColorEnum,
      fetchingChartOrganisations,
      chartOrganisations,
      isSelected
    };
  }
});
</script>