export class BlurHash {
    blurHash: string;
    width: number;
    height: number;

    constructor(params: BlurHashDTO) {
        this.blurHash = params.blurHash;
        this.width = params.width;
        this.height = params.height;
    }
}

export interface BlurHashDTO {
    blurHash: string;
    width: number;
    height: number;
}