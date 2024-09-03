import type { DashboardEntityPresetTranslationDTO } from "./dashboardEntityPresetTranslation";
import type { EntityType } from "@dative-gpi/foundation-shared-domain/enums";

export interface CreateDashboardEntityPresetDTO {
  hiddenCode: string;
  labelDefault: string;
  singleEntity: boolean;
  EntityType: EntityType;
  entitiesFilters: string;
  entitiesIds: string[];
  translations: DashboardEntityPresetTranslationDTO[];
}