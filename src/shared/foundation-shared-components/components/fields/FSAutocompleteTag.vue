<template>
  <FSAutocompleteField
    :placeholder="innerPlaceholder"
    :items="innerItems"
    :showSearch="true"
    :multiple="true"
    :modelValue="modelValue?.map(m => m.id)"
    @update:modelValue="onUpdateModelValue"
    @add:item="onAddItem"
    @keydown="onKeydown"
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
  </FSAutocompleteField>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, ref, watch } from "vue";

import { useTranslations as useTranslationsProvider, uuidv4 } from "@dative-gpi/bones-ui";

import FSAutocompleteField from "../fields/FSAutocompleteField.vue";

export default defineComponent({
  components: {
    FSAutocompleteField
  },
  props:{
    placeholder: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    items: {
      type: Array as PropType<{id: string, label: string, isCustom: boolean}[]>,
      required: false,
      default: () => []
    },
    modelValue: {
      type: Array as PropType<{id: string, label: string, isCustom: boolean}[] | null>,
      required: false,
      default: () => []
    }
  },
  emits: ["update:modelValue"],
  setup(props, {emit}) {
    const { $tr } = useTranslationsProvider();

    const tagValues = ref<{id : string, label : string, isCustom : boolean}[]>([]);

    const innerItems = computed(() => props.items.concat(tagValues.value));

    const innerPlaceholder = computed((): string | null => {
      if (!props.modelValue || props.modelValue.length === 0) {
        return null;
      }
      return props.placeholder ?? $tr("ui.autocomplete-tag.items-selected", "{0} item(s) selected", props.modelValue?.length ?? 0);
    });

    const onUpdateModelValue = (value: string[] | null): void => {
      emit("update:modelValue", value?.map((v) => innerItems.value.find((i) => i.id === v)));
    };

    const onAddItem = (value: string): void => {
      emit("update:modelValue", [
        ...props.modelValue ?? [],
        { id: uuidv4(), label: value, isCustom: true }
      ]);
    };

    const onKeydown = (event: KeyboardEvent): void => {
      if (event.key === "Backspace") {
        emit("update:modelValue", [...props.modelValue ?? []]);
      }
    };

    watch(() => props.modelValue, (newValue) => {
      if (newValue) {
        tagValues.value = props.modelValue?.filter(m=>m.isCustom) ?? [];
      }
    }, {immediate: true});

    return {
      innerPlaceholder,
      innerItems,
      onUpdateModelValue,
      onAddItem,
      onKeydown
    };
  }
});
</script>