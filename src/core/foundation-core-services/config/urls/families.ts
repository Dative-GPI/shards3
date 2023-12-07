import { CORE_URL } from "./base";

export const FAMILIES_URL = `${CORE_URL}/families`;
export const FAMILY_URL = (familyId: string) => `${FAMILIES_URL}/${encodeURIComponent(familyId)}`;