import Vue from "vue"; // eslint-disable-line

import type { ColorBase } from "@dative-gpi/foundation-shared-components/models";

declare module "vue" {
    interface ComponentCustomProperties {
        $color: (key: ColorBase) => string;
    }
}

declare module 'googlemaps';