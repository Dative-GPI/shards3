<template>
  <div
    :class="classes"
    :style="style"
  >
    <slot>
      <FSCol
        :gap="$props.gap"
      >
        <FSRow
          v-if="$slots.header"
        >
          <slot
            name="header"
          />
        </FSRow>
        <FSRow
          v-if="$slots.body"
        >
          <slot
            name="body"
          />
        </FSRow>
        <FSRow
          v-if="$slots.footer"
        >
          <slot
            name="footer"
          />
        </FSRow>
      </FSCol>
    </slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { sizeToVar } from "@dative-gpi/foundation-shared-components/utils";

import FSCol from "./FSCol.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSCard",
  components: {
    FSCol,
    FSRow
  },
  props: {
    height: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: null
    },
    width: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: null
    },
    padding: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: "0"
    },
    gap: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: "8px"
    },
    variant: {
      type: String as PropType<"background" | "standard" | "full" | "gradient">,
      required: false,
      default: "background"
    },
    color: {
      type: [Array, String] as PropType<ColorBase | ColorBase[]>,
      required: false,
      default: ColorEnum.Background
    },
    border: {
      type: Boolean,
      required: false,
      default: true
    },
    borderRadius: {
      type: [String, Number],
      required: false,
      default: "4px"
    },
    borderStyle: {
      type: String as PropType<"solid" | "dashed" | "dotted" | "double" | "groove" | "ridge" | "inset" | "outset" | "none">,
      required: false,
      default: "solid"
    },
    elevation: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(props) {
    const { getColors, getGradients } = useColors();

    const colors = computed(() => {
      if(Array.isArray(props.color)) {
        return getColors(props.color[0]);
      }
      return getColors(props.color);
    });
    const gradients = computed(() => getGradients(props.color, 135));
    const backgrounds = getColors(ColorEnum.Background);
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const style = computed((): { [key: string] : string | null | undefined } => {
      switch (props.variant) {
        case "background": return {
          "--fs-card-border-size"     : props.border ? "1px" : "0",
          "--fs-card-border-style"    : props.borderStyle,
          "--fs-card-border-radius"   : sizeToVar(props.borderRadius),
          "--fs-card-padding"         : sizeToVar(props.padding),
          "--fs-card-height"          : sizeToVar(props.height),
          "--fs-card-width"           : sizeToVar(props.width),
          "--fs-card-background-color": backgrounds.base,
          "--fs-card-border-color"    : lights.dark,
          "--fs-card-color"           : darks.base
        }
        case "standard": return {
          "--fs-card-border-size"     : props.border ? "1px" : "0",
          "--fs-card-border-style"    : props.borderStyle,
          "--fs-card-border-radius"   : sizeToVar(props.borderRadius),
          "--fs-card-padding"         : sizeToVar(props.padding),
          "--fs-card-height"          : sizeToVar(props.height),
          "--fs-card-width"           : sizeToVar(props.width),
          "--fs-card-background-color": colors.value.light,
          "--fs-card-border-color"    : colors.value.lightContrast,
          "--fs-card-color"           : colors.value.lightContrast
        }
        case "full": return {
          "--fs-card-border-size"     : props.border ? "1px" : "0",
          "--fs-card-border-style"    : props.borderStyle,
          "--fs-card-border-radius"   : sizeToVar(props.borderRadius),
          "--fs-card-padding"         : sizeToVar(props.padding),
          "--fs-card-height"          : sizeToVar(props.height),
          "--fs-card-width"           : sizeToVar(props.width),
          "--fs-card-background-color": colors.value.base,
          "--fs-card-border-color"    : colors.value.base,
          "--fs-card-color"           : colors.value.baseContrast
        }
        case "gradient": return {
          "--fs-card-border-size"     : props.border ? "1px" : "0",
          "--fs-card-border-style"    : props.borderStyle,
          "--fs-card-border-radius"   : sizeToVar(props.borderRadius),
          "--fs-card-padding"         : sizeToVar(props.padding),
          "--fs-card-height"          : sizeToVar(props.height),
          "--fs-card-width"           : sizeToVar(props.width),
          "--fs-card-background-color": gradients.value.base,
          "--fs-card-border-color"    : colors.value.lightContrast,
          "--fs-card-color"           : colors.value.lightContrast
        }
      }
    });

    const classes = computed((): string[] => {
      const classNames = ["fs-card", "fs-background"];
      switch(props.variant) {
        case "gradient": 
          classNames.push("fs-card-gradient"); 
          break;
        default: 
          classNames.push("fs-card-background");
          break;
      }
      if (props.elevation) {
        classNames.push("fs-card-elevation");
      }
      return classNames;
    });

    return {
      classes,
      style
    };
  }
});
</script>