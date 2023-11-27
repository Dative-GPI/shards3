import { CORE_URL, HUBS_URL } from "./base";

export const ALERTS_URL = `${CORE_URL}/alerts`;
export const ALERT_URL = (alertId: string) => `${ALERTS_URL}/${encodeURIComponent(alertId)}`;

export const ALERTS_HUB_URL = `${HUBS_URL}/alerts`;