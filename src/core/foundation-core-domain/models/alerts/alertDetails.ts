import { AlertInfos, type AlertInfosDTO } from "./alertInfos";

export class AlertDetails extends AlertInfos {
  description: string;
  comments: string;
  scenarioOrganisationsIds: string[];
  scenarioOrganisationTypesIds: string[];

  constructor(params: AlertDetailsDTO) {
    super(params);
    this.comments = params.comments;
    this.description = params.description;
    this.scenarioOrganisationsIds = params.scenarioOrganisationsIds;
    this.scenarioOrganisationTypesIds = params.scenarioOrganisationTypesIds;
  }
}

export interface AlertDetailsDTO extends AlertInfosDTO {
  description: string;
  comments: string;
  scenarioOrganisationsIds: string[];
  scenarioOrganisationTypesIds: string[];
}