import { CORE_URL } from "./base";

export const COMMENTS_URL = `${CORE_URL}/comments`;
export const COMMENT_URL = (commentId: string) => `${COMMENTS_URL}/${encodeURIComponent(commentId)}`;