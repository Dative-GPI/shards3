import { ConnectivityScenarioInfos, ConnectivityScenarioInfosDTO } from "./connectivityScenarioInfos";
import { CreateConnectivityScenarioUserDTO } from "./connectivityScenarioUserInfos";

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
    notifTimeByUser: boolean;
    connectivityScenarioUsers: CreateConnectivityScenarioUserDTO[];
}

export interface UpdateConnectivityScenarioDTO {
    time: number;
    warnDeviceManager: boolean;
    warnOnReconnection: boolean;
    notifTimeByUser: boolean;
    connectivityScenarioUsers: CreateConnectivityScenarioUserDTO[];
}