import { CORE_URL } from "./base";

export const DASHBOARD_SHALLOWS_URL = () => `${CORE_URL()}/dashboard-shallows`;
export const DASHBOARD_SHALLOW_URL = (dashboardShallowId: string) => `${DASHBOARD_SHALLOWS_URL()}/${encodeURIComponent(dashboardShallowId)}`;
export const DASHBOARD_SHALLOW_FOLDER_URL = (dashboardShallowId: string) => `${DASHBOARD_SHALLOW_URL(dashboardShallowId)}/folder`;