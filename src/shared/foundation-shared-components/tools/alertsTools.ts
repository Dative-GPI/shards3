import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import { AlertStatus, Criticity } from "@dative-gpi/foundation-shared-domain/enums";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models"

const { $tr } = useTranslationsProvider();

export const AlertTools = {
  statusIcon(value: AlertStatus): string {
    switch (value) {
      case AlertStatus.Pending: return "mdi-timer-outline";
      case AlertStatus.Untriggered: return "mdi-timer-off-outline";
      case AlertStatus.Unresolved: return "mdi-alert-circle-outline";
      case AlertStatus.Resolved: return "mdi-check-circle-outline";
      case AlertStatus.Expired: return "mdi-clock-outline";
      case AlertStatus.Triggered: return "mdi-alert-circle-outline";
      case AlertStatus.Abandoned: return "mdi-cancel"
      default: return "";
    }
  },
  statusLabel(value: AlertStatus): string {
    switch (value) {
      case AlertStatus.Pending: return $tr("ui.alert.pending", "Pending");
      case AlertStatus.Untriggered: return $tr("ui.alert.untriggered", "Untriggered");
      case AlertStatus.Unresolved: return $tr("ui.alert.unresolved", "Unresolved");
      case AlertStatus.Resolved: return $tr("ui.alert.resolved", "Resolved");
      case AlertStatus.Expired: return $tr("ui.alert.expired", "Expired");
      case AlertStatus.Triggered: return $tr("ui.alert.triggered", "Triggered");
      case AlertStatus.Abandoned: return $tr("ui.alert.abandoned", "Abandoned");
      default: return "";
    }
  },
  criticityColor(value: Criticity): ColorEnum {
    switch (value) {
      case Criticity.Warning: return ColorEnum.Warning;
      case Criticity.Error: return ColorEnum.Error;
      case Criticity.Information: return ColorEnum.Primary;
      default: return ColorEnum.Light;
    }
  },
  criticityIcon(value: Criticity): string {
    switch (value) {
      case Criticity.Warning: return "mdi-alert-outline";
      case Criticity.Error: return "mdi-alert-circle-outline";
      default: return "mdi-information-outline";
    }
  },
  criticityLabel(value: Criticity): string {
    switch (value) {
      case Criticity.Warning: return $tr("ui.alert.warning", "Warning");
      case Criticity.Error: return $tr("ui.alert.error", "Error");
      default: return $tr("ui.alert.information", "Information");
    }
  }
}