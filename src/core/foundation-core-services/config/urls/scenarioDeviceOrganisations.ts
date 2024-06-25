import { CORE_URL } from "./base";

export const SCENARIO_DEVICE_ORGANISATIONS_URL = () => `${CORE_URL()}/scenario-device-organisations`;
export const SCENARIO_DEVICE_ORGANISATION_URL = (scenarioDeviceOrganisation : string) => `${SCENARIO_DEVICE_ORGANISATIONS_URL()}/${encodeURIComponent(scenarioDeviceOrganisation)}`;