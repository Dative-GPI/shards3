import type { ConnectivityScenarioInfosDTO } from "./connectivityScenarioInfos";
import { ConnectivityScenarioInfos } from "./connectivityScenarioInfos";
import type { CreateConnectivityScenarioUserDTO } from "./connectivityScenarioUserInfos";

export class ConnectivityScenarioDetails extends ConnectivityScenarioInfos {
    constructor(params: ConnectivityScenarioDetailsDTO) {
        super(params);
    }
}

export interface ConnectivityScenarioDetailsDTO extends ConnectivityScenarioInfosDTO {
}

export interface UpsertConnectivityScenarioDTO {
    deviceOrganisationsIds: string[];
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