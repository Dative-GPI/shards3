<template>
  <FSAutocompleteField
    :toggleSet="!$props.toggleSetDisabled && toggleSet"
    :multiple="$props.multiple"
    :loading="loading"
    :items="groups"
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
        <FSIcon
          v-if="item.raw.icon"
        >
          {{ item.raw.icon }}
        </FSIcon>
        <FSSpan>
          {{ item.raw.label }}
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
          :wrap="false"
        >
          <FSCheckbox
            v-if="$props.multiple"
            :modelValue="$props.modelValue?.includes(item.value)"
            @click="props.onClick"
          />
          <FSIcon
            v-if="item.raw.icon"
          >
            {{ item.raw.icon }}
          </FSIcon>
          <FSSpan>
            {{ item.raw.label }}
          </FSSpan>
        </FSRow>
      </v-list-item>
    </template>
  </FSAutocompleteField>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { useAutocomplete } from "@dative-gpi/foundation-shared-components/composables";
import { useGroups } from "@dative-gpi/foundation-core-services/composables";
import { GroupFilters } from "@dative-gpi/foundation-core-domain/models";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";
import FSCheckbox from "@dative-gpi/foundation-shared-components/components/FSCheckbox.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSSpan from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";

export default defineComponent({
  name: "FSAutocompleteGroup",
  components: {
    FSAutocompleteField,
    FSCheckbox,
    FSIcon,
    FSSpan,
    FSRow
  },
  props: {
    groupFilters: {
      type: Object as PropType<GroupFilters>,
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
    const { getMany: getManyGroups, fetching: fetchingGroups, entities: groups } = useGroups();

    const loading = computed((): boolean => {
      return init.value && fetchingGroups.value;
    });

    const innerFetch = (search: string | null) => {
      return getManyGroups({ ...props.groupFilters, search: search ?? undefined });
    };

    const { toggleSet, init, onUpdate } = useAutocomplete(
      groups,
      [() => props.groupFilters],
      emit,
      innerFetch
    );

    return {
      toggleSet,
      loading,
      groups,
      onUpdate
    };
  }
});
</script>