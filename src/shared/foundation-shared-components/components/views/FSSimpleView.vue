<template>
  <FSBaseView
    v-bind="$attrs"
    variant="default"
  >
    <template
      v-for="(_, name) in $slots"
      v-slot:[name]="slotData"
    >
      <slot
        :name="name"
        v-bind="slotData"
      />
    </template>
  </FSBaseView>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import FSBaseView from "./FSBaseView.vue";

export default defineComponent({
  name: "FSEntityView",
  components: {
    FSBaseView
  },
});
</script>