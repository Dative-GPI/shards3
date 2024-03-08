<template>
  <v-btn
    v-if="!['icon'].includes(props.variant)"
    :ripple="false"
    :style="style"
    :class="classes"
    :disabled="!props.editable"
    v-bind="$attrs"
  >
    <FSRow
      align="center-center"
      width="hug"
      :wrap="false"
    >
      <slot name="prepend" v-bind="{ color: props.color, colors }">
        <FSIcon
          v-if="props.prependIcon"
          size="l"
        >
          {{ props.prependIcon }}
        </FSIcon>
      </slot>
      <slot v-bind="{ color: props.color, colors }">
        <FSSpan
          v-if="props.label"
        >
          {{ props.label }}
        </FSSpan>
      </slot>
      <slot name="append" v-bind="{ color: props.color, colors }">
        <FSIcon
          v-if="props.appendIcon"
          size="l"
        >
          {{ props.appendIcon }}
        </FSIcon>
      </slot>
    </FSRow>
  </v-btn>
  <FSRow
    v-else-if="props.icon"
    align="center-center"
    width="hug"
    :style="style"
    :class="classes"
    v-bind="$attrs"
  >
    <FSIcon
      size="l"
    >
      {{ props.icon }}
    </FSIcon>
    <FSSpan
      v-if="props.label"
      font="text-overline"
    >
      {{ props.label }}
    </FSSpan>
  </FSRow>
</template>

<script lang="ts">
import { computed, defineComponent, getCurrentInstance, PropType } from "vue";
import { useDefaults } from "vuetify";

import { useColors, useSlots } from "@dative-gpi/foundation-shared-components/composables";
import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

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
    props = useDefaults(props, getCurrentInstance()?.type?.name ?? "FSButton");

    const { getColors, getContrasts } = useColors();
    const { slots } = useSlots();

    const textColors = computed(() => getContrasts(props.color));
    const colors = computed(() => getColors(props.color));
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const isEmpty = computed(() => {
      return !slots.default && !props.label;
    });

    const style = computed((): { [code: string]: string } & Partial<CSSStyleDeclaration> => {
      if (!props.editable) {
        switch (props.variant) {
          case "standard":
          case "full": return {
            "--fs-button-padding"         : !isEmpty.value ? "0 16px" : "0",
            "--fs-button-background-color": lights.base,
            "--fs-button-border-color"    : lights.dark,
            "--fs-button-color"           : lights.dark,
          };
          case "icon": return {
            "--fs-button-color": lights.dark,
          };
        }
      }
      switch (props.variant) {
        case "standard": return {
          "--fs-button-padding"                : !isEmpty.value ? "0 16px" : "0",
          "--fs-button-background-color"       : colors.value.light,
          "--fs-button-border-color"           : colors.value.base,
          "--fs-button-color"                  : textColors.value.base,
          "--fs-button-hover-background-color" : colors.value.base,
          "--fs-button-hover-border-color"     : colors.value.base,
          "--fs-button-hover-color"            : textColors.value.light,
          "--fs-button-active-background-color": colors.value.dark,
          "--fs-button-active-border-color"    : colors.value.dark,
          "--fs-button-active-color"           : textColors.value.light,
        };
        case "full": return {
          "--fs-button-padding"                : !isEmpty.value ? "0 16px" : "0",
          "--fs-button-background-color"       : colors.value.base,
          "--fs-button-border-color"           : colors.value.base,
          "--fs-button-color"                  : textColors.value.light,
          "--fs-button-hover-background-color" : colors.value.base,
          "--fs-button-hover-border-color"     : colors.value.base,
          "--fs-button-hover-color"            : textColors.value.light,
          "--fs-button-active-background-color": colors.value.dark,
          "--fs-button-active-border-color"    : colors.value.dark,
          "--fs-button-active-color"           : textColors.value.light,
        };
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

    const classes = computed((): string[] => {
      const classNames: string[] = [];
      if (!props.editable) {
        classNames.push("fs-button--disabled");
      }
      if (props.fullWidth) {
        classNames.push("fs-button-full-width");
      }
      switch (props.variant) {
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
      props,
      colors,
      style,
      classes
    };
  }
});
</script>