<template>
  <div>
    <v-btn
      v-if="!['icon'].includes($props.variant)"
      :ripple="false"
      :style="style"
      :class="classes"
      :disabled="!$props.editable"
      @click="onClick"
      v-bind="$attrs"
    >
      <FSRow
        align="center-center"
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
        <slot v-bind="{ color, colors }">
          <FSSpan
            v-if="$props.label"
            font="text-body"
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
      v-bind="$attrs"
    >
      <FSIcon
        size="l"
      >
        {{ $props.icon }}
      </FSIcon>
    </FSRow>
    <form>
      <input
        v-show="false"
        type="file"
        ref="input"
        :accept="$props.accept"
        @input="onInput"
      />
    </form>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, toRefs } from "vue";

import { useColors, useSlots } from "@dative-gpi/foundation-shared-components/composables";
import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSSpan from "./FSSpan.vue";
import FSIcon from "./FSIcon.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSButtonFile",
  components: {
    FSSpan,
    FSIcon,
    FSRow
  },
  props: {
    accept: {
      type: String,
      required: false,
      default: "",
    },
    readFile: {
      type: Boolean,
      required: false,
      default: true,
    },
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
      default: ColorEnum.Dark
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { readFile, label, variant, color, editable } = toRefs(props);

    const textColors = computed(() => useColors().getContrasts(color.value));
    const colors = computed(() => useColors().getColors(color.value));
    const lights = useColors().getColors(ColorEnum.Light);

    const { slots } = useSlots();
    
    const input = ref(null);

    const isEmpty = computed(() => {
      return !slots.default && !label.value;
    });

    const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
      if (!editable.value) {
        switch (variant.value) {
          case "standard":
          case "full": return {
            "--fs-button-padding": !isEmpty.value ? "0 16px" : "0",
            "--fs-button-background-color": lights.base,
            "--fs-button-border-color": lights.dark,
            "--fs-button-color": lights.dark
          }
          case "icon": return {
            "--fs-button-color": lights.dark
          }
        }
      }
      switch (variant.value) {
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
          "--fs-button-active-color"           : textColors.value.light
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
          "--fs-button-active-color"           : textColors.value.light
        };
        case "icon": return {
          "--fs-button-color"      : textColors.value.base,
          "--fs-button-hover-color": textColors.value.dark
        };
      }
    });

    const classes = computed((): string[] => {
      const classNames = [];
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

    const clear = () => {
      input.value!.form && input.value!.form.reset();
    };

    const onClick = () => {
      input.value!.click();
    }

    const onInput = () => {
      const file = input.value!.files && input.value!.files[0];
      if (!file) {
        return;
      }
      if (!readFile.value) {
        emit("update:modelValue", file);
        clear();
      }
      else {
        const reader = new FileReader();
        reader.addEventListener("load", (fileEv) => {
          emit("update:modelValue", fileEv.target && fileEv.target.result);
          clear();
        });
        reader.readAsDataURL(file);
      }
    };

    return {
      colors,
      color,
      style,
      classes,
      input,
      onClick,
      onInput
    };
  }
});
</script>

<style scoped></style>
