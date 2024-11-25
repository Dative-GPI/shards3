<template>
  <FSChartTileUI
    v-if="chart"
    :label="chart.label"
    :icon="chart.icon"
    :type="chart.chartType"
    :imageId="chart.imageId"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, watch } from "vue";

import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { chartIcon } from "@dative-gpi/foundation-shared-components/tools";

import { useChartOrganisation, useChartOrganisationType } from "@dative-gpi/foundation-core-services/composables";
import { ApplicationScope } from "@dative-gpi/foundation-shared-domain/enums";

import FSChartTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSChartTileUI.vue";

export default defineComponent({
  name: "FSChartTile",
  components: {
    FSChartTileUI
  },
  props: {
    chartId: {
      type: String,
      required: true
    },
    scope: {
      type: Object as PropType<ApplicationScope | number>,
      required : true
    }
  },
  setup(props) {
    const { get : fetchChartOrganisationType, entity : chartOrganisationType } = useChartOrganisationType();
    const { get : fetchChartOrganisation, entity : chartOrganisation } = useChartOrganisation();

    const chart = computed(() => {
      if (props.scope == ApplicationScope.Organisation) {
        return chartOrganisation.value;
      }
      else if (props.scope == ApplicationScope.OrganisationType) {
        return chartOrganisationType.value;
      }
      else {
        return null
      }
    });

    watch(() => [props.chartId, props.scope], () => {
      if (props.scope == ApplicationScope.Organisation) {
        fetchChartOrganisation(props.chartId);
      }
      else if (props.scope == ApplicationScope.OrganisationType) {
        fetchChartOrganisationType(props.chartId)
      }
    }, {immediate : true})

    return {
      ColorEnum,
      chart,
      chartIcon
    };
  }
});
</script>