<template>
  <a
    v-if="$props.href"
    :href="$props.href"
    :style="style"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    @mousedown="active = true"
    @mouseup="active = false"
  >
    <FSCard
      :borderRadius="$props.borderRadius"
      :borderStyle="$props.borderStyle"
      :height="$props.height"
      :width="$props.width"
      :class="classes"
      :style="style"
      v-bind="$attrs"
    >
      <template
        v-for="(_, name) in $slots"
        v-slot:[name]="slotData"
      >
        <slot
          :name="name"
          v-bind="{ ...slotData, contentVariant }"
        />
      </template>
    </FSCard>
    <template
      v-if="$props.load"
    >
      <v-progress-circular
        class="fs-clickable-load"
        width="2"
        size="24"
        :indeterminate="true"
        :color="loadColor"
      />
    </template>
  </a>
  <router-link
    v-else-if="$props.to"
    :style="style"
    :to="$props.to"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    @mousedown="active = true"
    @mouseup="active = false"
  >
    <FSCard
      :borderRadius="$props.borderRadius"
      :borderStyle="$props.borderStyle"
      :height="$props.height"
      :width="$props.width"
      :class="classes"
      :style="style"
      v-bind="$attrs"
    >
      <template
        v-for="(_, name) in $slots"
        v-slot:[name]="slotData"
      >
        <slot
          :name="name"
          v-bind="{ ...slotData, contentVariant }"
        />
      </template>
    </FSCard>
    <template
      v-if="$props.load"
    >
      <v-progress-circular
        class="fs-clickable-load"
        width="2"
        size="24"
        :indeterminate="true"
        :color="loadColor"
      />
    </template>
  </router-link>
  <button
    v-else
    :type="$props.type"
    :style="style"
    @click.stop="onClick"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    @mousedown="active = true"
    @mouseup="active = false"
  >
    <FSCard
      :borderRadius="$props.borderRadius"
      :borderStyle="$props.borderStyle"
      :height="$props.height"
      :width="$props.width"
      :class="classes"
      :style="style"
      v-bind="$attrs"
    >
      <template
        v-for="(_, name) in $slots"
        v-slot:[name]="slotData"
      >
        <slot
          :name="name"
          v-bind="{ ...slotData, contentVariant }"
        />
      </template>
    </FSCard>
    <template
      v-if="$props.load"
    >
      <v-progress-circular
        class="fs-clickable-load"
        width="2"
        size="24"
        :indeterminate="true"
        :color="loadColor"
      />
    </template>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, ref, type StyleValue } from "vue";
import { type RouteLocation } from "vue-router";

import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { sizeToVar } from "@dative-gpi/foundation-shared-components/utils";

import FSCard from "./FSCard.vue";

export default defineComponent({
  name: "FSClickable",
  components: {
    FSCard
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
    to: {
      type: [String, Object] as PropType<string | RouteLocation | null>,
      required: false,
      default: null
    },
    href: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    variant: {
      type: String as PropType<"standard" | "background" | "full">,
      required: false,
      default: "standard"
    },
    type: {
      type: String as PropType<"button" | "submit">,
      required: false,
      default: "button"
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Light
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
    load: {
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
  emits: ["click"],
  setup(props, { emit }) {
    const { getColors } = useColors();

    const colors = computed(() => getColors(props.color));
    const backgrounds = getColors(ColorEnum.Background);
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const hover = ref(false);
    const active = ref(false);

    const style = computed((): StyleValue => {
      if (!props.editable) {
        return {
          "--fs-clickable-border-size"     : props.border ? "1px" : "0",
          "--fs-clickable-border-style"    : props.borderStyle,
          "--fs-clickable-border-radius"   : sizeToVar(props.borderRadius),
          "--fs-clickable-background-color": lights.light,
          "--fs-clickable-border-color"    : lights.dark,
          "--fs-clickable-color"           : lights.dark,
          "--fs-clickable-height"          : sizeToVar(props.height),
          "--fs-clickable-width"           : sizeToVar(props.width)
        };
      }
      switch (props.variant) {
        case "standard":
          switch (props.color) {
            case ColorEnum.Dark :
            case ColorEnum.Light: return {
              "--fs-clickable-border-size"            : props.border ? "1px" : "0",
              "--fs-clickable-border-style"           : props.borderStyle,
              "--fs-clickable-border-radius"          : sizeToVar(props.borderRadius),
              "--fs-clickable-background-color"       : backgrounds.base,
              "--fs-clickable-border-color"           : lights.dark,
              "--fs-clickable-color"                  : lights.lightContrast!,
              "--fs-clickable-hover-background-color" : lights.base,
              "--fs-clickable-hover-border-color"     : lights.dark,
              "--fs-clickable-hover-color"            : lights.baseContrast!,
              "--fs-clickable-active-background-color": lights.dark,
              "--fs-clickable-active-border-color"    : lights.dark,
              "--fs-clickable-active-color"           : lights.darkContrast!,
              "--fs-clickable-height"                 : sizeToVar(props.height),
              "--fs-clickable-width"                  : sizeToVar(props.width)
            };
            default: return {
              "--fs-clickable-border-size"            : props.border ? "1px" : "0",
              "--fs-clickable-border-style"           : props.borderStyle,
              "--fs-clickable-border-radius"          : sizeToVar(props.borderRadius),
              "--fs-clickable-background-color"       : colors.value.light,
              "--fs-clickable-border-color"           : colors.value.lightContrast!,
              "--fs-clickable-color"                  : colors.value.lightContrast!,
              "--fs-clickable-hover-background-color" : colors.value.base,
              "--fs-clickable-hover-border-color"     : colors.value.base,
              "--fs-clickable-hover-color"            : colors.value.baseContrast!,
              "--fs-clickable-active-background-color": colors.value.dark,
              "--fs-clickable-active-border-color"    : colors.value.darkContrast!,
              "--fs-clickable-active-color"           : colors.value.darkContrast!,
              "--fs-clickable-height"                 : sizeToVar(props.height),
              "--fs-clickable-width"                  : sizeToVar(props.width)
            };
          }
        case "background": return {
          "--fs-clickable-border-size"            : props.border ? "1px" : "0",
          "--fs-clickable-border-style"           : props.borderStyle,
          "--fs-clickable-border-radius"          : sizeToVar(props.borderRadius),
          "--fs-clickable-background-color"       : backgrounds.base,
          "--fs-clickable-border-color"           : lights.dark,
          "--fs-clickable-color"                  : darks.base,
          "--fs-clickable-hover-background-color" : colors.value.base,
          "--fs-clickable-hover-border-color"     : colors.value.baseContrast!,
          "--fs-clickable-hover-color"            : colors.value.baseContrast!,
          "--fs-clickable-active-background-color": colors.value.dark,
          "--fs-clickable-active-border-color"    : colors.value.darkContrast!,
          "--fs-clickable-active-color"           : colors.value.darkContrast!,
          "--fs-clickable-height"                 : sizeToVar(props.height),
          "--fs-clickable-width"                  : sizeToVar(props.width)
        };
        case "full": return {
          "--fs-clickable-border-size"            : props.border ? "1px" : "0",
          "--fs-clickable-border-style"           : props.borderStyle,
          "--fs-clickable-border-radius"          : sizeToVar(props.borderRadius),
          "--fs-clickable-background-color"       : colors.value.base,
          "--fs-clickable-border-color"           : colors.value.base,
          "--fs-clickable-color"                  : colors.value.baseContrast!,
          "--fs-clickable-hover-background-color" : colors.value.base,
          "--fs-clickable-hover-border-color"     : colors.value.base,
          "--fs-clickable-hover-color"            : colors.value.baseContrast!,
          "--fs-clickable-active-background-color": colors.value.dark,
          "--fs-clickable-active-border-color"    : colors.value.dark,
          "--fs-clickable-active-color"           : colors.value.darkContrast!,
          "--fs-clickable-height"                 : sizeToVar(props.height),
          "--fs-clickable-width"                  : sizeToVar(props.width)
        };
      }
    });

    const contentVariant = computed((): "base" | "baseContrast" | "light" | "lightContrast" | "dark" | "darkContrast" => {
      if (active.value) {
        return "darkContrast";
      }
      if (hover.value) {
        return "baseContrast";
      }
      switch (props.variant) {
        case "standard"  : return "lightContrast";
        case "background": return "base";
        case "full"      : return "baseContrast";
      }
    });

    const classes = computed((): string[] => {
      const classNames: string[] = ["fs-clickable"];
      if (!props.editable) {
        classNames.push("fs-clickable-disabled");
      }
      return classNames;
    });

    const loadColor = computed((): string => {
      switch (props.color) {
        case ColorEnum.Primary:
        case ColorEnum.Success:
        case ColorEnum.Warning:
        case ColorEnum.Error  : return ["full"].includes(props.variant) ? colors.value.light : colors.value.dark;
        default               : return ["full"].includes(props.variant) ? darks.soft : darks.dark;
      }
    });

    const onClick = (event: MouseEvent) => {
      if (!props.to && !props.href && props.editable && !props.load) {
        emit("click", event);
      }
    };

    return {
      contentVariant,
      loadColor,
      classes,
      active,
      hover,
      style,
      onClick
    };
  }
});
</script>