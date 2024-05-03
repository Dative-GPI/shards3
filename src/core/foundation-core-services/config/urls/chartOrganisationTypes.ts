import { CORE_URL } from "./base";

export const CHART_ORGANISATION_TYPES_URL = () => `${CORE_URL()}/chart-organisation-types`;
export const CHART_ORGANISATION_TYPE_URL = (chartOrganisationrTypeId: string) => `${CHART_ORGANISATION_TYPES_URL()}/${encodeURIComponent(chartOrganisationrTypeId)}`;
