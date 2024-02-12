import { useTranslationsProvider } from "@dative-gpi/foundation-shared-services";
import { ColorEnum } from "./colors";

import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";

const { $tr } = useTranslationsProvider();

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
        label: $tr("ui.button.search", "Search"),
        variant: "standard",
        color: ColorEnum.Primary
    },
    FSButtonSearchMini: {
        prependIcon: "mdi-magnify",
        label: undefined,
        variant: "standard",
        color: ColorEnum.Primary
    },
    FSButtonSearchIcon: {
        icon: "mdi-magnify",
        label: undefined,
        variant: "icon",
        color: ColorEnum.Primary
    },
    FSButtonRemove: {
        prependIcon: "mdi-delete-outline",
        label: $tr("ui.button.remove", "Remove"),
        variant: "standard",
        color: ColorEnum.Error
    },
    FSButtonRemoveMini: {
        prependIcon: "mdi-delete-outline",
        label: undefined,
        variant: "standard",
        color: ColorEnum.Error
    },
    FSButtonRemoveIcon: {
        icon: "mdi-delete-outline",
        label: undefined,
        variant: "icon",
        color: ColorEnum.Error
    },
    FSButtonSave: {
        prependIcon: "mdi-content-save-outline",
        label: $tr("ui.button.save", "Save"),
        variant: "standard",
        color: ColorEnum.Primary
    },
    FSButtonSaveMini: {
        prependIcon: "mdi-content-save-outline",
        label: undefined,
        variant: "standard",
        color: ColorEnum.Primary
    },
    FSButtonSaveIcon: {
        icon: "mdi-content-save-outline",
        label: undefined,
        variant: "icon",
        color: ColorEnum.Primary
    },
    FSButtonCancel: {
        prependIcon: "mdi-cancel",
        label: $tr("ui.button.cancel", "Cancel"),
        variant: "standard",
        color: ColorEnum.Light
    },
    FSButtonCancelMini: {
        prependIcon: "mdi-cancel",
        label: undefined,
        variant: "standard",
        color: ColorEnum.Light
    },
    FSButtonCancelIcon: {
        icon: "mdi-cancel",
        label: undefined,
        variant: "icon",
        color: ColorEnum.Light
    },
    FSButtonDocumentation: {
        prependIcon: "mdi-file-document-outline",
        label: $tr("ui.button.documentation", "Documentation"),
        variant: "standard",
        color: ColorEnum.Light
    },
    FSButtonDocumentationMini: {
        prependIcon: "mdi-file-document-outline",
        label: undefined,
        variant: "standard",
        color: ColorEnum.Light
    },
    FSButtonDocumentationIcon: {
        icon: "mdi-file-document-outline",
        label: undefined,
        variant: "icon",
        color: ColorEnum.Light
    }
}