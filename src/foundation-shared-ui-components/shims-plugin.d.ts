import Vue from "vue";

import { ColorBase } from "@dative-gpi/foundation-shared-ui-components/themes";

declare module "vue" {
    interface ComponentCustomProperties {
        $color: (key: ColorBase) => string;
    }
}