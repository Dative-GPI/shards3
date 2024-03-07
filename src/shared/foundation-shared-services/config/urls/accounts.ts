import { GATEWAY_URL } from "./base";

export const LOCAL_ACCOUNT_URL = () => `${GATEWAY_URL}/local-accounts`

export const INVITATION_URL = (token: string) => `${LOCAL_ACCOUNT_URL}/invitations/${encodeURIComponent(token)}`;
export const VALIDATION_URL = () => `${LOCAL_ACCOUNT_URL}/validations`;

export const LOGIN_LOCAL_ACCOUNT_URL = () => `${LOCAL_ACCOUNT_URL}/login`;
export const LOCAL_ACCOUNT_PASSWORD_URL = () => `${LOCAL_ACCOUNT_URL}/password`;

export const LOGIN_EXTERNAL_URL = () => `${GATEWAY_URL}/external-accounts/login`;
export const SIGNUP_EXTERNAL_URL = () => `${GATEWAY_URL}/external-accounts`;

export const LOGOUT_URL = () => `${GATEWAY_URL}/accounts/logout`;
export const GLOBAL_LOGOUT_URL = () => `${GATEWAY_URL}/accounts/global-logout`;