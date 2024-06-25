import type { PropertyEntity } from "@dative-gpi/foundation-core-domain/models";

import { CORE_URL } from "./base";

export const CUSTOM_PROPERTY_VALUES_URL = (entity: PropertyEntity, entityId: string, code: string) => `${CORE_URL()}/custom-property-values/${encodeURIComponent(entity)}/${encodeURIComponent(entityId)}/${encodeURIComponent(code)}`;