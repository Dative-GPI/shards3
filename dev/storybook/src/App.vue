<template>
  <v-app>
    <v-main v-if="sharedReady && coreReady">
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

import { useCore, useOrganisationId } from "@dative-gpi/foundation-core-services";
import { useShared } from "@dative-gpi/foundation-shared-services";

export default defineComponent({
  name: "App",
  components: {},
  setup() {
    const { ready: sharedReady } = useShared();
    const { ready: coreReady } = useCore();

    const { setOrganisationId } = useOrganisationId();
    
    onMounted(async () => {
      setOrganisationId("dative");
    });

    return {
      sharedReady,
      coreReady
    };
  }
});
</script>
