import { CORE_URL, HUBS_URL } from "./base";

export const NOTIFICATIONS_URL = () => `${CORE_URL()}/notifications`;
export const NOTIFICATION_URL = (notificationId: string) => `${CORE_URL()}/notifications/${notificationId}`;

export const NOTIFICATIONS_HUB_URL = () => `${HUBS_URL()}/notifications`;