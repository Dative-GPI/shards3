<template>
  <FSDataTable
    rowGap="6px"
    :rowColor="criticityColor"
    :itemTo="$props.itemTo"
    :items="alertsOrdered"
    :loading="fetchingAlerts"
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
      #item.criticity="{ item }"
    >
      <FSRow
        :wrap="false" 
        align="center-left"
        gap="2px"
      >
        <FSIcon
          :color="AlertTools.criticityColor(item.criticity)"
        >
          {{ AlertTools.criticityIcon(item.criticity) }}
        </FSIcon>
        <FSSpan>
          {{ AlertTools.criticityLabel(item.criticity) }}
        </FSSpan>
      </FSRow>
    </template>
    <template
      #item.icon="{ item }"
    >
      <FSIcon>
        {{ item.icon }}
      </FSIcon>
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
      #item.groupByValues="{ item }"
    >
      <FSTagGroup
        variant="slide"
        :tags="item.groupByValues.map((gbv: any) => `${gbv.label}: ${gbv.value}`)"
        :editable="false"
      />
    </template>
    <template
      #item.deviceOrganisationImageId="{ item }"
    >
      <FSImage
        v-if="item.deviceOrganisationImageId != null"
        width="32px"
        height="32px"
        :imageId="item.deviceOrganisationImageId"
        :thumbnail="true"
      />
    </template>
    <template
      #item.acknowledged="{ item }"
    >
      <FSSpan
        v-if="item.acknowledged"
        font="text-overline"
      >
        {{ $tr('entity.alert.acknowledged', 'Acknowledged') }}
      </FSSpan>
      <FSButtonAcknowledgeAlert
        v-else-if="!item.acknowledged && $props.allowAcknowledge"
        :alertId="item.id"
      />
      <FSSpan
        v-else
        font="text-overline"
      >
        {{ $tr('ui.alert.not-acknowledged', 'Not acknowledged') }}
      </FSSpan>
    </template>
    <template
      #item.acknowledgingUserImageId="{ item }"
    >
      <FSImage
        v-if="item.acknowledged && item.acknowledgingUserImageId != null"
        width="32px"
        height="32px"
        :imageId="item.acknowledgingUserImageId"
        :thumbnail="true"
      />
    </template>
    <template
      #item.acknowledgingTimestamp="{ item }"
    >
      <FSSpan
        font="text-overline"
      >
        {{ epochToShortTimeFormat(item.acknowledgingTimestamp) }}
      </FSSpan>
    </template>
    <template
      #item.history="{ item }"
    >
      <FSTagGroup
        variant="slide"
        :tags="item.history.map((h: any) => AlertTools.statusLabel(h.status))"
        :editable="false"
      />
    </template>
    <template
      #item.initialState="{ item }"
    >
      <FSSpan
        font="text-overline"
      >
        {{ AlertTools.statusLabel(item.initialState.status) }}
      </FSSpan>
    </template>
    <template
      #item.triggerSourceTimestamp="{ item }"
    >
      <FSSpan
        font="text-overline"
      >
        {{ epochToShortTimeFormat(item.triggerSourceTimestamp) }}
      </FSSpan>
    </template>
    <template
      #item.triggerEnqueuedTimestamp="{ item }"
    >
      <FSSpan
        font="text-overline"
      >
        {{ epochToShortTimeFormat(item.triggerEnqueuedTimestamp) }}
      </FSSpan>
    </template>
    <template
      #item.triggerProcessedTimestamp="{ item }"
    >
      <FSSpan
        font="text-overline"
      >
        {{ epochToShortTimeFormat(item.triggerProcessedTimestamp) }}
      </FSSpan>
    </template>
    <template
      #item.lastState="{ item }"
    >
      <FSSpan
        font="text-overline"
      >
        {{ AlertTools.statusLabel(item.lastState.status) }}
      </FSSpan>
    </template>
    <template
      #item.currentSourceTimestamp="{ item }"
    >
      <FSSpan
        font="text-overline"
      >
        {{ epochToShortTimeFormat(item.currentSourceTimestamp) }}
      </FSSpan>
    </template>
    <template
      #item.currentEnqueuedTimestamp="{ item }"
    >
      <FSSpan
        font="text-overline"
      >
        {{ epochToShortTimeFormat(item.currentEnqueuedTimestamp) }}
      </FSSpan>
    </template>
    <template
      #item.currentProcessedTimestamp="{ item }"
    >
      <FSSpan
        font="text-overline"
      >
        {{ epochToShortTimeFormat(item.currentProcessedTimestamp) }}
      </FSSpan>
    </template>
    <template
      #item.tile="{ item }"
    >
      <FSAlertTileUI
        variant="standard"
        :label="item.label"
        :deviceOrganisationLabel="item.deviceOrganisationLabel"
        :icon="item.icon"
        :triggerProcessedTimestamp="item.triggerProcessedTimestamp"
        :to="$props.itemTo && $props.itemTo(item)"
        :color="alertColorByCriticity(item.criticity)"
      />
    </template>
  </FSDataTable>
</template>

<script lang="ts">
import type { PropType} from "vue";
import type { RouteLocation } from "vue-router";
import { computed, defineComponent, watch } from "vue";
import _ from "lodash";

import type { AlertFilters, AlertInfos } from "@dative-gpi/foundation-core-domain/models";
import { useDateFormat } from "@dative-gpi/foundation-shared-services/composables";
import { useAlerts } from "@dative-gpi/foundation-core-services/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import type { Criticity } from "@dative-gpi/foundation-shared-domain/enums";
import { AlertStatus } from "@dative-gpi/foundation-shared-domain/enums";

import { AlertTools } from "@dative-gpi/foundation-shared-components/tools";

import FSDataTable from "../FSDataTable.vue";
import FSButtonAcknowledgeAlert from "./FSButtonAcknowledgeAlert.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";
import FSSpan from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSImage from "@dative-gpi/foundation-shared-components/components/FSImage.vue";
import FSTagGroup from "@dative-gpi/foundation-shared-components/components/FSTagGroup.vue";
import FSAlertTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSAlertTileUI.vue";

export default defineComponent({
  name: "FSBaseAlertsList",
  components: {
    FSButtonAcknowledgeAlert,
    FSAlertTileUI,
    FSDataTable,
    FSTagGroup,
    FSImage,
    FSIcon,
    FSSpan,
    FSRow
  },
  props: {
    tableCode: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    alertFilters: {
      type: Object as PropType<AlertFilters>,
      required: false,
      default: null
    },
    notAcknowledged:{
      type: Boolean,
      required: false,
    },
    hidePending:{
      type: Boolean,
      required: false,
    },
    modelValue: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => []
    },
    allowAcknowledge: {
      type: Boolean,
      required: false,
      default: false
    },
    itemTo: {
      type: Function as PropType<(item: AlertInfos) => Partial<RouteLocation>>,
      required: false
    },
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { getMany: getManyAlerts, entities: alerts, fetching : fetchingAlerts } = useAlerts();
    const { epochToShortTimeFormat } = useDateFormat();


    const criticityColor = (row: any) => {
      return AlertTools.criticityColor(row.criticity);
    };

    const alertColorByCriticity = (criticity: Criticity | number) => {
      return AlertTools.criticityColor(criticity);
    };

    const alertsOrdered = computed(() => {
      const als = [...alerts.value]
      return  als.sort((a: AlertInfos, b: AlertInfos) => {
        return (a.acknowledged === b.acknowledged) ?
          +b.currentSourceTimestamp! - +a.currentSourceTimestamp! : a.acknowledged ? 1 : -1
      }); 
    });

    watch(() => [props.alertFilters, props.notAcknowledged, props.hidePending], (next, previous) => {
      if (!_.isEqual(next, previous)) {
        if(props.notAcknowledged){
          getManyAlerts({
            ...props.alertFilters,
            acknowledged: false,
            statuses: [AlertStatus.Unresolved, AlertStatus.Triggered],
          });
        }
        else{
          getManyAlerts({
            ...props.alertFilters,
            statuses: props.hidePending ?
              [AlertStatus.Unresolved, AlertStatus.Resolved, AlertStatus.Triggered] : props.alertFilters?.statuses
          }); // TODO, gérer les conditions pour que les alertes s'affichent ici notamment lorsqu'elles sont acquittées
          // la FilterFactory gère pas ces conditions correctement
        }
      }
    }, { immediate: true });


    return {
      fetchingAlerts,
      alertsOrdered,
      AlertTools,
      ColorEnum,
      epochToShortTimeFormat,
      alertColorByCriticity,
      criticityColor
    };
  }
});
</script>