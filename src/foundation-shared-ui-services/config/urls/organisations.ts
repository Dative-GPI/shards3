import { urlFactory } from "./urlFactory";
import { GATEWAY_URL } from "./base";

export const ORGANISATIONS_URL = `${GATEWAY_URL}/organisations`;
export const ORGANISATION_URL = urlFactory(organisationId => `${ORGANISATIONS_URL}/${encodeURIComponent(organisationId)}`); 

export const ORGANISATION_DASHBOARD_URL = `${ORGANISATION_URL()}/dashboard`;