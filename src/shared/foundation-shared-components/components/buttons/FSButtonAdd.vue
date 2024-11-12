<template>
  <FSButton
    prependIcon="mdi-plus-circle-outline"
    :label="$tr('button.add', 'Add')"
    :color="ColorEnum.Primary"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSButton from "../FSButton.vue";

export default defineComponent({
  name: "FSButtonAdd",
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