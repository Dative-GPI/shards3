<template>
  <FSCol>
    <FSAutocompleteField
      v-if="variant=='standard'"
      :label="label"
      :items="innerItems"
      :multiple="true"
      :modelValue="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
      @keydown="onKeydown"
      v-binds="$attrs"
    >
      <template
        #autocomplete-chip
      >
      </template>
    </FSAutocompleteField>
    <FSAutocompleteField
      v-else
      :label="label"
      :items="innerItems"
      :multiple="true"
      :modelValue="modelValue"
      :showSearch="true"
      @update:modelValue="$emit('update:modelValue', $event)"
      @add:item="onAddItem"
      @keydown="onKeydown"
      v-binds="$attrs"
    >
      <template
        #autocomplete-chip
      >
      </template>
    </FSAutocompleteField> 
    <FSTagGroup
      v-if="modelValue != null"
      :tags="innerItems.filter(i=>modelValue && modelValue.includes(i.id)).map(i=>i.label) ?? []"
      @remove="onRemoveValue($event)"
    />
  </FSCol>
</template>

<script lang="ts">
import type { PropType } from "vue";
import { computed, defineComponent, ref, watch } from "vue";

import { uuidv4 } from '@dative-gpi/bones-ui';

import FSAutocompleteField from "../fields/FSAutocompleteField.vue";
import FSTagGroup from "../FSTagGroup.vue";

export default defineComponent({
  components: {
    FSAutocompleteField,
    FSTagGroup,
  },
  props:{
    modelValue: {
      type: Array as PropType<string[] | null>,
      required: false,
      default: () => []
    },
    items: {
      type: Array as PropType<{id : string, label : string}[]>,
      required: false,
      default: () => []
    },
    label : {
      type: String,
      required: false
    },
    variant: {
      type: String as PropType<'standard' | 'tagged'>,
      required: false,
      default : 'standard'
    },
  },
  emits: ["update:modelValue"],
  setup(props, {emit}) {

    const tagValues = ref<{id : string, label : string}[]>([]);

    const innerItems = computed(()=>{

      if(props.variant === 'standard'){
        return props.items
      }
      else{
        return props.items.concat(tagValues.value.filter(t=>props.modelValue?.includes(t.id)) ?? []);
      }
    });

    const onRemoveValue = (value: string) => {
      const idValue = innerItems.value.find((v) => v.label === value)?.id;
      if (idValue) {
        if(tagValues.value.map((v) => v.label).includes(value)){
          tagValues.value = tagValues.value.filter((v) => v.label !== value);
        }
        emit('update:modelValue', [...props.modelValue?.filter((v) => v !== idValue) ?? []]);
      }
    }

    const onAddItem = (value: string) => {
      if (innerItems.value.map((v) => v.label).includes(value)) {
        return;
      }
      let item = {id: uuidv4(), label: value};
      tagValues.value.push(item);
      emit('update:modelValue', [...props.modelValue ?? [], ...[item.id]]);
    }

    const onKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Backspace') {
        emit('update:modelValue', [...props.modelValue ?? []]);
      }
    };

    watch(() => props.modelValue, (newValue) => {
      if (newValue) {
        tagValues.value = tagValues.value.filter((v) => newValue.includes(v.id));
      }
    }, {immediate: true});


    return {
      innerItems,
      onAddItem,
      onRemoveValue,
      onKeydown
    }
  }
})
</script>
