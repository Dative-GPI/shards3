<template>
  <FSDataTable
    :items="chartOrganisations"
    :itemTo="$props.itemTo"
    :loading="fetchingChartOrganisations"
    :headersOptions="headersOptions"
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
  </FSDataTable>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, watch } from "vue";
import type { RouteLocation } from "vue-router";
import _ from "lodash";

import { ChartType } from "@dative-gpi/foundation-shared-domain/enums";
import { getEnumEntries } from "@dative-gpi/foundation-shared-domain/tools";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { chartTypeLabel, chartIcon } from "@dative-gpi/foundation-shared-components/tools";

import type { ChartModelLabel, ChartOrganisationFilters, ChartOrganisationInfos } from "@dative-gpi/foundation-core-domain/models";
import { useChartOrganisations } from "@dative-gpi/foundation-core-services/composables";


import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSImage from "@dative-gpi/foundation-shared-components/components/FSImage.vue";
import FSTagGroup from "@dative-gpi/foundation-shared-components/components/FSTagGroup.vue";
import FSChartTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSChartTileUI.vue";

import FSDataTable from "../FSDataTable.vue";


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
    itemTo: {
      type: Function as PropType<(item: ChartOrganisationInfos) => Partial<RouteLocation>>,
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
    const { entities: chartOrganisations, fetching: fetchingChartOrganisations, getMany: getManyChartOrganisations } = useChartOrganisations();

    const headersOptions = computed(() => ({
      modelsLabels: {
        fixedFilters: chartOrganisations.value.map(c => c.modelsLabels).reduce((acc, models) => {
          for (const m of models) {
            if (!acc.map((m) => m.id).includes(m.id)) {
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


    const isSelected = (id: string): boolean => {
      return props.modelValue.includes(id);
    };

    const fetch = () =>{
      getManyChartOrganisations(props.chartOrganisationFilters);
    }
 
    watch(() => [props.chartOrganisationFilters], (next, previous) => {
      if ((!next && !previous) || !_.isEqual(next, previous)) {
        fetch();
      }
    }, { immediate: true });

    return {
      fetchingChartOrganisations,
      chartOrganisations,
      headersOptions,
      ColorEnum,
      chartTypeLabel,
      isSelected,
      chartIcon
    };
  }
});
</script>