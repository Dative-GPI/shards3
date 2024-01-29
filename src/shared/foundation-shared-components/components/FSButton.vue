<template>
  <v-btn
    v-if="!['icon'].includes($props.variant)"
    :ripple="false"
    :style="style"
    :class="classes"
    :disabled="!$props.editable"
    v-bind="$attrs"
  >
    <FSRow
      align="center-center"
      width="hug"
      :wrap="false"
    >
      <slot name="prepend" v-bind="{ color, colors }">
        <FSIcon
          v-if="$props.prependIcon"
          size="l"
        >
          {{ $props.prependIcon }}
        </FSIcon>
      </slot>
      <slot name="default" v-bind="{ color, colors }">
        <FSSpan
          v-if="$props.label"
        >
          {{ $props.label }}
        </FSSpan>
      </slot>
      <slot name="append" v-bind="{ color, colors }">
        <FSIcon
          v-if="$props.appendIcon"
          size="l"
        >
          {{ $props.appendIcon }}
        </FSIcon>
      </slot>
    </FSRow>
  </v-btn>
  <FSRow
    v-else-if="$props.icon"
    width="hug"
    :style="style"
    :class="classes"
    @click="onClick"
    v-bind="$attrs"
  >
    <FSIcon
      size="l"
    >
      {{ $props.icon }}
    </FSIcon>
  </FSRow>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs, useSlots } from "vue";

import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";

import FSSpan from "./FSSpan.vue";
import FSIcon from "./FSIcon.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSButton",
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
    appendIcon: {
      type: String,
      required: false,
      default: null
    },
    icon: {
      type: String,
      required: false,
      default: null
    },
    variant: {
      type: String as PropType<"standard" | "full" | "icon">,
      required: false,
      default: "standard"
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  setup(props) {
    const { label, variant, color, editable } = toRefs(props);

    const textColors = useColors().getContrasts(color.value);
    const colors = useColors().getColors(color.value);
    const lights = useColors().getColors(ColorEnum.Light);

    const slots = useSlots();

    const isEmpty = computed(() => {
      return !slots.default && !label.value;
    });

    const style = computed((): { [code: string]: string } & Partial<CSSStyleDeclaration> => {
      if (!editable.value) {
        switch (variant.value) {
          case "standard":
          case "full": return {
            "--fs-button-padding": !isEmpty.value ? "0 16px" : "0",
            "--fs-button-background-color": lights.base,
            "--fs-button-border-color": lights.dark,
            "--fs-button-color": lights.dark,
          };
          case "icon": return {
            "--fs-button-color": lights.dark,
          };
        }
      }
      switch (variant.value) {
        case "standard": return {
          "--fs-button-padding": !isEmpty.value ? "0 16px" : "0",
          "--fs-button-background-color": colors.light,
          "--fs-button-border-color": colors.base,
          "--fs-button-color": textColors.base,
          "--fs-button-hover-background-color": colors.base,
          "--fs-button-hover-border-color": colors.base,
          "--fs-button-hover-color": textColors.light,
          "--fs-button-active-background-color": colors.dark,
          "--fs-button-active-border-color": colors.dark,
          "--fs-button-active-color": textColors.light,
        };
        case "full": return {
          "--fs-button-padding": !isEmpty.value ? "0 16px" : "0",
          "--fs-button-background-color": colors.base,
          "--fs-button-border-color": colors.base,
          "--fs-button-color": textColors.light,
          "--fs-button-hover-background-color": colors.base,
          "--fs-button-hover-border-color": colors.base,
          "--fs-button-hover-color": textColors.light,
          "--fs-button-active-background-color": colors.dark,
          "--fs-button-active-border-color": colors.dark,
          "--fs-button-active-color": textColors.light,
        };
        case "icon": switch (color.value) {
          case ColorEnum.Dark: return {
            "--fs-button-color": colors.light,
            "--fs-button-hover-color": colors.dark,
          };
          default: return {
            "--fs-button-color": colors.base,
            "--fs-button-hover-color": colors.dark,
          };
        }
      }
    });

    const classes = computed((): string[] => {
      const classNames: string[] = [];
      if (!editable.value) {
        classNames.push("fs-button--disabled");
      }
      switch (variant.value) {
        case "icon":
          classNames.push("fs-button-icon");
          break;
        default:
          classNames.push("fs-button");
          break;
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