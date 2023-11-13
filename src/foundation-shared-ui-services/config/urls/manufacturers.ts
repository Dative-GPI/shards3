import { ORGANISATION_URL } from "./organisations";

export const MANUFACTURERS_URL = `${ORGANISATION_URL}/manufacturers`;
export const MANUFACTURER_URL = (manufacturerId: string) => `${MANUFACTURERS_URL}/${encodeURIComponent(manufacturerId)}`;