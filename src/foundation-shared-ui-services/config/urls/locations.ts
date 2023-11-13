import { ORGANISATION_URL } from "./organisations";

export const LOCATIONS_URL = `${ORGANISATION_URL}/locations`;
export const LOCATION_URL = (locationId: string) => `${LOCATIONS_URL}/${encodeURIComponent(locationId)}`;