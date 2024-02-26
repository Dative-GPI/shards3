<template>
  <v-menu
    v-if="$props.deviceAlert"
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
          variant="fill"
          :color="criticityColor"
          v-bind="props"
        >
          {{ statusIcon }}
        </FSColorIcon>
      </FSBadge>
    </template>
    <FSCard
      :elevation="true"
      :border="false"
    >
      <FSCol
        align="center-center"
        padding="6px 24px"
      >
        <FSCol
          align="center-center"
          gap="12px"
        >
          <FSChip
            :color="criticityColor"
            :prependIcon="statusIcon"
            :label="$props.deviceAlert.label"
          />
          <FSRow
            width="hug"
          >
            <FSText>
              {{ statusLabel }}
            </FSText>
          </FSRow>
        </FSCol>
        <FSRow
          v-if="deviceTimestamp"
          width="hug"
        >
          <FSSpan
            font="text-overline"
          >
            {{ deviceTimestamp }}
          </FSSpan>
        </FSRow>
      </FSCol>
    </FSCard>
  </v-menu>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";

import { useTimeZone, useTranslationsProvider } from "@dative-gpi/foundation-shared-services/composables";
import { AlertStatus, Criticity } from "@dative-gpi/foundation-shared-domain/models";
import { FSDeviceAlert } from "@dative-gpi/foundation-shared-components/models";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSColorIcon from "../FSColorIcon.vue";
import FSBadge from "../FSBadge.vue";
import FSCard from "../FSCard.vue";
import FSChip from "../FSChip.vue";
import FSText from "../FSText.vue";
import FSSpan from "../FSSpan.vue";

export default defineComponent({
  name: "FSWorstAlert",
  components: {
    FSColorIcon,
    FSBadge,
    FSCard,
    FSChip,
    FSText,
    FSSpan
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
    const { epochToLongTimeFormat } = useTimeZone();
    const { $tr } = useTranslationsProvider();

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

    const statusLabel = computed(() => {
      switch (props.deviceAlert?.status) {
        case AlertStatus.Pending:     return $tr("ui.alert-status.pending", "Pending");
        case AlertStatus.Untriggered: return $tr("ui.alert-status.untriggered", "Untriggered");
        case AlertStatus.Unresolved:  return $tr("ui.alert-status.unresolved", "Unresolved");
        case AlertStatus.Resolved:    return $tr("ui.alert-status.resolved", "Resolved");
        case AlertStatus.Expired:     return $tr("ui.alert-status.expired", "Expired");
        case AlertStatus.Triggered:   return $tr("ui.alert-status.triggered", "Triggered");
        case AlertStatus.Abandoned:   return $tr("ui.alert-status.abandoned", "Abandoned");
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

    const deviceTimestamp = computed((): string => {
      if (props.deviceAlert.sourceTimestamp) {
        return epochToLongTimeFormat(props.deviceAlert.sourceTimestamp);
      }
      return "";
    });

    return {
      deviceTimestamp,
      criticityColor,
      statusLabel,
      statusIcon,
      badgeLabel,
      menu
    };
  }
});
</script>