import { CORE_URL } from "./base";

export const GROUPS_URL = () => `${CORE_URL()}/groups`;
export const GROUP_URL = (groupId: string) => `${GROUPS_URL()}/${encodeURIComponent(groupId)}`;