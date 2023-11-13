import { ORGANISATION_URL } from "./organisations";

export const FAMILIES_URL = `${ORGANISATION_URL}/families`;
export const FAMILY_URL = (familyId: string) => `${FAMILIES_URL}/${encodeURIComponent(familyId)}`;