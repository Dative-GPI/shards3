import { CORE_URL } from "./base";

export const SERVICE_ACCOUNT_ORGANISATIONS_URL = () => `${CORE_URL()}/service-accounts`;
export const SERVICE_ACCOUNT_ORGANISATION_URL = (serviceAccountOrganisationId: string) => `${SERVICE_ACCOUNT_ORGANISATIONS_URL()}/${encodeURIComponent(serviceAccountOrganisationId)}`;