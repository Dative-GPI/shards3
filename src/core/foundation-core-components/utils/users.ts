import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import { UserType, UserValidityState } from "@dative-gpi/foundation-core-domain/models"

const { $tr } = useTranslationsProvider();

export const userTypeLabel = (type: UserType): string => {
  switch (type) {
    case UserType.User:           return $tr("ui.user-type.user", "User");
    case UserType.ServiceAccount: return $tr("ui.user-type.service-account", "Service account");
    case UserType.Extension:      return $tr("ui.user-type.extension", "Extension");
  }
};

export const userTypeIcon = (type: UserType): string => {
  switch (type) {
    case UserType.User:           return "mdi-account-multiple-outline";
    case UserType.ServiceAccount: return "mdi-puzzle-outline";
    case UserType.Extension:      return "mdi-cog-outline";
  }
};

export const userValidityLabel = (validity: UserValidityState): string => {
  switch (validity) {
    case UserValidityState.InvitationNotSent: return $tr("ui.user-validity.invitation-not-sent", "Invitation not sent");
    case UserValidityState.InvitationSent:    return $tr("ui.user-validity.invitation-sent", "Invitation sent");
    case UserValidityState.AccountCreated:    return $tr("ui.user-validity.account-created", "Not validated");
    case UserValidityState.AccountValidated:  return $tr("ui.user-validity.account-validated", "Validated");
  }
}