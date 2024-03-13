<template>
  <FSClickable
    v-if="!['icon'].includes($props.variant)"
    :fullWidth="$props.fullWidth"
    :editable="$props.editable"
    :height="['40px', '36px']"
    :variant="$props.variant"
    :color="$props.color"
    :padding="padding"
    :style="style"
    :width="width"
    v-bind="$attrs"
  >
    <FSRow
      align="center-center"
      width="fill"
      :wrap="false"
    >
      <slot name="prepend" v-bind="{ color: $props.color, colors }">
        <FSIcon
          v-if="$props.prependIcon || $props.icon"
          size="l"
        >
          {{ $props.prependIcon ?? $props.icon }}
        </FSIcon>
      </slot>
      <slot v-bind="{ color: $props.color, colors }">
        <FSSpan
          v-if="$props.label"
        >
          {{ $props.label }}
        </FSSpan>
      </slot>
      <slot name="append" v-bind="{ color: $props.color, colors }">
        <FSIcon
          v-if="$props.appendIcon"
          size="l"
        >
          {{ $props.appendIcon }}
        </FSIcon>
      </slot>
    </FSRow>
  </FSClickable>
  <FSRow
    v-else-if="$props.icon"
    align="center-center"
    width="hug"
    :class="iconClasses"
    :style="style"
    v-bind="$attrs"
  >
    <FSIcon
      size="l"
    >
      {{ $props.icon }}
    </FSIcon>
    <FSSpan
      v-if="$props.label"
      font="text-overline"
    >
      {{ $props.label }}
    </FSSpan>
  </FSRow>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { useColors, useSlots } from "@dative-gpi/foundation-shared-components/composables";
import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSClickable from "./FSClickable.vue";
import FSSpan from "./FSSpan.vue";
import FSIcon from "./FSIcon.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSButton",
  components: {
    FSClickable,
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
      type: [String, Function],
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
      default: ColorEnum.Light
    },
    fullWidth: {
      type: Boolean,
      required: false,
      default: false
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  setup(props) {
    const { getColors } = useColors();
    const { slots } = useSlots();

    const colors = computed(() => getColors(props.color));
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const style = computed((): { [code: string]: string } & Partial<CSSStyleDeclaration> => {
      if (!props.editable) {
        switch (props.variant) {
          case "icon": return {
            "--fs-button-color": lights.dark,
          };
        }
      }
      switch (props.variant) {
        case "icon": switch (props.color) {
          case ColorEnum.Dark:
          case ColorEnum.Light: return {
            "--fs-button-color"      : darks.base,
            "--fs-button-hover-color": darks.dark,
          };
          default: return {
            "--fs-button-color"      : colors.value.base,
            "--fs-button-hover-color": colors.value.dark,
          };
        }
      }
    });

    const iconClasses = computed((): string[] => {
      const classNames = ["fs-button-icon"];
      if (!props.editable) {
        classNames.push("fs-button-disabled");
      }
      return classNames;
    });

    const padding = computed((): string | number => {
      switch (props.variant) {
        case "standard":
        case "full":     return (!slots.default && !props.label) ? "0 7px" : "0 16px";
        default:         return "0px";
      }
    });

    const width = computed((): string | number => {
      if (props.fullWidth) {
        return "100%";
      }
      return "fit-content";
    });

    return {
      iconClasses,
      padding,
      colors,
      style,
      width
    };
  }
});
</script>