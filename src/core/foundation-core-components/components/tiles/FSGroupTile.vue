<template>
  <FSLoadTile
    v-if="getting"
    :editable="$props.editable"
    :modelValue="modelValue"
    @update:modelValue="(value) => $emit('update:modelValue', value)"
  />
  <FSGroupTileUI
    v-else-if="entity"
    :imageId="entity.imageId"
    :label="entity.label"
    :code="entity.code"
    :recursiveGroupsIds="entity.recursiveGroupsIds"
    :recursiveDeviceOrganisationsIds="entity.recursiveDeviceOrganisationsIds"
    :editable="$props.editable"
    :modelValue="modelValue"
    @update:modelValue="(value) => $emit('update:modelValue', value)"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted, toRefs } from "vue";

import FSGroupTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSGroupTileUI.vue";
import FSLoadTile from "@dative-gpi/foundation-shared-components/components/FSLoadTile.vue";

import { useGroup } from "@dative-gpi/foundation-core-services/composables";

export default defineComponent({
  name: "FSGroupTile",
  components: {
    FSGroupTileUI,
    FSLoadTile
  },
  props: {
    groupId: {
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
    const { groupId } = toRefs(props);

    const { get, getting, entity,  } = useGroup();

    onMounted(() => {
      get(groupId.value);
    });

    return {
      getting,
      entity
    };
  }
});
</script>