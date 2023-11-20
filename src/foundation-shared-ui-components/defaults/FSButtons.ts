import { ColorBase } from "@dative-gpi/foundation-shared-ui-domain";

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
        backgroundColor: ColorBase.PrimaryLight,
        borderColor: ColorBase.PrimaryDark,
        textColor: ColorBase.PrimaryDark
    },
    FSButtonSearchMini: {
        icon: "mdi-magnify",
        backgroundColor: ColorBase.PrimaryLight,
        borderColor: ColorBase.PrimaryDark,
        textColor: ColorBase.PrimaryDark
    },
    FSButtonRemove: {
        icon: "mdi-delete-outline",
        label: "Remove",
        backgroundColor: ColorBase.ErrorLight,
        borderColor: ColorBase.ErrorDark,
        textColor: ColorBase.ErrorDark
    },
    FSButtonRemoveMini: {
        icon: "mdi-delete-outline",
        backgroundColor: ColorBase.ErrorLight,
        borderColor: ColorBase.ErrorDark,
        textColor: ColorBase.ErrorDark
    },
    FSButtonSave: {
        icon: "mdi-content-save-outline",
        label: "Save",
        backgroundColor: ColorBase.SuccessLight,
        borderColor: ColorBase.SuccessDark,
        textColor: ColorBase.SuccessDark
    },
    FSButtonSaveMini: {
        icon: "mdi-content-save-outline",
        backgroundColor: ColorBase.SuccessLight,
        borderColor: ColorBase.SuccessDark,
        textColor: ColorBase.SuccessDark
    },
    FSButtonCancel: {
        icon: "mdi-cancel",
        label: "Cancel",
        backgroundColor: ColorBase.WhiteLight,
        borderColor: ColorBase.WhiteDark,
        textColor: ColorBase.TextDark
    },
    FSButtonCancelMini: {
        icon: "mdi-cancel",
        backgroundColor: ColorBase.WhiteLight,
        borderColor: ColorBase.WhiteDark,
        textColor: ColorBase.TextDark
    }
}