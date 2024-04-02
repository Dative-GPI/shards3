import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";
import { BlurHash, BlurHashDTO } from "@dative-gpi/foundation-shared-domain/models";

import { IMAGE_BLURHASH_URL } from "../../config/urls";

const ImageServiceFactory = {
    ...ServiceFactory.addCustom("getBlurHash", (axios, imageId: string) => axios.get(IMAGE_BLURHASH_URL(imageId)), (dto: BlurHashDTO) => new BlurHash(dto))
};

export const useImageBlurHash = ComposableFactory.custom(ImageServiceFactory.getBlurHash);