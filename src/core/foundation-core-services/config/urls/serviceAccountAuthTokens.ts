import { SERVICE_ACCOUNT_URL } from "./serviceAccounts";


export const SERVICE_ACCOUNT_AUTH_TOKENS_URL = (serviceAccountId: string) => `${SERVICE_ACCOUNT_URL(serviceAccountId)}/pats`;
export const SERVICE_ACCOUNT_AUTH_TOKEN_URL = (serviceAccountId: string, authTokenId: string) => `${SERVICE_ACCOUNT_AUTH_TOKENS_URL(serviceAccountId)}/${encodeURIComponent(authTokenId)}`;