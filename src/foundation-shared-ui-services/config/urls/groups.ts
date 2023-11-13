import { ORGANISATION_URL } from "./organisations";

export const GROUPS_URL = `${ORGANISATION_URL}/groups`;
export const GROUP_URL = (groupId: string) => `${GROUPS_URL}/${encodeURIComponent(groupId)}`;