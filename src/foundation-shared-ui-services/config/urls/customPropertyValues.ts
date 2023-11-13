import { PropertyEntity } from "@dative-gpi/foundation-shared-ui-domain";

import { ORGANISATION_URL } from "./organisations";

export const CUSTOM_PROPERTY_VALUES_URL = (entity: PropertyEntity, entityId: string, code: string) => `${ORGANISATION_URL}/custom-property-values/${encodeURIComponent(entity)}/${encodeURIComponent(entityId)}/${encodeURIComponent(code)}`;