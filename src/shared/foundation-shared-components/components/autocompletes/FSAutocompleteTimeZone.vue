<template>
  <FSAutocompleteField
    itemTitle="id"
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
        <FSSpan>
          {{ item.raw.id }}
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
        <FSChip
          :label="item.raw.offset"
        />
        <FSSpan
          :font="font"
        >
          {{ item.raw.id }}
        </FSSpan>
      </FSRow>
    </template>
    <template
      #toggle-set-item="props"
    >
      <FSButton
        :variant="props.getVariant(props.item)"
        :color="props.getColor(props.item)"
        :class="props.getClass(props.item)"
        :label="props.item.id"
        @click="props.toggle(props.item)"
      >
        <template
          #prepend
        >
          <FSChip
            :label="props.item.offset.split(':')[0]"
          />
        </template>
      </FSButton>
    </template>
  </FSAutocompleteField>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { type TimeZoneFilters, type TimeZoneInfos } from "@dative-gpi/foundation-shared-domain/models";
import { useAutocomplete } from "@dative-gpi/foundation-shared-components/composables";
import { useTimeZones } from "@dative-gpi/foundation-shared-services/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSAutocompleteField from "../fields/FSAutocompleteField.vue";
import FSButton from "../FSButton.vue";
import FSChip from "../FSChip.vue";
import FSSpan from "../FSSpan.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSAutocompleteTimeZone",
  components: {
    FSAutocompleteField,
    FSButton,
    FSChip,
    FSSpan,
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

    const loading = computed((): boolean => {
      return init.value && fetchingTimeZones.value;
    });

    const fetch = (search: string | null) => {
      return getManyTimeZones({ ...props.timeZoneFilters, search: search ?? undefined });
    };

    const { toggleSet, search, init, onUpdate } = useAutocomplete(
      timeZones,
      [() => props.timeZoneFilters],
      emit,
      fetch,
      null,
      (item: TimeZoneInfos) => item.id,
      (item: TimeZoneInfos) => item.id
    );

    return {
      ColorEnum,
      timeZones,
      toggleSet,
      loading,
      search,
      onUpdate
    };
  }
});
</script>