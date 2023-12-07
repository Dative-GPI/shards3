import { CORE_URL } from "./base";

export const MANUFACTURERS_URL = `${CORE_URL}/manufacturers`;
export const MANUFACTURER_URL = (manufacturerId: string) => `${MANUFACTURERS_URL}/${encodeURIComponent(manufacturerId)}`;