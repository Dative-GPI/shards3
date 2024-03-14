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
        <FSText>
          {{ $props.content }}
        </FSText>
      </slot>
    </template>
  </v-expansion-panel>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";
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
    borderRadius: {
      type: [String, Number],
      required: false,
      default: "4px"
    },
    divider: {
      type: Boolean,
      required: false,
      default: false
    },
    expandIcon: {
      type: String,
      required: false,
      default: "mdi-chevron-down"
    },
    collapseIcon: {
      type: String,
      required: false,
      default: "mdi-chevron-up"
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    }
  },
  setup(props) {
    const { getColors } = useColors();

    const colors = computed(() => getColors(props.color));
    const backgrounds = getColors(ColorEnum.Background);
    const darks = getColors(ColorEnum.Dark);

    const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
      return {
        "--fs-accordion-panel-border-radius"         : sizeToVar(props.borderRadius),
        "--fs-accordion-panel-border-size"           : props.divider ? "1px" : "0",
        "--fs-accordion-panel-border-color"          : darks.base,
        "--fs-accordion-panel-background-color"      : backgrounds.base,
        "--fs-accordion-panel-color"                 : darks.base,
        "--fs-accordion-panel-hover-background-color": colors.value.light,
        "--fs-accordion-panel-hover-color"           : colors.value.base,
      };
    });

    return {
      style
    };
  }
});
</script>