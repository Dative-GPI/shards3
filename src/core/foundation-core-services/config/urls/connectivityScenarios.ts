import { CORE_URL } from "./base";

export const CONNECTIVITY_SCENARIOS_URL = () => `${CORE_URL()}/connectivity-scenarios`;
export const CONNECTIVITY_SCENARIO_URL = (connectivityScenarioId: string) => `${CONNECTIVITY_SCENARIOS_URL()}/${encodeURIComponent(connectivityScenarioId)}`;