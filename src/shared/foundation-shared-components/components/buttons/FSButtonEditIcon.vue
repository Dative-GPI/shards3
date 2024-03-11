<template>
  <FSButton
    icon="mdi-pencil-outline"
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
  name: "FSButtonEditIcon",
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