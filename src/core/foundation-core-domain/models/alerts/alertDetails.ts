import type { ApplicationScope } from "@/shared/foundation-shared-domain/enums";
import { AlertInfos, type AlertInfosDTO } from "./alertInfos";

export class AlertDetails extends AlertInfos {
  description: string;
  comments: string;
  deprecatedScenarioId: string;
  scope: ApplicationScope;

  constructor(params: AlertDetailsDTO) {
    super(params);
    this.comments = params.comments;
    this.description = params.description;
    this.deprecatedScenarioId = params.deprecatedScenarioId;
    this.scope = params.scope;
  }
}

export interface AlertDetailsDTO extends AlertInfosDTO {
  description: string;
  comments: string;
  deprecatedScenarioId: string;
  scope: ApplicationScope;
}