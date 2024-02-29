<template>
  <FSTile
    :bottomColor="ColorEnum.Error"
    :editable="$props.editable"
    :modelValue="$props.modelValue"
    v-bind="$attrs"
  >
    <FSCol
      align="center-center"
      width="fill"
    >
      <FSRow
        align="center-center"
        gap="24px"
        :wrap="false"
        :height="infoHeight"
      >
        <FSCol
          gap="12px"
        >
          <FSCol
            gap="6px"
            :width="infoWidth"
          >
            <FSSpan
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
          <FSCol
            gap="6px"
          >
            <FSRow
              align="center-left"
            >
              <FSColor
                align="center-center"
                padding="0 8px"
                height="24px"
                :color="ColorEnum.Primary"
              >
                <FSText
                  font="text-overline"
                >
                  {{ groupsLabel }}
                </FSText>
              </FSColor>
              <FSSpan
                font="text-overline"
              >
                {{ $tr("ui.group-tile.group(s)", "Group(s)") }}
              </FSSpan>
            </FSRow>
            <FSRow
              align="center-left"
            >
              <FSColor
                align="center-center"
                padding="0 8px"
                height="24px"
                :color="ColorEnum.Success"
              >
                <FSText
                  font="text-overline"
                >
                  {{ deviceOrganisationsLabel }}
                </FSText>
              </FSColor>
              <FSSpan
                font="text-overline"
              >
                {{ $tr("ui.group-tile.device(s)", "Device(s)") }}
              </FSSpan>
            </FSRow>
          </FSCol>
        </FSCol>
        <FSImage
          v-if="$props.imageId"
          :imageId="$props.imageId"
          :width="imageSize"
        />
      </FSRow>
    </FSCol>
  </FSTile>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { useBreakpoints } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSImage from "../FSImage.vue";
import FSColor from "../FSColor.vue";
import FSSpan from "../FSSpan.vue";
import FSText from "../FSText.vue";
import FSTile from "./FSTile.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSGroupTileUI",
  components: {
    FSImage,
    FSColor,
    FSSpan,
    FSText,
    FSTile,
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
    recursiveGroupsIds: {
      type: Array as PropType<String[]>,
      required: false,
      default: () => []
    },
    recursiveDeviceOrganisationsIds: {
      type: Array as PropType<String[]>,
      required: false,
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
    const { isMobileSized } = useBreakpoints();

    const groupsLabel = computed((): string => {
      return props.recursiveGroupsIds.length > 99 ? "99+" : props.recursiveGroupsIds.length.toString();
    });

    const deviceOrganisationsLabel = computed((): string => {
      return props.recursiveDeviceOrganisationsIds.length > 99 ? "99+" : props.recursiveDeviceOrganisationsIds.length.toString();
    });

    const imageSize = computed((): number => {
      return isMobileSized.value ? 90 : 100;
    });

    const infoWidth = computed((): string => {
      let width = isMobileSized.value ? 288 : 304;
      if (props.imageId) {
        width -= imageSize.value;
      }
      return `${width}px`;
    });

    const infoHeight = computed((): string => {
      return `${imageSize.value}px`;
    });

    return {
      ColorEnum,
      groupsLabel,
      deviceOrganisationsLabel,
      imageSize,
      infoWidth,
      infoHeight
    };
  }
});
</script>