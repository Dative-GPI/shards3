<template>
  <v-menu
    :closeOnContentClick="false"
    v-model="menu"
  >
    <template #activator="{ props }">
      <FSColorIcon
        size="m"
        variant="full"
        :color="$props.deviceConnectivity.color"
        v-bind="props"
      >
        {{ $props.deviceConnectivity.icon }}
      </FSColorIcon>
    </template>
    <FSConnectivityCard
      :deviceConnectivity="$props.deviceConnectivity"
    />
  </v-menu>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";

import { FSDeviceConnectivity } from "@dative-gpi/foundation-shared-components/models";

import FSConnectivityCard from "./FSConnectivityCard.vue";
import FSColorIcon from "../FSColorIcon.vue";

export default defineComponent({
  name: "FSConnectivity",
  components: {
    FSConnectivityCard,
    FSColorIcon
  },
  props: {
    deviceConnectivity: {
      type: Object as PropType<FSDeviceConnectivity>,
      required: true
    }
  },
  setup() {
    const menu = ref(false);

    return {
      menu
    };
  }
});
</script>