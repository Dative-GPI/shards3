<template>
  <FSRow
    width="hug"
    align="center-left"
    :class="classes"
    :style="style"
    :wrap="false"
    v-bind="$attrs"
  >
    <slot name="prepend" v-bind="{ color: $props.color, colors }">
      <FSIcon
        v-if="$props.prependIcon"
        size="s"
      >
        {{ $props.prependIcon }}
      </FSIcon>
    </slot>
    <slot v-bind="{ color: $props.color, colors }">
      <FSSpan
        v-if="$props.label"
        font="text-overline"
        class="fs-chip-label"
      >
        {{ $props.label }}
      </FSSpan>
    </slot>
    <slot name="append" v-bind="{ color: $props.color, colors }">
      <FSIcon
        v-if="$props.appendIcon"
        size="s"
      >
        {{ $props.appendIcon }}
      </FSIcon>
    </slot>
  </FSRow>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";

import FSIcon from "./FSIcon.vue";
import FSSpan from "./FSSpan.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSChip",
  components: {
    FSIcon,
    FSSpan,
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
    appendIcon: {
      type: String,
      required: false,
      default: null
    },
    variant: {
      type: String as PropType<"standard" | "full">,
      required: false,
      default: "full"
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    },
    editable: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(props) {
    const { getColors } = useColors();

    const colors = computed(() => getColors(props.color));
    const backgrounds = getColors(ColorEnum.Background);

    const style = computed((): { [key: string] : string } => {
      switch (props.variant) {
        case "standard": return {
          "--fs-chip-background-color"       : backgrounds.base,
          "--fs-chip-border-color"           : colors.value.base,
          "--fs-chip-color"                  : colors.value.base,
          "--fs-chip-hover-background-color" : backgrounds.base,
          "--fs-chip-hover-border-color"     : colors.value.base,
          "--fs-chip-hover-color"            : colors.value.base,
          "--fs-chip-active-background-color": backgrounds.base,
          "--fs-chip-active-border-color"    : colors.value.dark,
          "--fs-chip-active-color"           : colors.value.dark
        };
        case "full": return {
          "--fs-chip-background-color"       : colors.value.base,
          "--fs-chip-border-color"           : colors.value.baseContrast,
          "--fs-chip-color"                  : colors.value.baseContrast,
          "--fs-chip-hover-background-color" : colors.value.base,
          "--fs-chip-hover-border-color"     : colors.value.baseContrast,
          "--fs-chip-hover-color"            : colors.value.baseContrast,
          "--fs-chip-active-background-color": colors.value.dark,
          "--fs-chip-active-border-color"    : colors.value.darkContrast,
          "--fs-chip-active-color"           : colors.value.darkContrast
        };
      }
    });

    const classes = computed((): string[] => {
      const classNames: string[] = ["fs-chip"];
      if (props.editable) {
        classNames.push("fs-chip-editable");
      }
      return classNames;
    });

    return {
      colors,
      style,
      classes
    };
  }
});
</script>