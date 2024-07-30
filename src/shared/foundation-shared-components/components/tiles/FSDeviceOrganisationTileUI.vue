<template>
  <FSTile
    :bottomColor="ColorEnum.Primary"
    :editable="$props.editable"
    :modelValue="$props.modelValue"
    :width="$props.width"
    :color="$props.modelValue ? ColorEnum.Primary : ColorEnum.Background"
    v-bind="$attrs"
  >
    <FSCol
      align="center-center"
      width="fill"
    >
      <FSRow
        align="center-center"
        gap="24px"
        :height="imageSize"
        :wrap="false"
      >
        <FSCol
          gap="12px"
          :width="`calc(100% - ${imageSize}px - 24px)`"
        >
          <FSCol
            gap="6px"
          >
            <FSSpan
              font="text-button"
              :lineClamp="2"
            >
              {{ $props.label }}
            </FSSpan>
            <FSSpan
              font="text-overline"
              variant="soft"
            >
              {{ $props.code }}
            </FSSpan>
          </FSCol>
          <FSStatusesRow
            :deviceConnectivity="$props.deviceConnectivity"
            :deviceWorstAlert="$props.deviceWorstAlert"
            :deviceStatuses="singleDeviceStatuses"
            :modelStatuses="singleModelStatuses"
            :deviceAlerts="$props.deviceAlerts"
          />
        </FSCol>
        <FSImage
          v-if="$props.imageId"
          :imageId="$props.imageId"
          :width="imageSize"
        />
      </FSRow>
      <template
        v-if="carouselModelStatuses.length"
      >
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
import type { PropType } from "vue";
import { computed, defineComponent } from "vue";

import type { FSModelStatus, FSDeviceStatus, FSDeviceAlert, FSDeviceConnectivity } from "@dative-gpi/foundation-shared-components/models";
import { useBreakpoints } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSStatusesCarousel from "../deviceOrganisations/FSStatusesCarousel.vue";
import FSStatusesRow from "../deviceOrganisations/FSStatusesRow.vue";
import FSDivider from "../FSDivider.vue";
import FSImage from "../FSImage.vue";
import FSSpan from "../FSSpan.vue";
import FSTile from "./FSTile.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSDeviceOrganisationTileUI",
  components: {
    FSStatusesCarousel,
    FSStatusesRow,
    FSDivider,
    FSImage,
    FSSpan,
    FSTile,
    FSCol,
    FSRow
  },
  props: {
    imageId: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    label: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    code: {
      type: String as PropType<string | null>,
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
      default: () => []
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
    },
    width: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: () => [352, 336]
    }
  },
  setup(props) {
    const { isMobileSized } = useBreakpoints();

    const singleModelStatuses = computed((): FSModelStatus[] => {
      return props.modelStatuses.filter(modelStatus => {
        if (modelStatus.groupById != null) {
          return false;
        }
        if (!modelStatus.showDefault) {
          if (!props.deviceStatuses.some(deviceStatus => deviceStatus.modelStatusId === modelStatus.id)) {
            return false;
          }
        }
        return true;
      }).slice(0, 5).sort((a, b) => a.index - b.index);
    });

    const singleDeviceStatuses = computed((): FSDeviceStatus[] => {
      return props.deviceStatuses.filter(deviceStatus => {
        return singleModelStatuses.value.some(modelStatus => modelStatus.id === deviceStatus.modelStatusId)
      });
    });

    const carouselModelStatuses = computed((): FSModelStatus[] => {
      return props.modelStatuses.filter(modelStatus => {
        if (modelStatus.groupById == null) {
          return false;
        }
        if (!modelStatus.showDefault) {
          if (!props.deviceStatuses.some(deviceStatus => deviceStatus.modelStatusId === modelStatus.id)) {
            return false;
          }
        }
        return true;
      }).sort((a, b) => a.index - b.index);
    });

    const carouselDeviceStatuses = computed((): FSDeviceStatus[] => {
      return props.deviceStatuses.filter(deviceStatus => {
        return carouselModelStatuses.value.some(modelStatus => modelStatus.id === deviceStatus.modelStatusId)
      });
    });

    const imageSize = computed((): number => {
      return isMobileSized.value ? 90 : 100;
    });


    return {
      carouselDeviceStatuses,
      carouselModelStatuses,
      singleDeviceStatuses,
      singleModelStatuses,
      ColorEnum,
      imageSize,
    };
  }
});
</script>