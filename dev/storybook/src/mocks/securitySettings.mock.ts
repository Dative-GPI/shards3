import { SecuritySettingDetailsDTO } from "@dative-gpi/foundation-shared-domain/models";

export const SECURITYSETTINGS: SecuritySettingDetailsDTO[] = [{
    id: "1",
    useGoogle: true,
    useFacebook: false,
    useMicrosoft: true,
    useLocalAccounts: true,
    allowSignUp: true,
    allowedOrganisationTypes: [],
    localPasswordUppercaseMandatory: true,
    localPasswordLowercaseMandatory: true,
    localPasswordNumberMandatory: true,
    localPasswordSpecialCharacterMandatory: true,
    localPasswordMinimalLength: 8,
    localPasswordMaximalLength: 300
}];