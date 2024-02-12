<template>
  <FSRow
    width="hug"
    align="center-left"
    :class="classes"
    :style="style"
    :wrap="false"
    v-bind="$attrs"
  >
    <slot name="prepend" v-bind="{ color, colors }">
      <FSIcon
        v-if="$props.prependIcon"
        size="s"
      >
        {{ $props.prependIcon }}
      </FSIcon>
    </slot>
    <slot v-bind="{ color, colors }">
      <FSSpan
        font="text-overline"
        class="fs-chip-label"
      >
        {{ $props.label }}
      </FSSpan>
    </slot>
    <slot name="append" v-bind="{ color, colors }">
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
import { computed, defineComponent, PropType, toRefs } from "vue";

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
      required: true
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
    const { variant, color, editable } = toRefs(props);

    const colors = computed(() => useColors().getColors(color.value));
    const backgrounds = useColors().getColors(ColorEnum.Background);

    const textColors = computed(() => {
      switch (variant.value) {
        case "standard": return colors.value;
        case "full": return useColors().getContrasts(color.value);
      }
    });

    const style = computed((): { [code: string]: string } & Partial<CSSStyleDeclaration> => {
      switch (variant.value) {
        case "standard": return {
          "--fs-chip-background-color"       : backgrounds.base,
          "--fs-chip-border-color"           : colors.value.base,
          "--fs-chip-color"                  : textColors.value.base,
          "--fs-chip-hover-background-color" : backgrounds.base,
          "--fs-chip-hover-border-color"     : colors.value.base,
          "--fs-chip-hover-color"            : textColors.value.base,
          "--fs-chip-active-background-color": backgrounds.base,
          "--fs-chip-active-border-color"    : colors.value.dark,
          "--fs-chip-active-color"           : textColors.value.dark
        };
        case "full": return {
          "--fs-chip-background-color"       : colors.value.base,
          "--fs-chip-border-color"           : colors.value.base,
          "--fs-chip-color"                  : textColors.value.light,
          "--fs-chip-hover-background-color" : colors.value.base,
          "--fs-chip-hover-border-color"     : colors.value.base,
          "--fs-chip-hover-color"            : textColors.value.light,
          "--fs-chip-active-background-color": colors.value.dark,
          "--fs-chip-active-border-color"    : colors.value.dark,
          "--fs-chip-active-color"           : textColors.value.light
        };
      }
    });

    const classes = computed((): string[] => {
      const classNames: string[] = ["fs-chip"];
      if (editable.value) {
        classNames.push("fs-chip-editable");
      }
      return classNames;
    });

    return {
      colors,
      color,
      style,
      classes
    };
  }
});
</script>