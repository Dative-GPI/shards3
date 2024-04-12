<template>
  <FSTile 
    :bottomColor="$props.bottomColor"
    :editable="$props.editable"
    :modelValue="$props.modelValue"
    v-bind="$attrs">
    <FSCol align="center-center"
      width="fill">
      <FSRow align="center-center"
        gap="24px"
        :wrap="false"
        :height="imageSize">
        <FSCol gap="6px">
          <FSText font="text-button" :lineClamp="2">
            {{ $props.label }}
          </FSText>
          <FSText font="text-overline"
            variant="light">
            {{ $props.code }}
          </FSText>
        </FSCol>
        <FSIconCard 
          :backgroundColor="$props.iconBackgroundColor"
          :icon="$props.icon"
        />
      </FSRow>
    </FSCol>
  </FSTile>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { useBreakpoints } from "@dative-gpi/foundation-shared-components/composables";
import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSIconCard from "../FSIconCard.vue";
import FSColor from "../FSColor.vue";
import FSText from "../FSText.vue";
import FSTile from "./FSTile.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSSimpleIconTileUI",
  components: {
    FSIconCard,
    FSColor,
    FSText,
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
    modelValue: {
      type: Boolean,
      required: false,
      default: false
    },
    code: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    bottomColor: {
      type: [Array, String] as PropType<ColorBase | ColorBase[]>,
      required: false,
      default: ColorEnum.Light
    },
    iconBackgroundColor: {
      type: [Array, String] as PropType<ColorBase | ColorBase[]>,
      required: false,
      default: null
    },
    icon: {
      type: String as PropType<string>,
      required: false,
      default: "mdi-ab-testing"
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  setup(props) {
    const { isMobileSized } = useBreakpoints();

    const imageSize = computed((): number => {
      return isMobileSized.value ? 90 : 100;
    });

    const infoWidth = computed((): number => {
      let width = isMobileSized.value ? 288 : 304;
      if (props.icon) {
        width -= imageSize.value;
      }
      return width;
    });

    return {
      ColorEnum,
      imageSize,
      infoWidth
    };
  }
});
</script>