<template>
  <FSSimpleTileUI
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import FSSimpleTileUI from "./FSSimpleTileUI.vue";

export default defineComponent({
  name: "FSModelTileUI",
  components: {
    FSSimpleTileUI,
  }
});
</script>