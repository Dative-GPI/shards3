<template>
  <v-app
    :theme="themeName"
  >
    <v-main
      v-if="ready"
      style="height:100%"
    >
      <slot
        name="story"
      ></slot>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

import { useAppLanguageCode, useAppTimeZone, useAppLanguages } from "@dative-gpi/foundation-shared-services/composables";
import { useFoundationCore, useAppOrganisationId } from "@dative-gpi/foundation-core-services/composables";

export default defineComponent({
  name: "VuetifyAppWrapper",
  props: {
    themeName: String
  },
  setup() {
    const { setAppOrganisationId } = useAppOrganisationId();
    const { setAppLanguageCode } = useAppLanguageCode();
    const { setAppTimeZone } = useAppTimeZone();
    const { setAppLanguages } = useAppLanguages();

    const { ready } = useFoundationCore();

    onMounted(async () => {
      setAppOrganisationId("dative");
      setAppLanguageCode("FR-fr");
      setAppTimeZone("Europe/Paris");
      setAppLanguages([{
          id: "1",
          label: "French (France)",
          icon: "$france",
          code: "fr-FR"
      }, {
          id: "2",
          label: "English (United States)",
          icon: "$unitedStates",
          code: "en-US"
      }, {
          id: "3",
          label: "Spanish (Spain)",
          icon: "$spain",
          code: "sp-SP"
      }]);
    });

    return {
      ready
    };
  }
});
</script>

<style>
.v-application__wrap {
  min-height: unset!important;
  height: calc(100vh - 32px)!important;
}
</style>