import type { FolderDetailsDTO } from "@dative-gpi/foundation-core-domain/models";

export const FOLDERS: FolderDetailsDTO[] = [
    {
        id: "1",
        label: "Folder 1",
        code: "code 1",
        colors: ["#FF0000"],
        icon: "mdi-folder-outline",
        path: [],
        tags: ["tag 1"],
        organisationId: "1",
        imageId: "1",
        parentId: null,
        parentLabel: null,
        parentIcon: null
    },
    {
        id: "2",
        label: "Folder 2",
        code: "code 2",
        colors: ["#FF0000", "#00FF00", "#0000FF"],
        icon: "mdi-folder-outline",
        path: [],
        tags: ["tag 2"],
        organisationId: "1",
        imageId: null,
        parentId: null,
        parentLabel: null,
        parentIcon: null
    },
    {
        id: "3",
        label: "Folder 3",
        code: "code 3",
        colors: [],
        icon: "mdi-folder-outline",
        path: [],
        tags: ["tag 3"],
        organisationId: "1",
        imageId: null,
        parentId: null,
        parentLabel: null,
        parentIcon: null
    },
    {
        id: "4",
        label: "Folder 4",
        code: "code 4",
        colors: [],
        icon: "mdi-folder-outline",
        path: [{
            id: "1",
            label: "Folder 1",
            index: 0
        }],
        tags: ["tag 4"],
        organisationId: "1",
        imageId: null,
        parentId: "1",
        parentLabel: null,
        parentIcon: null
    },
    {
        id: "5",
        label: "Folder 5",
        code: "code 5",
        colors: [],
        icon: "mdi-folder-outline",
        path: [{
            id: "1",
            label: "Folder 1",
            index: 0
        }, {
            id: "4",
            label: "Folder 4",
            index: 1
        }],
        tags: [],
        organisationId: "1",
        imageId: null,
        parentId: "4",
        parentLabel: null,
        parentIcon: null
    },
    {
        id: "6",
        label: "Folder 6",
        code: "code 6",
        colors: ["#000000", "#FFFFFF", "#cffcc7"],
        icon: "mdi-folder-outline",
        path: [],
        tags: ["tag 6"],
        organisationId: "1",
        imageId: null,
        parentId: null,
        parentLabel: null,
        parentIcon: null
    },
    {
        id: "7",
        label: "Folder 7",
        code: "code 7",
        colors: ["#FFFFFF", "#000000", "#15520b"],
        icon: "mdi-folder-outline",
        path: [],
        tags: ["tag 7"],
        organisationId: "1",
        imageId: null,
        parentId: null,
        parentLabel: null,
        parentIcon: null
    },
]