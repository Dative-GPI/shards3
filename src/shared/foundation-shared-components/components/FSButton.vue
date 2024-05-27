<template>
  <FSClickable
    v-if="!['icon'].includes($props.variant)"
    :editable="$props.editable"
    :height="['40px', '36px']"
    :variant="$props.variant"
    :color="$props.color"
    :load="$props.load"
    :href="$props.href"
    :padding="padding"
    :to="$props.to"
    :style="style"
    :width="width"
    @click.stop="onClick"
    v-bind="$attrs"
  >
    <FSRow
      align="center-center"
      width="fill"
      :wrap="false"
    >
      <slot
        name="prepend"
        v-bind="{ color: $props.color, colors }"
      >
        <FSIcon
          v-if="$props.prependIcon || $props.icon"
          size="l"
        >
          {{ $props.prependIcon ?? $props.icon }}
        </FSIcon>
      </slot>
      <slot
        v-bind="{ color: $props.color, colors }"
      >
        <FSSpan
          v-if="$props.label"
        >
          {{ $props.label }}
        </FSSpan>
      </slot>
      <slot
        name="append"
        v-bind="{ color: $props.color, colors }"
      >
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
    v-else
    width="hug"
    :class="iconClasses"
    :style="style"
    @click.stop="onClick"
    v-bind="$attrs"
  >
    <template
      v-if="$props.load"
    >
      <v-progress-circular
        class="fs-button-load"
        width="2"
        size="20"
        :indeterminate="true"
        :color="loadColor"
      />
    </template>
    <template
      v-else-if="$props.href"
    >
      <a
        :href="$props.href"
      >
        <FSIcon
          v-if="$props.icon"
          size="l"
        >
          {{ $props.icon }}
        </FSIcon>
        <FSSpan
          v-if="$props.label"
        >
          {{ $props.label }}
        </FSSpan>
      </a>
    </template>
    <template
      v-else-if="$props.to"
    >
      <router-link
        :to="$props.to"
      >
        <FSIcon
          v-if="$props.icon"
          size="l"
        >
          {{ $props.icon }}
        </FSIcon>
        <FSSpan
          v-if="$props.label"
        >
          {{ $props.label }}
        </FSSpan>
      </router-link>
    </template>
    <template
      v-else
    >
      <FSIcon
        v-if="$props.icon"
        size="l"
      >
        {{ $props.icon }}
      </FSIcon>
      <FSSpan
        v-if="$props.label"
      >
        {{ $props.label }}
      </FSSpan>
    </template>
  </FSRow>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { RouteLocation } from "vue-router";

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
    prependIcon: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    label: {
      type: [String, Function],
      required: false,
      default: null
    },
    appendIcon: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    icon: {
      type: String as PropType<string | null>,
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
    const { slots } = useSlots();

    const colors = computed(() => getColors(props.color));
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const style = computed((): { [key: string] : string | null | undefined } => {
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
      return {};
    });

    const iconClasses = computed((): string[] => {
      const classNames = ["fs-button-icon"];
      if (!props.editable) {
        classNames.push("fs-button-disabled");
      }
      return classNames;
    });

    const loadColor = computed((): string => {
      switch (props.color) {
        case ColorEnum.Primary:
        case ColorEnum.Success:
        case ColorEnum.Warning:
        case ColorEnum.Error  : return ["standard"].includes(props.variant) ? colors.value.dark : colors.value.light;
        default               : return ["standard"].includes(props.variant) ? darks.dark : darks.light;
      }
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

    const onClick = (event: MouseEvent) => {
      if (!props.to && !props.href && props.editable && !props.load) {
        emit("click", event);
      }
    };

    return {
      iconClasses,
      loadColor,
      padding,
      colors,
      style,
      width,
      onClick
    };
  }
});
</script>