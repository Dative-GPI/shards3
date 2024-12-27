import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { RoleType } from "@dative-gpi/foundation-shared-domain/enums";

const { $tr } = useTranslationsProvider();

export const roleTypeLabel = (type: RoleType): string => {
  switch (type) {
    case RoleType.None:             return $tr("ui.common.none", "None");
    case RoleType.Organisation:     return $tr("ui.common.custom", "Custom");
    case RoleType.OrganisationType: return $tr("ui.common.shared", "Shared");
  }
};

export const roleTypeColor = (type: RoleType): ColorBase => {
  switch (type) {
    case RoleType.None:             return ColorEnum.Error;
    case RoleType.Organisation:     return ColorEnum.Primary;
    case RoleType.OrganisationType: return ColorEnum.Warning;
  }
};