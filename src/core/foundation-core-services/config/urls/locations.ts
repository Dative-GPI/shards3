import { CORE_URL } from "./base";

export const LOCATIONS_URL = () => `${CORE_URL()}/locations`;
export const LOCATION_URL = (locationId: string) => `${LOCATIONS_URL()}/${encodeURIComponent(locationId)}`;