<template>
  <FSLoadTile
    v-if="getting"
    :editable="$props.editable"
    :modelValue="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
  />
  <FSUserOrganisationTileUI
    v-else-if="entity"
    :imageId="entity.imageId"
    :name="entity.name"
    :roleLabel="entity.roleLabel"
    :roleIcon="entity.roleIcon"
    :admin="entity.admin"
    :editable="$props.editable"
    :modelValue="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  />
</template>
  
<script lang="ts">
import { defineComponent, onMounted, watch } from "vue";
  
import { useUserOrganisation } from "@dative-gpi/foundation-core-services/composables";
  
import FSUserOrganisationTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSUserOrganisationTileUI.vue";
import FSLoadTile from "@dative-gpi/foundation-shared-components/components/tiles/FSLoadTile.vue";
  
export default defineComponent({
  name: "FSUserOrganisationTile",
  components: {
    FSUserOrganisationTileUI,
    FSLoadTile
  },
  props: {
    userOrganisationId: {
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
    const { get, getting, entity } = useUserOrganisation();

    onMounted(() => {
      get(props.userOrganisationId);
    });

    watch(() => props.userOrganisationId, () => {
      get(props.userOrganisationId);
    });

    return {
      getting,
      entity
    };
  }
});
</script>