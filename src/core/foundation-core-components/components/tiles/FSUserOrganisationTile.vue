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
      :name="name"
      :roleLabel="entity.roleLabel"
      :roleIcon="entity.roleIcon"
      :editable="$props.editable"
      :modelValue="modelValue"
      @update:modelValue="(value) => $emit('update:modelValue', value)"
      v-bind="$attrs"
    />
  </template>
  
<script lang="ts">
import { computed, defineComponent, onMounted, watch } from "vue";
  
import { useUserOrganisation } from "@dative-gpi/foundation-core-services/composables";
  
import FSUserOrganisationTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSUserOrganisationTileUI.vue";
import FSLoadTile from "@dative-gpi/foundation-shared-components/components/tiles/FSLoadTile.vue";
import { UserType } from "@dative-gpi/foundation-core-domain/models";
  
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

    const name = computed((): string => {
      if (entity.value) {
        switch (entity.value.userType) {
          case UserType.User: return entity.value.name;
          default: return entity.value.label;
        }
      }
      return "";
    });

    onMounted(() => {
      get(props.userOrganisationId);
    });

    watch(() => props.userOrganisationId, () => {
      get(props.userOrganisationId);
    });

    return {
      getting,
      entity,
      name
    };
  }
});
</script>