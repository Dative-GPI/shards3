<template>
  <FSBaseDefaultMobileView
    :toolbarTopOffset="topOffset + 'px'"
    :stickyTitleTopOffset="topOffset + 'px'"
    @scroll="onScroll"
  >
    <template
      #title
    >
      <FSRow
        gap="24px"
        :wrap="false"
      >
        <FSImage 
          v-if="$props.imageId"
          :imageId="$props.imageId"
          :cover="$props.imageCover"
          :height="actualImageSize"
          :width="actualImageSize"
        />
        <FSIconCard
          v-else-if="$props.icon"
          :backgroundVariant="$props.iconBackgroundVariant"
          :backgroundColor="$props.iconBackgroundColors"
          :iconColor="$props.iconColor"
          :border="$props.iconBorder"
          :icon="$props.icon"
          :size="actualImageSize"
        />
        <FSCol
          style="min-width: 0"
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
            <slot
              name="title-extra"
              v-bind="{ topOffset }"
            >
              <slot
                name="subtitle"
              >
                <FSText
                  v-if="$props.subtitle && topOffset < 60"
                  font="text-button"
                >
                  {{ $props.subtitle }}
                </FSText>
              </slot>
              <slot
                name="description"
              >
                <FSText
                  v-if="$props.description && topOffset < 20"
                  font="text-body"
                >
                  {{ $props.description }}
                </FSText>
              </slot>
            </slot>
          </slot>
        </FSCol>
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
  </FSBaseDefaultMobileView>
</template>

<script lang="ts">
import { defineComponent, useSlots, type PropType, computed, ref } from "vue";

import { type ColorBase } from "@dative-gpi/foundation-shared-components/models";

import { sizeToVar } from "../../../utils"
 
import FSCol from "../../FSCol.vue";
import FSRow from "../../FSRow.vue"
import FSText from "../../FSText.vue";
import FSImage from "../../FSImage.vue";
import FSIconCard from "../../FSIconCard.vue"

import FSBaseDefaultMobileView from "./FSBaseDefaultMobileView.vue";

export default defineComponent({
  name: "FSBaseEntityMobileView",
  components: {
    FSCol,
    FSRow,
    FSText,
    FSBaseDefaultMobileView,
    FSImage,
    FSIconCard,
  },
  props: {
    title: {
      type: String,
      required: false
    },
    subtitle: {
      type: String,
      required: false
    },
    description: {
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
    icon: {
      type: String as PropType<string>,
      required: false,
      default: "mdi-ab-testing"
    },
    iconColor: {
      type: String as PropType<ColorBase>,
      required: false,
      default: null
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
    minImageSize: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: () => ["48px", "48px", "48px"]
    }
  },
  setup(props){
    const slots = { ...useSlots() };

    const topOffset = ref(0);

    const actualImageSize = computed(() => {
      const size = sizeToVar(props.imageSize);
      const minSize = sizeToVar(props.minImageSize);
      return `max(calc(${size} - ${topOffset.value}px), ${minSize})`;
    });

    const onScroll = (event: Event) => {
      const actualScrollTop = (event.target as HTMLElement).scrollTop;

      const minSize = sizeToVar(props.minImageSize);
      const actualMinSize = parseInt(minSize);

      topOffset.value = Math.max(0, Math.min(actualScrollTop, actualMinSize + 16 + 24));
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