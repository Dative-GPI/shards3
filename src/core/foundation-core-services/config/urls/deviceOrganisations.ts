import { CORE_URL } from "./base";

export const DEVICE_ORGANISATIONS_URL = () => `${CORE_URL()}/device-organisations`;
export const DEVICE_ORGANISATION_URL = (deviceOrganisationId: string) => `${DEVICE_ORGANISATIONS_URL()}/${encodeURIComponent(deviceOrganisationId)}`;
export const DEVICE_ORGANISATION_GROUP_URL = (deviceOrganisationId: string) => `${DEVICE_ORGANISATION_URL(deviceOrganisationId)}/group`;
export const DEVICE_ORGANISATION_LOCATION_URL = (deviceOrganisationId: string) => `${DEVICE_ORGANISATION_URL(deviceOrganisationId)}/location`;