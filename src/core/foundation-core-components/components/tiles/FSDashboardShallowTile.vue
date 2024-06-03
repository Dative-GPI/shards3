<template>
  <FSLoadTile
    v-if="getting"
    :editable="$props.editable"
    :modelValue="$props.modelValue"
    @update:modelValue="(value) => $emit('update:modelValue', value)"
  />
  <FSDashboardShallowTileUI
    v-else-if="entity"
    :icon="entity.icon"
    :code="entity.code"
    :label="entity.label"
    :imageId="entity.imageId"
    :editable="$props.editable"
    :bottomColor="entity.colors"
    :modelValue="$props.modelValue"
    @update:modelValue="(value) => $emit('update:modelValue', value)"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted, watch } from "vue";

import { useDashboardShallow } from "@dative-gpi/foundation-core-services/composables";

import FSDashboardShallowTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSDashboardShallowTileUI.vue";
import FSLoadTile from "@dative-gpi/foundation-shared-components/components/tiles/FSLoadTile.vue";

export default defineComponent({
  name: "FSDashboardShallowTile",
  components: {
    FSDashboardShallowTileUI,
    FSLoadTile
  },
  props: {
    dashboardShallowId: {
      type: String,
      required: true
    },
    modelValue: {
      type: Boolean,
      required: false,
      default: false
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  setup(props) {
    const { get, getting, entity } = useDashboardShallow();

    onMounted(() => {
      get(props.dashboardShallowId);
    });

    watch(() => props.dashboardShallowId, () => {
      get(props.dashboardShallowId);
    });

    return {
      getting,
      entity
    };
  }
});
</script>