import { GATEWAY_URL } from "./base";

export const AUTH_TOKENS_URL = () => `${GATEWAY_URL()}/pats`;
export const AUTH_TOKEN_URL = (tokenId: string) => `${AUTH_TOKENS_URL()}/${encodeURIComponent(tokenId)}`;