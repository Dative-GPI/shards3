<template>
  <v-tab
    class="fs-tab"
    :ripple="false"
    v-bind="$attrs"
  >
    <slot>
      <FSRow
        align="center-left"
      >
        <slot
          name="prepend"
        >
          <FSIcon
            v-if="$props.prependIcon"
            size="m"
          >
            {{ $props.prependIcon }}
          </FSIcon>
        </slot>
        <slot>
          <FSSpan
            v-if="$props.label"
            font="text-button"
          >
            {{ $props.label }}
          </FSSpan>
        </slot>
        <slot
          name="append"
        >
          <FSIcon
            v-if="$props.appendIcon"
            size="m"
          >
            {{ $props.appendIcon }}
          </FSIcon>
        </slot>
        <FSRow
          align="center-right"
          :wrap="false"
        >
          <slot
            name="tag"
          >
            <FSSpan
              v-if="$props.tag"
              class="fs-tab-tag"
            >
              {{ $props.tag }}
            </FSSpan>
          </slot>
        </FSRow>
      </FSRow>
    </slot>
  </v-tab>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

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
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    label: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    tag: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    appendIcon: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Dark
    }
  }
});
</script>