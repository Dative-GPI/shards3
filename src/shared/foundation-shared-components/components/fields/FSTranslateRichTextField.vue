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
      <FSLoader
        v-if="fetchingLanguages"
        width="100%"
        height="300px"
      />
      <FSRichTextField
        v-for="(language, index) in languages"
        :editable="$props.editable"
        :key="index"
        :modelValue="getTranslation(language.code)"
        v-bind="$attrs"
        @update:modelValue="setTranslation(language.code, $event)"
      >
        <template
          #label
        >
          <FSRow
            :wrap="false"
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
        :label="$tr('ui.translateRichTextField.cancelButton.label', 'Cancel')"
        prepend-icon="mdi-cancel"
        :fullWidth="true"
        @click="onCancelTranslations"
      />
      <FSButton
        v-if="$props.editable"
        :label="$tr('ui.translateRichTextField.validateButton.label', 'Validate translations')"
        color="primary"
        prepend-icon="mdi-check"
        :fullWidth="true"
        @click="onSubmitTranslations"
      />
    </FSRow>
  </FSCol>
  <FSRichTextField
    v-else
    :modelValue="$props.modelValue"
    :editable="$props.editable"
    v-bind="$attrs"
    @update:modelValue="$emit('update:modelValue', $event)"
  >
    <template
      #append-inner
    >
      <FSButton
        :label="$tr('ui.translateRichTextField.translateButton.label', 'Manage translations')"
        :load="fetchingLanguages"
        color="primary"
        prepend-icon="mdi-translate"
        :fullWidth="true"
        @click="() => $emit('update:translationsExpanded', true)"
      />
    </template>
  </FSRichTextField>
</template>

<script lang="ts">
import { defineComponent, onMounted, type PropType, ref } from 'vue';

import { useLanguages } from "@dative-gpi/foundation-shared-services/composables";

import FSRichTextField from './FSRichTextField.vue';
import FSButton from '../FSButton.vue';
import FSCol from '../FSCol.vue';
import FSIcon from '../FSIcon.vue';
import FSLoader from '../FSLoader.vue';
import FSRow from '../FSRow.vue';
import FSSpan from '../FSSpan.vue';

export default defineComponent({
  name: 'FSTranslateRichTextField',
  components: {
    FSButton,
    FSCol,
    FSIcon,
    FSLoader,
    FSRichTextField,
    FSRow,
    FSSpan,
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
    },
  },
  emits: ['update:translationsExpanded', 'update:modelValue', 'update:translations'],
  setup(props, { emit }) {
    const { getMany: getManyLanguages, fetching: fetchingLanguages, entities: languages } = useLanguages();

    const innerTranslations = ref(props.translations);

    const emptyState = "{\"root\":{\"children\":[{\"children\":[],\"direction\":null,\"format\":\"\",\"indent\":0,\"type\":\"paragraph\",\"version\":1}],\"direction\":null,\"format\":\"\",\"indent\":0,\"type\":\"root\",\"version\":1}}";

    const getTranslation = (languageCode: string): string => {
      if (!innerTranslations.value) {
        return emptyState;
      }
      const translation = innerTranslations.value.find((t) => t.languageCode === languageCode);
      if (!translation || !translation[props.property]) {
        return emptyState;
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

    onMounted(() => {
      getManyLanguages();
    });

    return {
      fetchingLanguages,
      languages,
      getTranslation,
      onCancelTranslations,
      onSubmitTranslations,
      setTranslation,
    };
  },
});

</script>