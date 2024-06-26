<template>
  <v-expansion-panels
    variant="accordion"
  >
    <template
      v-for="(component, index) in getChildren()"
      :key="index"
    >
      <component
        :is="component"
      />
    </template>
  </v-expansion-panels>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { useSlots } from "@dative-gpi/foundation-shared-components/composables";

export default defineComponent({
  name: "FSAccordion",
  setup() {
    const { getChildren } = useSlots();

    return {
      getChildren
    };
  }
});
</script>