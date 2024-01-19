<template>
  <FSTile
    :bottomColor="ColorBase.Primary"
    :editable="$props.editable"
    :modelValue="$props.modelValue"
    v-bind="$attrs"
  >
    <FSCol>
      <FSRow :gap="gap" :wrap="false">
        <FSCol width="194px">
          <FSSpan
            lineClamp="2"
            font="text-button"
          >
            {{ $props.label }}
          </FSSpan>
          <FSSpan font="text-overline">
            {{ $props.code }}
          </FSSpan>
          <FSRow gap="2" :wrap="false">
            <FSStatusRow
              v-for="(deviceStatus, index) in singleStatuses"
              :key="index"
              :statusGroups="deviceStatus.statusGroups"
            />
          </FSRow>
        </FSCol>
        <FSImage
          :imageId="$props.imageId"
          :width="imageSize"
        />
      </FSRow>
    </FSCol>
  </FSTile>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from "vue";

import { FSModelStatus, FSDeviceStatus } from "@dative-gpi/foundation-shared-components/models";
import { useBreakpoints } from "@dative-gpi/foundation-shared-components/composables";
import { ColorBase } from "@dative-gpi/foundation-shared-components/themes";

import FSStatusRow from "../deviceOrganisations/FSStatusRow.vue";
import FSImage from "../FSImage.vue";
import FSSpan from "../FSSpan.vue";
import FSTile from "../FSTile.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSDeviceOrganisationTileUI",
  components: {
    FSStatusRow,
    FSImage,
    FSTile,
    FSSpan,
    FSCol,
    FSRow
  },
  props: {
    imageId: {
      type: String,
      required: false,
      default: null
    },
    label: {
      type: String,
      required: false,
      default: null
    },
    code: {
      type: String,
      required: false,
      default: null
    },
    modelStatuses: {
      type: Array as PropType<FSModelStatus[]>,
      required: true,
      default: () => []
    },
    deviceStatuses: {
      type: Array as PropType<FSDeviceStatus[]>,
      required: true,
      default: () => []
    },
    modelValue: {
      type: Boolean,
      required: false,
      default: false
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  setup(props) {
    const { modelStatuses, deviceStatuses } = toRefs(props);

    const singleStatuses = computed((): FSDeviceStatus[] => {
      return deviceStatuses.value.filter(deviceStatus => {
        return modelStatuses.value.some(modelStatus => !modelStatus.groupById && modelStatus.id === deviceStatus.modelStatusId);
      });
    });

    const groupedStatuses = computed((): FSDeviceStatus[] => {
      return deviceStatuses.value.filter(deviceStatus => {
        return modelStatuses.value.some(modelStatus => modelStatus.groupById && modelStatus.id === deviceStatus.modelStatusId);
      });
    });

    const imageSize = computed((): number => {
      return useBreakpoints().isMobileSized() ? 96 : 110;
    });

    const gap = computed((): number => {
      return useBreakpoints().isMobileSized() ? 16 : 24;
    });

    return {
      singleStatuses,
      groupedStatuses,
      ColorBase,
      imageSize,
      gap
    };
  }
});
</script>