import { GATEWAY_URL } from "./base";

export const FILES_URL = `${GATEWAY_URL}/files`;
export const FILE_URL = (fileId: string) => `${FILES_URL}/${fileId}`;