import { LegalInformationInfos, LegalInformationInfosDTO } from "./legalInformationInfos";

export class LegalInformationDetails extends LegalInformationInfos {
    constructor(params: LegalInformationDetailsDTO) {
        super(params);
    }
}

export interface LegalInformationDetailsDTO extends LegalInformationInfosDTO {
}