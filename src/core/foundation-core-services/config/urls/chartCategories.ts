import { CORE_URL } from "./base";

export const CHART_CATEGORIES_URL = () => `${CORE_URL()}/chart-categories`;
export const CHART_CATEGORY_URL = (chartCategoryId: string) => `${CHART_CATEGORIES_URL()}/${encodeURIComponent(chartCategoryId)}`;