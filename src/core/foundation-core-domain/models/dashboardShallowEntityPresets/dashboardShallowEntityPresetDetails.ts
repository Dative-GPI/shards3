import type { EntityType } from "@dative-gpi/foundation-shared-domain/enums";

export interface CreateDashboardShallowEntityPresetDTO {
  hiddenCode: string;
  singleEntity: boolean;
  entityType: EntityType;
  entitiesFilters: string;
  entitiesIds: string[];
}