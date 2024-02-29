import { ModelInfosDTO } from "@dative-gpi/foundation-core-domain/models";

import { MANUFACTURERS } from "./manufacturers.mock";
import { IMAGES } from "./images.mock";

export const MODELS: ModelInfosDTO[] = [{
    id: "1",
    manufacturerId: MANUFACTURERS[0].id,
    manufacturerLabel: MANUFACTURERS[0].label,
    imageId: IMAGES[0].id,
    code: "oven.model1",
    label: "Model 1",
    connectable: true
}];