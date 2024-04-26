<template>
  <FSAutocompleteField :toggleSet="!$props.toggleSetDisabled && toggleSet"
    :loading="loading"
    :items="userOrganisations"
    :multiple="$props.multiple"
    :modelValue="$props.modelValue"
    @update:modelValue="onUpdate"
    v-model:search="search"
    v-bind="$attrs">
    <template #selection="{ item }">
      <FSRow align="center-center"
        :wrap="false">
        <FSImage height="26px"
          width="26px"
          :imageId="item.raw.imageId" />
        <FSText>
          {{ item.raw.label }}
        </FSText>
      </FSRow>
    </template>
    <template #item="{ props, item }">
      <v-list-item v-bind="{ ...props, title: '' }">
        <FSRow align="center-left">
          <FSCheckbox v-if="$props.multiple"
            :modelValue="isSelected(item.value)" />
          <FSImage height="26px"
            width="26px"
            :imageId="item.raw.imageId" />
          <FSText>
            {{ item.raw.label }}
          </FSText>
        </FSRow>
      </v-list-item>
    </template>
  </FSAutocompleteField>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { useAutocomplete } from "@dative-gpi/foundation-shared-components/composables";
import { useUserOrganisations } from "@dative-gpi/foundation-core-services/composables";
import { UserOrganisationFilters } from "@dative-gpi/foundation-core-domain/models";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";
import FSImage from "@dative-gpi/foundation-shared-components/components/FSImage.vue";
import FSText from "@dative-gpi/foundation-shared-components/components/FSText.vue";

export default defineComponent({
  name: "FSAutocompleteUserOrganisation",
  components: {
    FSAutocompleteField,
    FSImage,
    FSText
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
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { getMany: getManyUserOrganisations, fetching: fetchingUserOrganisations, entities: userOrganisations } = useUserOrganisations();

    const innerFetch = (search: string | null) => {
      return getManyUserOrganisations({ ...props.userOrganisationFilters, search: search ?? undefined });
    };

    const { toggleSet, search, init, onUpdate } = useAutocomplete(
      userOrganisations,
      [() => props.userOrganisationFilters],
      emit,
      innerFetch
    );

    const isSelected = (id: any) => {
      return props.modelValue?.includes(id);
    }
    const loading = computed((): boolean => {
      return init.value && fetchingUserOrganisations.value;
    });

    return {
      userOrganisations,
      toggleSet,
      loading,
      search,
      isSelected,
      onUpdate
    };
  }
});
</script>