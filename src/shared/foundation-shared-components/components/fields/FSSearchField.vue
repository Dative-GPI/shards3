<template>
  <FSTextField
    :editable="$props.editable"
    :placeholder="placeholder"
    @keydown.enter="onSearch"
    v-model="innerValue"
    v-bind="$attrs"
  >
    <template
      v-for="(_, name) in slots"
      v-slot:[name]="slotData"
    >
      <slot
        :name="name"
        v-bind="slotData"
      />
    </template>
    <template
      #prepend-inner
    >
      <FSButton
        v-if="$props.prependInnerIcon"
        variant="icon"
        :icon="$props.prependInnerIcon"
        :editable="$props.editable"
        :color="ColorEnum.Dark"
        @click="onSearch"
      />
      <slot
        name="prepend-inner"
      />
    </template>
    <template
      #append
    >
      <FSButton
        v-if="!['instant'].includes($props.variant)"
        :prependIcon="$props.buttonPrependIcon"
        :label="buttonLabel"
        :appendIcon="$props.buttonAppendIcon"
        :variant="$props.buttonVariant"
        :color="$props.buttonColor"
        :editable="$props.editable"
        @click="onSearch"
      />
      <slot
        name="append"
      />
    </template>
  </FSTextField>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, watch } from "vue";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import { useSlots } from "../../composables";

import FSTextField from "./FSTextField.vue";
import FSButton from "../FSButton.vue";

export default defineComponent({
  name: "FSSearchField",
  components: {
    FSTextField,
    FSButton
  },
  props: {
    placeholder: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    prependInnerIcon: {
      type: String as PropType<string | null>,
      required: false,
      default: "mdi-magnify"
    },
    variant: {
      type: String as PropType<"standard" | "instant">,
      required: false,
      default: "instant"
    },
    buttonPrependIcon: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    buttonLabel: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    buttonAppendIcon: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    buttonVariant: {
      type: String as PropType<"standard" | "full" | "icon">,
      required: false,
      default: "standard"
    },
    modelValue: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    buttonColor: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { $tr } = useTranslationsProvider();
    const { slots } = useSlots();

    delete slots["prepend-inner"];
    delete slots.append;

    const innerValue = ref(props.modelValue);

    const placeholder = computed(() => {
      return props.placeholder ?? $tr('ui.search.placeholder', 'Search...');
    });

    const buttonLabel = computed(() => {
      return props.buttonLabel ?? $tr('ui.button.search', 'Search');
    });

    const onSearch = (event: Event) => {
      event.stopImmediatePropagation();
      event.preventDefault();
      emit('update:modelValue', innerValue.value);
    };

    watch(innerValue, () => {
      if (["instant"].includes(props.variant)) {
        emit("update:modelValue", innerValue.value);
      }
    });

    return {
      placeholder,
      buttonLabel,
      innerValue,
      ColorEnum,
      slots,
      onSearch
    };
  }
});
</script>