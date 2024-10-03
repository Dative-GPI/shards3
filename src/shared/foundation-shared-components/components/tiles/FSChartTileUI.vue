<template>
  <FSClickable
    padding="16px"
    :width="['275px','336px']"
    :height="['124px','156px']"
    v-bind="$attrs"
  >
    <template
      #default
    >
      <FSRow
        align="center-left"
        :wrap="false"
      >
        <FSCol
          align="center-left"
        >
          <FSSpan
            font="text-button"
            :lineClamp="2"
          >
            {{ $props.label }}
          </FSSpan>
          <FSIcon
            :color="ColorEnum.Error"
          >
            {{ chartIcon(type) }}
          </FSIcon>
          <FSSpan
            font="text-overline"
          >
            {{ $props.categoryLabel }}
          </FSSpan>
        </FSCol>
        <FSCol
          align="center-right"
          width="hug"
        >
          <FSImage
            v-if="$props.imageId"
            height="92px"
            width="92px"          
            :imageId="$props.imageId"
          />
          <FSIcon
            v-else-if="$props.icon"
            size="92px"
            :icon="$props.icon"
          />
        </FSCol>
      </FSRow>
    </template>
  </FSClickable>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import type { ChartType } from "@dative-gpi/foundation-shared-domain/enums";

import { chartIcon } from "@dative-gpi/foundation-shared-components/tools";

import FSClickable from "../FSClickable.vue";
import FSImage from "../FSImage.vue";
import FSSpan from "../FSSpan.vue";
import FSIcon from "../FSIcon.vue";
import FSRow from "../FSRow.vue";
import FSCol from "../FSCol.vue";

export default defineComponent({
  name: "FSChartTileUI",
  components: {
    FSIcon,
    FSImage,
    FSRow,
    FSCol,
    FSSpan,
    FSClickable
  },
  props: {
    label: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    imageId: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    categoryLabel: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    icon: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    type: {
      type: Number as PropType<ChartType>,
      required: false,
      default: null
    }
  },
  setup() {
    return {
      ColorEnum,
      chartIcon
    };
  }
});
</script>