import { CORE_URL } from "./base";

export const ORGANISATION_TYPES_URL = () => `${CORE_URL()}/organisation-types`;
export const ORGANISATION_TYPE_URL = (organisationTypeId: string) => `${ORGANISATION_TYPES_URL()}/${encodeURIComponent(organisationTypeId)}`;