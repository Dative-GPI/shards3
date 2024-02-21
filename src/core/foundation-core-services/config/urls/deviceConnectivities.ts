import { DEVICE_ORGANISATION_URL } from "./deviceOrganisations";
import { HUBS_URL } from "./base";

export const DEVICE_CONNECTIVITY_URL = (deviceOrganisationId: string) => `${DEVICE_ORGANISATION_URL(deviceOrganisationId)}/connectivity`;

export const DEVICE_CONNECTIVITIES_HUB_URL = () => `${HUBS_URL()}/connectivities`;