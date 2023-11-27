import { DEVICE_ORGANISATION_URL } from "./deviceOrganisations";
import { HUBS_URL } from "./base";

export const DEVICE_STATUS_URL = (deviceOrganisationId: string) => `${DEVICE_ORGANISATION_URL(deviceOrganisationId)}/status`;

export const DEVICE_STATUSES_HUB_URL = `${HUBS_URL}/statuses`;