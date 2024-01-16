import { urlFactory } from "./urlFactory";

export const CORE_URL = urlFactory(organisationId => `/api/core/v1/organisations/${encodeURIComponent(organisationId)}`);
export const HUBS_URL = urlFactory(organisationId => `/api/hubs/v1/organisations/${encodeURIComponent(organisationId)}`);