<template>
  <FSAutocompleteField
    itemTitle="id"
    :toggleSet="!$props.toggleSetDisabled && toggleSet"
    :multiple="$props.multiple"
    :placeholder="placeholder"
    :loading="loading"
    :items="timeZones"
    :modelValue="$props.modelValue"
    @update:modelValue="onUpdate"
    v-bind="$attrs"
  >
    <template
      #item-append="{ item }"
    >
      <FSChip
        v-if="item.offset"
        :label="item.offset.split(':')[0]"
      />
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
          #append
        >
          <FSChip
            v-if="props.item.offset"
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
import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui";
import { useTimeZones } from "@dative-gpi/foundation-shared-services/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSAutocompleteField from "../fields/FSAutocompleteField.vue";
import FSButton from "../FSButton.vue";
import FSChip from "../FSChip.vue";

export default defineComponent({
  name: "FSAutocompleteTimeZone",
  components: {
    FSAutocompleteField,
    FSButton,
    FSChip
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
    const { $tr } = useTranslationsProvider();

    const loading = computed((): boolean => {
      return init.value && fetchingTimeZones.value;
    });

    const placeholder = computed((): string | null => {
      if (props.multiple && props.modelValue) {
        return $tr("ui.autocomplete-time-zone.placeholder", "{0} time zone(s) selected", props.modelValue.length);
      }
      return null;
    });

    const fetch = (search: string | null) => {
      return getManyTimeZones({ ...props.timeZoneFilters, search: search ?? undefined });
    };

    const { toggleSet, init, onUpdate } = useAutocomplete(
      timeZones,
      [() => props.timeZoneFilters],
      emit,
      fetch,
      null,
      (item: TimeZoneInfos) => item.id,
      (item: TimeZoneInfos) => item.id
    );

    return {
      placeholder,
      ColorEnum,
      timeZones,
      toggleSet,
      loading,
      onUpdate
    };
  }
});
</script>