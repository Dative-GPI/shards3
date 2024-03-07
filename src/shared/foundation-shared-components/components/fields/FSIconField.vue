<template>
  <FSCol>
    <FSTextField
      :label="$props.label"
      :description="$props.description"
      :hideHeader="$props.hideHeader"
      :required="$props.required"
      :editable="$props.editable"
      :rules="$props.rules"
      :messages="messages"
      :validateOn="validateOn"
      :validationValue="$props.modelValue"
      @blur="blurred = true"
      v-model="innerValue"
      v-bind="$attrs"
    >
      <template #append-inner>
        <FSIcon
          v-if="$props.modelValue"
          size="l"
        >
          {{ $props.modelValue }}
        </FSIcon>
      </template>
    </FSTextField>
    <FSToggleSet
      class="fs-icon-field-set"
      variant="slide"
      :values="icons"
      :required="$props.required"
      :editable="$props.editable"
      :buttonColor="$props.buttonColor"
      :activeColor="$props.activeColor"
      :modelValue="$props.modelValue"
      @update:modelValue="(value) => $emit('update:modelValue', value)"
    />
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";

import { Icons, sortByLevenshteinDistance } from "@dative-gpi/foundation-shared-components/utils";
import { useColors, useRules } from "@dative-gpi/foundation-shared-components/composables";
import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { FSToggle } from "@dative-gpi/foundation-shared-components/models";

import FSToggleSet from "../FSToggleSet.vue";
import FSTextField from "./FSTextField.vue";
import FSIcon from "../FSIcon.vue";
import FSCol from "../FSCol.vue";

export default defineComponent({
  name: "FSIconField",
  components: {
    FSToggleSet,
    FSTextField,
    FSIcon,
    FSCol,
  },
  props: {
    label: {
      type: String,
      required: false,
      default: null
    },
    description: {
      type: String,
      required: false,
      default: null
    },
    preSelection: {
      type: Array as PropType<string[]>,
      required: false,
      default: null
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
    modelValue: {
      type: String,
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
    hideHeader: {
      type: Boolean,
      required: false,
      default: false
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    rules: {
      type: Array as PropType<Function[]>,
      required: false,
      default: () => []
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const {validateOn, blurred, getMessages} = useRules();
    const { getColors } = useColors();

    const errors = getColors(ColorEnum.Error);
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const innerValue = ref(null);

    const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
      if (!props.editable) {
        return {
          "--fs-icon-field-color": lights.dark
        };
      }
      return {
        "--fs-icon-field-color"      : darks.base,
        "--fs-icon-field-error-color": errors.base
      };
    });

    const icons = computed((): FSToggle[] => {
      const innerIcons: FSToggle[] = [];
      if (!innerValue.value || innerValue.value.length < 3) {
        if (props.preSelection && props.preSelection.length) {
          innerIcons.push(...props.preSelection.map((icon: string) => ({
            id: icon,
            prependIcon: icon
          })));
        }
        else {
          innerIcons.push(...Icons.slice(0, 32).map((icon) => ({
            id: icon.name,
            prependIcon: icon.name
          })));
        }
      }
      else {
        const matchingIcons = Icons.filter((icon) => {
          return icon.fullText.toLowerCase().includes(innerValue.value.toLowerCase());
        }).sort((a, b) => sortByLevenshteinDistance(a.name, b.name, innerValue.value));
        innerIcons.push(...matchingIcons.slice(0, Math.min(32, matchingIcons.length)).map((icon) => ({
          id: icon.name,
          prependIcon: icon.name
        })));
      }
      if (props.modelValue) {
        const selectedIcon = innerIcons.find((icon) => icon.id === props.modelValue);
        if (!selectedIcon) {
          innerIcons.unshift({
            id: props.modelValue,
            prependIcon: props.modelValue
          });
        }
      }
      return innerIcons;
    });

    const messages = computed((): string[] => getMessages(props.modelValue, props.rules));

    return {
      innerValue,
      validateOn,
      messages,
      blurred,
      style,
      icons
    };
  }
})
</script>