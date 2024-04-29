import { CORE_URL } from "./base";

export const CHART_ORGANISATIONS_URL = () => `${CORE_URL()}/chart-organisations`;
export const CHART_ORGANISATION_URL = (chartOrganisationId: string) => `${CHART_ORGANISATIONS_URL()}/${encodeURIComponent(chartOrganisationId)}`;
