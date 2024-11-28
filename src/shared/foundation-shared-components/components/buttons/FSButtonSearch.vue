<template>
  <FSButton
    prependIcon="mdi-magnify"
    :label="$tr('ui.common.search', 'Search')"
    :color="ColorEnum.Primary"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSButton from "../FSButton.vue";

export default defineComponent({
  name: "FSButtonSearch",
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