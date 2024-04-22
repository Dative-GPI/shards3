<template>
  <FSAutocompleteField
    :loading="fetchingTimeZones"
    :items="timeZones"
    v-model:search="search"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from "vue";
import _ from "lodash";

import { useTimeZones } from "@dative-gpi/foundation-shared-services/composables";
import { TimeZoneFilters } from "@dative-gpi/foundation-shared-domain/models";

import FSAutocompleteField from "../fields/FSAutocompleteField.vue";

export default defineComponent({
  name: "FSAutocompleteTimeZone",
  components: {
    FSAutocompleteField
  },
  props: {
    timeZoneFilters: {
      type: Object as PropType<TimeZoneFilters>,
      required: false,
      default: null
    }
  },
  setup(props) {
    const { getMany: getManyTimeZones, fetching: fetchingTimeZones, entities: timeZones } = useTimeZones();

    const search = ref<string | null>(null);

    watch([() => props.timeZoneFilters, () => search.value], async (newValue, oldValue) => {
      if (!_.isEqual(newValue, oldValue)) {
        await getManyTimeZones({ ...props.timeZoneFilters, search: search.value ?? undefined });
      }
    }, { immediate: true });

    return {
      fetchingTimeZones,
      timeZones,
      search
    }
  }
});
</script>