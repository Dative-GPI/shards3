<template>
  <FSLoadTile
    v-if="getting"
    :editable="$props.editable"
    :modelValue="$props.modelValue"
    @update:modelValue="(value) => $emit('update:modelValue', value)"
  />
  <FSSimpleIconTileUI
    v-else-if="entity"
    :label="entity.label"
    :code="entity.code"
    :bottomColor="entity.colors"
    :icon="entity.icon"
    :editable="$props.editable"
    :modelValue="$props.modelValue"
    @update:modelValue="(value) => $emit('update:modelValue', value)"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted, watch } from "vue";

import { useDashboardOrganisation } from "@dative-gpi/foundation-core-services/composables";

import FSSimpleIconTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSSimpleIconTileUI.vue";
import FSLoadTile from "@dative-gpi/foundation-shared-components/components/tiles/FSLoadTile.vue";

export default defineComponent({
  name: "FSDashboardOrganisationTile",
  components: {
    FSSimpleIconTileUI,
    FSLoadTile
  },
  props: {
    dashboardOrganisationId: {
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
    const { get, getting, entity } = useDashboardOrganisation();

    onMounted(() => {
      get(props.dashboardOrganisationId);
    });

    watch(() => props.dashboardOrganisationId, () => {
      get(props.dashboardOrganisationId);
    });

    return {
      getting,
      entity
    };
  }
});
</script>