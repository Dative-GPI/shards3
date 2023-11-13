import { ORGANISATION_URL } from "./organisations";

export const IMAGES_URL = `${ORGANISATION_URL}/images`;
export const IMAGE_RAW_URL = (imageId: string) => `${IMAGES_URL}/raw/${encodeURIComponent(imageId)}`; 
export const IMAGE_THUMBNAIL_URL = (imageId: string) => `${IMAGES_URL}/thumbnail/${encodeURIComponent(imageId)}`