import { CORE_URL } from "./base";

export const ROLE_ORGANISATION_TYPES_URL = () => `${CORE_URL()}/role-organisation-types`;
export const ROLE_ORGANISATION_TYPE_URL = (roleOrganisationTypeId: string) => `${ROLE_ORGANISATION_TYPES_URL()}/${encodeURIComponent(roleOrganisationTypeId)}`;