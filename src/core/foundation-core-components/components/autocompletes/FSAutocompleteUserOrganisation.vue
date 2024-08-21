<template>
  <FSAutocompleteField
    itemTitle="name"
    :toggleSet="!$props.toggleSetDisabled && toggleSet"
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
      #item-label="{ item, font }"
    >
      <FSRow
        align="center-left"
        :wrap="false"
      >
        <FSImage
          v-if="item.raw.imageId"
          height="26px"
          width="26px"
          :imageId="item.raw.imageId"
        />
        <FSSpan
          :font="font"
        >
          {{ item.raw.name }}
        </FSSpan>
      </FSRow>
    </template>
    <template
      #toggle-set-item="props"
    >
      <FSButton
        :variant="props.getVariant(props.item)"
        :padding="['6px 16px', '4px 12px']"
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

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";
import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";
import FSImage from "@dative-gpi/foundation-shared-components/components/FSImage.vue";
import FSSpan from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";

export default defineComponent({
  name: "FSAutocompleteUserOrganisation",
  components: {
    FSAutocompleteField,
    FSButton,
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
    
    const fetch = (search: string | null) => {
      return getManyUserOrganisations({ ...props.userOrganisationFilters, search: search ?? undefined });
    };

    const { toggleSet, search, init, onUpdate } = useAutocomplete(
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
      toggleSet,
      loading,
      search,
      onUpdate
    };
  }
});
</script>