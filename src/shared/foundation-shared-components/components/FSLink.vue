<template>
  <router-link
    :class="classes"
    :style="style"
    :to="href"
    v-slot="props"
    v-bind="$attrs"
  >
    <slot v-bind="props">
      {{ $props.label }}
    </slot>
  </router-link>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { RouteLocation, useRouter } from "vue-router";

import { useColors, useSlots } from "@dative-gpi/foundation-shared-components/composables";
import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

export default defineComponent({
  name: "FSLink",
  props: {
    label: {
      type: [String, null, undefined],
      required: false,
      default: null
    },
    to: {
      type: [String, Object] as PropType<string | RouteLocation>,
      required: false,
      default: "_blank"
    },
    font: {
      type: String as PropType<"text-h1" | "text-h2" | "text-h3" | "text-body" | "text-button" | "text-overline" | "text-underline">,
      required: false,
      default: "text-body"
    },
    lineClamp: {
      type: Number,
      required: false,
      default: 1
    },
    ellipsis: {
      type: Boolean,
      required: false,
      default: true
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    },
    variant: {
      type: String as PropType<"base" | "light" | "dark">,
      required: false,
      default: "dark"
    }
  },
  setup(props) {
    const { getColors } = useColors();
    const { slots } = useSlots();
    const router = useRouter();

    const colors = computed(() => getColors(props.color));

    const classes = computed((): string[] => {
      const classNames = ["fs-link", props.font];
      if (!slots.default) {
        classNames.push("fs-span-pre-wrap");
      }
      if (props.lineClamp > 1) {
        classNames.push("fs-span-line-clamp");
      }
      else if (props.ellipsis) {
        classNames.push("fs-span-ellipsis");
      }
      return classNames;
    });

    const style = computed((): { [code: string]: string } & Partial<CSSStyleDeclaration> => {
      switch (props.variant) {
        case "base": return {
          "--fs-span-line-clamp": props.lineClamp.toString(),
          "--fs-link-color"     : colors.value.base
        };
        case "light": return {
          "--fs-span-line-clamp": props.lineClamp.toString(),
          "--fs-link-color"     : colors.value.light
        };
        case "dark": return {
          "--fs-span-line-clamp": props.lineClamp.toString(),
          "--fs-link-color"     : colors.value.dark
        };
      }
    });

    const href = computed((): string => {
      if (typeof props.to === "string") {
        return props.to;
      }
      else {
        return router.resolve(props.to).href;
      }
    });

    return {
      classes,
      style,
      href
    };
  }
});
</script>