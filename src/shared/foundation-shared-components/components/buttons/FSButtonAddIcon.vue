<template>
  <FSButton
    icon="mdi-plus-circle-outline"
    variant="icon"
    :color="ColorEnum.Primary"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSButton from "../FSButton.vue";

export default defineComponent({
  name: "FSButtonAddIcon",
  components: {
    FSButton
  },
  setup() {
    return {
      ColorEnum
    };
  }
});
</script>