import { ADMIN_URL } from "./base";

export const APPLICATION_LANGUAGES_URL = () => `${ADMIN_URL()}/application-languages`;
export const APPLICATION_LANGUAGE_URL = (languageCode: string) => `${APPLICATION_LANGUAGES_URL()}/${encodeURIComponent(languageCode)}`;