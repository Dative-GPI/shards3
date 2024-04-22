import { OrganisationInfosDTO } from "@dative-gpi/foundation-shared-domain/models";

import { IMAGES } from "./images.mock";

export const ORGANISATIONS: OrganisationInfosDTO[] = [{
    id: "1",
    imageId: IMAGES[0].id,
    label: "Organisation",
    userOrganisationsCount: 15
},
{
    id: "2",
    imageId: IMAGES[0].id,
    label: "Dative",
    userOrganisationsCount: 145
},
{
    id: "3",
    imageId: IMAGES[0].id,
    label: "Bongard",
    userOrganisationsCount: 7
},
{
    id: "4",
    imageId: IMAGES[0].id,
    label: "Organisation 4",
    userOrganisationsCount: 4
},
{
    id: "5",
    imageId: IMAGES[0].id,
    label: "Organisation 5",
    userOrganisationsCount: 9
}];