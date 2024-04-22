<template>
  <FSAutocompleteField :loading="fetching"
    :multiple="$props.multiple"
    :items="languages"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs">
    <template #selection="{ item }">
      <FSRow align="center-center">
        <FSIcon>{{ item.raw.icon }}</FSIcon>
        <FSSpan> {{ item.raw.label }}</FSSpan>
      </FSRow>
    </template>
    <template #item="{ props, item }">
      <v-list-item v-bind="{ ...props, title: '' }">
        <FSRow align="center-left">
          <FSCheckbox v-if="$props.multiple"
            :modelValue="isSelected(item.value)" />
          <FSIcon>{{ item.raw.icon }}</FSIcon>
          <FSSpan> {{ item.raw.label }}</FSSpan>
        </FSRow>
      </v-list-item>
    </template>
  </FSAutocompleteField>
</template>
<script lang="ts">
import { PropType, defineComponent, watch } from 'vue'
import _ from 'lodash';

import { LanguageFilters } from '@dative-gpi/foundation-shared-domain/models';
import { useLanguages } from '@dative-gpi/foundation-shared-services/composables';

import FSCheckbox from '../FSCheckbox.vue'
import FSAutocompleteField from '../fields/FSAutocompleteField.vue'

export default defineComponent({
  name: 'FSAutocompleteLanguage',
  components: {
    FSAutocompleteField,
    FSCheckbox
  },
  props: {
    languageFilters: {
      type: Object as PropType<LanguageFilters>,
      required: false,
      default: null
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
    }
  },
  setup(props) {
    const { entities: languages, fetching, getMany } = useLanguages();

    const isSelected = (id: any) => {
      return props.modelValue?.includes(id);
    }

    watch(() => props.languageFilters, async (newValue, oldValue) => {
      if (!_.isEqual(newValue, oldValue)) {
        await getMany(newValue);
      }
    }, { immediate: true });

    return {
      languages,
      fetching,
      isSelected
    }
  }
})
</script>