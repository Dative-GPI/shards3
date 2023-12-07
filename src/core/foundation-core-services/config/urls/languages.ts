import { CORE_URL } from "./base";

export const LANGUAGES_URL = `${CORE_URL}/languages`;
export const LANGUAGE_URL = (languageId: string) => `${LANGUAGES_URL}/${encodeURIComponent(languageId)}`;