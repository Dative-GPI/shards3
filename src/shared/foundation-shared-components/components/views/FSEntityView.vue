<template>
  <FSSkeletonView>
    <template
      #header
    >
      <FSEntityHeader
        ref="headerRef"
        :breadcrumbs="$props.breadcrumbs"
        :description="$props.description"
        :subtitle="$props.subtitle"
        :title="$props.title"
        :light="lightHeader"
        :imageId="imageId"
        :iconBackgroundVariant="$props.iconBackgroundVariant"
        :icon="$props.icon"
        :color="$props.color"
        :iconBackgroundColors="$props.iconBackgroundColors"
        :imageCover="$props.imageCover"
      >
        <template
          v-if="$slots.image"
          #image="props"
        >
          <slot
            name="image"
            v-bind="props"
          />
        </template>
        <template
          #title-append
        >
          <slot
            name="title-append"
          />
        </template>
        <template
          #toolbar
          v-if="slots['toolbar']"
        >
          <slot
            name="toolbar"
          />
        </template>
      </FSEntityHeader>
    </template>
    <template
      #default
    >
      <!-- <FSFadeOut
        padding="0 8px 0 0"
        :height="height"
        @scroll="onScroll"
      > -->
      <slot
        name="default"
      />
      <!-- </FSFadeOut> -->
    </template>
  </FSSkeletonView>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, ref } from "vue";

import { type ColorEnum, type FSBreadcrumbItem } from "@dative-gpi/foundation-shared-components/models";
import { useBreakpoints, useSlots } from "@dative-gpi/foundation-shared-components/composables";

import FSEntityHeader from "./FSEntityHeader.vue";
import FSSkeletonView from "./FSSkeletonView.vue";
// import FSFadeOut from "../FSFadeOut.vue";

export default defineComponent({
  name: "FSEntityView",
  components: {
    FSEntityHeader,
    FSSkeletonView
    // FSFadeOut
  },
  props: {
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
    icon: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    color : {
      type: Object as PropType<ColorEnum | null>,
      required: false,
      default: null
    },
    iconBackgroundColors: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => []
    },
    title: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    subtitle: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    description: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    breadcrumbs: {
      type: Array as PropType<FSBreadcrumbItem[]>,
      required: false,
      default: () => []
    },
    iconBackgroundVariant: {
      type: String as PropType<"background" | "standard" | "full" | "gradient">,
      required: false,
      default: "background"
    }
  },
  setup() {
    const { isExtraSmall, windowHeight } = useBreakpoints();
    const { slots } = useSlots();

    const headerRef = ref<HTMLElement | null>(null);

    const lightHeader = ref(false);

    const height = computed((): string => {
      let other = isExtraSmall.value ? 16 + 16 : 24 + 24; // Paddings

      return `${windowHeight.value - other}px`;
    });

    // const onScroll = (event: any): void => {
    //   if (event.onTop) {
    //     lightHeader.value = false;
    //   }
    //   else if (event.target.scrollTop > (headerRef.value as any)?.$el.clientHeight) {
    //     lightHeader.value = true;
    //   }
    // };

    return {
      lightHeader,
      headerRef,
      height,
      slots
      // onScroll
    };
  }
});
</script>