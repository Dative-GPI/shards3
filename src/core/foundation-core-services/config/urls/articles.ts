import { CORE_URL } from "./base";

export const ARTICLES_URL = () => `${CORE_URL()}/articles`;
export const ARTICLE_URL = (articleId: string) => `${ARTICLES_URL()}/${encodeURIComponent(articleId)}`;