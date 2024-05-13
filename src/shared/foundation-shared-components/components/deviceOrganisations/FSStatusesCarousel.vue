<template>
  <FSRow
    :wrap="false"
  >
    <FSButton
      v-if="$props.modelStatuses.length > 1"
      icon="mdi-chevron-left"
      class="fs-stopclick"
      variant="icon"
      @click.prevent.stop="previous"
    />
    <FSWindow
      width="100%"
      :modelValue="tab"
    >
      <FSRow
        v-for="(modelStatus, index) in $props.modelStatuses"
        align="center-center"
        gap="4px"
        :wrap="false"
        :key="index"
      >
        <FSStatus
          v-for="(statusGroup, index) in deviceStatus(modelStatus)"
          :modelStatus="modelStatus"
          :statusGroup="statusGroup"
          :key="index"
        />
      </FSRow>
    </FSWindow>
    <FSButton
      v-if="$props.modelStatuses.length > 1"
      icon="mdi-chevron-right"
      class="fs-stopclick"
      variant="icon"
      @click.prevent.stop="next"
    />
  </FSRow>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";

import { FSDeviceStatus, FSDeviceStatusGroup, FSModelStatus } from "@dative-gpi/foundation-shared-components/models";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSButton from "../FSButton.vue";
import FSWindow from "../FSWindow.vue";
import FSStatus from "./FSStatus.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSStatusesCarousel",
  components: {
    FSButton,
    FSWindow,
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
    const tab = ref(0);

    const previous = () => {
      if (tab.value > 0) {
        tab.value--;
      }
      else {
        tab.value = props.modelStatuses.length - 1;
      }
    };

    const next = () => {
      if (tab.value < props.modelStatuses.length - 1) {
        tab.value++;
      }
      else {
        tab.value = 0;
      }
    };

    const deviceStatus = (modelStatus: FSModelStatus): FSDeviceStatusGroup[] => {
      const deviceStatus = props.deviceStatuses
        .find((deviceStatus: FSDeviceStatus) => deviceStatus.modelStatusId === modelStatus.id);
      if (deviceStatus != null) {
        return deviceStatus.statusGroups;
      }
      if (modelStatus.showDefault) {
        return [{
          label: modelStatus.label,
          icon: modelStatus.iconDefault!,
          color: modelStatus.colorDefault!
        }];
      }
      return [];
    }

    return {
      ColorEnum,
      tab,
      deviceStatus,
      previous,
      next
    };
  }
});
</script>