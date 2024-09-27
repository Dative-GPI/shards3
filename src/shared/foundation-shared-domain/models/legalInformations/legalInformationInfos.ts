export class LegalInformationInfos {
  id: string;
  privacyPolicyId: string;
  generalConditionsId: string;

  constructor(params: LegalInformationInfosDTO) {
    this.id = params.id;
    this.privacyPolicyId = params.privacyPolicyId;
    this.generalConditionsId = params.generalConditionsId;
  }
}

export interface LegalInformationInfosDTO {
  id: string;
  privacyPolicyId: string;
  generalConditionsId: string;
}