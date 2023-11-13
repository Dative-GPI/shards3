import { BASE_URL } from "./base";

export const FILES_URL = `${BASE_URL}/files`;
export const FILE_URL = (fileId: string) => `${FILES_URL}/${fileId}`;