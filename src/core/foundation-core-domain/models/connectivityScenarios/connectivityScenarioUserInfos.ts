
export class ConnectivityScenarioUserInfos  {
    id: string;
    connectivityScenarioId: string;
    userOrganisationId: string;
    timeDelay: number;

    constructor(params: ConnectivityScenarioUserInfosDTO) {
        this.id = params.id;
        this.connectivityScenarioId = params.connectivityScenarioId;
        this.userOrganisationId = params.userOrganisationId;
        this.timeDelay = params.timeDelay;
    }
}

export interface ConnectivityScenarioUserInfosDTO {
  id: string;
  connectivityScenarioId: string;
  userOrganisationId: string;
  timeDelay: number;
}

export interface CreateConnectivityScenarioUserDTO {
  userOrganisationId: string;
  timeDelay: number;
}