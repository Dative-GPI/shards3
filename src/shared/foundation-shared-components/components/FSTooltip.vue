<template>
  <v-tooltip
    class="fs-tooltip"
    location="top"
  >
    <template #activator="{ props }">
      <slot name="activator" v-bind="props" />
    </template>
    <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
      <slot :name="name" v-bind="slotData" />
    </template>
  </v-tooltip>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FSTooltip"
});
</script>