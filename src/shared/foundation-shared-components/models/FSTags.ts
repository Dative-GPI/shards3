import { ColorBase } from "@dative-gpi/foundation-shared-components/themes";

export interface FSTagItem {
    label: string,
    variant: "standard" | "full",
    color: ColorBase,
    editable: boolean
}