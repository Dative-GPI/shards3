<template>
  <FSBaseDefaultDesktopView
    :toolbarTopOffset="164 - topOffset + 'px'"
    :stickyTitleTopOffset="topOffset + 'px'"
    @scroll="onScroll"
  >
    <template
      #title
    >
      <FSRow
        gap="24px"
      >
        <FSImage 
          v-if="$props.imageId"
          :cover="$props.imageCover"
          :height="actualImageSize"
          :width="actualImageSize"
        />
        <FSIconCard
          v-else-if="$props.icon"
          :backgroundVariant="$props.iconBackgroundVariant"
          :backgroundColor="$props.iconBackgroundColors"
          :border="$props.iconBorder"
          :icon="$props.icon"
          :iconColor="$props.color"
          :size="actualImageSize"
        />
        <FSRow
          align="center-left"
          height="fill"
        >
          <slot
            name="title"
          >
            <FSText
              font="text-h3"
            >
              {{ $props.title }}
            </FSText>
          </slot>
        </FSRow>
      </FSRow>
    </template>

    <template
      v-for="(_, name) in slots"
      v-slot:[name]="slotData"
    >
      <slot
        :name="name"
        v-bind="slotData"
      />
    </template>
  </FSBaseDefaultDesktopView>
</template>

<script lang="ts">
import _ from "lodash";
import { defineComponent, useSlots, type PropType, computed, ref, nextTick } from "vue";

import { type ColorBase } from "@dative-gpi/foundation-shared-components/models";

import { sizeToVar } from "../../../utils"

import { useColors } from "../../../composables"
 
import FSCol from "../../FSCol.vue";
import FSRow from "../../FSRow.vue"
import FSText from "../../FSText.vue";
import FSImage from "../../FSImage.vue";
import FSIconCard from "../../FSIconCard.vue"

import FSBaseDefaultDesktopView from "./FSBaseDefaultDesktopView.vue";

export default defineComponent({
  name: "FSBaseEntityDesktopView",
  components: {
    FSCol,
    FSRow,
    FSText,
    FSBaseDefaultDesktopView,
    FSImage,
    FSIconCard,
  },
  props: {
    title: {
      type: String,
      required: false
    },
    imageId: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    imageCover: {
      type: Boolean,
      required: false,
      default: true
    },
    imageSize: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: () => ["124px", "96px", "80px"]
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: null
    },
    icon: {
      type: String as PropType<string>,
      required: false,
      default: "mdi-ab-testing"
    },
    iconBackgroundVariant: {
      type: String as PropType<"background" | "standard" | "full" | "gradient">,
      required: false,
      default: "background"
    },
    iconBackgroundColors: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => []
    },
    iconBorder: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: true
    },
  },
  setup(props){
    const slots = { ...useSlots() };

    const topOffset = ref(0);

    const actualImageSize = computed(() => {
      const size = sizeToVar(props.imageSize);
      return `max(calc(${size} - ${topOffset.value}px), 48px)`;
    });

    const onScroll = (event: Event) => {
      const actualScrollTop = (event.target as HTMLElement).scrollTop;

      topOffset.value = Math.max(0, Math.min(actualScrollTop, 76));
    }


    delete slots.title;

    return {
      slots,
      onScroll,
      topOffset,
      actualImageSize
    }
  }
});
</script>