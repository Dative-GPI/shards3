import { urlFactory } from "./urlFactory";
import { BASE_URL } from "./base";

export const ORGANISATIONS_URL = `${BASE_URL}/organisations`;
export const ORGANISATION_URL = urlFactory(organisationId => `${ORGANISATIONS_URL}/${encodeURIComponent(organisationId)}`); 