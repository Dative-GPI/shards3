<template>
  <FSButton
    prependIcon="mdi-layers-outline"
    :elevation="true"
    @click="dialog = true"
  />
  <FSDialog
    v-model="dialog"
    title="Select Layers"
    width="460px"
  >
    <template
      v-slot:body
    >
      <FSImageCard
        v-for="layer in layers"
        :key="layer.name"
        :label="layer.label"
        :src="layer.image"
        :color="modelValue === layer.name ? 'primary' : 'light'"
        :variant="modelValue === layer.name ? 'full' : 'background'"
        @click="onLayerClick(layer.name)"
      />
    </template>
  </FSDialog> 
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import type { MapLayer } from "../../models";

import FSButton from "../FSButton.vue";
import FSDialog from "../FSDialog.vue";
import FSImageCard from "../FSImageCard.vue";

export default defineComponent({
  name: "FSMapLayerButton",
  components: {
    FSButton,
    FSDialog,
    FSImageCard
  },
  props: {
    layers: {
      type: Array<MapLayer>,
      default: () => []
    },
    modelValue: {
      type: String,
      default: () => ""
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const dialog = ref(false);

    const onLayerClick = (layer: string) => {
      emit("update:modelValue", layer);
      dialog.value = false;
    }

    return {
      onLayerClick,
      dialog
    }
  }
});
</script>