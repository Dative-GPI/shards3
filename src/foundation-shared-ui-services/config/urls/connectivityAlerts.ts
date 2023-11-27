import { CORE_URL, HUBS_URL } from "./base";

export const CONNECTIVITY_ALERTS_URL = `${CORE_URL}/connectivity-alerts`;
export const CONNECTIVITY_ALERT_URL = (connectivityAlertId: string) => `${CONNECTIVITY_ALERTS_URL}/${encodeURIComponent(connectivityAlertId)}`;

export const CONNECTIVITY_ALERTS_HUB_URL = `${HUBS_URL}/connectivity-alerts`;