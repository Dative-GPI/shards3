<template>
  <FSCol>
    <FSTextField
      :label="$props.label"
      :description="$props.description"
      :hideHeader="$props.hideHeader"
      :required="$props.required"
      :editable="$props.editable"
      :error="messages.length > 0"
      v-model="innerValue"
      v-bind="$attrs"
    >
      <template v-if="!$props.hideHeader" #label>
        <slot name="label">
          <FSRow :wrap="false">
            <FSSpan
              v-if="$props.label"
              class="fs-icon-field-label"
              font="text-overline"
              :style="style"
            >
              {{ $props.label }}
            </FSSpan>
            <FSSpan
              v-if="$props.label && $props.required"
              class="fs-icon-field-label"
              style="margin-left: -8px;"
              font="text-overline"
              :ellipsis="false"
              :style="style"
            >
              *
            </FSSpan>
            <v-spacer style="min-width: 40px;" />
            <FSSpan
              v-if="messages.length > 0"
              class="fs-icon-field-messages"
              font="text-overline"
              :style="style"
            >
              {{ messages.join(", ") }}
            </FSSpan>
          </FSRow>
        </slot>
      </template>
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
import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { FSToggle } from "@dative-gpi/foundation-shared-components/models";

import FSTextField from "./FSTextField.vue";
import FSToggleSet from "./FSToggleSet.vue";
import FSIcon from "./FSIcon.vue";
import FSCol from "./FSCol.vue";

export default defineComponent({
  name: "FSIconField",
  components: {
    FSTextField,
    FSToggleSet,
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

    const messages = computed((): string[] => {
      const messages = [];
      for (const rule of props.rules) {
        const message = rule(props.modelValue);
        if (typeof(message) === "string") {
          messages.push(message);
        }
      }
      return messages;
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
        if (selectedIcon) {
          innerIcons.splice(innerIcons.indexOf(selectedIcon), 1);
          innerIcons.unshift(selectedIcon);
        }
        else {
          innerIcons.unshift({
            id: props.modelValue,
            prependIcon: props.modelValue
          });
        }
      }
      return innerIcons;
    });

    return {
      innerValue,
      messages,
      style,
      icons
    };
  }
})
</script>