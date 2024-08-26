import type { ModelInfosDTO } from "@dative-gpi/foundation-core-domain/models";

import { MANUFACTURERS } from "./manufacturers.mock";

export const MODELS: ModelInfosDTO[] = [{
    id: "1",
    manufacturerId: MANUFACTURERS[0].id,
    manufacturerLabel: MANUFACTURERS[0].label,
    imageId: "1",
    code: "oven.model1",
    label: "Model 1",
    connectable: true
},{
    id: "2",
    manufacturerId: MANUFACTURERS[0].id,
    manufacturerLabel: MANUFACTURERS[0].label,
    imageId: null,
    code: "oven.model2",
    label: "Model 2",
    connectable: false
}];