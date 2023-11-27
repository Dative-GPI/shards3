import { ColorBase } from "@dative-gpi/foundation-shared-ui-components/themes";

import FSButton from "@dative-gpi/foundation-shared-ui-components/components/FSButton.vue";

export const FSButtonsAliases = {
    FSButtonSearch: FSButton,
    FSButtonSearchMini: FSButton,
    FSButtonRemove: FSButton,
    FSButtonRemoveMini: FSButton,
    FSButtonSave: FSButton,
    FSButtonSaveMini: FSButton
}

export const FSButtonsProps = {
    FSButtonSearch: {
        icon: "mdi-magnify",
        label: "Search",
        full: false,
        color: ColorBase.Primary
    },
    FSButtonSearchMini: {
        icon: "mdi-magnify",
        label: undefined,
        full: false,
        color: ColorBase.Primary
    },
    FSButtonRemove: {
        icon: "mdi-delete-outline",
        label: "Remove",
        full: false,
        color: ColorBase.Error
    },
    FSButtonRemoveMini: {
        icon: "mdi-delete-outline",
        label: undefined,
        full: false,
        color: ColorBase.Error
    },
    FSButtonSave: {
        icon: "mdi-content-save-outline",
        label: "Save",
        full: false,
        color: ColorBase.Success
    },
    FSButtonSaveMini: {
        icon: "mdi-content-save-outline",
        label: undefined,
        full: false,
        color: ColorBase.Success
    },
    FSButtonCancel: {
        icon: "mdi-cancel",
        label: "Cancel",
        full: false,
        color: ColorBase.Light
    },
    FSButtonCancelMini: {
        icon: "mdi-cancel",
        label: undefined,
        full: false,
        color: ColorBase.Light
    }
}