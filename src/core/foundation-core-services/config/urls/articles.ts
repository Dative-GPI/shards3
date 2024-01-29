import { ORGANISATION_URL } from "./organisations";

export const ARTICLES_URL = () => `${ORGANISATION_URL()}/articles`;
export const ARTICLE_URL = (articleId: string) => `${ARTICLES_URL()}/${encodeURIComponent(articleId)}`;