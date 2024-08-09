<template>
  <template
    v-if="isExtraSmall"
  >
    <FSCol
      class="f-entity-header"
      padding="0 10px 0 0"
      align="center-left"
      gap="12px"
    >
      <FSRow
        align="center-left"
        gap="12px"
        :height="imageSize"
        :wrap="false"
      >
        <FSImage
          v-if="$props.imageId"
          :imageId="$props.imageId"
          :cover="imageCover"
          :height="imageSize"
          :width="imageSize"
        />
        <FSIcon
          v-else-if="$props.icon && $props.color"
          :color="$props.color"
          :icon="$props.icon"
          :size="imageSize"
        />
        <FSIconCard
          v-else-if="$props.icon && $props.iconBackgroundColor && $props.iconBackgroundColor.length > 0"
          :backgroundVariant="$props.iconBackgroundVariant"
          :backgroundColor="$props.iconBackgroundColor"
          :border="$props.iconBorder"
          :icon="$props.icon"
          :size="imageSize"
        />
        <FSCol
          align="center-left"
          :width="`calc(100% - ${rightOverflow})`"
        >
          <template
            v-if="$props.subtitle && $props.description"
          >
            <FSText
              font="text-h3"
            >
              {{ $props.title }}
            </FSText>
            <FSCol
              align="center-left"
              gap="4px"
            >
              <FSText>
                {{ $props.subtitle }}
              </FSText>
              <FSText
                font="text-overline"
              >
                {{ $props.description }}
              </FSText>
            </FSCol>
          </template>
          <template
            v-else-if="$props.subtitle && !$props.description"
          >
            <FSText
              font="text-h3"
              :lineClamp="2"
            >
              {{ $props.title }}
            </FSText>
            <FSText>
              {{ $props.subtitle }}
            </FSText>
          </template>
          <template
            v-else-if="!$props.subtitle && $props.description"
          >
            <FSText
              font="text-h3"
              :lineClamp="2"
            >
              {{ $props.title }}
            </FSText>
            <FSText
              font="text-overline"
              :lineClamp="2"
            >
              {{ $props.description }}
            </FSText>
          </template>
          <template
            v-else
          >
            <FSText
              font="text-h3"
              :lineClamp="2"
            >
              {{ $props.title }}
            </FSText>
          </template>
        </FSCol>
      </FSRow>
      <template
        v-if="!$props.light"
      >
        <FSBreadcrumbs
          :items="$props.breadcrumbs"
        />
        <FSSlideGroup
          v-if="slots['toolbar']"
        >
          <slot
            name="toolbar"
          />
        </FSSlideGroup>
        <slot
          name="title-append"
        />
      </template>
    </FSCol>
  </template>
  <template
    v-else
  >
    <FSCol
      class="f-entity-header"
      padding="0 14px 0 0"
      align="center-left"
      gap="16px"
    >
      <FSRow
        align="center-left"
        gap="16px"
        :height="imageSize"
        :wrap="false"
      >
        <FSImage
          v-if="$props.imageId"
          :imageId="$props.imageId"
          :cover="imageCover"
          :height="imageSize"
          :width="imageSize"
        />
        <FSIconCard
          v-else-if="$props.icon && $props.iconBackgroundColor && $props.iconBackgroundColor.length > 0"
          iconSize="70px"
          :backgroundVariant="$props.iconBackgroundVariant"
          :backgroundColor="$props.iconBackgroundColor"
          :border="$props.iconBorder"
          :icon="$props.icon"
          :size="imageSize"
        />
        <FSIcon
          v-else-if="$props.icon"
          :color="$props.color"
          :icon="$props.icon"
          :size="imageSize"
        />
        <FSCol
          align="center-left"
        >
          <FSText
            :font="$props.light ? 'text-h3' : 'text-h2'"
          >
            {{ $props.title }}
          </FSText>
          <FSCol
            v-if="!$props.light && ($props.subtitle || $props.description)"
            gap="4px"
          >
            <FSText
              v-if="$props.subtitle"
            >
              {{ $props.subtitle }}
            </FSText>
            <FSText
              v-if="$props.description"
              font="text-overline"
              :lineClamp="2"
            >
              {{ $props.description }}
            </FSText>
          </FSCol>
        </FSCol>
        <FSRow
          v-if="!$props.light"
          align="center-right"
        >
          <slot
            name="title-append"
          />
        </FSRow>
      </FSRow>
      <template
        v-if="!$props.light"
      >
        <FSBreadcrumbs
          :items="$props.breadcrumbs"
        />
        <FSSlideGroup
          v-if="slots['toolbar']"
        >
          <slot
            name="toolbar"
          />
        </FSSlideGroup>
      </template>
    </FSCol>
  </template>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { ColorEnum, type ColorBase, type FSBreadcrumbItem } from "@dative-gpi/foundation-shared-components/models";
import { useBreakpoints, useSlots } from "@dative-gpi/foundation-shared-components/composables";

import FSBreadcrumbs from "../FSBreadcrumbs.vue";
import FSSlideGroup from "../FSSlideGroup.vue";
import FSIconCard from "../FSIconCard.vue";
import FSImage from "../FSImage.vue";
import FSIcon from "../FSIcon.vue";
import FSText from "../FSText.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSEntityHeader",
  components: {
    FSBreadcrumbs,
    FSSlideGroup,
    FSIconCard,
    FSImage,
    FSIcon,
    FSText,
    FSCol,
    FSRow
  },
  props: {
    imageId: {
      type: String as PropType<string | null>,
      required: false,
      default: null
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
      type: Array as PropType<Array<FSBreadcrumbItem>>,
      required: false,
      default: () => []
    },
    light: {
      type: Boolean,
      required: false,
      default: false
    },
    imageCover: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  setup(props) {
    const { isExtraSmall, isMobileSized } = useBreakpoints();
    const { slots } = useSlots();

    const imageSize = computed((): string[] | string => {
      if (props.light) {
        return ["40px", "36px"];
      }
      return ["124px", "96px", "80px"];
    });

    const rightOverflow = computed(() => {
      let result = imageSize.value[0];
      if (isExtraSmall.value && imageSize.value[2]) {
        result = imageSize.value[2];
      }
      if ((isExtraSmall.value || isMobileSized.value) && imageSize.value[1]) {
        result = imageSize.value[1];
      }
      return result;
    });

    return {
      rightOverflow,
      isExtraSmall,
      imageSize,
      slots
    };
  }
});
</script>