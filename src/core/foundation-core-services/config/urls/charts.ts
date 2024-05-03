import { CORE_URL } from "./base";

export const CHARTS_URL = () => `${CORE_URL()}/charts`;
export const CHART_URL = (chartId: string) => `${CHARTS_URL()}/${encodeURIComponent(chartId)}`;