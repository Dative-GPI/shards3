import { BASE_URL } from "./base";
import { urlFactory } from "./urlFactory";

export const ORGANISATIONS_URL = `${BASE_URL}/organisations`;
export const ORGANISATION_URL = (organisationId : string) => `${ORGANISATIONS_URL}/${encodeURIComponent(organisationId)}`; 
