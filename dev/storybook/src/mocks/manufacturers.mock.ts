import type { ManufacturerInfosDTO } from "@dative-gpi/foundation-core-domain/models";

import { IMAGES } from "./images.mock";

export const MANUFACTURERS: ManufacturerInfosDTO[] = [
    {
        id: "1",
        imageId: IMAGES[0].id,
        label: "BakeryOvens"
    },
    {
        id: "2",
        imageId: IMAGES[0].id,
        label: "RDConstruct"
    },
    {
        id: "3",
        imageId: IMAGES[0].id,
        label: "DCorp"
    }
];