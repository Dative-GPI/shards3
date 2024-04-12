import { CORE_URL } from "./base";

export const DASHBOARD_ORGANISATIONS_URL = () => `${CORE_URL()}/dashboard-organisations`;
export const DASHBOARD_ORGANISATION_URL = (dashboardId: string) => `${DASHBOARD_ORGANISATIONS_URL()}/${encodeURIComponent(dashboardId)}`;
export const DASHBOARD_ORGANISATION_LOCK_URL = (dashboardId: string) => `${DASHBOARD_ORGANISATION_URL(dashboardId)}/lock`;
export const DASHBOARD_ORGANISATION_FOLDER_URL = (dashboardId: string) => `${DASHBOARD_ORGANISATION_URL(dashboardId)}/folder`;