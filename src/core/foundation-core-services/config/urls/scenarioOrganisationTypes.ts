import { CORE_URL } from "./base";

export const SCENARIO_ORGANISATION_TYPES_URL = () => `${CORE_URL()}/scenario-organisation-types`;
export const SCENARIO_ORGANISATION_TYPE_URL = (scenarioOrganisationTypeId: string) => `${SCENARIO_ORGANISATION_TYPES_URL()}/${encodeURIComponent(scenarioOrganisationTypeId)}`;