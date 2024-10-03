<template>
  <FSTile
    :activeColor="ColorEnum.Primary"
    :bottomColor="ColorEnum.Error"
    :editable="$props.editable"
    :width="$props.width"
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
        :height="imageSize"
        :wrap="false"
      >
        <FSCol
          gap="12px"
          :width="infoWidth"
        >
          <FSCol
            gap="6px"
          >
            <FSSpan
              font="text-button"
              :lineClamp="1"
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
                  <FSSpan
                    font="text-overline"
                  >
                    {{ groupsLabel }}
                  </FSSpan>
                </FSRow>
              </FSColor>
              <FSSpan
                font="text-overline"
              >
                {{ $tr("ui.group-tile.groups", "Group(s)") }}
              </FSSpan>
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
                  <FSSpan
                    font="text-overline"
                  >
                    {{ deviceOrganisationsLabel }}
                  </FSSpan>
                </FSRow>
              </FSColor>
              <FSSpan
                font="text-overline"
              >
                {{ $tr("ui.group-tile.devices", "Device(s)") }}
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
import { computed, defineComponent, type PropType } from "vue";

import { useBreakpoints } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSImage from "../FSImage.vue";
import FSColor from "../FSColor.vue";
import FSSpan from "../FSSpan.vue";
import FSTile from "./FSTile.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSGroupTileUI",
  components: {
    FSImage,
    FSColor,
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
    recursiveGroupsIds: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => []
    },
    recursiveDeviceOrganisationsIds: {
      type: Array as PropType<string[]>,
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
    },
    width: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: () => [352, 336]
    },
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
      if (!props.imageId) {
        return "100%";
      }
      return `calc(100% - ${imageSize.value}px - 24px)`;
    });

    return {
      deviceOrganisationsLabel,
      groupsLabel,
      ColorEnum,
      imageSize,
      infoWidth
    };
  }
});
</script>