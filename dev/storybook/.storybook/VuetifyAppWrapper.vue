<template>
    <v-app :theme="themeName">
        <v-main>
            <slot name="story"></slot>
        </v-main>
    </v-app>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";

import { useShared } from "@dative-gpi/foundation-shared-services";

export default defineComponent({
  name: "VuetifyAppWrapper",
  props: {
    themeName: String
  },
  setup() {
    const { ready } = useShared();

    return {
      ready
    };
  }
});
</script>

<style>
.v-application__wrap {
    min-height: fit-content;
}
</style>