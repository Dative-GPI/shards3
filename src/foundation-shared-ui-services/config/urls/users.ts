import { ORGANISATION_URL } from "./organisations";

export const USERS_URL = `${ORGANISATION_URL}/users`;
export const USER_URL = (userId: string) => `${USERS_URL}/${encodeURIComponent(userId)}`;
export const USER_CURRENT_URL = `${USERS_URL}/current`;