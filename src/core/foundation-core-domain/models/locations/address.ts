export class Address {
    placeId: string;
    placeLabel: string;
    formattedAddress: string;
    locality: string;
    country: string;
    latitude: number;
    longitude: number;

    constructor(params: AddressDTO) {
        this.placeId = params.placeId;
        this.placeLabel = params.placeLabel;
        this.formattedAddress = params.formattedAddress;
        this.locality = params.locality;
        this.country = params.country;
        this.latitude = params.latitude;
        this.longitude = params.longitude;
    }
}

export interface AddressDTO {
    placeId: string;
    placeLabel: string;
    formattedAddress: string;
    locality: string;
    country: string;
    latitude: number;
    longitude: number;
}

export interface Place {
    id: string;
    label: string;
}