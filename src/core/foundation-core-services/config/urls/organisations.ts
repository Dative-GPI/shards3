import { urlFactory } from "./urlFactory";
import { CORE_URL } from "./base";

export const ORGANISATIONS_URL = `${CORE_URL}/organisations`;
export const ORGANISATION_URL = urlFactory(organisationId => `${ORGANISATIONS_URL}/${encodeURIComponent(organisationId)}`); 

export const ORGANISATION_DASHBOARD_URL = `${ORGANISATION_URL}/dashboard`;