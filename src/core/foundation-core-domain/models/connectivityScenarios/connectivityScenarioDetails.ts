import { ConnectivityScenarioInfos, ConnectivityScenarioInfosDTO } from "./connectivityScenarioInfos";

export class ConnectivityScenarioDetails extends ConnectivityScenarioInfos {
    constructor(params: ConnectivityScenarioDetailsDTO) {
        super(params);
    }
}

export interface ConnectivityScenarioDetailsDTO extends ConnectivityScenarioInfosDTO {
}

export interface CreateConnectivityScenarioDTO {
    deviceOrganisationId: string;
    time: number;
    warnDeviceManager: boolean;
    warnOnReconnection: boolean;
    userOrganisationsIds: string[];
}

export interface UpdateConnectivityScenarioDTO {
    time: number;
    warnDeviceManager: boolean;
    warnOnReconnection: boolean;
    userOrganisationsIds: string[];
}