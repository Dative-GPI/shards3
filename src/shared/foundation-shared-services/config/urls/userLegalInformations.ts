import { GATEWAY_URL } from "./base";

export const USER_LEGAL_INFORMATIONS_URL = () => `${GATEWAY_URL()}/user-legal-informations`;
export const USER_LEGAL_INFORMATION_CURRENT_URL = () => `${USER_LEGAL_INFORMATIONS_URL()}/current`;