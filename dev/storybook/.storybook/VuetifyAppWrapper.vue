<template>
  <v-app :theme="themeName">
    <v-main v-if="ready">
      <slot name="story"></slot>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

import { useAppLanguageCode, useAppTimeZone } from "@dative-gpi/foundation-shared-services/composables";
import { useFoundationCore, useAppOrganisationId } from "@dative-gpi/foundation-core-services/composables";

export default defineComponent({
  name: "VuetifyAppWrapper",
  props: {
    themeName: String
  },
  setup() {
    const { setOrganisationId } = useAppOrganisationId();
    const { setLanguageCode } = useAppLanguageCode();
    const { setTimeZone } = useAppTimeZone();

    const { ready } = useFoundationCore();

    onMounted(async () => {
      setLanguageCode("FR-fr");
      setOrganisationId("dative");
      setTimeZone({
        id: "Europe/Paris",
        offset: "+01:00"
      });
    });

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