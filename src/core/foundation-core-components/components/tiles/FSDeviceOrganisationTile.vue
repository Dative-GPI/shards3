<template>
  <FSLoadTile
    v-if="getting"
    :editable="$props.editable"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
  />
  <FSDeviceOrganisationTileUI
    v-else-if="entity"
    :imageId="entity.imageId"
    :label="entity.label"
    :code="entity.code"
    :deviceConnectivity="entity.connectivity"
    :deviceWorstAlert="entity.worstAlert"
    :deviceAlerts="entity.alerts"
    :modelStatuses="entity.modelStatuses"
    :deviceStatuses="entity.status?.statuses"
    :editable="$props.editable"
    :alertTo="$props.alertTo"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted, watch } from "vue";

import { useDeviceOrganisation } from "@dative-gpi/foundation-core-services/composables";

import FSDeviceOrganisationTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSDeviceOrganisationTileUI.vue";
import FSLoadTile from "@dative-gpi/foundation-shared-components/components/tiles/FSLoadTile.vue";

export default defineComponent({
  name: "FSDeviceOrganisationTile",
  components: {
    FSDeviceOrganisationTileUI,
    FSLoadTile
  },
  props: {
    deviceOrganisationId: {
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
    },
    alertTo: {
      type: Function,
      required: false,
      default: null
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { get, getting, entity } = useDeviceOrganisation();

    onMounted(() => {
      get(props.deviceOrganisationId);
    });

    watch(() => props.deviceOrganisationId, () => {
      get(props.deviceOrganisationId);
    });

    return {
      getting,
      entity
    };
  }
});
</script>