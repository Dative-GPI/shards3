export class SecuritySettingInfos {
    id: string;
    useGoogle: boolean;
    useFacebook: boolean;
    useMicrosoft: boolean;
    useLocalAccounts: boolean;
    allowSignUp: boolean;
    allowedOrganisationTypes: string[];
    localPasswordUppercaseMandatory: boolean;
    localPasswordLowercaseMandatory: boolean;
    localPasswordNumberMandatory: boolean;
    localPasswordSpecialCharacterMandatory: boolean;
    localPasswordMinimalLength: number;
    localPasswordMaximalLength: number;

    constructor(params: SecuritySettingInfosDTO) {
        this.id = params.id;
        this.useGoogle = params.useGoogle;
        this.useFacebook = params.useFacebook;
        this.useMicrosoft = params.useMicrosoft;
        this.useLocalAccounts = params.useLocalAccounts;
        this.allowSignUp = params.allowSignUp;
        this.allowedOrganisationTypes = params.allowedOrganisationTypes?.slice();
        this.localPasswordUppercaseMandatory = params.localPasswordUppercaseMandatory;
        this.localPasswordLowercaseMandatory = params.localPasswordLowercaseMandatory;
        this.localPasswordNumberMandatory = params.localPasswordNumberMandatory;
        this.localPasswordSpecialCharacterMandatory = params.localPasswordSpecialCharacterMandatory;
        this.localPasswordMinimalLength = params.localPasswordMinimalLength;
        this.localPasswordMaximalLength = params.localPasswordMaximalLength;
    }
}

export interface SecuritySettingInfosDTO {
    id: string;
    useGoogle: boolean;
    useFacebook: boolean;
    useMicrosoft: boolean;
    useLocalAccounts: boolean;
    allowSignUp: boolean;
    allowedOrganisationTypes: string[];
    localPasswordUppercaseMandatory: boolean;
    localPasswordLowercaseMandatory: boolean;
    localPasswordNumberMandatory: boolean;
    localPasswordSpecialCharacterMandatory: boolean;
    localPasswordMinimalLength: number;
    localPasswordMaximalLength: number;
}