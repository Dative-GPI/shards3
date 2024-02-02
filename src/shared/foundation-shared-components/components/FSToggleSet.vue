<template>
  <FSWrapGroup
    v-if="['wrap'].includes($props.variant)"
    :padding="$props.padding"
    :gap="$props.gap"
  >
    <template v-if="$props.values.length">
      <template v-if="!firstChild">
        <FSButton
          v-for="(item, index) in $props.values"
          :prependIcon="item.prependIcon"
          :appendIcon="item.appendIcon"
          :editable="$props.editable"
          :variant="getVariant(item)"
          :color="getColor(item)"
          :class="getClass(item)"
          :label="item.label"
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
    :padding="$props.padding"
    :gap="$props.gap"
  >
    <template v-if="$props.values.length">
      <template v-if="!firstChild">
        <FSButton
          v-for="(item, index) in $props.values"
          :prependIcon="item.prependIcon"
          :appendIcon="item.appendIcon"
          :editable="$props.editable"
          :variant="getVariant(item)"
          :color="getColor(item)"
          :class="getClass(item)"
          :label="item.label"
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
import { defineComponent, PropType, ref, toRefs, watch } from "vue";

import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useSlots } from "@dative-gpi/foundation-shared-components/composables";
import { FSToggle } from "@dative-gpi/foundation-shared-components/models"; 

import FSSlideGroup from "./FSSlideGroup.vue";
import FSWrapGroup from "./FSWrapGroup.vue";
import FSButton from "./FSButton.vue";

export default defineComponent({
  name: "FSToggleSet",
  components: {
    FSSlideGroup,
    FSWrapGroup,
    FSButton
  },
  props: {
    values: {
      type: Array as PropType<FSToggle[]>,
      required: false,
      default: () => []
    },
    variant: {
      type: String as PropType<"wrap" | "slide">,
      required: false,
      default: "wrap"
    },
    buttonVariant: {
      type: String as PropType<"standard" | "full" | "icon">,
      required: false,
      default: "standard"
    },
    activeVariant: {
      type: String as PropType<"standard" | "full" | "icon">,
      required: false,
      default: "standard"
    },
    buttonClass: {
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
      type: [Array, String] as PropType<string[] | string>,
      required: false,
      default: false
    },
    buttonColor: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Light
    },
    activeColor: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    },
    padding: {
      type: [String, Number],
      required: false,
      default: 0
    },
    gap: {
      type: Number,
      required: false,
      default: 8
    },
    multiple: {
      type: Boolean,
      required: false,
      default: false
    },
    required: {
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
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { buttonVariant, activeVariant, buttonClass, activeClass, modelValue, buttonColor, activeColor, multiple, required } = toRefs(props);

    const innerValue = ref(modelValue.value);

    const { getFirstChild } = useSlots();

    const firstChild = getFirstChild("item");

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

    const getVariant = (value: FSToggle): "standard" | "full" | "icon" => {
      if (Array.isArray(innerValue.value) && innerValue.value.some(v => v === value.id)) {
        return activeVariant.value;
      }
      if (!Array.isArray(innerValue.value) && innerValue.value === value.id) {
        return activeVariant.value;
      }
      return buttonVariant.value;
    };

    const getColor = (value: FSToggle): ColorBase => {
      if (Array.isArray(innerValue.value) && innerValue.value.some(v => v === value.id)) {
        return activeColor.value;
      }
      if (!Array.isArray(innerValue.value) && innerValue.value === value.id) {
        return activeColor.value;
      }
      return buttonColor.value;
    };

    const getClass = (value: FSToggle): string[] | string => {
      if (Array.isArray(innerValue.value) && innerValue.value.some(v => v === value.id)) {
        return activeClass.value;
      }
      if (!Array.isArray(innerValue.value) && innerValue.value === value.id) {
        return activeClass.value;
      }
      return buttonClass.value;
    };

    const toggle = (value: FSToggle): void => {
      if (Array.isArray(innerValue.value)) {
        if (multiple.value) {
          if (innerValue.value.length && innerValue.value.every(v => v === value.id)) {
            if (!required.value) {
              innerValue.value = [];
            }
          }
          else if (innerValue.value.some(v => v === value.id)) {
            innerValue.value = innerValue.value.filter(v => v !== value.id);
          }
          else {
            innerValue.value = [...innerValue.value, value.id];
          }
        }
        else {
          if (innerValue.value.some(v => v === value.id)) {
            if (!required.value) {
              innerValue.value = [];
            }
          }
          else {
            innerValue.value = [value.id];
          }
        }
      }
      else {
        if (innerValue.value === value.id) {
          if (!required.value) {
            innerValue.value = null;
          }
        }
        else {
          innerValue.value = value.id;
        }
      }
    };

    watch(innerValue, (): void => {
      emit("update:modelValue", innerValue.value);
    });

    return {
      firstChild,
      getFromFirstChild,
      getVariant,
      getColor,
      getClass,
      toggle
    };
  }
})
</script>