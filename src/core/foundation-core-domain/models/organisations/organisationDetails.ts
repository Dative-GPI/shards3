import type { DashboardType } from "@dative-gpi/foundation-shared-domain/models";

export interface ChangeOrganisationDashboardDTO {
    mainDashboardId: string | null;
    mainDashboardType: DashboardType;
}