<template>
  <FSCol>
    <FSTextField
      :label="$props.label"
      :description="$props.description"
      :required="$props.required"
      :editable="$props.editable"
      v-model="innerValue"
      v-bind="$attrs"
    >
      <template #label>
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
      buttonClass="fs-icon-field-button"
      activeClass="fs-icon-field-active"
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
import { computed, defineComponent, PropType, ref, toRefs } from "vue";

import { Icons, SortByLevenshteinDistance } from "@dative-gpi/foundation-shared-components/utils";
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
  setup(props) {
    const { preSelection, modelValue, rules, editable } = toRefs(props);

    const innerValue = ref("");

    const errors = useColors().getColors(ColorEnum.Error);
    const lights = useColors().getColors(ColorEnum.Light);
    const darks = useColors().getColors(ColorEnum.Dark);

    const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
      if (!editable.value) {
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
      for (const rule of rules.value) {
        const message = rule(props.modelValue);
        if (typeof(message) === "string") {
          messages.push(message);
        }
      }
      return messages;
    });

    const icons = computed((): FSToggle[] => {
      const innerIcons: FSToggle[] = [];
      if (innerValue.value.length < 3) {
        if (preSelection.value && preSelection.value.length) {
          innerIcons.push(...preSelection.value.map((icon: string) => {
            return {
              id: icon,
              prependIcon: icon
            }
          }));
        }
        else {
          const matchingIcons = Icons.filter((icon) => {
            return icon.fullText.toLowerCase().includes(innerValue.value.toLowerCase());
          });
          innerIcons.push(...matchingIcons.slice(0, Math.min(32, matchingIcons.length)).map((icon) => {
            return {
              id: icon.name,
              prependIcon: icon.name
            }
          }));
        }
      }
      else {
        const matchingIcons = Icons.filter((icon) => {
          return icon.fullText.toLowerCase().includes(innerValue.value.toLowerCase());
        }).sort((a, b) => SortByLevenshteinDistance(a.name, b.name, innerValue.value));
        innerIcons.push(...matchingIcons.slice(0, Math.min(32, matchingIcons.length)).map((icon) => {
          return {
            id: icon.name,
            prependIcon: icon.name
          }
        }));
      }
      if (modelValue.value) {
        const selectedIcon = innerIcons.find((icon) => icon.id === modelValue.value);
        if (selectedIcon) {
          innerIcons.splice(innerIcons.indexOf(selectedIcon), 1);
          innerIcons.unshift(selectedIcon);
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