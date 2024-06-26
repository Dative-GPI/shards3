<template>
  <v-input
    class="fs-toggle-set"
    :rules="$props.rules"
    :modelValue="$props.modelValue"
  >
    <FSWrapGroup
      v-if="['wrap'].includes($props.variant)"
      ref="toggleSetRef"
      :padding="$props.padding"
      :gap="$props.gap"
    >
      <template
        v-if="$props.values.length"
      >
        <template
          v-if="!$slots.item"
        >
          <FSButton
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
        <template
          v-else
        >
          <template
            v-for="item in $props.values"
          >
            <slot
              name="item"
              v-bind="{ item, toggle, getVariant, getColor, getClass }"
            />
          </template>
        </template>
      </template>
      <slot
        v-bind="{ toggle, getVariant, getColor, getClass }"
      />
    </FSWrapGroup>
    <FSSlideGroup
      v-else
      ref="toggleSetRef"
      :padding="$props.padding"
      :gap="$props.gap"
    >
      <template
        v-if="$props.values.length"
      >
        <template
          v-if="!$slots.item"
        >
          <FSButton
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
        <template
          v-else
        >
          <template
            v-for="item in $props.values"
          >
            <slot
              name="item"
              v-bind="{ item, toggle, getVariant, getColor, getClass }"
            />
          </template>
        </template>
      </template>
      <slot
        v-bind="{ toggle, getVariant, getColor, getClass }"
      />
    </FSSlideGroup>
  </v-input>
</template>

<script lang="ts">
import type { PropType} from "vue";
import { defineComponent, ref } from "vue";

import type { ColorBase, FSToggle } from "@dative-gpi/foundation-shared-components/models";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

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
    errorVariant: {
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
    errorClass: {
      type: [Array, String] as PropType<string[] | string>,
      required: false,
      default: null
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
    errorColor: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Error
    },
    rules: {
      type: Array as PropType<any[]>,
      required: false,
      default: () => []
    },
    modelValue: {
      type: [Array, String, Number] as PropType<(string | number)[] | string | number | null>,
      required: false,
      default: null
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
    const toggleSetRef = ref(null);

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
            if (props.multiple) {
              emit("update:modelValue", []);
              return;
            }
            emit("update:modelValue", null);
            return;
          }
        }
        else {
          if (props.multiple) {
            if (props.modelValue) {
              emit("update:modelValue", [props.modelValue, value.id]);
              return;
            }
            emit("update:modelValue", [value.id]);
            return;
          }
          emit("update:modelValue", value.id);
          return;
        }
      }
    };

    const goToStart = () => {
      if (toggleSetRef.value) {
        (toggleSetRef.value as any).goToStart();
      }
    };

    const goToEnd = () => {
      if (toggleSetRef.value) {
        (toggleSetRef.value as any).goToEnd();
      }
    };

    return {
      toggleSetRef,
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