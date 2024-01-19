import { useTranslationsProvider } from "@dative-gpi/foundation-shared-services";
import { ColorBase } from "@dative-gpi/foundation-shared-components/themes";

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
        label: $tr("ui.shared.button.search", "Search"),
        variant: "standard",
        color: ColorBase.Primary
    },
    FSButtonSearchMini: {
        prependIcon: "mdi-magnify",
        label: undefined,
        variant: "standard",
        color: ColorBase.Primary
    },
    FSButtonSearchIcon: {
        icon: "mdi-magnify",
        label: undefined,
        variant: "icon",
        color: ColorBase.Primary
    },
    FSButtonRemove: {
        prependIcon: "mdi-delete-outline",
        label: $tr("ui.shared.button.remove", "Remove"),
        variant: "standard",
        color: ColorBase.Error
    },
    FSButtonRemoveMini: {
        prependIcon: "mdi-delete-outline",
        label: undefined,
        variant: "standard",
        color: ColorBase.Error
    },
    FSButtonRemoveIcon: {
        icon: "mdi-delete-outline",
        label: undefined,
        variant: "icon",
        color: ColorBase.Error
    },
    FSButtonSave: {
        prependIcon: "mdi-content-save-outline",
        label: $tr("ui.shared.button.save", "Save"),
        variant: "standard",
        color: ColorBase.Primary
    },
    FSButtonSaveMini: {
        prependIcon: "mdi-content-save-outline",
        label: undefined,
        variant: "standard",
        color: ColorBase.Primary
    },
    FSButtonSaveIcon: {
        icon: "mdi-content-save-outline",
        label: undefined,
        variant: "icon",
        color: ColorBase.Primary
    },
    FSButtonCancel: {
        prependIcon: "mdi-cancel",
        label: $tr("ui.shared.button.cancel", "Cancel"),
        variant: "standard",
        color: ColorBase.Light
    },
    FSButtonCancelMini: {
        prependIcon: "mdi-cancel",
        label: undefined,
        variant: "standard",
        color: ColorBase.Light
    },
    FSButtonCancelIcon: {
        icon: "mdi-cancel",
        label: undefined,
        variant: "icon",
        color: ColorBase.Light
    },
    FSButtonDocumentation: {
        prependIcon: "mdi-file-document-outline",
        label: $tr("ui.shared.button.documentation", "Documentation"),
        variant: "standard",
        color: ColorBase.Light
    },
    FSButtonDocumentationMini: {
        prependIcon: "mdi-file-document-outline",
        label: undefined,
        variant: "standard",
        color: ColorBase.Light
    },
    FSButtonDocumentationIcon: {
        icon: "mdi-file-document-outline",
        label: undefined,
        variant: "icon",
        color: ColorBase.Light
    }
}