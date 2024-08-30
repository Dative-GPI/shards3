export class ImageInfos {
    blurHash: string;
    width: number;
    height: number;

    constructor(params: ImageInfosDTO) {
        this.blurHash = params.blurHash;
        this.width = params.width;
        this.height = params.height;
    }
}

export interface ImageInfosDTO {
    blurHash: string;
    width: number;
    height: number;
}