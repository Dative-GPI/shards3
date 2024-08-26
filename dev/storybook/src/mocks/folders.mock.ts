import type { FolderDetailsDTO } from "@dative-gpi/foundation-core-domain/models";

export const FOLDERS: FolderDetailsDTO[] = [
    {
        id: "1",
        label: "folder 1",
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
        label: "folder 2",
        code: "code 2",
        colors: ["#FF0000", "#00FF00", "#0000FF"],
        icon: "mdi-folder-outline",
        path: [],
        tags: ["tag 2"],
        organisationId: "2",
        parentId: null,
        parentLabel: null,
        parentIcon: null,
        imageId: null
    },
    {
        id: "3",
        label: "folder 3",
        code: "code 3",
        colors: [],
        icon: "mdi-folder-outline",
        path: [],
        tags: ["tag 3"],
        organisationId: "3",
        parentId: null,
        parentLabel: null,
        parentIcon: null,
        imageId: null
    },
]