import { SERVICE_ACCOUNT_ORGANISATION_URL } from "./serviceAccountOrganisations";


export const SERVICE_ACCOUNT_ORGANISATION_AUTH_TOKENS_URL = (serviceAccountOrganisationId: string) => `${SERVICE_ACCOUNT_ORGANISATION_URL(serviceAccountOrganisationId)}/pats`;
export const SERVICE_ACCOUNT_ORGANISATION_AUTH_TOKEN_URL = (serviceAccountOrganisationId: string, authTokenId: string) => `${SERVICE_ACCOUNT_ORGANISATION_AUTH_TOKENS_URL(serviceAccountOrganisationId)}/${encodeURIComponent(authTokenId)}`;