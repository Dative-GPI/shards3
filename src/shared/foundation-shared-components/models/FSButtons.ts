import { ColorBase } from "@dative-gpi/foundation-shared-components/themes";

import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";

export const FSButtonsAliases = {
    FSButtonSearch: FSButton,
    FSButtonSearchMini: FSButton,
    FSButtonSearchIcon: FSButton,
    FSButtonRemove: FSButton,
    FSButtonRemoveMini: FSButton,
    FSButtonRemoveIcon: FSButton,
    FSButtonSave: FSButton,
    FSButtonSaveMini: FSButton,
    FSButtonSaveIcon: FSButton,
    FSButtonCancel: FSButton,
    FSButtonCancelMini: FSButton,
    FSButtonCancelIcon: FSButton
}

export const FSButtonsProps = {
    FSButtonSearch: {
        prependIcon: "mdi-magnify",
        label: "Search",
        variant: "standard",
        color: ColorBase.Primary,
        textColor: ColorBase.Primary
    },
    FSButtonSearchMini: {
        prependIcon: "mdi-magnify",
        label: undefined,
        variant: "standard",
        color: ColorBase.Primary,
        textColor: ColorBase.Primary
    },
    FSButtonSearchIcon: {
        icon: "mdi-magnify",
        label: undefined,
        variant: "icon",
        color: ColorBase.Primary,
        textColor: ColorBase.Primary
    },
    FSButtonRemove: {
        prependIcon: "mdi-delete-outline",
        label: "Remove",
        variant: "standard",
        color: ColorBase.Error,
        textColor: ColorBase.Error
    },
    FSButtonRemoveMini: {
        prependIcon: "mdi-delete-outline",
        label: undefined,
        variant: "standard",
        color: ColorBase.Error,
        textColor: ColorBase.Error
    },
    FSButtonRemoveIcon: {
        icon: "mdi-delete-outline",
        label: undefined,
        variant: "icon",
        color: ColorBase.Error,
        textColor: ColorBase.Error
    },
    FSButtonSave: {
        prependIcon: "mdi-content-save-outline",
        label: "Save",
        variant: "standard",
        color: ColorBase.Primary,
        textColor: ColorBase.Primary
    },
    FSButtonSaveMini: {
        prependIcon: "mdi-content-save-outline",
        label: undefined,
        variant: "standard",
        color: ColorBase.Primary,
        textColor: ColorBase.Primary
    },
    FSButtonSaveIcon: {
        icon: "mdi-content-save-outline",
        label: undefined,
        variant: "icon",
        color: ColorBase.Primary,
        textColor: ColorBase.Primary
    },
    FSButtonCancel: {
        prependIcon: "mdi-cancel",
        label: "Cancel",
        variant: "standard",
        color: ColorBase.Light,
        textColor: ColorBase.Dark
    },
    FSButtonCancelMini: {
        prependIcon: "mdi-cancel",
        label: undefined,
        variant: "standard",
        color: ColorBase.Light,
        textColor: ColorBase.Dark
    },
    FSButtonCancelIcon: {
        icon: "mdi-cancel",
        label: undefined,
        variant: "icon",
        color: ColorBase.Light,
        textColor: ColorBase.Dark
    },
    FSButtonDocumentation: {
        prependIcon: "mdi-file-document-outline",
        label: "Documentation",
        variant: "standard",
        color: ColorBase.Light,
        textColor: ColorBase.Dark
    },
    FSButtonDocumentationMini: {
        prependIcon: "mdi-file-document-outline",
        label: undefined,
        variant: "standard",
        color: ColorBase.Light,
        textColor: ColorBase.Dark
    },
    FSButtonDocumentationIcon: {
        icon: "mdi-file-document-outline",
        label: undefined,
        variant: "icon",
        color: ColorBase.Light,
        textColor: ColorBase.Dark
    }
}