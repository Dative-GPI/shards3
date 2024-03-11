<template>
  <FSWrapGroup
    v-if="['wrap'].includes($props.variant)"
    ref="toggleSetRef"
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
    ref="toggleSetRef"
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
import { defineComponent, PropType, ref } from "vue";

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
      type: [Array, String, Number] as PropType<(string | number)[] | string | number>,
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
    const { getFirstChild } = useSlots();

    const firstChild = getFirstChild("item");

    const toggleSetRef = ref(null);

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
      if (Array.isArray(props.modelValue) && props.modelValue.some(v => v === value.id)) {
        return props.activeVariant;
      }
      if (!Array.isArray(props.modelValue) && props.modelValue === value.id) {
        return props.activeVariant;
      }
      return props.buttonVariant;
    };

    const getColor = (value: FSToggle): ColorBase => {
      if (Array.isArray(props.modelValue) && props.modelValue.some(v => v === value.id)) {
        return props.activeColor;
      }
      if (!Array.isArray(props.modelValue) && props.modelValue === value.id) {
        return props.activeColor;
      }
      return props.buttonColor;
    };

    const getClass = (value: FSToggle): string[] | string => {
      if (Array.isArray(props.modelValue) && props.modelValue.some(v => v === value.id)) {
        return props.activeClass;
      }
      if (!Array.isArray(props.modelValue) && props.modelValue === value.id) {
        return props.activeClass;
      }
      return props.buttonClass;
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

    const goToStart = () => {
      if (toggleSetRef.value) {
        toggleSetRef.value.goToStart();
      }
    };

    const goToEnd = () => {
      if (toggleSetRef.value) {
        toggleSetRef.value.goToEnd();
      }
    };

    return {
      toggleSetRef,
      firstChild,
      getFromFirstChild,
      getVariant,
      goToStart,
      getColor,
      getClass,
      goToEnd,
      toggle
    };
  }
})
</script>