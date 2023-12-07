import { CORE_URL } from "./base";

export const IMAGES_URL = `${CORE_URL}/images`;
export const IMAGE_RAW_URL = (imageId: string) => `${IMAGES_URL}/raw/${encodeURIComponent(imageId)}`; 
export const IMAGE_THUMBNAIL_URL = (imageId: string) => `${IMAGES_URL}/thumbnail/${encodeURIComponent(imageId)}`