<template>
    <v-app :theme="themeName">
        <v-main v-if="sharedReady && coreReady">
            <slot name="story"></slot>
        </v-main>
    </v-app>
</template>
  
<script lang="ts">
import { defineComponent, onMounted } from "vue";

import { useCore, useOrganisationId } from "@dative-gpi/foundation-core-services";
import { useShared } from "@dative-gpi/foundation-shared-services";

export default defineComponent({
  name: "VuetifyAppWrapper",
  props: {
    themeName: String
  },
  setup() {
    const { ready: sharedReady } = useShared();
    const { ready: coreReady } = useCore();

    const { force: forceOrganisationId } = useOrganisationId();
    
    onMounted(async () => {
      forceOrganisationId("dative");
    });

    return {
      sharedReady,
      coreReady
    };
  }
});
</script>

<style>
.v-application__wrap {
    min-height: fit-content;
}
</style>