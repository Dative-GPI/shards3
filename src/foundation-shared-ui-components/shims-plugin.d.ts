import Vue from "vue";

import { ColorBase } from "@dative-gpi/foundation-shared-ui-domain";

declare module "vue" {
    interface ComponentCustomProperties {
        $color: (key: ColorBase) => string;
    }
}