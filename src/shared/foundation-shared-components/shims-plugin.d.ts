import Vue from "vue";

import { ColorBase } from "@dative-gpi/foundation-shared-components/models";

declare module "vue" {
    interface ComponentCustomProperties {
        $color: (key: ColorBase) => string;
        $tr: (code: string, defaultValue: string | null) => string | null;
    }
}