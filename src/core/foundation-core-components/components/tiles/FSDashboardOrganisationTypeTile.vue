<template>
  <FSLoadTile
    v-if="getting"
    :editable="$props.editable"
    :modelValue="$props.modelValue"
    @update:modelValue="(value) => $emit('update:modelValue', value)"
  />
  <FSDashboardOrganisationTypeTileUI
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

import { useDashboardOrganisationType } from "@dative-gpi/foundation-core-services/composables";

import FSDashboardOrganisationTypeTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSDashboardOrganisationTypeTileUI.vue";
import FSLoadTile from "@dative-gpi/foundation-shared-components/components/tiles/FSLoadTile.vue";

export default defineComponent({
  name: "FSDashboardOrganisationTypeTile",
  components: {
    FSDashboardOrganisationTypeTileUI,
    FSLoadTile
  },
  props: {
    dashboardOrganisationTypeId: {
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
    const { get, getting, entity } = useDashboardOrganisationType();

    onMounted(() => {
      get(props.dashboardOrganisationTypeId);
    });

    watch(() => props.dashboardOrganisationTypeId, () => {
      get(props.dashboardOrganisationTypeId);
    });

    return {
      getting,
      entity
    };
  }
});
</script>