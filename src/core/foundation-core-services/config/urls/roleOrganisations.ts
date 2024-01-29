import { CORE_URL } from "./base";

export const ROLE_ORGANISATIONS_URL = () => `${CORE_URL()}/role-organisations`;
export const ROLE_ORGANISATION_URL = (roleOrganisationId: string) => `${ROLE_ORGANISATIONS_URL()}/${encodeURIComponent(roleOrganisationId)}`;