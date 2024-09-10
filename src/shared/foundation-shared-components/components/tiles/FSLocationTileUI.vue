<template>
  <FSTile
    :activeColor="$props.color"
    :bottomColor="$props.color"
    :modelValue="$props.modelValue"
    v-bind="$attrs"
  >
    <FSRow
      align="center-center"
      width="100%"
      gap="24px"
      :wrap="false"
    >
      <FSCol 
        gap="12px"
        width="100%"
        class="fs-location-tile-text-container"
      >
        <FSCol
          gap="6px"
        >
          <FSSpan
            font="text-button"
            :lineClamp="1"
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
        <FSRow
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
                {{ $props.deviceCount }}
              </FSSpan>
            </FSRow>
          </FSColor>
          <FSSpan
            font="text-overline"
          >
            {{ $tr("ui.location-tile.device(s)", "Device(s) in this location.") }}
          </FSSpan>
        </FSRow>
      </FSCol>
      <FSCol
        width="hug"
      >
        <FSIconCard
          :icon="$props.icon"
          :iconColor="$props.color"
          size="100px"
          iconSize="38px"
          variant="background"
          :border="true"
        />
      </FSCol>
    </FSRow>
  </FSTile>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSIconCard from "../FSIconCard.vue";
import FSColor from "../FSColor.vue";
import FSSpan from "../FSSpan.vue";
import FSTile from "./FSTile.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSGroupTileUI",
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
    color: {
      type: String,
      required: false,
      default: () => ColorEnum.Primary
    },
    icon: {
      type: String,
      required: false,
      default: "mdi-map-marker"
    },
    deviceCount: {
      type: Number,
      required: false,
      default: 0
    },
    modelValue: {
      type: Boolean,
      required: false,
      default: false
    },
  },
  setup() {
    return {
      ColorEnum
    };
  }
});
</script>