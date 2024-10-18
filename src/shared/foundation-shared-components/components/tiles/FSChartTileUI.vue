<template>
  <FSClickable
    :width="['275px','336px']"
    :height="['124px','156px']"
    padding="16px 16px 16px 20px"
    borderRadius="8px"
    v-bind="$attrs"
  >
    <template
      #default
    >
      <FSRow
        align="center-left"
        gap="16px"
        :wrap="false"
      >
        <FSCol
          align="center-left"
        >
          <FSSpan
            font="text-overline"
            :lineClamp="4"
          >
            {{ $props.label }}
          </FSSpan>
          <FSIcon
            :color="ColorEnum.Error"
            size="18px"
          >
            {{ chartIcon(type) }}
          </FSIcon>
        </FSCol>
        <FSCol
          align="center-right"
          width="hug"
        >
          <FSImage
            v-if="$props.imageId"
            height="82px"
            width="82px"          
            :imageId="$props.imageId"
          />
          <FSIcon
            v-else-if="$props.icon"
            size="82px"
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
import { ChartType } from "@dative-gpi/foundation-shared-domain/enums";

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
    FSClickable,
    FSImage,
    FSIcon,
    FSRow,
    FSCol,
    FSSpan,
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
    icon: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    type: {
      type: Number as PropType<ChartType>,
      required: false,
      default: ChartType.None
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