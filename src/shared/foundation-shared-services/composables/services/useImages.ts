import { ref } from "vue";

import { BlurHash } from "@dative-gpi/foundation-shared-domain/models";
import { ServiceFactory } from "@dative-gpi/bones-ui";

import { IMAGE_RAW_URL, IMAGE_BLURHASH_URL } from "../../config/urls";

const ImageServiceFactory = new ServiceFactory("image", BlurHash).create(factory => factory.build(
    factory.addNotify(() => ({
        getRaw: async (imageId: string): Promise<string> => {
            const response = await ServiceFactory.http.get(IMAGE_RAW_URL(imageId));

            return response.data;
        },
        getBlurHash: async (imageId: string): Promise<BlurHash> => {
            const response = await ServiceFactory.http.get(IMAGE_BLURHASH_URL(imageId));
            const result = new BlurHash(response.data);

            return result;
        }
    }))
));

export const useImageRaw = () => {
    const service = ImageServiceFactory();

    const getting = ref(false);
    const entity = ref<string | null>(null);

    const get = async (imageId: string) => {
        getting.value = true;
        try {
            entity.value = await service.getRaw(imageId);
        }
        finally {
            getting.value = false;
        }
        return entity;
    }

    return {
        getting,
        get,
        entity
    }
}
export const useImageBlurHash = () => {
    const service = ImageServiceFactory();

    const getting = ref(false);
    const entity = ref<BlurHash | null>(null);

    const get = async (imageId: string) => {
        getting.value = true;
        try {
            entity.value = await service.getBlurHash(imageId);
        }
        finally {
            getting.value = false;
        }
        return entity;
    }

    return {
        getting,
        get,
        entity
    }
}