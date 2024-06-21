import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { RoleType } from "@dative-gpi/foundation-core-domain/models"

const { $tr } = useTranslationsProvider();

export const roleTypeLabel = (type: RoleType): string => {
  switch (type) {
    case RoleType.None:             return $tr("ui.role-type.none", "None");
    case RoleType.Organisation:     return $tr("ui.role-type.organisation", "Custom");
    case RoleType.OrganisationType: return $tr("ui.role-type.organisation-type", "Shared");
  }
};

export const roleTypeColor = (type: RoleType): ColorBase => {
  switch (type) {
    case RoleType.None:             return ColorEnum.Error;
    case RoleType.Organisation:     return ColorEnum.Primary;
    case RoleType.OrganisationType: return ColorEnum.Warning;
  }
};