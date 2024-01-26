<template>
  <FSTile
    :bottomColor="ColorEnum.Primary"
    :editable="$props.editable"
    :modelValue="$props.modelValue"
    v-bind="$attrs"
  >
    <FSCol
      align="center-center"
      gap="8"
    >
      <FSRow
        align="center-center"
        gap="24"
        :wrap="false"
      >
        <FSCol
          width="194px"
          gap="12"
        >
          <FSCol
            gap="6"
          >
            <FSSpan
              lineClamp="2"
              font="text-button"
            >
              {{ $props.label }}
            </FSSpan>
            <FSSpan
              font="text-overline"
            >
              {{ $props.code }}
            </FSSpan>
          </FSCol>
          <FSRow
            gap="4"
          >
            <FSConnectivity
              :deviceConnectivity="$props.deviceConnectivity"
            />
            <FSWorstAlert
              :deviceAlert="$props.deviceWorstAlert"
              :deviceAlerts="$props.deviceAlerts.length"
            />
            <FSStatusesRow
              :modelStatuses="lineModelStatuses"
              :deviceStatuses="lineDeviceStatuses"
            />
          </FSRow>
        </FSCol>
        <FSImage
          :imageId="$props.imageId"
          :width="imageSize"
        />
      </FSRow>
      <template v-if="carouselModelStatuses.length">
        <FSDivider />
        <FSStatusesCarousel
          :modelStatuses="carouselModelStatuses"
          :deviceStatuses="carouselDeviceStatuses"
        />
      </template>
    </FSCol>
  </FSTile>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from "vue";

import { FSModelStatus, FSDeviceStatus, FSDeviceAlert, FSDeviceConnectivity } from "@dative-gpi/foundation-shared-components/models";
import { useBreakpoints } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSStatusesCarousel from "../deviceOrganisations/FSStatusesCarousel.vue";
import FSConnectivity from "../deviceOrganisations/FSConnectivity.vue";
import FSStatusesRow from "../deviceOrganisations/FSStatusesRow.vue";
import FSWorstAlert from "../deviceOrganisations/FSWorstAlert.vue";
import FSDivider from "../FSDivider.vue";
import FSImage from "../FSImage.vue";
import FSSpan from "../FSSpan.vue";
import FSTile from "../FSTile.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSDeviceOrganisationTileUI",
  components: {
    FSStatusesCarousel,
    FSConnectivity,
    FSStatusesRow,
    FSWorstAlert,
    FSDivider,
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

    const { isMobileSized } = useBreakpoints();

    const lineModelStatuses = computed((): FSModelStatus[] => {
      return modelStatuses.value.filter(modelStatus => {
        if (!modelStatus.inline || modelStatus.groupById) {
          return false;
        }
        if (!modelStatus.showDefault) {
          if (!deviceStatuses.value.some(deviceStatus => deviceStatus.modelStatusId === modelStatus.id)) {
            return false;
          }
        }
        return true;
      }).slice(0, 4).sort((a, b) => a.index - b.index);
    });

    const lineDeviceStatuses = computed((): FSDeviceStatus[] => {
      return deviceStatuses.value.filter(deviceStatus => {
        return lineModelStatuses.value.some(modelStatus => modelStatus.id === deviceStatus.modelStatusId)
      });
    });

    const carouselModelStatuses = computed((): FSModelStatus[] => {
      const notCarouselModelStatuses = modelStatuses.value.filter(modelStatus => {
        if (!modelStatus.inline || modelStatus.groupById) {
          return false;
        }
        return true;
      }).slice(0, 4);
      return modelStatuses.value.filter(modelStatus => {
        if (notCarouselModelStatuses.some(lineModelStatus => modelStatus.id === lineModelStatus.id)) {
          return false;
        }
        if (!modelStatus.showDefault) {
          if (!deviceStatuses.value.some(deviceStatus => deviceStatus.modelStatusId === modelStatus.id)) {
            return false;
          }
        }
        return true;
      }).sort((a, b) => (a.index + (a.inline ? b.index : 0)) - b.index);
    });

    const carouselDeviceStatuses = computed((): FSDeviceStatus[] => {
      return deviceStatuses.value.filter(deviceStatus => {
        return carouselModelStatuses.value.some(modelStatus => modelStatus.id === deviceStatus.modelStatusId)
      });
    });

    const imageSize = computed((): number => {
      return isMobileSized.value ? 90 : 100;
    });

    return {
      ColorEnum,
      lineModelStatuses,
      lineDeviceStatuses,
      carouselModelStatuses,
      carouselDeviceStatuses,
      imageSize
    };
  }
});
</script>