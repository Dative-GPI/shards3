import { CORE_URL } from "./base";

export const SCENARIO_ORGANISATIONS_URL = () => `${CORE_URL()}/scenario-organisations`;
export const SCENARIO_ORGANISATION_URL = (scenarioOrganisationId: string) => `${SCENARIO_ORGANISATIONS_URL()}/${encodeURIComponent(scenarioOrganisationId)}`;