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
    <template v-slot:body>
      <FSImageCard
        v-for="layer in layers"
        :key="layer"
        :label="layer"
        :src="imageUrl(layer)"
        :color="modelValue === layer ? 'primary' : 'light'"
        :variant="modelValue === layer ? 'full' : 'background'"
        :editable="modelValue !== layer"
        @click="onLayerClick(layer)"
      />
    </template>
  </FSDialog> 
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

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
      type: Array<string>,
      default: () => []
    },
    modelValue: {
      type: String,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const dialog = ref(false);

    const onLayerClick = (layer: string) => {
      emit("update:modelValue", layer);
      dialog.value = false;
    }

    const imageUrl = (layer: string) => {
      const strPath = `../../assets/images/map/${layer}.png`
      return new URL(strPath, import.meta.url).href
    }

    return {
      onLayerClick,
      dialog,
      imageUrl
    }
  }
});
</script>