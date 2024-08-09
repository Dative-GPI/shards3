export class ImageDetails {
    blurHash: string;
    width: number;
    height: number;

    constructor(params: ImageDetailsDTO) {
        this.blurHash = params.blurHash;
        this.width = params.width;
        this.height = params.height;
    }
}

export interface ImageDetailsDTO {
    blurHash: string;
    width: number;
    height: number;
}