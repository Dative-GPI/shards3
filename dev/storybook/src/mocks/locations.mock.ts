import { LocationInfosDTO } from "@dative-gpi/foundation-core-domain/models";

export const LOCATIONS: LocationInfosDTO[] = [{
    id: "1",
    organisationId: "1",
    code: "location.1",
    icon: "mdi-numeric-1-circle-outline",
    label: "Location 1",
    tags: [],
    address: {
        placeId: "1",
        placeLabel: "Address 1",
        formattedAddress: "Address 1",
        locality: "",
        country: "",
        latitude: 45,
        longitude: 9
    },
    modelsIds: [],
    deviceOrganisationsIds: [],
    deviceOrganisationsCount: 0
},
{
    id: "2",
    organisationId: "1",
    code: "location.2",
    icon: "mdi-numeric-2-circle-outline",
    label: "Location 2",
    tags: [],
    address: {
        placeId: "2",
        placeLabel: "Address 2",
        formattedAddress: "Address 2",
        locality: "",
        country: "",
        latitude: 45,
        longitude: 9
    },
    modelsIds: [],
    deviceOrganisationsIds: [],
    deviceOrganisationsCount: 0
},
{
    id: "3",
    organisationId: "1",
    code: "location.3",
    icon: "mdi-numeric-3-circle-outline",
    label: "Location 3",
    tags: [],
    address: {
        placeId: "3",
        placeLabel: "Address 3",
        formattedAddress: "Address 3",
        locality: "",
        country: "",
        latitude: 45,
        longitude: 9
    },
    modelsIds: [],
    deviceOrganisationsIds: [],
    deviceOrganisationsCount: 0
}];