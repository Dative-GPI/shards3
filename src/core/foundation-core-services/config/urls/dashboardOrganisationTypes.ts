import { CORE_URL } from "./base";

export const DASHBOARD_ORGANISATION_TYPES_URL = () => `${CORE_URL()}/dashboard-organisation-types`;
export const DASHBOARD_ORGANISATION_TYPE_URL = (dashboardId: string) => `${DASHBOARD_ORGANISATION_TYPES_URL()}/${encodeURIComponent(dashboardId)}`;
export const DASHBOARD_ORGANISATION_TYPE_LOCK_URL = (dashboardId: string) => `${DASHBOARD_ORGANISATION_TYPES_URL()}/${encodeURIComponent(dashboardId)}/lock`;