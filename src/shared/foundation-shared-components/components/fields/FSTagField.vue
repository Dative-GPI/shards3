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
      @keydown.enter="onAdd"
      @blur="blurred = true"
      v-model="innerValue"
      v-bind="$attrs"
    >
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
import { computed, defineComponent, PropType, ref } from "vue";

import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useColors, useRules } from "@dative-gpi/foundation-shared-components/composables";

import FSTextField from "./FSTextField.vue";
import FSTagGroup from "../FSTagGroup.vue";
import FSButton from "../FSButton.vue";
import FSSpan from "../FSSpan.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

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
    const {validateOn, blurred, getMessages} = useRules();
    const { getColors } = useColors();

    const errors = getColors(ColorEnum.Error);
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const innerValue = ref("");

    const style = computed((): { [key: string] : string } => {
      if (!props.editable) {
        return {
          "--fs-tag-field-color": lights.dark
        };
      }
      return {
        "--fs-tag-field-color"      : darks.base,
        "--fs-tag-field-error-color": errors.base
      };
    });

    const messages = computed((): string[] => getMessages(props.modelValue, props.rules));

    const onAdd = (): void => {
      if (!props.editable) {
        return;
      }
      const tags = props.modelValue ?? [];
      if (!innerValue.value.length || tags.includes(innerValue.value)) {
        return;
      }
      emit("update:modelValue", tags.concat(innerValue.value));
      innerValue.value = "";
    }

    const onRemove = (label: string): void => {
      if (!props.editable) {
        return;
      }
      const tags = props.modelValue ?? [];
      if (!tags.length || !tags.includes(label)) {
        return;
      }
      emit("update:modelValue", tags.filter(t => t !== label));
    }

    return {
      innerValue,
      validateOn,
      ColorEnum,
      messages,
      blurred,
      style,
      onRemove,
      onAdd
    };
  }
});
</script>