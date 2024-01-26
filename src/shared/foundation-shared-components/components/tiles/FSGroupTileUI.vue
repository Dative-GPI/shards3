<template>
  <FSTile
    :bottomColor="ColorEnum.Error"
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
          <FSCol
            gap="6"
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
                  {{ $props.recursiveGroupsIds.length }}
                </FSText>
              </FSColor>
              <FSSpan
                font="text-overline"
              >
                {{ $tr("ui.shared.group.group(s)", "Group(s)") }}
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
                  {{ $props.recursiveDeviceOrganisationsIds.length }}
                </FSText>
              </FSColor>
              <FSSpan
                font="text-overline"
              >
                {{ $tr("ui.shared.group.device(s)", "Device(s)") }}
              </FSSpan>
            </FSRow>
          </FSCol>
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
import { computed, defineComponent, PropType } from "vue";

import { useBreakpoints } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSImage from "../FSImage.vue";
import FSColor from "../FSColor.vue";
import FSSpan from "../FSSpan.vue";
import FSText from "../FSText.vue";
import FSTile from "../FSTile.vue";
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
  setup() {
    const { isMobileSized } = useBreakpoints();

    const imageSize = computed((): number => {
      return isMobileSized.value ? 90 : 100;
    });

    return {
      ColorEnum,
      imageSize
    };
  }
});
</script>