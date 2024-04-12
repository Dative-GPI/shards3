import { CORE_URL } from "./base";

export const FOLDERS_URL = () => `${CORE_URL()}/folders`;
export const FOLDER_URL = (folderId: string) => `${FOLDERS_URL()}/${encodeURIComponent(folderId)}`;
export const FOLDER_PARENT_URL = (folderId: string) => `${FOLDER_URL(folderId)}/parent`;