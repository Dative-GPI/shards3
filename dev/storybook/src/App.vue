<template>
  <v-app>
    <v-main v-if="ready">
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { useShared } from "@dative-gpi/foundation-shared-services";

export default defineComponent({
  name: "App",
  components: {},
  setup() {
    const { ready } = useShared();

    return {
      ready
    };
  }
});
</script>
