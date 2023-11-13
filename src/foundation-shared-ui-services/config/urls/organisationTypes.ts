import { ORGANISATION_URL } from "./organisations";

export const ORGANISATION_TYPES_URL = `${ORGANISATION_URL}/organisation-types`;
export const ORGANISATION_TYPE_URL = (organisationTypeId: string) => `${ORGANISATION_TYPES_URL}/${encodeURIComponent(organisationTypeId)}`;