import { GroupInfosDTO } from "@dative-gpi/foundation-core-domain/models";

import { ORGANISATIONS } from "./organisations.mock";
import { IMAGES } from "./images.mock";

export const GROUPS: GroupInfosDTO[] = [{
    id: "1",
    organisationId: ORGANISATIONS[0].id,
    imageId: IMAGES[0].id,
    icon: "mdi-numeric-1-circle",
    code: "number1",
    label: "First group",
    tags: [],
    path: [],
    groupsIds: ["10", "11"],
    deviceOrganisationsIds: ["10", "11", "12"],
    modelsIds: [],
    recursiveGroupsIds: ["10", "11"],
    recursiveDeviceOrganisationsIds: ["10", "11", "12"],
    recursiveModelsIds: []
}, {
    id: "2",
    organisationId: ORGANISATIONS[0].id,
    imageId: IMAGES[0].id,
    icon: "",
    code: "number2",
    label: "Second group",
    tags: [],
    path: [],
    groupsIds: ["20"],
    deviceOrganisationsIds: ["20", "21", "22"],
    modelsIds: [],
    recursiveGroupsIds: ["20", "21", "22"],
    recursiveDeviceOrganisationsIds: ["20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "200", "201"],
    recursiveModelsIds: []
}];