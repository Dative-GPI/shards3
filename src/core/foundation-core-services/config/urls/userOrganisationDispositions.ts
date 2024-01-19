import { CORE_URL } from "./base";

export const USER_ORGANISATION_DISPOSITIONS_URL = `${CORE_URL}/user-organisation-dispositions`;
export const USER_ORGANISATION_DISPOSITION_URL = (tableCode: string) => `${USER_ORGANISATION_DISPOSITIONS_URL}/${encodeURIComponent(tableCode)}`;