<template>
  <FSAutocompleteField
    :toggleSet="!$props.toggleSetDisabled && toggleSet"
    :toggleSetItems="toggleSetItems"
    :multiple="$props.multiple"
    :items="userOrganisations"
    :loading="loading"
    :modelValue="$props.modelValue"
    @update:modelValue="onUpdate"
    v-bind="$attrs"
>
    <template
      #autocomplete-selection="{ item }"
    >
      <FSRow
        v-if="$props.modelValue"
        align="center-center"
        :wrap="false"
      >
        <FSImage
          v-if="item.raw.imageId"
          height="26px"
          width="26px"
          :imageId="item.raw.imageId"
        />
        <FSSpan>
          {{ item.raw.name }}
        </FSSpan>
      </FSRow>
    </template>
    <template
      #autocomplete-item="{ props, item }"
    >
      <v-list-item
        v-bind="{ ...props, title: '' }"
      >
        <FSRow
          align="center-left"
        >
          <FSCheckbox
            v-if="$props.multiple"
            :modelValue="$props.modelValue?.includes(item.value)"
          />
          <FSImage
            v-if="item.raw.imageId"
            height="26px"
            width="26px"
            :imageId="item.raw.imageId"
          />
          <FSSpan>
            {{ item.raw.name }}
          </FSSpan>
        </FSRow>
      </v-list-item>
    </template>
  </FSAutocompleteField>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { useAutocomplete } from "@dative-gpi/foundation-shared-components/composables";
import { useUserOrganisations } from "@dative-gpi/foundation-core-services/composables";
import { UserOrganisationFilters, UserOrganisationInfos } from "@dative-gpi/foundation-core-domain/models";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";
import FSCheckbox from "@dative-gpi/foundation-shared-components/components/FSCheckbox.vue";
import FSImage from "@dative-gpi/foundation-shared-components/components/FSImage.vue";
import FSSpan from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";
export default defineComponent({
  name: "FSAutocompleteUserOrganisation",
  components: {
    FSAutocompleteField,
    FSCheckbox,
    FSImage,
    FSSpan,
    FSRow
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

    const loading = computed((): boolean => {
      return init.value && fetchingUserOrganisations.value;
    });

    const toggleSetItems = computed((): any[] => {
      return userOrganisations.value.map((userOrganisation: UserOrganisationInfos) => ({
          id: userOrganisation.id,
          label: userOrganisation.name
      }));
    });
    
    const innerFetch = (search: string | null) => {
      return getManyUserOrganisations({ ...props.userOrganisationFilters, search: search ?? undefined });
    };

    const { toggleSet, search, init, onUpdate } = useAutocomplete(
      userOrganisations,
      [() => props.userOrganisationFilters],
      emit,
      innerFetch,
      null,
      (item: UserOrganisationInfos) => item.id,
      (item: UserOrganisationInfos) => item.name
    );

    return {
      userOrganisations,
      toggleSetItems,
      toggleSet,
      loading,
      search,
      onUpdate
    };
  }
});
</script>