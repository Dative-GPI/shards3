import type { EntityType } from "@dative-gpi/foundation-shared-domain/enums";

export interface CreateDashboardShallowEntityPresetDTO {
  hiddenCode: string;
  singleEntity: boolean;
  EntityType: EntityType;
  entitiesFilters: string;
  entitiesIds: string[];
}