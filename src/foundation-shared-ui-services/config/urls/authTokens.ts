import { ORGANISATION_URL } from "./organisations";

export const AUTH_TOKENS_URL = `${ORGANISATION_URL}/pats`;
export const AUTH_TOKEN_URL = (authTokenId: string) => `${AUTH_TOKENS_URL}/${encodeURIComponent(authTokenId)}`;