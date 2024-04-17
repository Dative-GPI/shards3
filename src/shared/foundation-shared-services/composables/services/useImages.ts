import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";
import { BlurHash, BlurHashDTO } from "@dative-gpi/foundation-shared-domain/models";

import { IMAGE_BLURHASH_URL, IMAGE_RAW_URL } from "../../config/urls";

const ImageServiceFactory = {
    ...ServiceFactory.addCustom("getRaw", (axios, imageId: string) => axios.get(IMAGE_RAW_URL(imageId)), (image: string) => image),
    ...ServiceFactory.addCustom("getBlurHash", (axios, imageId: string) => axios.get(IMAGE_BLURHASH_URL(imageId)), (dto: BlurHashDTO) => new BlurHash(dto))
};

export const useRawImage = ComposableFactory.custom(ImageServiceFactory.getRaw);
export const useImageBlurHash = ComposableFactory.custom(ImageServiceFactory.getBlurHash);