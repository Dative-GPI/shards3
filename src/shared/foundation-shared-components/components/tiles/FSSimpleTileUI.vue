<template>
  <FSTile 
    :activeColor="$props.activeColor"
    :bottomColor="$props.bottomColor"
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
        align="center-left"
        gap="24px"
        :height="imageSize"
        :wrap="false"
      >
        <FSCol
          gap="6px"
          :width="infoWidth"
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
        <FSImage
          v-if="$props.imageId"
          :imageId="$props.imageId"
          :height="imageSize"
          :width="imageSize"
        />
        <FSIconCard
          v-else-if="$props.icon"
          :backgroundVariant="$props.iconBackgroundVariant"
          :backgroundColor="$props.iconBackgroundColor"
          :border="$props.iconBorder"
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
import FSImage from "../FSImage.vue";
import FSSpan from "../FSSpan.vue";
import FSTile from "./FSTile.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSSimpleTileUI",
  components: {
    FSIconCard,
    FSImage,
    FSSpan,
    FSTile,
    FSCol,
    FSRow
  },
  props: {
    imageId: {
      type: String as PropType<string>,
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
    icon: {
      type: String as PropType<string>,
      required: false,
    },
    iconBackgroundVariant: {
      type: String as PropType<"background" | "standard" | "full" | "gradient">,
      required: false,
      default: "background"
    },
    iconBackgroundColor: {
      type: [Array, String] as PropType<ColorBase | ColorBase[]>,
      required: false,
      default: ColorEnum.Background
    },
    iconBorder: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: true
    },
    activeColor: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    },
    bottomColor: {
      type: [Array, String] as PropType<ColorBase | ColorBase[]>,
      required: false,
      default: ColorEnum.Light
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
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  setup(props) {
    const { isMobileSized } = useBreakpoints();

    const iconBackgroundColor = computed((): ColorBase | ColorBase[] => {
      return props.iconBackgroundColor ? props.bottomColor : ColorEnum.Background;
    });

    const imageSize = computed((): number => {
      return isMobileSized.value ? 90 : 100;
    });

    const infoWidth = computed((): string => {
      return `calc(100% - ${imageSize.value}px - 24px)`;
    });

    return {
      iconBackgroundColor,
      ColorEnum,
      imageSize,
      infoWidth
    };
  }
});
</script>