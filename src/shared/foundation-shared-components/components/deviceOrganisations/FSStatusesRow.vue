<template>
  <FSRow
    v-for="(modelStatus, index) in $props.modelStatuses"
    align="center-center"
    width="hug"
    :gap="4"
    :key="index"
    :wrap="false"
  >
    <FSStatus
      v-for="(statusGroup, index) in deviceStatus(modelStatus)"
      :modelStatus="modelStatus"
      :statusGroup="statusGroup"
      :key="index"
    />
  </FSRow>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";

import { FSDeviceStatus, FSDeviceStatusGroup, FSModelStatus } from "@dative-gpi/foundation-shared-components/models";

import FSStatus from "./FSStatus.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSStatusesRow",
  components: {
    FSStatus,
    FSRow
  },
  props: {
    modelStatuses: {
      type: Array as PropType<FSModelStatus[]>,
      required: true
    },
    deviceStatuses: {
      type: Array as PropType<FSDeviceStatus[]>,
      required: true
    }
  },
  setup(props) {
    const { deviceStatuses } = toRefs(props);

    const deviceStatus = (modelStatus: FSModelStatus): FSDeviceStatusGroup[] => {
      const deviceStatus = deviceStatuses.value
        .find((deviceStatus: FSDeviceStatus) => deviceStatus.modelStatusId === modelStatus.id);
      if (deviceStatus != null) {
        return deviceStatus.statusGroups;
      }
      if (modelStatus.showDefault) {
        return [{
          label: modelStatus.label,
          value: null,
          icon: modelStatus.iconDefault,
          color: modelStatus.colorDefault
        }];
      }
      return [];
    }

    return {
      deviceStatus
    };
  }
});
</script>