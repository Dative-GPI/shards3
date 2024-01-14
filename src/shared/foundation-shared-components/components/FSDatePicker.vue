<template>
  <v-menu :closeOnContentClick="false">
    <template #activator="{ props }">
      <FSTextField
        class="fs-date-picker"
        :label="$props.label"
        :description="$props.description"
        :color="$props.color"
        :required="$props.required"
        :editable="$props.editable"
        :error="messages.length > 0"
        :readonly="true"
      >
        <template #label>
          <slot name="label">
            <FSRow :wrap="false">
              <FSSpan
                v-if="$props.label"
                class="fs-date-picker-label"
                font="text-overline"
                :style="style"
              >
                {{ $props.label }}
              </FSSpan>
              <FSSpan
                v-if="$props.label && $props.required"
                class="fs-date-picker-label"
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
                class="fs-date-picker-messages"
                font="text-overline"
                :style="style"
              >
                {{ messages.join(", ") }}
              </FSSpan>
            </FSRow>
          </slot>
        </template>
        <template #prepend-inner>
          <slot name="prepend-inner">
            <FSIcon :color="prependColor">
              {{ $props.prependIcon }}
            </FSIcon>
          </slot>
        </template>
        <template #append>
          <slot name="append">
            <FSButton
              :prependIcon="$props.buttonPrependIcon"
              :label="$props.buttonLabel"
              :appendIcon="$props.buttonAppendIcon"
              :variant="$props.buttonVariant"
              :color="$props.buttonColor"
              :editable="$props.editable"
              v-bind="props"
            />
          </slot>
        </template>
        <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
          <slot :name="name" v-bind="slotData" />
        </template>
      </FSTextField>
    </template>
    <FSCol>
      <FSCalendar
        label="test"
        :color="$props.color"
        :buttonColor="$props.buttonColor"
        :modelValue="$props.modelValue"
        @update:modelValue="(value) => $emit('update:modelValue', value)"
      />
      <FSClock
        :color="$props.color"
        :buttonColor="$props.buttonColor"
        :modelValue="$props.modelValue"
        @update:modelValue="(value) => $emit('update:modelValue', value)"
      />
    </FSCol>
  </v-menu>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from "vue";

import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { ColorBase } from "@dative-gpi/foundation-shared-components/themes";

import FSTextField from "./FSTextField.vue";
import FSCalendar from "./FSCalendarTwin.vue";
import FSButton from "./FSButton.vue";
import FSClock from "./FSClock.vue";
import FSIcon from "./FSIcon.vue";
import FSCol from "./FSCol.vue";

export default defineComponent({
  name: "FSDatePicker",
  components: {
    FSTextField,
    FSCalendar,
    FSButton,
    FSClock,
    FSIcon,
    FSCol
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
    prependIcon: {
      type: String,
      required: false,
      default: "mdi-calendar"
    },
    buttonPrependIcon: {
      type: String,
      required: false,
      default: "mdi-pencil"
    },
    buttonLabel: {
      type: String,
      required: false,
      default: null
    },
    buttonAppendIcon: {
      type: String,
      required: false,
      default: null
    },
    buttonVariant: {
      type: String as PropType<"standard" | "full" | "icon">,
      required: false,
      default: "standard"
    },
    modelValue: {
      type: Array as PropType<Array<number>>,
      required: false,
      default: null
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorBase.Dark
    },
    buttonColor: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorBase.Primary
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
    const { color, rules, editable } = toRefs(props);

    const colors = useColors().getColors(color.value);

    const backgrounds = useColors().getColors(ColorBase.Background);
    const lights = useColors().getColors(ColorBase.Light);
    const darks = useColors().getColors(ColorBase.Dark);

    const prependColor = computed((): string => {
      if (!editable.value) {
        return lights.dark;
      }
      return darks.base;
    });

    const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
      if (!editable.value) {
        return {};
      }
      return {
        "--fs-date-picker-background-color"       : backgrounds.base,
        "--fs-date-picker-border-color"           : colors.base,
        "--fs-date-picker-color"                  : darks.base,
        "--fs-date-picker-active-color"           : lights.base,
      };
    });

    const messages = computed((): string[] => {
      const messages = [];
      for (const rule of rules.value) {
        const message = rule(props.modelValue ?? "");
        if (typeof(message) === "string") {
          messages.push(message);
        }
      }
      return messages;
    });

    return {
      prependColor,
      style,
      messages
    };
  }
});
</script>