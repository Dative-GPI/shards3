import type { AddressDTO } from "@dative-gpi/foundation-shared-domain/models/address";
import { Address } from "@dative-gpi/foundation-shared-domain/models/address";

export class LocationInfos {
    id: string;
    organisationId: string;
    icon: string;
    code: string;
    label: string;
    tags: string[];
    address: Address;
    modelsIds: string[];
    deviceOrganisationsIds: string[];
    deviceOrganisationsCount: number;

    constructor(params: LocationInfosDTO) {
        this.id = params.id;
        this.organisationId = params.organisationId;
        this.icon = params.icon;
        this.code = params.code;
        this.label = params.label;
        this.tags = params.tags.slice();
        this.address = new Address(params.address);
        this.modelsIds = params.modelsIds.slice();
        this.deviceOrganisationsIds = params.deviceOrganisationsIds.slice();
        this.deviceOrganisationsCount = params.deviceOrganisationsCount;
    }
}

export interface LocationInfosDTO {
    id: string;
    organisationId: string;
    icon: string;
    code: string;
    label: string;
    tags: string[];
    address: AddressDTO;
    modelsIds: string[];
    deviceOrganisationsIds: string[];
    deviceOrganisationsCount: number;
}

export interface LocationFilters {
    locationsIds?: string[] | null;
    modelsIds?: string[] | null;
    search?: string | null;
}