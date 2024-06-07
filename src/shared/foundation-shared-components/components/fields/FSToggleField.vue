<template>
  <FSBaseField
    :label="$props.label"
    :description="$props.description"
    :hideHeader="$props.hideHeader"
    :required="$props.required"
    :editable="$props.editable"
    :messages="messages"
  >
    <FSToggleSet
      variant="slide"
      :buttonColor="buttonColor"
      :values="$props.items"
      :multiple="$props.multiple"
      :required="$props.required"
      :editable="$props.editable"
      :modelValue="$props.modelValue"
      @update:modelValue="onUpdate"
      v-bind="$attrs"
    >
      <template
        v-for="(_, name) in $slots"
        v-slot:[name]="slotData"
      >
        <slot
          :name="name"
          v-bind="slotData"
        />
      </template>
    </FSToggleSet>
  </FSBaseField>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";

import { useRules } from "../../composables";
import { ColorEnum } from "../../models";

import FSToggleSet from "../FSToggleSet.vue";
import FSBaseField from "./FSBaseField.vue";

export default defineComponent({
  name: "FSTextField",
  components: {
    FSBaseField,
    FSToggleSet
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
    items: {
      type: Array as PropType<any[]>,
      required: true
    },
    itemValue: {
      type: String,
      required: false,
      default: "id"
    },
    itemTitle: {
      type: String,
      required: false,
      default: "label"
    },
    modelValue: {
      type: [Array, String] as PropType<string[] | string | null>,
      required: false,
      default: null
    },
    multiple: {
      type: Boolean,
      required: false,
      default: false
    },
    hideHeader: {
      type: Boolean,
      required: false,
      default: false
    },
    returnObject: {
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
    editable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { forceErrors, getMessages } = useRules();

    const updated = ref(false);

    const messages = computed((): string[] => getMessages(props.modelValue, props.rules));

    const buttonColor = computed((): ColorEnum => {
      if (forceErrors(messages.value.length, updated.value)) {
        return ColorEnum.Error;
      }
      return ColorEnum.Light;
    });

    const onUpdate = (value: string[] | string | null) => {
      updated.value = true;
      if (props.returnObject) {
        if (Array.isArray(value)) {
          emit("update:modelValue", props.items.filter((item: any) => value.includes(item[props.itemValue])));
        }
        else {
          emit("update:modelValue", props.items.find((item: any) => item[props.itemValue] === value) ?? null);
        }
      }
      else {
        emit("update:modelValue", value);
      }
    };

    return {
      buttonColor,
      ColorEnum,
      messages,
      onUpdate
    };
  }
});
</script>