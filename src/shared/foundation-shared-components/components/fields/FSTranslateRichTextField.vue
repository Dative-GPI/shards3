<template>
  <FSCol
    v-if="$props.translationsExpanded"
  >
    <FSCol
      gap="16px"
    >
      <FSRichTextField
        :editable="false"
        :label="$tr('ui.translateRichTextField.defaultValue', 'Default value')"
        :modelValue="$props.modelValue"
        v-bind="$attrs"
      />
      <FSRichTextField
        v-for="(language, index) in languages"
        :editable="$props.editable"
        :key="index"
        :modelValue="getTranslation(language.code)"
        @update:modelValue="setTranslation(language.code, $event)"
        v-bind="$attrs"
      >
        <template
          #label
        >
          <FSRow
            :wrap="false"
            align="center-left"
          >
            <FSSpan
              class="fs-translate-field-label"
              font="text-overline"
            >
              {{ $tr('ui.translateRichTextField.translateIn', 'Translate in {0}', language.label) }}
            </FSSpan>
            <FSIcon>{{ language.icon }}</FSIcon>
          </FSRow>
        </template>
      </FSRichTextField>
    </FSCol>
    <FSRow
      :wrap="false"
    >
      <FSButton
        prependIcon="mdi-cancel"
        width="100%"
        :label="$tr('ui.translateRichTextField.cancelButton.label', 'Cancel')"
        @click="onCancelTranslations"
      />
      <FSButton
        v-if="$props.editable"
        prependIcon="mdi-check"
        color="primary"
        width="100%"
        :label="$tr('ui.translateRichTextField.validateButton.label', 'Validate translations')"
        @click="onSubmitTranslations"
      />
    </FSRow>
  </FSCol>
  <FSRichTextField
    v-else
    :editable="$props.editable"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  >
    <template
      #append-inner
    >
      <FSButton
        prependIcon="mdi-translate"
        color="primary"
        width="100%"
        :label="$tr('ui.translateRichTextField.translateButton.label', 'Manage translations')"
        @click="() => $emit('update:translationsExpanded', true)"
      />
    </template>
  </FSRichTextField>
</template>

<script lang="ts">
import { defineComponent, type PropType, ref } from 'vue';

import { useAppLanguages } from "@dative-gpi/foundation-shared-services/composables";

import { emptyLexicalState } from '../../utils';

import FSRichTextField from './FSRichTextField.vue';
import FSButton from '../FSButton.vue';
import FSIcon from '../FSIcon.vue';
import FSSpan from '../FSSpan.vue';
import FSCol from '../FSCol.vue';
import FSRow from '../FSRow.vue';

export default defineComponent({
  name: 'FSTranslateRichTextField',
  components: {
    FSRichTextField,
    FSButton,
    FSIcon,
    FSSpan,
    FSCol,
    FSRow
  },
  props: {
    translationsExpanded: {
      type: Boolean,
      default: false,
    },
    editable: {
      type: Boolean,
      default: true,
    },
    modelValue: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    translations: {
      type: Array as PropType<{ languageCode: string; [key: string]: string }[]>,
      required: false,
      default: () => []
    },
    property: {
      type: String as PropType<string>,
      required: false,
      default: "label"
    }
  },
  emits: ['update:translationsExpanded', 'update:modelValue', 'update:translations'],
  setup(props, { emit }) {
    const { languages } = useAppLanguages();

    const innerTranslations = ref(props.translations);

    const getTranslation = (languageCode: string): string => {
      if (!innerTranslations.value) {
        return emptyLexicalState;
      }
      const translation = innerTranslations.value.find((t) => t.languageCode === languageCode);
      if (!translation || !translation[props.property]) {
        return emptyLexicalState;
      }
      return translation[props.property].toString();
    };

    const setTranslation = (languageCode: string, value: string): void => {
      if (!innerTranslations.value) {
        innerTranslations.value = [{
          languageCode,
          [props.property]: value
        }]
        return;
      }
      const translation = innerTranslations.value.find((t) => t.languageCode === languageCode);
      if (translation) {
        translation[props.property] = value;
      }
      else {
        innerTranslations.value.push({
          languageCode,
          [props.property]: value
        });
      }
    };

    const onSubmitTranslations = (): void => {
      if (props.editable) {
        emit("update:translations", innerTranslations.value);
      }
      emit('update:translationsExpanded', false);
    };

    const onCancelTranslations  = (): void => {
      emit('update:translationsExpanded', false);
    };

    return {
      languages,
      onCancelTranslations,
      onSubmitTranslations,
      getTranslation,
      setTranslation
    };
  }
});
</script>