<template>
  <v-skeleton-loader
    v-if="fetching"
    type="image"
    :class="loadClasses"
  />
  <FSSelectField
    v-else
    itemValue="code"
    :class="classes"
    :items="entities"
    :modelValue="languageCode"
    :hideHeader="$props.hideHeader"
    @update:modelValue="setLanguageCode($event)"
    v-bind="$attrs"
  >
    <template #selection>
      <FSRow
        align="center-center"
      >
        <FSIcon size="l">
          {{ languageIcon }}
        </FSIcon>
        <FSSpan
          v-if="$props.withLabel"
        >
          {{ languageLabel }}
        </FSSpan>
      </FSRow>
    </template>
    <template #item="{ item, props }">
      <v-list-item v-bind="{ ...props, title: '' }">
        <FSRow
          align="center-left"
          width="hug"
        >
          <FSIcon size="l">
            {{ item.raw.icon }}
          </FSIcon>
          <FSSpan
            v-if="$props.withLabel"
          >
            {{ item.raw.label }}
          </FSSpan>
        </FSRow>
      </v-list-item>
    </template>
  </FSSelectField>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";

import { useLanguageCode } from "@dative-gpi/foundation-shared-services/composables";
import { useLanguages } from "@dative-gpi/foundation-core-services/composables";

import FSSelectField from "../components/fields/FSSelectField.vue";
import FSIcon from "../components/FSIcon.vue";
import FSSpan from "../components/FSSpan.vue";
import FSRow from "../components/FSRow.vue";

export default defineComponent({
  name: "FSLanguageSet",
  components: {
    FSSelectField,
    FSIcon,
    FSSpan,
    FSRow
  },
  props: {
    withLabel: {
      type: Boolean,
      required: false,
      default: false
    },
    modelValue: {
      type: String,
      required: false,
      default: null
    },
    hideHeader: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { getMany, fetching, entities } = useLanguages();
    const { setLanguageCode, languageCode } = useLanguageCode();

    onMounted(() => {
      getMany();
    });

    const classes = computed((): string[] => {
      const innerClasses = ["fs-language-setter"];
      if (!props.withLabel) {
        innerClasses.push("fs-language-setter-icon");
      }
      return innerClasses;
    });

    const loadClasses = computed((): string[] => {
      const innerClasses = ["fs-load-language-setter"];
      if (!props.withLabel) {
        innerClasses.push("fs-load-language-setter-icon");
      }
      return innerClasses;
    });

    const languageIcon = computed((): string => {
      const language = entities.value.find((entity) => entity.code === languageCode.value);
      if (language) {
        return language.icon;
      }
      return "";
    });

    const languageLabel = computed((): string => {
      const language = entities.value.find((entity) => entity.code === languageCode.value);
      if (language) {
        return language.label;
      }
      return "";
    });

    return {
      classes,
      fetching,
      entities,
      loadClasses,
      languageCode,
      languageIcon,
      languageLabel,
      setLanguageCode
    };
  }
});
</script>