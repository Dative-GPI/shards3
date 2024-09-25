<template>
  <FSButton
    class="fs-map-layer-button"
    icon="mdi-layers-outline"
    :elevation="true"
    @click="dialog = true"
  />
  <FSDialog
    v-model="dialog"
    width="500px"
    :title="$tr('ui.map.select-layer', 'Select layer')"
    :contained="true"
  >
    <template
      v-slot:body
    >
      <FSRow
        align="center-center"
      >
        <FSImageCard
          v-for="layer in layers"
          :variant="modelValue === layer.name ? 'full' : 'background'"
          :color="modelValue === layer.name ? 'primary' : 'light'"
          :label="layer.label"
          :src="layer.image"
          :key="layer.name"
          @click="onLayerClick(layer.name)"
        />
      </FSRow>
    </template>
  </FSDialog> 
</template>

<script lang="ts">
import { defineComponent, type PropType, ref } from "vue";

import { type MapLayer } from "../../models";

import FSImageCard from "../FSImageCard.vue";
import FSButton from "../FSButton.vue";
import FSDialog from "../FSDialog.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSMapLayerButton",
  components: {
    FSImageCard,
    FSButton,
    FSDialog,
    FSRow
  },
  props: {
    layers: {
      type: Array as PropType<MapLayer[]>,
      required: false,
      default: () => []
    },
    modelValue: {
      type: String,
      required: false,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(_, { emit }) {
    const dialog = ref(false);

    const onLayerClick = (layer: string) => {
      emit("update:modelValue", layer);
      dialog.value = false;
    };

    return {
      dialog,
      onLayerClick
    };
  }
});
</script>