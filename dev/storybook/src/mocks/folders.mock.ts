import { FolderDetails } from "@dative-gpi/foundation-core-domain/models";


export const FOLDERS: FolderDetails[] = [
    {
        id: "1",
        label: "folder 1",
        code: "code 1",
        colors: ["#FF0000"],
        icon: "mdi-folder-outline",
        path: [],
        tags: ["tag 1"],
        organisationId: "1",
        imageBlurHash: "imageBlurHash 1"
    },
    {
        id: "2",
        label: "folder 2",
        code: "code 2",
        colors: ["#FF0000", "#00FF00"],
        icon: "mdi-folder-outline",
        path: [],
        tags: ["tag 2"],
        organisationId: "2",
        imageBlurHash: "imageBlurHash 2"
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
        imageBlurHash: "imageBlurHash 3"
    },
]