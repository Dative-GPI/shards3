import { GATEWAY_URL } from "./base";

export const SECURITY_SETTINGS_URL = () => `${GATEWAY_URL()}/security-settings`;
export const SECURITY_SETTING_CURRENT_URL = () => `${SECURITY_SETTINGS_URL()}/current`;