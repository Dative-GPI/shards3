import { CORE_URL } from "./base";

export const USERS_URL = `${CORE_URL}/users`;
export const USER_URL = (userId: string) => `${USERS_URL}/${encodeURIComponent(userId)}`;
export const USER_CURRENT_URL = `${USERS_URL}/current`;