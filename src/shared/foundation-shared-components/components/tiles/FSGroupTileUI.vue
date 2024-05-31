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
        :height="imageSize"
      >
        <FSCol
          gap="12px"
        >
          <FSCol
            gap="6px"
            :width="infoWidth"
          >
            <FSText
              font="text-button"
            >
              {{ $props.label }}
            </FSText>
            <FSText
              font="text-overline"
              variant="soft"
            >
              {{ $props.code }}
            </FSText>
          </FSCol>
          <FSCol
            gap="6px"
          >
            <FSRow
              align="center-left"
            >
              <FSColor
                padding="0 8px"
                height="24px"
                :color="ColorEnum.Primary"
                :border="false"
              >
                <FSRow
                  align="center-center"
                >
                  <FSText
                    font="text-overline"
                  >
                    {{ groupsLabel }}
                  </FSText>
                </FSRow>
              </FSColor>
              <FSText
                font="text-overline"
              >
                {{ $tr("ui.group-tile.group(s)", "Group(s)") }}
              </FSText>
            </FSRow>
            <FSRow
              align="center-left"
            >
              <FSColor
                padding="0 8px"
                height="24px"
                :color="ColorEnum.Success"
                :border="false"
              >
                <FSRow
                  align="center-center"
                >
                  <FSText
                    font="text-overline"
                  >
                    {{ deviceOrganisationsLabel }}
                  </FSText>
                </FSRow>
              </FSColor>
              <FSText
                font="text-overline"
              >
                {{ $tr("ui.group-tile.device(s)", "Device(s)") }}
              </FSText>
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
import FSText from "../FSText.vue";
import FSTile from "./FSTile.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSGroupTileUI",
  components: {
    FSImage,
    FSColor,
    FSText,
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

    const infoWidth = computed((): number => {
      let width = isMobileSized.value ? 288 : 304;
      if (props.imageId) {
        width -= imageSize.value;
      }
      return width;
    });

    return {
      ColorEnum,
      groupsLabel,
      deviceOrganisationsLabel,
      imageSize,
      infoWidth
    };
  }
});
</script>