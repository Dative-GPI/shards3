import { ImageInfos, type ImageInfosDTO } from "./imageInfos";

export class ImageDetails extends ImageInfos {
    constructor(params: ImageDetailsDTO) {
        super(params);
    }
}

export interface ImageDetailsDTO extends ImageInfosDTO {
}