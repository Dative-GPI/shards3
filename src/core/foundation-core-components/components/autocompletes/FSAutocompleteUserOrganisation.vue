<template>
  <FSAutocompleteField
    itemTitle="name"
    :label="$props.label ?? $tr('autocomplete.user.label', 'User')"
    :toggleSet="!$props.toggleSetDisabled && toggleSet"
    :multiple="$props.multiple"
    :placeholder="placeholder"
    :items="userOrganisations"
    :loading="loading"
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
        :label="props.item.name"
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

import { type UserOrganisationFilters, type UserOrganisationInfos } from "@dative-gpi/foundation-core-domain/models";
import { useUserOrganisations } from "@dative-gpi/foundation-core-services/composables";
import { useAutocomplete } from "@dative-gpi/foundation-shared-components/composables";
import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";
import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";
import FSImage from "@dative-gpi/foundation-shared-components/components/FSImage.vue";

export default defineComponent({
  name: "FSAutocompleteUserOrganisation",
  components: {
    FSAutocompleteField,
    FSButton,
    FSImage
  },
  props: {
    userOrganisationFilters: {
      type: Object as PropType<UserOrganisationFilters>,
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
    const { getMany: getManyUserOrganisations, fetching: fetchingUserOrganisations, entities: userOrganisations } = useUserOrganisations();
    const { $tr } = useTranslationsProvider();

    const loading = computed((): boolean => {
      return init.value && fetchingUserOrganisations.value;
    });

    const placeholder = computed((): string | null => {
      if (props.multiple && props.modelValue) {
        return $tr("autocomplete.user.placeholder", "{0} user(s) selected", props.modelValue.length);
      }
      return null;
    });
    
    const fetch = (search: string | null) => {
      return getManyUserOrganisations({ ...props.userOrganisationFilters, search: search ?? undefined });
    };

    const { toggleSet, init, onUpdate } = useAutocomplete(
      userOrganisations,
      [() => props.userOrganisationFilters],
      emit,
      fetch,
      null,
      (item: UserOrganisationInfos) => item.id,
      (item: UserOrganisationInfos) => item.name
    );

    return {
      userOrganisations,
      placeholder,
      toggleSet,
      loading,
      onUpdate
    };
  }
});
</script>