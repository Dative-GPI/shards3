import { CORE_URL } from "./base";

export const SERVICE_ACCOUNT_ROLE_ORGANISATIONS_URL = () => `${CORE_URL()}/service-account-role-organisations`;
export const SERVICE_ACCOUNT_ROLE_ORGANISATION_URL = (serviceAccountRoleOrganisationId: string) => `${SERVICE_ACCOUNT_ROLE_ORGANISATIONS_URL()}/${encodeURIComponent(serviceAccountRoleOrganisationId)}`;