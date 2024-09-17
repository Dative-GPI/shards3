<template>
  <v-menu
    :closeOnContentClick="false"
    v-model="menu"
    location="bottom center"
  >
    <template
      #activator="{ props }"
    >
      <FSColorIcon
        class="fs-stopclick"
        :size="$props.size"
        :color="$props.statusGroup.color"
        :padding="$props.padding"
        @click.prevent.stop
        v-bind="props"
      >
        {{ $props.statusGroup.icon }}
      </FSColorIcon>
    </template>
    <FSStatusCard
      :modelStatus="$props.modelStatus"
      :statusGroup="$props.statusGroup"
      @close="menu = false"
    />
  </v-menu>
</template>

<script lang="ts">
import type { PropType} from "vue";
import { defineComponent, ref } from "vue";

import type { FSDeviceStatusGroup, FSModelStatus } from "@dative-gpi/foundation-shared-components/models";

import FSStatusCard from "./FSStatusCard.vue";
import FSColorIcon from "../FSColorIcon.vue";

export default defineComponent({
  name: "FSStatus",
  components: {
    FSStatusCard,
    FSColorIcon
  },
  props: {
    modelStatus: {
      type: Object as PropType<FSModelStatus>,
      required: true
    },
    statusGroup: {
      type: Object as PropType<FSDeviceStatusGroup>,
      required: true
    },
    size: {
      type: [Array, String, Number] as PropType<"s" | "m" | "l" | string[] | number[] | string | number | null>,
      default: "m"
    },
    padding: {
      type: [String, Number] as PropType<string | number>,
      default: "8px"
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