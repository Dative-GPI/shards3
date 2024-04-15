import { CORE_URL } from "./base";

export const DASHBOARDS_URL = () => `${CORE_URL()}/dashboards`;
export const DASHBOARD_CURRENT_URL = () => `${DASHBOARDS_URL()}/current`;