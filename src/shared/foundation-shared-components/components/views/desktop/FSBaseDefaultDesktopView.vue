<template>
  <FSFadeOut
    height="100%"
    maxHeight="100%"
    :scrollOutside="false"
    :disableTopMask="true"
  >
    <FSCol
      height="fill"
      gap="0px"
    >
      <slot
        name="header"
      >
        <FSRow
          :style="`position: sticky; top: 0px; z-index: 3; background-color: ${backgroundColor}; margin-top: ${$props.stickyTitleTopOffset};`"
          :padding="`24px ${isTouchScreenEnabled ? '24px' : '16px'} 16px 24px`"
        >
          <slot
            name="title"
          >
            <FSText
              font="text-h2"
            >
              {{ $props.title }}
            </FSText>
          </slot>
        </FSRow>
        <FSCol
          v-if="$props.breadcrumbs && $props.breadcrumbs.length > 0"
          :padding="$slots.toolbar ? '0px 24px 8px 24px' : '0px 24px'"
          gap="16px"
        >
          <FSCol>
            <slot
              name="breadcrumbs"
            >
              <FSBreadcrumbs
                :items="$props.breadcrumbs"
              />
            </slot>
          </FSCol>
        </FSCol>
        <FSRow
          v-if="$slots.toolbar"
          :style="stickyToolbar ? `position: sticky; top: ${$props.toolbarTopOffset}; z-index: 3; background-color: ${backgroundColor}` : undefined"
          :padding="`0px ${isTouchScreenEnabled ? '24px' : '16px'} 8px 24px`"
        >
          <FSSlideGroup
            width="100%"
          >
            <slot
              name="toolbar"
            />
          </FSSlideGroup>
        </FSRow>
      </slot>

      <FSCol
        height="fill"
        gap="0px"
        :padding="`${$slots.toolbar ? '8px' : '16px'} ${isTouchScreenEnabled ? '24px' : '16px'} 24px 24px`"
      >
        <slot />
      </FSCol>
    </FSCol>
  </FSFadeOut>
</template>

<script lang="ts">
import { defineComponent, type PropType, computed } from "vue";

import { type FSBreadcrumbItem, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import { useBreakpoints, useColors } from "../../../composables"
 
import FSCol from "../../FSCol.vue";
import FSRow from "../../FSRow.vue"
import FSText from "../../FSText.vue";
import FSBreadcrumbs from "../../FSBreadcrumbs.vue";
import FSSlideGroup from "../../FSSlideGroup.vue";
import FSFadeOut from "../../FSFadeOut.vue"

export default defineComponent({
  name: "FSBaseDefaultDesktopView",
  components: {
    FSCol,
    FSRow,
    FSText,
    FSBreadcrumbs,
    FSSlideGroup,
    FSFadeOut
  },
  props: {
    title: {
      type: String,
      required: false
    },
    breadcrumbs: {
      type: Array as PropType<FSBreadcrumbItem[]>,
      required: false,
      default: () => []
    },
    stickyToolbar: {
      type: Boolean,
      required: false,
      default: true
    },
    toolbarTopOffset: {
      type: String,
      required: false,
      default: "72px" 
    },
    stickyTitleTopOffset: {
      type: String,
      required: false,
      default: "0px"
    }
  },
  setup() {
    const { isTouchScreenEnabled } = useBreakpoints();
    const { getColors } = useColors();

    const backgroundColor = computed(() => {
      return getColors(ColorEnum.Background).base;
    });

    return {
      isTouchScreenEnabled,
      backgroundColor
    };
  }
});
</script>