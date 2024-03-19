<template>
  <v-expansion-panel
    class="fs-accordion-panel"
    :collapseIcon="$props.collapseIcon"
    :expandIcon="$props.expandIcon"
    :disabled="false"
    :elevation="0"
    :style="style"
    v-bind="$attrs"
  >
    <template #title>
      <slot name="title">
        <FSRow>
          <FSIcon
            v-if="$props.prependIcon"
          >
            {{ $props.prependIcon }}
          </FSIcon>
          <FSSpan
            class="fs-accordion-panel-title"
          >
            {{ $props.title }}
          </FSSpan>
        </FSRow>
      </slot>
    </template>
    <template #text>
      <slot name="content">
        <FSText
          :lineClamp="$props.lineClampContent"
        >
          {{ $props.content }}
        </FSText>
      </slot>
    </template>
  </v-expansion-panel>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { sizeToVar } from "@dative-gpi/foundation-shared-components/utils";

import FSIcon from "./FSIcon.vue";
import FSSpan from "./FSSpan.vue";
import FSText from "./FSText.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSAccordionPanel",
  components: {
    FSIcon,
    FSSpan,
    FSText,
    FSRow
  },
  props: {
    prependIcon: {
      type: String,
      required: false,
      default: null
    },
    title: {
      type: String,
      required: false,
      default: null
    },
    content: {
      type: String,
      required: false,
      default: null
    },
    paddingTitle: {
      type: [String, Number],
      required: false,
      default: "16px"
    },
    paddingContent: {
      type: [String, Number],
      required: false,
      default: "16px"
    },
    lineClampContent: {
      type: Number,
      required: false,
      default: 5
    },
    divider: {
      type: Boolean,
      required: false,
      default: true
    },
    expandIcon: {
      type: String,
      required: false,
      default: ""
    },
    collapseIcon: {
      type: String,
      required: false,
      default: ""
    }
  },
  setup(props) {
    const { getColors } = useColors();

    const backgrounds = getColors(ColorEnum.Background);
    const lights = getColors(ColorEnum.Light);

    const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
      return {
        "--fs-accordion-panel-padding-title"         : sizeToVar(props.paddingTitle),
        "--fs-accordion-panel-padding-content"       : sizeToVar(props.paddingContent),
        "--fs-accordion-panel-divider-size"          : props.divider ? "1px" : "0",
        "--fs-accordion-panel-divider-color"         : lights.dark,
        "--fs-accordion-panel-background-color"      : backgrounds.base
      };
    });

    return {
      style
    };
  }
});
</script>