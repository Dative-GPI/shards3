import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";
import { BlurHash } from "@dative-gpi/foundation-shared-domain/models";

import { IMAGE_BLURHASH_URL } from "../../config/urls";

const ImageServiceFactory = new ServiceFactory("image", BlurHash).create(factory => factory.build(
    factory.addCustom("getBlurHash", (axios, imageId: string) => axios.get(IMAGE_BLURHASH_URL(imageId))),
    factory.addNotify()
));

export const useImageBlurHash = ComposableFactory.custom(ImageServiceFactory, ImageServiceFactory.getBlurHash);