<template>
  <FSTile
    :activeColor="$props.color"
    :bottomColor="$props.color"
    :modelValue="$props.modelValue"
    :width="$props.width"
    v-bind="$attrs"
  >
    <FSCol
      align="center-center"
      width="fill"
    >
      <FSRow
        align="center-left"
        gap="24px"
        :height="imageSize"
        :wrap="false"
      >
        <FSCol 
          gap="12px"
          :width="infoWidth"
        >
          <FSCol
            gap="4px"
          >
            <FSSpan
              font="text-button"
              :lineClamp="1"
            >
              {{ $props.label }}
            </FSSpan>
            <FSSpan
              v-if="$props.code"
              font="text-overline"
              variant="soft"
            >
              {{ $props.code }}
            </FSSpan>
          </FSCol>
          <FSCol
            gap="8px"
          >
            <FSRow
              v-if="$props.deviceCount"
              :wrap="false"
              align="center-left"
            >
              <FSColor
                padding="0 8px"
                height="24px"
                :color="ColorEnum.Light"
                :border="false"
              >
                <FSRow
                  align="center-center"
                >
                  <FSSpan
                    font="text-overline"
                  >
                    {{ $props.deviceCount <= 99 ? $props.deviceCount : "99+" }}
                  </FSSpan>
                </FSRow>
              </FSColor>
              <FSSpan
                font="text-overline"
              >
                {{ $tr("ui.common.devices", "Equipment(s)") }}
              </FSSpan>
            </FSRow>
            <FSRow
              v-if="$props.address"
              :wrap="false"
              align="center-left"
            >
              <FSColor
                width="24px"
                height="24px"
                :color="ColorEnum.Light"
                :border="false"
              >
                <FSRow
                  align="center-center"
                >
                  <FSIcon
                    icon="mdi-map-marker"
                    size="16px"
                  />
                </FSRow>
              </FSColor>
              <FSSpan
                font="text-overline"
              >
                {{ $props.address }}
              </FSSpan>
            </FSRow>
          </FSCol>
        </FSCol>
        <FSIconCard
          backgroundVariant="standard"
          :backgroundColor="ColorEnum.Background"
          :iconColor="$props.color"
          :icon="$props.icon"
          :size="imageSize"
        />
      </FSRow>
    </FSCol>
  </FSTile>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useBreakpoints } from "@dative-gpi/foundation-shared-components/composables";

import FSIconCard from "../FSIconCard.vue";
import FSColor from "../FSColor.vue";
import FSSpan from "../FSSpan.vue";
import FSTile from "./FSTile.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSLocationTileUI",
  components: {
    FSIconCard,
    FSColor,
    FSSpan,
    FSTile,
    FSCol,
    FSRow
  },
  props: {
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
    icon: {
      type: String,
      required: false,
      default: "mdi-map-marker"
    },
    address: {
      type: String,
      required: false
    },
    deviceCount: {
      type: Number,
      required: false,
      default: 0
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    },
    width: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: () => [352, 336]
    },
    modelValue: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup() {
    const { isMobileSized } = useBreakpoints();

    const imageSize = computed((): number => {
      return isMobileSized.value ? 90 : 100;
    });

    const infoWidth = computed((): string => {
      return `calc(100% - ${imageSize.value}px - 24px)`;
    });

    return {
      ColorEnum,
      imageSize,
      infoWidth
    };
  }
});
</script>