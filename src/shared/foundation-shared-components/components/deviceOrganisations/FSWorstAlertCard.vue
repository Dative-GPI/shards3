<template>
  <FSCard
    padding="2px 2px 8px 2px"
    :elevation="true"
    :border="false"
  >
    <FSCol
      align="center-center"
    >
      <FSCol
        align="center-center"
        gap="0px"
      >
        <FSRow
          align="center-right"
        >
          <FSButton
            icon="mdi-close"
            variant="icon"
            @click="$emit('close')"
          />
        </FSRow>
        <FSCol
          align="center-center"
          padding="0px 24px"
          gap="12px"
        >
          <FSChip
            :label="$props.deviceAlert.label"
            :prependIcon="statusIcon"
            :color="criticityColor"
          />
          <FSRow
            width="hug"
          >
            <FSText>
              {{ statusLabel }}
            </FSText>
          </FSRow>
        </FSCol>
      </FSCol>
      <FSRow
        v-if="deviceTimestamp"
        padding="0px 24px"
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
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import type { FSDeviceAlert} from "@dative-gpi/foundation-shared-components/models";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { AlertStatus, Criticity } from "@dative-gpi/foundation-shared-domain/models";
import { useAppTimeZone } from "@dative-gpi/foundation-shared-services/composables";

import FSButton from "../FSButton.vue";
import FSCard from "../FSCard.vue";
import FSChip from "../FSChip.vue";
import FSText from "../FSText.vue";
import FSSpan from "../FSSpan.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSWorstAlertCard",
  components: {
    FSButton,
    FSCard,
    FSChip,
    FSText,
    FSSpan,
    FSCol,
    FSRow
  },
  props: {
    deviceAlert: {
      type: Object as PropType<FSDeviceAlert>,
      required: true
    }
  },
  emits: ["close"],
  setup(props) {
    const { epochToLongTimeFormat } = useAppTimeZone();
    const { $tr } = useTranslationsProvider();

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
      statusIcon
    };
  }
});
</script>