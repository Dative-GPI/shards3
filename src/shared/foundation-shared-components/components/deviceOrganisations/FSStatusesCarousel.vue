<template>
  <FSCarousel>
    <template #prev="{ props }">
      <FSButton
        v-if="$props.modelStatuses.length > 1"
        variant="icon"
        icon="mdi-chevron-left"
        :color="ColorEnum.Dark"
        @click="props.onClick"
      />
    </template>
    <template #next="{ props }">
      <FSButton
        v-if="$props.modelStatuses.length > 1"
        variant="icon"
        icon="mdi-chevron-right"
        :color="ColorEnum.Dark"
        @click="props.onClick"
      />
    </template>
    <FSRow
      v-for="(modelStatus, index) in $props.modelStatuses"
      align="center-center"
      width="hug"
      gap="4"
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
  </FSCarousel>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, toRefs } from "vue";

import { FSDeviceStatus, FSDeviceStatusGroup, FSModelStatus } from "@dative-gpi/foundation-shared-components/models";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSCarousel from "../FSCarousel.vue";
import FSButton from "../FSButton.vue";
import FSStatus from "./FSStatus.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSStatusesCarousel",
  components: {
    FSCarousel,
    FSButton,
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

    const tab = ref(0);

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
      tab,
      ColorEnum,
      deviceStatus
    };
  }
});
</script>