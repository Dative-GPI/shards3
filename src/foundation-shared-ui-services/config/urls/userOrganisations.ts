import { CORE_URL } from "./base";

export const USER_ORGANISATIONS_URL = `${CORE_URL}/user-organisations`;
export const USER_ORGANISATION_URL = (userOrganisationId: string) => `${USER_ORGANISATIONS_URL}/${encodeURIComponent(userOrganisationId)}`;
export const USER_ORGANISATION_CURRENT_URL = `${USER_ORGANISATIONS_URL}/current`;