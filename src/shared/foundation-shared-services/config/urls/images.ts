import { GATEWAY_URL } from "./base";

export const IMAGES_URL = () => `${GATEWAY_URL()}/images`;

export const IMAGE_URL = (imageId: string) => `${IMAGES_URL()}/${encodeURIComponent(imageId)}`;
export const IMAGE_RAW_URL = (imageId: string, authToken?: string) => {
  let url = `${IMAGE_URL(imageId)}/raw`;
  if (authToken) {
    url += `?authToken=${encodeURIComponent(authToken)}`;
  }
  return url;
};
export const IMAGE_THUMBNAIL_URL = (imageId: string, authToken?: string) => {
  let url = `${IMAGE_URL(imageId)}/thumbnail`;
  if (authToken) {
    url += `?authToken=${encodeURIComponent(authToken)}`;
  }
  return url;
};