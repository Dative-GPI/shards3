import { CORE_URL } from "./base";

export const SERVICE_ACCOUNTS_URL = () => `${CORE_URL()}/service-accounts`;
export const SERVICE_ACCOUNT_URL = (serviceAccountId: string) => `${SERVICE_ACCOUNTS_URL()}/${encodeURIComponent(serviceAccountId)}`;