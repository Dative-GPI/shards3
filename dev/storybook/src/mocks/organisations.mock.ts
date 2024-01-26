import { OrganisationInfosDTO } from "@dative-gpi/foundation-shared-domain";

import { IMAGES } from "./images.mock";

export const ORGANISATIONS: OrganisationInfosDTO[] = [{
    id: "1",
    imageId: IMAGES[0].id,
    label: "Organisation",
    userOrganisationsCount: 15
}];