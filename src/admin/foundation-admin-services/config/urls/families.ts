import { ADMIN_URL } from "./base";

export const FAMILIES_URL = () => `${ADMIN_URL()}/families`;
export const FAMILY_URL = (familyId: string) => `${FAMILIES_URL()}/${encodeURIComponent(familyId)}`;