import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { DashboardType } from "@dative-gpi/foundation-shared-domain/models"

const { $tr } = useTranslationsProvider();

export const dashboardTypeLabel = (type: DashboardType): string => {
  switch (type) {
    case DashboardType.None:             return $tr("ui.dashboard-type.none", "None");
    case DashboardType.Organisation:
    case DashboardType.Shallow:          return $tr("ui.dashboard-type.organisation", "Custom");
    case DashboardType.OrganisationType: return $tr("ui.dashboard-type.organisation-type", "Shared");
  }
};

export const dashboardTypeColor = (type: DashboardType): ColorBase => {
  switch (type) {
    case DashboardType.None:             return ColorEnum.Error;
    case DashboardType.Organisation:
    case DashboardType.Shallow:          return ColorEnum.Primary;
    case DashboardType.OrganisationType: return ColorEnum.Warning;
  }
};