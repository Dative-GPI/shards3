<template>
  <FSCol :gap="24">
    <FSCol v-for="(properties, category) in categories"
    :gap="16">
    <FSRow>
      <FSText font="text-h3">
        {{ category }}
      </FSText>
    </FSRow>
    <FSMetaField v-for="property in properties"
      :customProperty="property"
      :modelValue="modelValue[property.code]"
      @update:modelValue="(event) => $emit('update:modelValue', { ...modelValue, [property.code]: event})"
      :editable="editable" />
    </FSCol>
  </FSCol>
</template>

  <script lang="ts">
import { defineComponent, PropType } from 'vue';

import { CustomPropertyInfos } from '@dative-gpi/foundation-core-domain/models';

import FSText from '@dative-gpi/foundation-shared-components/components/FSText.vue';

import FSMetaField from './FSMetaField.vue';

export default defineComponent({
  components: {
    FSMetaField,
    FSText
  },
  name: "FSMetaFormContent",
  props: {
    customProperties: {
      type: [Object] as PropType<CustomPropertyInfos[]>,
      required: true
    },
    modelValue: {
      type: Object as PropType<{ [key: string]: string }>,
      required: true
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  setup(props) {

    const categories = props.customProperties.reduce((acc, curr) => {
      if (acc[curr.categoryLabel] === undefined) {
        acc[curr.categoryLabel] = [];
      }
      acc[curr.categoryLabel].push(curr);
      return acc;
    }, {} as { [key: string]: CustomPropertyInfos[] });

    return {
      categories
    }
  }
})
</script>
