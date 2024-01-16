export class LayoutPageInfos {
    id: string;
    bannerImageId?: string;
    bannerImageBlurHash?: string;
    bannerImageHeight?: number;
    bannerImageWidth?: number;
    backgroundColor: string;
    textColor: string;
    gradiantColors: string[];

    constructor(params: LayoutPageInfosDTO) {
        this.id = params.id;
        this.bannerImageId = params.bannerImageId;
        this.bannerImageBlurHash = params.bannerImageBlurHash;
        this.bannerImageHeight = params.bannerImageHeight;
        this.bannerImageWidth = params.bannerImageWidth;
        this.backgroundColor = params.backgroundColor;
        this.textColor = params.textColor;
        this.gradiantColors = params.gradiantColors?.slice();
    }
}

export interface LayoutPageInfosDTO {
    id: string;
    bannerImageId?: string;
    bannerImageBlurHash?: string;
    bannerImageHeight?: number;
    bannerImageWidth?: number;
    backgroundColor: string;
    textColor: string;
    gradiantColors: string[];
}