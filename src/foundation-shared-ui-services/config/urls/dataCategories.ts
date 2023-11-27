import { CORE_URL } from "./base";

export const DATA_CATEGORIES_URL = `${CORE_URL}/data-categories`;
export const DATA_CATEGORY_URL = (dataCategoryId: string) => `${DATA_CATEGORIES_URL}/${encodeURIComponent(dataCategoryId)}`;