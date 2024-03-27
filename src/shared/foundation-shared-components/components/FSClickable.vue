<template>
  <button
    v-if="!href"
    :class="wrapperClasses"
    :type="$props.type"
    @click.stop="onClick"
  >
    <FSCard
      :class="classes"
      :style="style"
      v-bind="$attrs"
    >
      <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
    </FSCard>
    <template v-if="$props.load">
      <v-progress-circular
        class="fs-clickable-load"
        width="2"
        size="24"
        :indeterminate="true"
        :color="loadColor"
      />
    </template>
  </button>
  <router-link
    v-else
    :class="wrapperClasses"
    :to="href"
  >
    <FSCard
      :class="classes"
      :style="style"
      v-bind="$attrs"
    >
      <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
    </FSCard>
    <template v-if="$props.load">
      <v-progress-circular
        class="fs-clickable-load"
        width="2"
        size="24"
        :indeterminate="true"
        :color="loadColor"
      />
    </template>
  </router-link>
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
    const router = useRouter();

    const colors = computed(() => getColors(props.color));
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const style = computed((): { [code: string]: string } & Partial<CSSStyleDeclaration> => {
      if (!props.editable) {
        return {
          "--fs-clickable-border-size"     : props.border ? "1px" : "0",
          "--fs-clickable-border-radius"   : sizeToVar(props.borderRadius),
          "--fs-clickable-background-color": lights.light,
          "--fs-clickable-border-color"    : lights.dark,
          "--fs-clickable-color"           : lights.dark
        };
      }
      switch (props.variant) {
        case "standard": return {
          "--fs-clickable-border-size"            : props.border ? "1px" : "0",
          "--fs-clickable-border-radius"          : sizeToVar(props.borderRadius),
          "--fs-clickable-background-color"       : colors.value.light,
          "--fs-clickable-border-color"           : colors.value.lightContrast,
          "--fs-clickable-color"                  : colors.value.lightContrast,
          "--fs-clickable-hover-background-color" : colors.value.base,
          "--fs-clickable-hover-border-color"     : colors.value.baseContrast,
          "--fs-clickable-hover-color"            : colors.value.baseContrast,
          "--fs-clickable-active-background-color": colors.value.dark,
          "--fs-clickable-active-border-color"    : colors.value.darkContrast,
          "--fs-clickable-active-color"           : colors.value.darkContrast
        };
        case "full": return {
          "--fs-clickable-border-size"            : props.border ? "1px" : "0",
          "--fs-clickable-border-radius"          : sizeToVar(props.borderRadius),
          "--fs-clickable-background-color"       : colors.value.base,
          "--fs-clickable-border-color"           : colors.value.base,
          "--fs-clickable-color"                  : colors.value.baseContrast,
          "--fs-clickable-hover-background-color" : colors.value.base,
          "--fs-clickable-hover-border-color"     : colors.value.base,
          "--fs-clickable-hover-color"            : colors.value.baseContrast,
          "--fs-clickable-active-background-color": colors.value.dark,
          "--fs-clickable-active-border-color"    : colors.value.dark,
          "--fs-clickable-active-color"           : colors.value.darkContrast
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
      if (!props.to || !props.editable || props.load) {
        return null;
      }
      if (typeof props.to === "string") {
        return props.to;
      }
      else {
        return router.resolve(props.to).href;
      }
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

    const onClick = (event: MouseEvent) => {
      if (!props.to && props.editable && !props.load) {
        emit("click", event);
      }
    };

    return {
      wrapperClasses,
      loadColor,
      classes,
      style,
      href,
      onClick
    };
  }
});
</script>