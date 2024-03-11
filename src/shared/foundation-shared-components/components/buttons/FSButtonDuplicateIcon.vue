<template>
  <FSButton
    icon="mdi-content-copy"
    variant="icon"
    :color="ColorEnum.Light"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSButton from "../FSButton.vue";

export default defineComponent({
  name: "FSButtonDuplicateIcon",
  components: {
    FSButton
  },
  setup() {
    return {
      ColorEnum
    }
  }
});
</script>