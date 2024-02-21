import { GATEWAY_URL } from "./base";

export const LAYOUT_PAGES_URL = () => `${GATEWAY_URL()}/layout-pages`;
export const LAYOUT_PAGE_CURRENT_URL = () => `${LAYOUT_PAGES_URL()}/current`;