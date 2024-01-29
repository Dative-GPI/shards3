<template>
  <FSLoadTile
    v-if="getting"
    :editable="$props.editable"
    :modelValue="modelValue"
    @update:modelValue="(value) => $emit('update:modelValue', value)"
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
    :modelValue="modelValue"
    @update:modelValue="(value) => $emit('update:modelValue', value)"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted, toRefs } from "vue";

import FSDeviceOrganisationTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSDeviceOrganisationTileUI.vue";
import FSLoadTile from "@dative-gpi/foundation-shared-components/components/FSLoadTile.vue";

import { useDeviceOrganisation } from "@dative-gpi/foundation-core-services/composables";

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
      }
    },
    setup(props) {
      const { deviceOrganisationId } = toRefs(props);

      const { get, getting, entity,  } = useDeviceOrganisation();

      onMounted(() => {
        get(deviceOrganisationId.value);
      });

      return {
        getting,
        entity
      };
    }
});
</script>