import { GATEWAY_URL, HUBS_URL } from "./base";

export const NOTIFICATIONS_URL = () => `${GATEWAY_URL()}/notifications`;
export const NOTIFICATION_URL = (notificationId: string) => `${GATEWAY_URL()}/notifications/${notificationId}`;

export const NOTIFICATIONS_HUB_URL = () => `${HUBS_URL()}/notifications`;