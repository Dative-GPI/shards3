import { ModelStatusInfosDTO } from "@dative-gpi/foundation-core-domain/models";

import { DATADEFINITIONS } from "./dataDefinitions.mock";
import { DATACATEGORIES } from "./dataCategories.mock";
import { MODELS } from "./models.mock";
  
export const MODELSTATUSES: ModelStatusInfosDTO[] = [{
    id: "1",
    modelId: MODELS[0].id,
    dataCategoryId: DATACATEGORIES[0].id,
    dataCategoryLabel: DATACATEGORIES[0].label,
    dataDefinitionId: DATADEFINITIONS[0].id,
    dataDefinitionLabel: DATADEFINITIONS[0].label,
    label: "Status",
    inline: true,
    index: 0,
    lifetime: 24 * 3600,
    timeToLive: 7 * 24 * 3600,
    showDefault: true,
    iconDefault: "mdi-power-standby",
    colorDefault: "#E3E3E3"
}, {
    id: "2",
    modelId: MODELS[0].id,
    dataCategoryId: DATACATEGORIES[1].id,
    dataCategoryLabel: DATACATEGORIES[1].label,
    dataDefinitionId: DATADEFINITIONS[2].id,
    dataDefinitionLabel: DATADEFINITIONS[2].label,
    groupById: DATADEFINITIONS[1].id,
    groupByLabel: DATADEFINITIONS[1].label,
    label: "Temperature",
    inline: false,
    index: 0,
    lifetime: 24 * 3600,
    timeToLive: 7 * 24 * 3600,
    showDefault: false
}, {
    id: "3",
    modelId: MODELS[0].id,
    dataCategoryId: DATACATEGORIES[2].id,
    dataCategoryLabel: DATACATEGORIES[2].label,
    dataDefinitionId: DATADEFINITIONS[4].id,
    dataDefinitionLabel: DATADEFINITIONS[4].label,
    groupById: DATADEFINITIONS[3].id,
    groupByLabel: DATADEFINITIONS[3].label,
    label: "Energy",
    inline: false,
    index: 1,
    lifetime: 24 * 3600,
    timeToLive: 7 * 24 * 3600,
    showDefault: true,
    iconDefault: "mdi-power-plug",
    colorDefault: "#E3E3E3"
}];