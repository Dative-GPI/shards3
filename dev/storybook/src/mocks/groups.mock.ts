import type { GroupInfosDTO } from "@dative-gpi/foundation-core-domain/models";

import { ORGANISATIONS } from "./organisations.mock";

const getParentId = (id: string) => {
    switch (id) {
        case "10": return "1";
        case "11": return "1";
        case "12": return "10";
        case "13": return "12";
        case "15": return "2";
        default: return null;
    }
}

export const GROUPS: GroupInfosDTO[] = Array.from(Array(15).keys()).map(i => ({
    id: i.toString(),
    organisationId: ORGANISATIONS[0].id,
    imageId: "1",
    icon: `mdi-numeric-${i}-circle`,
    code: `number.${i}`,
    label: `Group ${i}`,
    tags: [...Array.from(Array(i).keys()).map(j => `tag-${j}`)],
    path: [],
    groupsIds: [],
    deviceOrganisationsIds: [],
    modelsIds: [],
    recursiveGroupsIds: [],
    recursiveDeviceOrganisationsIds: [],
    recursiveModelsIds: [],
    parentId: getParentId(i.toString())
}));