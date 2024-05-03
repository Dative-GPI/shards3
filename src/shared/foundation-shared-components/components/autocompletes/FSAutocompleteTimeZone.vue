<template>
  <FSAutocompleteField
    :toggleSet="!$props.toggleSetDisabled && toggleSet"
    :multiple="$props.multiple"
    :loading="loading"
    :items="timeZones"
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
        <FSChip
          :label="item.raw.offset"
        />
        <FSText>
          {{ item.raw.id }}
        </FSText>
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
            :modelValue="isSelected(item.value)"
          />
          <FSChip
            :label="item.raw.offset"
          />
          <FSText>
            {{ item.raw.id }}
          </FSText>
        </FSRow>
      </v-list-item>
    </template>
    <template
      #toggle-set-default
    >
      <FSButton
        v-for="tz in timeZones"
        :label="tz.id"
        :key="tz.id"
      />
    </template>
  </FSAutocompleteField>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { TimeZoneFilters } from "@dative-gpi/foundation-shared-domain/models";
import { useAutocomplete } from "@dative-gpi/foundation-shared-components/composables";
import { useTimeZones } from "@dative-gpi/foundation-shared-services/composables";

import FSAutocompleteField from "../fields/FSAutocompleteField.vue";
import FSCheckbox from "../FSCheckbox.vue"
import FSChip from "../FSChip.vue";
import FSText from "../FSText.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSAutocompleteTimeZone",
  components: {
    FSAutocompleteField,
    FSCheckbox,
    FSChip,
    FSText,
    FSRow
  },
  props: {
    timeZoneFilters: {
      type: Object as PropType<TimeZoneFilters>,
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
    const { getMany: getManyTimeZones, fetching: fetchingTimeZones, entities: timeZones } = useTimeZones();

    const innerFetch = (search: string | null) => {
      return getManyTimeZones({ ...props.timeZoneFilters, search: search ?? undefined });
    };

    const { toggleSet, search, init, onUpdate } = useAutocomplete(
      timeZones,
      [() => props.timeZoneFilters],
      emit,
      innerFetch,
      null,
      (item: any) => item.id,
      (item: any) => item.id
    );

    const isSelected = (id: any) => {
      return props.modelValue?.includes(id);
    };

    const loading = computed((): boolean => {
      return init.value && fetchingTimeZones.value;
    });

    return {
      timeZones,
      toggleSet,
      loading,
      search,
      isSelected,
      onUpdate
    };
  }
});
</script>