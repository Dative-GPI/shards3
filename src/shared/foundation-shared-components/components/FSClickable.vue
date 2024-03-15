<template>
  <button
    v-if="!href"
    :class="wrapperClasses"
    :type="$props.type"
    @click.stop="onClick"
  >
    <FSCard
      :border="$props.border"
      :class="classes"
      :style="style"
      v-bind="$attrs"
    >
      <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
    </FSCard>
  </button>
  <a
    v-else
    :class="wrapperClasses"
    :href="href"
  >
    <FSCard
      :border="$props.border"
      :class="classes"
      :style="style"
      v-bind="$attrs"
    >
      <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
    </FSCard>
  </a>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { RouteLocation, useRouter } from "vue-router";

import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { sizeToVar } from "@dative-gpi/foundation-shared-components/utils";

import FSCard from "./FSCard.vue";

export default defineComponent({
  name: "FSClickable",
  components: {
    FSCard
  },
  props: {
    to: {
      type: [String, Object] as PropType<string | RouteLocation>,
      required: false,
      default: null
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
    variant: {
      type: String as PropType<"standard" | "full">,
      required: false,
      default: "standard"
    },
    type: {
      type: String as PropType<"button" | "submit">,
      required: false,
      default: "submit"
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
  emits: ["click"],
  setup(props, { emit }) {
    const { getColors, getContrasts } = useColors();
    const router = useRouter();

    const textColors = computed(() => getContrasts(props.color));
    const colors = computed(() => getColors(props.color));
    const lights = getColors(ColorEnum.Light);

    const style = computed((): { [code: string]: string } & Partial<CSSStyleDeclaration> => {
      if (!props.editable) {
        return {
          "--fs-clickable-border-size"     : props.border ? "1px" : "0",
          "--fs-clickable-border-radius"   : sizeToVar(props.borderRadius),
          "--fs-clickable-background-color": lights.base,
          "--fs-clickable-border-color"    : lights.dark,
          "--fs-clickable-color"           : lights.dark
        };
      }
      switch (props.variant) {
        case "standard": return {
          "--fs-clickable-border-size"            : props.border ? "1px" : "0",
          "--fs-clickable-border-radius"          : sizeToVar(props.borderRadius),
          "--fs-clickable-background-color"       : colors.value.light,
          "--fs-clickable-border-color"           : colors.value.base,
          "--fs-clickable-color"                  : textColors.value.base,
          "--fs-clickable-hover-background-color" : colors.value.base,
          "--fs-clickable-hover-border-color"     : colors.value.base,
          "--fs-clickable-hover-color"            : textColors.value.light,
          "--fs-clickable-active-background-color": colors.value.dark,
          "--fs-clickable-active-border-color"    : colors.value.dark,
          "--fs-clickable-active-color"           : textColors.value.light
        };
        case "full": return {
          "--fs-clickable-border-size"            : props.border ? "1px" : "0",
          "--fs-clickable-border-radius"          : sizeToVar(props.borderRadius),
          "--fs-clickable-background-color"       : colors.value.base,
          "--fs-clickable-border-color"           : colors.value.base,
          "--fs-clickable-color"                  : textColors.value.light,
          "--fs-clickable-hover-background-color" : colors.value.base,
          "--fs-clickable-hover-border-color"     : colors.value.base,
          "--fs-clickable-hover-color"            : textColors.value.light,
          "--fs-clickable-active-background-color": colors.value.dark,
          "--fs-clickable-active-border-color"    : colors.value.dark,
          "--fs-clickable-active-color"           : textColors.value.light
        };
      }
    });

    const classes = computed((): string[] => {
      const classNames: string[] = ["fs-clickable"];
      if (!props.editable) {
        classNames.push("fs-clickable-disabled");
      }
      return classNames;
    });

    const wrapperClasses = computed((): string[] => {
      const classNames: string[] = [];
      if (props.fullWidth) {
        classNames.push("fs-clickable-wrapper-full-width");
      }
      return classNames;
    });

    const href = computed((): string | null => {
      if (!props.to) {
        return null;
      }
      if (typeof props.to === "string") {
        return props.to;
      }
      else {
        return router.resolve(props.to).href;
      }
    });

    const onClick = () => {
      if (props.editable) {
        emit("click");
      }
    };

    return {
      wrapperClasses,
      classes,
      style,
      href,
      onClick
    };
  }
});
</script>