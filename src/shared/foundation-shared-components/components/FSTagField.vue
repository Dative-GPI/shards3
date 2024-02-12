<template>
  <FSCol>
    <FSTextField
      :label="$props.label"
      :description="$props.description"
      :hideHeader="$props.hideHeader"
      :required="$props.required"
      :editable="$props.editable"
      :error="messages.length > 0"
      @keydown.enter="onAdd"
      v-model="innerValue"
      v-bind="$attrs"
    >
      <template v-if="!$props.hideHeader" #label>
        <slot name="label">
          <FSRow :wrap="false">
            <FSSpan
              v-if="$props.label"
              class="fs-tag-field-label"
              font="text-overline"
              :style="style"
            >
              {{ $props.label }}
            </FSSpan>
            <FSSpan
              v-if="$props.label && $props.required"
              class="fs-tag-field-label"
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
              class="fs-tag-field-messages"
              font="text-overline"
              :style="style"
            >
              {{ messages.join(", ") }}
            </FSSpan>
          </FSRow>
        </slot>
      </template>
      <template #append-inner>
        <slot name="append-inner">
          <FSButton
            variant="icon"
            icon="mdi-tag-outline"
            :editable="$props.editable"
            :color="ColorEnum.Dark"
            @click="onAdd"
          />
        </slot>
      </template>
      <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
    </FSTextField>
    <FSTagGroup
      :tags="$props.modelValue"
      :variant="$props.tagVariant"
      :color="$props.tagColor"
      :editable="$props.editable"
      @remove="onRemove"
    />
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, toRefs } from "vue";

import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";

import FSTextField from "./FSTextField.vue";
import FSTagGroup from "./FSTagGroup.vue";
import FSButton from "./FSButton.vue";
import FSSpan from "./FSSpan.vue";
import FSCol from "./FSCol.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSTagField",
  components: {
    FSTextField,
    FSTagGroup,
    FSButton,
    FSSpan,
    FSCol,
    FSRow
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
    modelValue: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => []
    },
    tagVariant: {
      type: String as PropType<"standard" | "full">,
      required: false,
      default: "full"
    },
    tagColor: {
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
  setup(props, { emit }) {
    const { modelValue, rules, editable } = toRefs(props);

    const innerValue = ref("");

    const errors = useColors().getColors(ColorEnum.Error);
    const lights = useColors().getColors(ColorEnum.Light);
    const darks = useColors().getColors(ColorEnum.Dark);

    const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
      if (!editable.value) {
        return {
          "--fs-tag-field-color": lights.dark
        };
      }
      return {
        "--fs-tag-field-color"      : darks.base,
        "--fs-tag-field-error-color": errors.base
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

    const onAdd = (): void => {
      if (!editable.value) {
        return;
      }
      const tags = modelValue.value ?? [];
      if (!innerValue.value.length || tags.includes(innerValue.value)) {
        return;
      }
      emit("update:modelValue", tags.concat(innerValue.value));
      innerValue.value = "";
    }

    const onRemove = (label: string): void => {
      if (!editable.value) {
        return;
      }
      const tags = modelValue.value ?? [];
      if (!tags.length || !tags.includes(label)) {
        return;
      }
      emit("update:modelValue", tags.filter(t => t !== label));
    }

    return {
      ColorEnum,
      innerValue,
      messages,
      style,
      onAdd,
      onRemove
    };
  }
});
</script>