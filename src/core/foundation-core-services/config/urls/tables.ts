import { CORE_URL } from "./base";

export const TABLES_URL = () => `${CORE_URL()}/tables`;
export const TABLE_URL = (tableCode: string) => `${TABLES_URL()}/${encodeURIComponent(tableCode)}`;