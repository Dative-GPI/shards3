import { DeviceConnectivityDetails, DeviceConnectivityDetailsDTO } from "../deviceConnectivities/deviceConnectivityDetails";

export class ConnectivityScenarioInfos {
    id: string
    organisationId: string;
    deviceOrganisationId: string;
    deviceOrganisationImageId: string | null;
    deviceOrganisationConnectivity: DeviceConnectivityDetails | null;
    deviceOrganisationCode: string;
    deviceOrganisationLabel: string;
    time: number;
    warnDeviceManager: boolean;
    warnOnReconnection: boolean;
    userOrganisationsIds: string[];

    constructor(params: ConnectivityScenarioInfosDTO) {
        this.id = params.id;
        this.organisationId = params.organisationId;
        this.deviceOrganisationId = params.deviceOrganisationId;
        this.deviceOrganisationImageId = params.deviceOrganisationImageId;
        this.deviceOrganisationConnectivity = params.deviceOrganisationConnectivity ?
            new DeviceConnectivityDetails(params.deviceOrganisationConnectivity) : null;
        this.deviceOrganisationCode = params.deviceOrganisationCode;
        this.deviceOrganisationLabel = params.deviceOrganisationLabel;
        this.time = params.time;
        this.warnDeviceManager = params.warnDeviceManager;
        this.warnOnReconnection = params.warnOnReconnection;
        this.userOrganisationsIds = params.userOrganisationsIds.slice();
    }
}

export interface ConnectivityScenarioInfosDTO {
    id: string;
    organisationId: string;
    deviceOrganisationId: string;
    deviceOrganisationImageId: string | null;
    deviceOrganisationConnectivity: DeviceConnectivityDetailsDTO | null;
    deviceOrganisationCode: string;
    deviceOrganisationLabel: string;
    time: number;
    warnDeviceManager: boolean;
    warnOnReconnection: boolean;
    userOrganisationsIds: string[];
}

export interface ConnectivityScenarioFilters {
    deviceOrganisationId?: string | null;
}