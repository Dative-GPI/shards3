import { GATEWAY_URL } from "./base";

export const USERS_URL = () => `${GATEWAY_URL()}/users`;
export const USER_CURRENT_URL = () => `${USERS_URL()}/current`;
