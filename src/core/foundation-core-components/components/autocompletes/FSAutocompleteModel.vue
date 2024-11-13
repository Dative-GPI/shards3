<template>
  <FSAutocompleteField
    :label="$props.label ?? $tr('autocomplete.model.label', 'Model')"
    :toggleSet="!$props.toggleSetDisabled && toggleSet"
    :multiple="$props.multiple"
    :placeholder="placeholder"
    :loading="loading"
    :items="models"
    :modelValue="$props.modelValue"
    @update:modelValue="onUpdate"
    v-bind="$attrs"
  >
    <template
      #item-prepend="{ item }"
    >
      <FSImage
        v-if="item.imageId"
        height="26px"
        width="26px"
        :imageId="item.imageId"
        :thumbnail="true"
      />
    </template>
    <template
      #toggle-set-item="props"
    >
      <FSButton
        :padding="props.item.imageId ? ['6px 16px', '4px 12px'] : undefined"
        :variant="props.getVariant(props.item)"
        :color="props.getColor(props.item)"
        :class="props.getClass(props.item)"
        :label="props.item.label"
        @click="props.toggle(props.item)"
      >
        <template
          v-if="props.item.imageId"
          #prepend
        >
          <FSImage
            height="26px"
            width="26px"
            :imageId="props.item.imageId"
            :thumbnail="true"
          />
        </template>
      </FSButton>
    </template>
  </FSAutocompleteField>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { useAutocomplete } from "@dative-gpi/foundation-shared-components/composables";
import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui";
import { type ModelFilters } from "@dative-gpi/foundation-core-domain/models";
import { useModels } from "@dative-gpi/foundation-core-services/composables";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";
import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";
import FSImage from "@dative-gpi/foundation-shared-components/components/FSImage.vue";

export default defineComponent({
  name: "FSAutocompleteModel",
  components: {
    FSAutocompleteField,
    FSButton,
    FSImage
  },
  props: {
    modelFilters: {
      type: Object as PropType<ModelFilters>,
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
    },
    toggleSetDisabled: {
      type: Boolean,
      required: false,
      default: false
    },
    label: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { getMany: getManyModels, fetching: fetchingModels, entities: models } = useModels();
    const { $tr } = useTranslationsProvider();

    const loading = computed((): boolean => {
      return init.value && fetchingModels.value;
    });

    const placeholder = computed((): string | null => {
      if (props.multiple && props.modelValue) {
        return $tr("autocomplete.model.placeholder", "{0} model(s) selected", props.modelValue.length);
      }
      return null;
    });

    const fetch = (search: string | null) => {
      return getManyModels({ ...props.modelFilters, search: search ?? undefined });
    };

    const { toggleSet, init, onUpdate } = useAutocomplete(
      models,
      [() => props.modelFilters],
      emit,
      fetch
    );

    return {
      placeholder,
      toggleSet,
      loading,
      models,
      onUpdate
    };
  }
});
</script>