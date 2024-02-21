export class LandingPageInfos {
    id: string;
    backgroundImageId?: string;
    backgroundImageBlurHash?: string;
    backgroundImageHeight?: number;
    backgroundImageWidth?: number;
    bannerImageId?: string;
    bannerImageBlurHash?: string;
    bannerImageHeight?: number;
    bannerImageWidth?: number;
    title: string;
    subTitle: string;
    theme: string;
    faqLink: string;
    signUpLink: string;

    constructor(params: LandingPageInfosDTO) {
        this.id = params.id;
        this.backgroundImageId = params.backgroundImageId;
        this.backgroundImageBlurHash = params.backgroundImageBlurHash;
        this.backgroundImageHeight = params.backgroundImageHeight;
        this.backgroundImageWidth = params.backgroundImageWidth;
        this.bannerImageId = params.bannerImageId;
        this.bannerImageBlurHash = params.bannerImageBlurHash;
        this.bannerImageHeight = params.bannerImageHeight;
        this.bannerImageWidth = params.bannerImageWidth;
        this.title = params.title;
        this.subTitle = params.subTitle;
        this.theme = params.theme;
        this.faqLink = params.faqLink;
        this.signUpLink = params.signUpLink;
    }
}

export interface LandingPageInfosDTO {
    id: string;
    backgroundImageId?: string;
    backgroundImageBlurHash?: string;
    backgroundImageHeight?: number;
    backgroundImageWidth?: number;
    bannerImageId?: string;
    bannerImageBlurHash?: string;
    bannerImageHeight?: number;
    bannerImageWidth?: number;
    title: string;
    subTitle: string;
    theme: string;
    faqLink: string;
    signUpLink: string;
}