import { GATEWAY_URL } from "./base";

export const IMAGES_URL = () => `${GATEWAY_URL()}/images`;

export const IMAGES_RAW_URL = () => `${IMAGES_URL()}/raw`;
export const IMAGE_RAW_URL = (imageId: string) => `${IMAGES_RAW_URL()}/${encodeURIComponent(imageId)}`;
export const IMAGE_RAW_EXTENSION_URL = (imageId: string, jwt: string) => `${IMAGE_RAW_URL(imageId)}?access_token=${jwt}`;

export const IMAGES_THUMBNAIL_URL = () => `${IMAGES_URL()}/thumbnail`;
export const IMAGE_THUMBNAIL_URL = (imageId: string) => `${IMAGES_THUMBNAIL_URL()}/${encodeURIComponent(imageId)}`;

export const IMAGES_BLURHASH_URL = () => `${IMAGES_URL()}/blurHash`;
export const IMAGE_BLURHASH_URL = (imageId: string) => `${IMAGES_BLURHASH_URL()}/${encodeURIComponent(imageId)}`;