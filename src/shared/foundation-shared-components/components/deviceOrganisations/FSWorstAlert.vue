<template>
  <v-menu
    :closeOnContentClick="false"
    v-model="menu"
  >
    <template #activator="{ props }">
      <FSBadge
        :content="badgeLabel"
        :color="criticityColor"
      >
        <FSColorIcon
          size="m"
          variant="full"
          :color="criticityColor"
          v-bind="props"
        >
          {{ statusIcon }}
        </FSColorIcon>
      </FSBadge>
    </template>
    <FSWorstAlertCard
      :deviceAlert="deviceAlert"
    />
  </v-menu>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";

import { AlertStatus, Criticity } from "@dative-gpi/foundation-shared-domain/models";
import { FSDeviceAlert } from "@dative-gpi/foundation-shared-components/models";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

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
    deviceAlert: {
      type: Object as PropType<FSDeviceAlert>,
      required: true
    },
    deviceAlerts: {
      type: Number,
      required: false,
      default: 0
    }
  },
  setup(props) {
    const menu = ref(false);

    const criticityColor = computed(() => {
      switch (props.deviceAlert?.criticity) {
        case Criticity.Error: return ColorEnum.Error;
        case Criticity.Warning: return ColorEnum.Warning;
        default: return ColorEnum.Primary;
      }
    });

    const statusIcon = computed(() => {
      switch (props.deviceAlert?.status) {
        case AlertStatus.Pending:     return "mdi-timer-outline";
        case AlertStatus.Untriggered: return "mdi-timer-off-outline";
        case AlertStatus.Unresolved:  return "mdi-alert-circle-outline";
        case AlertStatus.Resolved:    return "mdi-check-circle-outline";
        case AlertStatus.Expired:     return "mdi-clock-outline";
        case AlertStatus.Triggered:   return "mdi-alert-circle-outline";
        case AlertStatus.Abandoned:   return "mdi-cancel"
        default:                      return "";
      }
    });

    const badgeLabel = computed((): string | null => {
      if (props.deviceAlerts < 1) {
        return null;
      }
      if (props.deviceAlerts > 8) {
        return "9+";
      }
      return (props.deviceAlerts + 1).toString();
    });

    return {
      criticityColor,
      statusIcon,
      badgeLabel,
      menu
    };
  }
});
</script>