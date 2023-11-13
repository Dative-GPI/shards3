import { ORGANISATION_URL } from "./organisations";

export const LANGUAGES_URL = `${ORGANISATION_URL}/languages`;
export const LANGUAGE_URL = (languageId: string) => `${LANGUAGES_URL}/${encodeURIComponent(languageId)}`;