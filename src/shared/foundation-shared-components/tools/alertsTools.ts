import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import { AlertStatus, Criticity } from "@dative-gpi/foundation-shared-domain/enums";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models"
import { getTimeBestString } from "../utils";

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
      case AlertStatus.Pending: return $tr("ui.alert-status.pending", "Pending");
      case AlertStatus.Untriggered: return $tr("ui.alert-status.untriggered", "Untriggered");
      case AlertStatus.Unresolved: return $tr("ui.alert-status.unresolved", "Unresolved");
      case AlertStatus.Resolved: return $tr("ui.alert-status.resolved", "Resolved");
      case AlertStatus.Expired: return $tr("ui.alert-status.expired", "Expired");
      case AlertStatus.Triggered: return $tr("ui.alert-status.triggered", "Triggered");
      case AlertStatus.Abandoned: return $tr("ui.alert-status.abandoned", "Abandoned");
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

export const prettyDuration = (n: number) => {
  const day = Math.floor(n / 24 / 60 / 60);
  const hours = Math.floor((n - day * 24 * 60 * 60) / 3600);
  const minutes = Math.floor((n - day * 24 * 60 * 60 - hours * 60 * 60) / 60);
  const seconds = Math.floor(n - day * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60);

  return day > 0 ?
    `${getTimeBestString(day * 24 * 60 * 60)} ${getTimeBestString(hours * 60 * 60)} ${getTimeBestString(minutes * 60)} ${getTimeBestString(seconds)}`
    : hours > 0
      ? `${getTimeBestString(hours * 60 * 60)} ${getTimeBestString(minutes * 60)} ${getTimeBestString(seconds)}`
      : `${getTimeBestString(minutes * 60)} ${getTimeBestString(seconds)}`;
};