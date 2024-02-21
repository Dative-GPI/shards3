import { GATEWAY_URL } from "./base";

export const ORGANISATIONS_URL = () => `${GATEWAY_URL()}(/organisations`;
export const ORGANISATION_URL = (organisationId: string) => `${ORGANISATIONS_URL()}/${encodeURIComponent(organisationId)}`;