<template>
  <FSSimpleIconTileUI
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import FSSimpleIconTileUI from "./FSSimpleIconTileUI.vue";

export default defineComponent({
  name: "FSDashboardShallowTileUI",
  components: {
    FSSimpleIconTileUI
  },
  props: {
  },
  setup(props) {
  }
});
</script>