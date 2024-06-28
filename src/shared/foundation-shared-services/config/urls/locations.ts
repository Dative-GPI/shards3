import { CORE_URL } from "../../../../core/foundation-core-services/config/urls/base";

export const LOCATIONS_URL = () => `${CORE_URL()}/locations`;
export const LOCATION_URL = (locationId: string) => `${LOCATIONS_URL()}/${encodeURIComponent(locationId)}`;