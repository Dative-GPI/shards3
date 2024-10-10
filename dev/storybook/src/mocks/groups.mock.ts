import type { GroupInfosDTO } from "@dative-gpi/foundation-core-domain/models";

import { ORGANISATIONS } from "./organisations.mock";

const getPath = (id: string) => {
    switch (id) {
        case "10": return [{
            id: "1",
            label: "Group 1",
            index: 0
        }];
        case "11": return [{
            id: "1",
            label: "Group 1",
            index: 0
        }];
        case "12": return [{
            id: "1",
            label: "Group 1",
            index: 0
        }, {
            id: "10",
            label: "Group 10",
            index: 1
        }];
        case "13": return [{
            id: "1",
            label: "Group 1",
            index: 0
        }, {
            id: "10",
            label: "Group 10",
            index: 1
        }, {
            id: "12",
            label: "Group 12",
            index: 2
        }];
        case "15": return [{
            id: "2",
            label: "Group 2",
            index: 0
        }];
        default: return [];
    }
}

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

export const GROUPS: GroupInfosDTO[] = Array.from(Array(80).keys()).map(i => ({
    id: (i + 1).toString(),
    organisationId: ORGANISATIONS[0].id,
    imageId: null,
    icon: `mdi-numeric-${(i + 1)}-circle`,
    code: `number.${(i + 1)}`,
    label: `Group ${(i + 1)}`,
    tags: [...Array.from(Array(i).keys()).map(j => `tag-${j}`)],
    path: getPath((i + 1).toString()),
    groupsIds: [],
    deviceOrganisationsIds: [],
    modelsIds: [],
    recursiveGroupsIds: [],
    recursiveDeviceOrganisationsIds: [],
    recursiveModelsIds: [],
    parentId: getParentId((i + 1).toString())
}));