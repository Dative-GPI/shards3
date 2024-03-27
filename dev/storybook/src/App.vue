<template>
  <v-app>
    <v-main v-if="ready" />
  </v-app>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

import { useCore, useOrganisationId } from "@dative-gpi/foundation-core-services/composables";
import { useShared } from "@dative-gpi/foundation-shared-services/composables";

export default defineComponent({
  name: "App",
  components: {},
  setup() {
    const { setOrganisationId } = useOrganisationId();

    const ready = ref(false);
    
    onMounted(async () => {
      await useShared();
      await useCore();
      setOrganisationId("dative");
      ready.value = true;
    });

    return {
      ready
    };
  }
});
</script>
