import { DeviceConnectivityDetails, DeviceConnectivityDetailsDTO } from "../deviceConnectivities/deviceConnectivityDetails";

export class ConnectivityScenarioInfos {
    id: string
    organisationId: string;
    deviceOrganisationId: string;
    deviceOrganisationImageId?: string;
    deviceOrganisationImageBlurHash?: string;
    deviceOrganisationImageHeight?: number;
    deviceOrganisationImageWidth?: number;
    deviceOrganisationConnectivity?: DeviceConnectivityDetails;
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
        this.deviceOrganisationImageBlurHash = params.deviceOrganisationImageBlurHash;
        this.deviceOrganisationImageHeight = params.deviceOrganisationImageHeight;
        this.deviceOrganisationImageWidth = params.deviceOrganisationImageWidth;
        this.deviceOrganisationConnectivity = params.deviceOrganisationConnectivity ? new DeviceConnectivityDetails(params.deviceOrganisationConnectivity) : undefined;
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
    deviceOrganisationImageId?: string;
    deviceOrganisationImageBlurHash?: string;
    deviceOrganisationImageHeight?: number;
    deviceOrganisationImageWidth?: number;
    deviceOrganisationConnectivity?: DeviceConnectivityDetailsDTO;
    deviceOrganisationCode: string;
    deviceOrganisationLabel: string;
    time: number;
    warnDeviceManager: boolean;
    warnOnReconnection: boolean;
    userOrganisationsIds: string[];
}

export interface ConnectivityScenarioFilters {
    deviceOrganisationId?: string;
}