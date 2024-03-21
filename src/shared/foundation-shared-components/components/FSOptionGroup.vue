<template>
  <FSWrapGroup
    v-if="['wrap'].includes($props.variant)"
    class="fs-option-group"
    :padding="$props.padding"
    :gap="$props.gap"
    :style="style"
  >
    <template v-if="$props.values.length">
      <template v-if="!firstChild">
        <FSOptionItem
          v-for="(item, index) in $props.values"
          :prependIcon="item.prependIcon"
          :appendIcon="item.appendIcon"
          :editable="$props.editable"
          :variant="getVariant(item)"
          :color="getColor(item)"
          :class="getClass(item)"
          :label="item.label"
          :icon="item.icon"
          :key="index"
          @click="toggle(item)"
        />
      </template>
      <template v-else>
        <component
          v-for="(item, index) in $props.values"
          :key="index"
          :is="firstChild"
          :prependIcon="getFromFirstChild('prependIcon', item)"
          :appendIcon="getFromFirstChild('appendIcon', item)"
          :variant="getFromFirstChild('variant', item)"
          :color="getFromFirstChild('color', item)"
          :class="getFromFirstChild('class', item)"
          :label="getFromFirstChild('label', item)"
          :icon="getFromFirstChild('icon', item)"
          :editable="$props.editable"
          @click="toggle(item)"
        />
      </template>
    </template>
    <slot v-else />
  </FSWrapGroup>
  <FSSlideGroup
    v-else
    class="fs-option-group"
    :padding="$props.padding"
    :gap="$props.gap"
    :style="style"
  >
    <template v-if="$props.values.length">
      <template v-if="!firstChild">
        <FSOptionItem
          v-for="(item, index) in $props.values"
          :prependIcon="item.prependIcon"
          :appendIcon="item.appendIcon"
          :editable="$props.editable"
          :variant="getVariant(item)"
          :color="getColor(item)"
          :class="getClass(item)"
          :label="item.label"
          :icon="item.icon"
          :key="index"
          @click="toggle(item)"
        />
      </template>
      <template v-else>
        <component
          v-for="(item, index) in $props.values"
          :key="index"
          :is="firstChild"
          :prependIcon="getFromFirstChild('prependIcon', item)"
          :appendIcon="getFromFirstChild('appendIcon', item)"
          :variant="getFromFirstChild('variant', item)"
          :color="getFromFirstChild('color', item)"
          :class="getFromFirstChild('class', item)"
          :label="getFromFirstChild('label', item)"
          :icon="getFromFirstChild('icon', item)"
          :editable="$props.editable"
          @click="toggle(item)"
        />
      </template>
    </template>
    <slot v-else />
  </FSSlideGroup>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { useColors, useSlots } from "@dative-gpi/foundation-shared-components/composables";
import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { sizeToVar } from "@dative-gpi/foundation-shared-components/utils";
import { FSToggle } from "@dative-gpi/foundation-shared-components/models"; 

import FSOptionItem from "./FSOptionItem.vue";
import FSSlideGroup from "./FSSlideGroup.vue";
import FSWrapGroup from "./FSWrapGroup.vue";

export default defineComponent({
  name: "FSOptionGroup",
  components: {
    FSOptionItem,
    FSSlideGroup,
    FSWrapGroup
  },
  props: {
    values: {
      type: Array as PropType<FSToggle[]>,
      required: false,
      default: () => []
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
      type: String as PropType<"wrap" | "slide">,
      required: false,
      default: "wrap"
    },
    optionVariant: {
      type: String as PropType<"standard" | "full">,
      required: false,
      default: "full"
    },
    activeVariant: {
      type: String as PropType<"standard" | "full">,
      required: false,
      default: "full"
    },
    optionClass: {
      type: [Array, String] as PropType<string[] | string>,
      required: false,
      default: null
    },
    activeClass: {
      type: [Array, String] as PropType<string[] | string>,
      required: false,
      default: null
    },
    modelValue: {
      type: [Array, String, Number] as PropType<(string | number)[] | string | number>,
      required: false,
      default: false
    },
    optionColor: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Background
    },
    activeColor: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    },
    padding: {
      type: [String, Number],
      required: false,
      default: "3px"
    },
    gap: {
      type: [String, Number],
      required: false,
      default: "0"
    },
    multiple: {
      type: Boolean,
      required: false,
      default: false
    },
    required: {
      type: Boolean,
      required: false,
      default: true
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { getFirstChild } = useSlots();
    const { getColors } = useColors();

    const lights = getColors(ColorEnum.Light);

    const firstChild = getFirstChild("item");

    const style = computed((): { [code: string]: string } & Partial<CSSStyleDeclaration> => {
      return {
          "--fs-option-group-border-size"  : props.border ? "1px" : "0",
          "--fs-option-group-border-radius": sizeToVar(props.borderRadius),
          "--fs-option-group-border-color" : lights.base
      };
    })

    const getFromFirstChild = (prop: string, value: FSToggle): any => {
      switch (prop) {
        case "prependIcon":
          return firstChild.props.prependIcon ?? value.prependIcon;
        case "label":
          return firstChild.props.label ?? value.label;
        case "appendIcon":
          return firstChild.props.appendIcon ?? value.appendIcon;
        case "icon":
          return firstChild.props.icon ?? value.icon;
        case "variant":
          return firstChild.props.variant ?? getVariant(value);
        case "color":
          return firstChild.props.color ?? getColor(value);
        default:
          return firstChild.props[prop];
      }
    }

    const getVariant = (value: FSToggle): "standard" | "full" => {
      if (Array.isArray(props.modelValue) && props.modelValue.some(v => v === value.id)) {
        return props.activeVariant;
      }
      if (!Array.isArray(props.modelValue) && props.modelValue === value.id) {
        return props.activeVariant;
      }
      return props.optionVariant;
    };

    const getColor = (value: FSToggle): ColorBase => {
      if (Array.isArray(props.modelValue) && props.modelValue.some(v => v === value.id)) {
        return props.activeColor;
      }
      if (!Array.isArray(props.modelValue) && props.modelValue === value.id) {
        return props.activeColor;
      }
      return props.optionColor;
    };

    const getClass = (value: FSToggle): string[] | string => {
      if (Array.isArray(props.modelValue) && props.modelValue.some(v => v === value.id)) {
        return props.activeClass;
      }
      if (!Array.isArray(props.modelValue) && props.modelValue === value.id) {
        return props.activeClass;
      }
      return props.optionClass;
    };

    const toggle = (value: FSToggle): void => {
      if (Array.isArray(props.modelValue)) {
        if (props.multiple) {
          if (props.modelValue.length && props.modelValue.every(v => v === value.id)) {
            if (!props.required) {
              emit("update:modelValue", []);
              return;
            }
          }
          else if (props.modelValue.some(v => v === value.id)) {
            emit("update:modelValue", props.modelValue.filter(v => v !== value.id));
            return;
          }
          else {
            emit("update:modelValue", [...props.modelValue, value.id]);
            return;
          }
        }
        else {
          if (props.modelValue.some(v => v === value.id)) {
            if (!props.required) {
              emit("update:modelValue", []);
              return;
            }
          }
          else {
            emit("update:modelValue", [value.id]);
            return;
          }
        }
      }
      else {
        if (props.modelValue === value.id) {
          if (!props.required) {
            emit("update:modelValue", null);
            return;
          }
        }
        else {
          emit("update:modelValue", value.id);
          return;
        }
      }
    };

    return {
      firstChild,
      style,
      getFromFirstChild,
      getVariant,
      getColor,
      getClass,
      toggle
    };
  }
})
</script>