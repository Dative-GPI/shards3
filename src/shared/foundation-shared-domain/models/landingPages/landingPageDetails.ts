import { LandingPageInfos, LandingPageInfosDTO } from "./landingPageInfos";

export class LandingPageDetails extends LandingPageInfos {
    constructor(params: LandingPageDetailsDTO) {
        super(params);
    }
}

export interface LandingPageDetailsDTO extends LandingPageInfosDTO {
}