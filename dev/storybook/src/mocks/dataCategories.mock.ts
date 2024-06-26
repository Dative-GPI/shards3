import type { DataCategoryInfosDTO } from "@dative-gpi/foundation-core-domain/models";

import { MODELS } from "./models.mock";

export const DATACATEGORIES: DataCategoryInfosDTO[] = [{
    id: "1",
    modelId: MODELS[0].id,
    code: "power",
    label: "Power",
    correlated: false
}, {
    id: "2",
    modelId: MODELS[0].id,
    code: "temperatures",
    label: "Temperatures",
    correlated: true
}, {
    id: "3",
    modelId: MODELS[0].id,
    code: "energies",
    label: "Energies",
    correlated: true
}];