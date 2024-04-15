<template>
  <FSSimpleIconTileUI
    v-bind="$attrs"
    :iconBackgroundColor="iconBackgroundColor"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import FSSimpleIconTileUI from "./FSSimpleIconTileUI.vue";

export default defineComponent({
  name: "FSFolderTileUI",
  components: {
    FSSimpleIconTileUI
  },
  props: {
    iconBackgroundColor: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  setup(props) {
  }
});
</script>