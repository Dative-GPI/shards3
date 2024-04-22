<template>
  <FSCol>
    <slot v-if="!$props.hideHeader" name="label">
      <FSRow
        :wrap="false"
      >
        <FSSpan
          v-if="$props.label"
          class="fs-text-area-label"
          font="text-overline"
          :style="style"
        >
          {{ $props.label }}
        </FSSpan>
        <FSSpan
          v-if="$props.label && $props.required"
          class="fs-text-area-label"
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
          class="fs-text-area-messages"
          font="text-overline"
          :style="style"
        >
          {{ messages.join(", ") }}
        </FSSpan>
      </FSRow>
    </slot>
    <v-textarea
      class="fs-text-area"
      variant="outlined"
      :style="style"
      :class="classes"
      :rows="$props.rows"
      :hideDetails="true"
      :noResize="!$props.resize"
      :autoGrow="$props.autoGrow"
      :readonly="!$props.editable"
      :clearable="$props.editable && !!$props.modelValue"
      :rules="$props.rules"
      :validateOn="validateOn"
      :modelValue="$props.modelValue"
      @update:modelValue="(value) => $emit('update:modelValue', value)"
      @blur="blurred = true"
      v-bind="$attrs"
    >
      <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
      <template #clear>
        <FSButton
          v-if="$props.editable && $props.modelValue"
          icon="mdi-close"
          variant="icon"
          :color="ColorEnum.Dark"
          @click="$emit('update:modelValue', null)"
        />
      </template>
    </v-textarea>
    <slot name="description">
      <FSSpan
        v-if="$props.description"
        class="fs-text-area-description"
        font="text-underline"
        :style="style"
      >
        {{ $props.description }}
      </FSSpan>
    </slot>
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { useColors, useBreakpoints, useRules } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSSpan from "../FSSpan.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSTextArea",
  components: {
    FSSpan,
    FSCol,
    FSRow
  },
  props: {
    label: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    description: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    modelValue: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    rows: {
      type: Number,
      required: false,
      default: 1
    },
    resize: {
      type: Boolean,
      required: false,
      default: false
    },
    autoGrow: {
      type: Boolean,
      required: false,
      default: true
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
      type: Array as PropType<any[]>,
      required: false,
      default: () => []
    },
    messages: {
      type: Array as PropType<string[]>,
      required: false,
      default: null
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { validateOn, blurred, getMessages } = useRules();
    const { isMobileSized } = useBreakpoints();
    const { getColors } = useColors();

    const errors = getColors(ColorEnum.Error);
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const style = computed((): { [key: string] : string | undefined } => {
      let height: string | undefined = undefined;
      let minHeight: string | undefined = undefined;
      if (!props.autoGrow) {
        const base = isMobileSized.value ? 30 : 42;
        const row = isMobileSized.value ? 16 : 20;
        minHeight = `${base}px`;
        if (props.rows > 1) {
          height = `${base + (props.rows - 1) * row}px`;
        }
        else {
          height = `${base}px`;
        }
      }
      if (!props.editable) {
        return {
          "--fs-text-area-cursor"             : "default",
          "--fs-text-area-border-color"       : lights.base,
          "--fs-text-area-color"              : lights.dark,
          "--fs-text-area-active-border-color": lights.base,
          "--fs-text-area-min-height"         : minHeight,
          "--fs-text-area-height"             : height
        };
      }
      return {
        "--fs-text-area-cursor"             : "text",
        "--fs-text-area-border-color"       : lights.dark,
        "--fs-text-area-color"              : darks.base,
        "--fs-text-area-active-border-color": darks.dark,
        "--fs-text-area-error-color"        : errors.base,
        "--fs-text-area-error-border-color" : errors.base,
        "--fs-text-area-min-height"         : minHeight,
        "--fs-text-area-height"             : height
      };
    });

    const classes = computed((): string[] => {
      const classNames = ["fs-text-area"];
      if (props.autoGrow) {
        classNames.push("fs-text-area-auto-grow");
      }
      return classNames;
    });

    const messages = computed((): string[] => props.messages ?? getMessages(props.modelValue, props.rules));

    return {
      validateOn,
      ColorEnum,
      messages,
      blurred,
      classes,
      style,
    };
  }
});
</script>