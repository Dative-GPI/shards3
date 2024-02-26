import { CORE_URL } from "./base";

export const AUTH_TOKENS_URL = () => `${CORE_URL()}/pats`;
export const AUTH_TOKEN_URL = (authTokenId: string) => `${AUTH_TOKENS_URL()}/${encodeURIComponent(authTokenId)}`;