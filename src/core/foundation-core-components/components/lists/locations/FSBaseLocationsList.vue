<template>
  <FSDataTable
    mode="table"
    :loading="fetchingLocations"
    :disableIterator="true"
    :items="locations"
    :tableCode="tableCode"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  >
    <template
      v-for="(_, name) in $slots"
      v-slot:[name]="slotData"
    >
      <slot
        :name="name"
        v-bind="slotData"
      />
    </template>
    <template
      #item.icon="{ item }"
    >
      <FSIcon >
        {{ item.icon }}
      </FSIcon>
    </template>
  </FSDataTable>
</template>

<script lang="ts">
import { defineComponent, type PropType, watch } from "vue";
import _ from "lodash";

import { useLocations } from "@dative-gpi/foundation-core-services/composables";
import type { LocationFilters } from "@dative-gpi/foundation-core-domain/models";

import FSDataTable from "../FSDataTable.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";

export default defineComponent({
  name: "BaseLocationsList",
  components: {
    FSDataTable,
    FSIcon
  },
  props: {
    locationFilters: {
      type: Object as PropType<LocationFilters>,
      required: false,
      default: null
    },
    modelValue: {
      type: Array as PropType<string[]>,
      default: () => [],
      required: false
    },
    tableCode: {
      type: String,
      required: true
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { getMany: fetchLocations, fetching: fetchingLocations, entities: locations } = useLocations();

    watch(() => props.locationFilters, (next, previous) => {
      if ((!next && !previous) || !_.isEqual(next, previous)) {
        fetchLocations(props.locationFilters);
      }
    }, { immediate: true });

    return {
      fetchingLocations,
      locations
    };
  }
});
</script>