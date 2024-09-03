import type { DashboardType } from "@dative-gpi/foundation-shared-domain/enums";

export interface ChangeOrganisationDashboardDTO {
    mainDashboardId: string | null;
    mainDashboardType: DashboardType;
}