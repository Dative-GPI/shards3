<template>
  <v-tab
    class="fs-tab"
    :ripple="false"
    v-bind="$attrs"
  >
    <slot name="default">
      <FSRow align="center-left">
        <slot name="prepend">
          <FSIcon v-if="$props.prependIcon" size="m">
            {{ $props.prependIcon }}
          </FSIcon>
        </slot>
        <slot name="default">
          <FSSpan v-if="$props.label" font="text-button">
            {{ $props.label }}
          </FSSpan>
        </slot>
        <v-spacer v-if="$props.tag" />
        <slot name="tag">
          <FSSpan v-if="$props.tag" class="fs-tab-tag">
            {{ $props.tag }}
          </FSSpan>
        </slot>
        <slot name="append">
          <FSIcon v-if="$props.appendIcon" size="m">
            {{ $props.appendIcon }}
          </FSIcon>
        </slot>
      </FSRow>
    </slot>
  </v-tab>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { ColorBase } from "@dative-gpi/foundation-shared-components/themes";

import FSSpan from "./FSSpan.vue";
import FSIcon from "./FSIcon.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSTab",
  components: {
    FSSpan,
    FSIcon,
    FSRow
  },
  props: {
    prependIcon: {
      type: String,
      required: false,
      default: null
    },
    label: {
      type: String,
      required: false,
      default: null
    },
    tag: {
      type: String,
      required: false,
      default: null
    },
    appendIcon: {
      type: String,
      required: false,
      default: null
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorBase.Dark
    }
  }
});
</script>