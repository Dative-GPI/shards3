<template>
  <FSButton
    prependIcon="mdi-delete-outline"
    :label="$tr('ui.common.remove', 'Remove')"
    :color="ColorEnum.Error"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSButton from "../FSButton.vue";

export default defineComponent({
  name: "FSButtonRemove",
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