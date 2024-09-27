<template>
  <v-menu
    :closeOnContentClick="false"
    v-model="menu"
    location="bottom center"
  >
    <template
      #activator="{ props }"
    >
      <FSBadge
        :content="badgeLabel"
        :color="AlertTools.criticityColor($props.deviceWorstAlert.criticity)"
      >
        <FSColorIcon
          class="fs-stopclick"
          :padding="$props.padding"
          :color="AlertTools.criticityColor($props.deviceWorstAlert.criticity)"
          :size="$props.size"
          @click.prevent.stop
          v-bind="props"
        >
          {{ AlertTools.statusIcon($props.deviceWorstAlert.status) }}
        </FSColorIcon>
      </FSBadge>
    </template>
    <FSWorstAlertCard
      :deviceAlert="deviceWorstAlert"
      :alertTo="$props.alertTo"
      @close="menu = false"
    />
  </v-menu>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, ref } from "vue";

import { type FSDeviceAlert } from "@dative-gpi/foundation-shared-components/models";
import { AlertTools } from "@dative-gpi/foundation-shared-components/tools";

import FSWorstAlertCard from "./FSWorstAlertCard.vue";
import FSColorIcon from "../FSColorIcon.vue";
import FSBadge from "../FSBadge.vue";

export default defineComponent({
  name: "FSWorstAlert",
  components: {
    FSWorstAlertCard,
    FSColorIcon,
    FSBadge
  },
  props: {
    deviceWorstAlert: {
      type: Object as PropType<FSDeviceAlert>,
      required: true
    },
    deviceAlerts: {
      type: Array as PropType<FSDeviceAlert[]>,
      required: false,
      default: () => []
    },
    alertTo: {
      type: Function,
      required: false,
      default: null
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
  setup(props) {
    const menu = ref(false);

    const badgeLabel = computed((): string | null => {
      if (!props.deviceAlerts || props.deviceAlerts.length < 1) {
        return null;
      }
      if (props.deviceAlerts.length > 9) {
        return "9+";
      }
      return props.deviceAlerts.length.toString();
    });

    return {
      AlertTools,
      badgeLabel,
      menu
    };
  }
});
</script>