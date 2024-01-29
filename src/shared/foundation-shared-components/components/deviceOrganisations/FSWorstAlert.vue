<template>
  <FSTooltip
    v-if="$props.deviceAlert"
  >
    <template #activator="{ props }">
      <FSBadge
        :content="badgeLabel"
        :bordered="true"
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
    <FSCard>
      <FSCol>
        <FSCol
          align="center-center"
          gap="2"
        >
          <FSRow
            width="hug"
          >
            <FSIcon
              size="m"
              :color="criticityColor"
            >
              {{ statusIcon }}
            </FSIcon>
            <FSText
              font="text-button"
              :color="criticityColor"
            >
              {{ $props.deviceAlert.label }}
            </FSText>
          </FSRow>
          <FSSpan>
            {{ statusLabel }}
          </FSSpan>
        </FSCol>
        <template v-if="cloudTimestamp || deviceTimestamp">
          <FSDivider />
          <FSCol
            align="center-center"
            gap="2"
          >
            <FSRow
              v-if="cloudTimestamp"
              width="hug"
            >
              <FSIcon>
                mdi-cloud-outline
              </FSIcon>
              <FSSpan>
                {{ cloudTimestamp }}
              </FSSpan>
            </FSRow>
            <FSRow
              v-if="deviceTimestamp"
              width="hug"
            >
              <FSIcon>
                mdi-widgets-outline
              </FSIcon>
              <FSSpan>
                {{ deviceTimestamp }}
              </FSSpan>
            </FSRow>
          </FSCol>
        </template>
      </FSCol>
    </FSCard>
  </FSTooltip>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from "vue";

import { useTimeZone, useTranslationsProvider } from "@dative-gpi/foundation-shared-services/composables";
import { AlertStatus, Criticity } from "@dative-gpi/foundation-shared-domain/models";
import { FSDeviceAlert } from "@dative-gpi/foundation-shared-components/models";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSColorIcon from "../FSColorIcon.vue";
import FSTooltip from "../FSTooltip.vue";
import FSDivider from "../FSDivider.vue";
import FSBadge from "../FSBadge.vue";
import FSIcon from "../FSIcon.vue";
import FSCard from "../FSCard.vue";
import FSText from "../FSText.vue";
import FSSpan from "../FSSpan.vue";

export default defineComponent({
  name: "FSWorstAlert",
  components: {
    FSColorIcon,
    FSTooltip,
    FSDivider,
    FSBadge,
    FSIcon,
    FSCard,
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
    const { deviceAlert, deviceAlerts } = toRefs(props);

    const { epochToLongFormat } = useTimeZone();
    const { $tr } = useTranslationsProvider();

    const criticityColor = computed(() => {
      switch (deviceAlert.value?.criticity) {
        case Criticity.Error: return ColorEnum.Error;
        case Criticity.Warning: return ColorEnum.Warning;
        default: return ColorEnum.Primary;
      }
    });

    const statusIcon = computed(() => {
      switch (deviceAlert.value?.status) {
        case AlertStatus.Pending: return "mdi-timer-outline";
        case AlertStatus.Untriggered: return "mdi-timer-off-outline";
        case AlertStatus.Unresolved: return "mdi-alert-circle-outline";
        case AlertStatus.Resolved: return "mdi-check-circle-outline";
        case AlertStatus.Expired: return "mdi-clock-outline";
        case AlertStatus.Triggered: return "mdi-alert-circle-outline";
        case AlertStatus.Abandoned: return "mdi-cancel"
        default: return "";
      }
    });

    const statusLabel = computed(() => {
      switch (deviceAlert.value?.status) {
        case AlertStatus.Pending: return $tr("ui.shared.alert.pending", "Pending");
        case AlertStatus.Untriggered: return $tr("ui.shared.alert.untriggered", "Untriggered");
        case AlertStatus.Unresolved: return $tr("ui.shared.alert.unresolved", "Unresolved");
        case AlertStatus.Resolved: return $tr("ui.shared.alert.resolved", "Resolved");
        case AlertStatus.Expired: return $tr("ui.shared.alert.expired", "Expired");
        case AlertStatus.Triggered: return $tr("ui.shared.alert.triggered", "Triggered");
        case AlertStatus.Abandoned: return $tr("ui.shared.alert.abandoned", "Abandoned");
        default: return "";
      }
    });

    const badgeLabel = computed((): string | null => {
      if (deviceAlerts.value < 1) {
        return null;
      }
      if (deviceAlerts.value > 8) {
        return "9+";
      }
      return (deviceAlerts.value + 1).toString();
    })

    const cloudTimestamp = computed((): string => {
      if (deviceAlert.value.enqueuedTimestamp) {
        return epochToLongFormat(deviceAlert.value.enqueuedTimestamp);
      }
      return "";
    });

    const deviceTimestamp = computed((): string => {
      if (deviceAlert.value.sourceTimestamp) {
        return epochToLongFormat(deviceAlert.value.sourceTimestamp);
      }
      return "";
    });

    return {
      criticityColor,
      statusIcon,
      statusLabel,
      badgeLabel,
      cloudTimestamp,
      deviceTimestamp
    };
  }
});
</script>