import { CORE_URL } from "./base";

export const DATA_DEFINITIONS_URL = () => `${CORE_URL()}/data-definitions`;
export const DATA_DEFINITION_URL = (dataDefinitionId: string) => `${DATA_DEFINITIONS_URL()}/${encodeURIComponent(dataDefinitionId)}`;