<template>
  <FSCol>
    <FSAutocompleteField
      v-if="variant=='standard'"
      :label="label"
      :items="innerItems"
      :multiple="true"
      :modelValue="modelValue?.map(m=>m.id)"
      @update:modelValue="onUpdateModelValue"
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
      :modelValue="modelValue?.map(m=>m.id)"
      :showSearch="true"
      @update:modelValue="onUpdateModelValue"
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
      :tags="modelValue?.map((v) => v.label) ?? []"
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
      type: Array as PropType<{id : string, label : string, isCustom: boolean}[] | null>,
      required: false,
      default: () => []
    },
    items: {
      type: Array as PropType<{id : string, label : string, isCustom: boolean}[]>,
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

    const tagValues = ref<{id : string, label : string, isCustom : boolean}[]>([]);

    const innerItems = computed(()=>{

      if(props.variant === 'standard'){
        return props.items
      }
      else{
        return props.items.concat(tagValues.value);
      }
    });

    const onUpdateModelValue = (value: string[] | null) => {
      emit('update:modelValue', value?.map((v) => innerItems.value.find((i) => i.id === v)));
    }

    const onRemoveValue = (value: string) => {
      const idValue = innerItems.value.find((v) => v.label === value)?.id;
      if (idValue) {
        if(tagValues.value.map((v) => v.label).includes(value)){
          tagValues.value = tagValues.value.filter((v) => v.label !== value);
        }
        emit('update:modelValue', [...props.modelValue?.filter((v) => v.id !== idValue) ?? []]);
      }
    }

    const onAddItem = (value: string) => {
      if (innerItems.value.map((v) => v.label).includes(value)) {
        return;
      }
      let item = {id: uuidv4(), label: value, isCustom: true};
      tagValues.value.push(item);
      emit('update:modelValue', [...props.modelValue?? [],item]);
    }

    const onKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Backspace') {
        emit('update:modelValue', [...props.modelValue ?? []]);
      }
    };

    watch(() => props.modelValue, (newValue) => {
      if (newValue) {
        tagValues.value = props.modelValue?.filter(m=>m.isCustom) ?? [];
      }
    }, {immediate: true});


    return {
      innerItems,
      onUpdateModelValue,
      onAddItem,
      onRemoveValue,
      onKeydown
    }
  }
})
</script>
