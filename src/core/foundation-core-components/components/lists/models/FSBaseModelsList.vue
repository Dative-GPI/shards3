<template>
  <FSDataTable
    :loading="fetchingModels"
    :items="models"
    :tableCode="$props.tableCode"
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
      #header.connectable-title
    >
      <FSIcon>
        mdi-wifi
      </FSIcon>
    </template>
    <template
      #item.imageId="{ item }"
    >
      <FSImage
        v-if="item.imageId"
        height="32px"
        width="32px"
        :imageId="item.imageId"
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
      #item.connectable="{ item }"
    >
      <FSIconCheck
        :value="item.connectable"
      />
    </template>
    <template
      #item.tile="{ item }"
    >
      <FSModelTileUI
        :imageId="item.imageId"
        :label="item.label"
        :color="isSelected(item.id) ? ColorEnum.Primary : ColorEnum.Background"
        @click="$emit('update:modelValue', [item.id])"
        v-bind="$attrs"
      />
    </template>
  </FSDataTable>
</template>

<script lang="ts">
import { defineComponent, type PropType, watch } from "vue";
import _ from "lodash";

import {ColorEnum} from "@dative-gpi/foundation-shared-components/models";

import { useModels } from "@dative-gpi/foundation-core-services/composables";
import type { ModelFilters } from "@dative-gpi/foundation-core-domain/models";

import FSDataTable from "../FSDataTable.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSImage from "@dative-gpi/foundation-shared-components/components/FSImage.vue";
import FSIconCheck from "@dative-gpi/foundation-shared-components/components/FSIconCheck.vue";
import FSModelTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSModelTileUI.vue";

export default defineComponent({
  name: "FSBaseModelsList",
  components: {
    FSModelTileUI,
    FSDataTable,
    FSIconCheck,
    FSImage,
    FSIcon,
  },
  props: {
    modelFilters: {
      type: Object as PropType<ModelFilters>,
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
    const { getMany: fetchModels, fetching: fetchingModels, entities: models } = useModels();

    const isSelected = (id: string): boolean => {
      return props.modelValue.includes(id);
    };

    watch(() => props.modelFilters, (next, previous) => {
      if ((!next && !previous) || !_.isEqual(next, previous)) {
        fetchModels(props.modelFilters);
      }
    }, { immediate: true });

    return {
      fetchingModels,
      models,
      ColorEnum,
      isSelected
    };
  }
});
</script>