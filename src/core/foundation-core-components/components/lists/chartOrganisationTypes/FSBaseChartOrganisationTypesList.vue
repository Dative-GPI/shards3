<template>
  <FSDataTable
    :items="chartOrganisationTypes"
    :itemTo="$props.itemTo"
    :loading="fetchingChartOrganisationTypes"
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
      #item.tile="{item}"
    >
      <FSChartTileUI
        :label="item.label"
        :category-label="item.chartCategoryLabel"
        :icon="item.icon"
        :imageId="item.imageId"
        :type="item.chartType"
        :to="$props.itemTo && $props.itemTo(item)"
      />
    </template>
  </FSDataTable>
</template>

<script lang="ts">
import _ from "lodash";
import { defineComponent, type PropType, watch } from "vue";
import type { RouteLocation } from "vue-router";

import {ColorEnum} from "@dative-gpi/foundation-shared-components/models";

import type { ChartOrganisationTypeFilters, ChartOrganisationTypeInfos } from "@dative-gpi/foundation-core-domain/models";

import { useChartOrganisationTypes } from "@dative-gpi/foundation-core-services/composables";

import FSChartTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSChartTileUI.vue";
import FSDataTable from "../FSDataTable.vue";
import FSTagGroup from "@dative-gpi/foundation-shared-components/components/FSTagGroup.vue";
import FSImage from "@dative-gpi/foundation-shared-components/components/FSImage.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";

export default defineComponent({
  name: "FSBaseChartOrganisationTypesList",
  components: {
    FSChartTileUI,
    FSDataTable,
    FSTagGroup,
    FSImage,
    FSIcon
  },
  props: {
    tableCode: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    chartOrganisationTypeFilters: {
      type: Object as PropType<ChartOrganisationTypeFilters>,
      required: false,
      default: null
    },
    itemTo: {
      type: Function as PropType<(item: ChartOrganisationTypeInfos) => Partial<RouteLocation>>,
      required: false
    },
    modelValue: {
      type: Array as PropType<string[]>,
      default: () => [],
      required: false
    }
  },
  emits: ["update:modelValue"],
  setup(props) {

    const { entities: chartOrganisationTypes, fetching: fetchingChartOrganisationTypes, getMany: getManyChartOrganisationTypes } = useChartOrganisationTypes();

    const isSelected = (id: string): boolean => {
      return props.modelValue.includes(id);
    };

    const fetch = () =>{
      getManyChartOrganisationTypes(props.chartOrganisationTypeFilters);
    };

    watch(() => [props.chartOrganisationTypeFilters], (next, previous) => {
      if ((!next && !previous) || !_.isEqual(next, previous)) {
        fetch();
      }
    }, { immediate: true });

    return {
      ColorEnum,
      fetchingChartOrganisationTypes,
      chartOrganisationTypes,
      isSelected
    };
  }
});
</script>