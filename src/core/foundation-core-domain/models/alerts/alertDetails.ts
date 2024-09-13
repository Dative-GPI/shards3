import type { ApplicationScope } from "@/shared/foundation-shared-domain/enums";
import { AlertInfos, type AlertInfosDTO } from "./alertInfos";

export class AlertDetails extends AlertInfos {
  description: string;
  comments: string;
  scenarioId: string;
  scenarioScope: ApplicationScope;

  constructor(params: AlertDetailsDTO) {
    super(params);
    this.comments = params.comments;
    this.description = params.description;
    this.scenarioId = params.scenarioId;
    this.scenarioScope = params.scenarioScope;
  }
}

export interface AlertDetailsDTO extends AlertInfosDTO {
  description: string;
  comments: string;
  scenarioId: string;
  scenarioScope: ApplicationScope;
}