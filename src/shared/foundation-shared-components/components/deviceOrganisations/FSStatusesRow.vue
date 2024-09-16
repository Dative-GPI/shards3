<template>
  <FSRow
    align="center-left"
    gap="4px"
    :wrap="false"
  >
    <FSConnectivity
      v-if="$props.deviceConnectivity && $props.deviceConnectivity.status != ConnectivityStatus.None"
      :deviceConnectivity="$props.deviceConnectivity"
    />
    <FSWorstAlert
      v-if="$props.deviceWorstAlert"
      :deviceWorstAlert="$props.deviceWorstAlert"
      :deviceAlerts="$props.deviceAlerts"
      :alertTo="$props.alertTo"
    />
    <template
      v-for="(modelStatus, index) in $props.modelStatuses"
    >
      <FSStatus
        v-if="deviceStatus(modelStatus)"
        :statusGroup="deviceStatus(modelStatus)"
        :modelStatus="modelStatus"
        :key="index"
      />
    </template>
  </FSRow>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

import type { FSDeviceAlert, FSDeviceConnectivity, FSDeviceStatus, FSDeviceStatusGroup, FSModelStatus } from "@dative-gpi/foundation-shared-components/models";
import { ConnectivityStatus } from "@dative-gpi/foundation-shared-domain/enums";

import FSConnectivity from "./FSConnectivity.vue";
import FSWorstAlert from "./FSWorstAlert.vue";
import FSStatus from "./FSStatus.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSStatusesRow",
  components: {
    FSConnectivity,
    FSWorstAlert,
    FSStatus,
    FSRow
  },
  props: {
    deviceConnectivity: {
      type: Object as PropType<FSDeviceConnectivity>,
      required: false,
      default: null
    },
    deviceWorstAlert: {
      type: Object as PropType<FSDeviceAlert>,
      required: false,
      default: null
    },
    deviceAlerts: {
      type: Array as PropType<FSDeviceAlert[]>,
      required: false,
      default: () => []
    },
    modelStatuses: {
      type: Array as PropType<FSModelStatus[]>,
      required: true
    },
    deviceStatuses: {
      type: Array as PropType<FSDeviceStatus[]>,
      required: true
    },
    alertTo: {
      type: Function,
      required: false,
      default: null
    }
  },
  setup(props) {
    const deviceStatus = (modelStatus: FSModelStatus): FSDeviceStatusGroup | null => {
      const deviceStatus = props.deviceStatuses
        .find((deviceStatus: FSDeviceStatus) => deviceStatus.modelStatusId === modelStatus.id);
      if (deviceStatus != null) {
        return deviceStatus.statusGroups[0];
      }
      if (modelStatus.showDefault) {
        return {
          label: modelStatus.label,
          icon: modelStatus.iconDefault!,
          color: modelStatus.colorDefault!
        };
      }
      return null;
    };

    return {
      ConnectivityStatus,
      deviceStatus
    };
  }
});
</script>