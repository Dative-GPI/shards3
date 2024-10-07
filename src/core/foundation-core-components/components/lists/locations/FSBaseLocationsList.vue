<template>
  <FSDataTable
    defaultMode="iterator"
    :loading="fetchingLocations"
    :items="locations"
    :showSelect="$props.editable"
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

    <template
      #item.tile="{ item, toggleSelect }"
    >
      <FSLocationTileUI
        v-bind="item"
        :bottomColor="item.colors"
        :address="item.address.placeLabel"
        :editable="true"
        :singleSelect="singleSelect"
        :modelValue="isSelected(item.id)"
        :to="$props.itemTo && $props.itemTo(item)"
        @update:modelValue="toggleSelect(item)"
      />
    </template>
  </FSDataTable>
</template>

<script lang="ts">
import _ from "lodash";
import type { RouteLocation } from "vue-router";
import { defineComponent, type PropType, watch } from "vue";

import { useLocations } from "@dative-gpi/foundation-core-services/composables";
import type { LocationFilters, LocationInfos } from "@dative-gpi/foundation-core-domain/models";

import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";

import FSDataTable from "../FSDataTable.vue";
import FSLocationTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSLocationTileUI.vue";

export default defineComponent({
  name: "FSBaseLocationsList",
  components: {
    FSLocationTileUI,
    FSDataTable,
    FSIcon
  },
  props: {
    tableCode: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    locationsFilters: {
      type: Object as PropType<LocationFilters>,
      required: false,
      default: null
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    },
    itemTo: {
      type: Function as PropType<(item: LocationInfos) => Partial<RouteLocation>>,
      required: false
    },
    singleSelect: {
      type: Boolean,
      required: false,
      default: false
    },
    modelValue: {
      type: Array as PropType<string[]>,
      default: () => [],
      required: false
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { getMany: fetchLocations, fetching: fetchingLocations, entities: locations } = useLocations();

    watch(() => props.locationsFilters, (next, previous) => {
      if ((!next && !previous) || !_.isEqual(next, previous)) {
        fetchLocations(props.locationsFilters);
      }
    }, { immediate: true });

    const isSelected = (id: string) => {
      return props.modelValue?.includes(id);
    };

    return {
      fetchingLocations,
      isSelected,
      locations
    };
  }
});
</script>