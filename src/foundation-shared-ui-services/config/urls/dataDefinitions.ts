import { ORGANISATION_URL } from "./organisations";

export const DATA_DEFINITIONS_URL = `${ORGANISATION_URL}/data-definitions`;
export const DATA_DEFINITION_URL = (dataDefinitionId: string) => `${DATA_DEFINITIONS_URL}/${encodeURIComponent(dataDefinitionId)}`;