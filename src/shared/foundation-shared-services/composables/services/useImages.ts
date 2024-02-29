import { Ref, readonly, ref } from "vue";

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

    const fetching = ref(false);
    const fetched = ref<string | null>(null) as Ref<string | null>;

    const fetch = async (imageId: string) => {
        fetching.value = true;
        try {
            fetched.value = await service.getRaw(imageId);
        }
        finally {
            fetching.value = false;
        }

        return readonly(fetched as Ref<string>);
    }

    return {
        fetching: readonly(fetching),
        fetch,
        fetched: readonly(fetched)
    }
}
export const useImageBlurHash = () => {
    const service = ImageServiceFactory();

    const fetching = ref(false);
    const fetched = ref<BlurHash | null>(null) as Ref<BlurHash | null>;

    const fetch = async (imageId: string) => {
        fetching.value = true;
        try {
            fetched.value = await service.getBlurHash(imageId);
        }
        finally {
            fetching.value = false;
        }

        return readonly(fetched as Ref<BlurHash>);
    }

    return {
        fetching: readonly(fetching),
        fetch,
        fetched: readonly(fetched)
    }
}