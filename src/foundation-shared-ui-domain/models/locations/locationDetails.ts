import { LocationInfos, LocationInfosDTO } from "./locationInfos";
import { AddressDTO } from "./address";

export class LocationDetails extends LocationInfos {
    description: string;

    constructor(params: LocationDetailsDTO) {
        super(params);

        this.description = params.description;
    }
}

export interface LocationDetailsDTO extends LocationInfosDTO {
    description: string;
}


export interface CreateLocationDTO {
    icon: string;
    code: string;
    label: string;
    description: string;
    tags: string[];
    address?: AddressDTO;
}

export interface UpdateLocationDTO {
    icon: string;
    code: string;
    label: string;
    description: string;
    tags: string[];
    address?: AddressDTO;
}