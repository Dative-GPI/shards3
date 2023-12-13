import { ThemeDefinition } from "vuetify";

export enum ColorBase {
    Background = "background",
    Light      = "light",
    Dark       = "dark",
    Primary    = "primary",
    Error      = "error",
    Warning    = "warning",
    Success    = "success"
};

export const DefaultTheme: ThemeDefinition = {
    dark: false,
    colors: {
        "background": "#F9F9F9",
        "light"     : "#DEE0E3",
        "dark"      : "#4D4D4D",
        "primary"   : "#0059E5",
        "success"   : "#56CC1F",
        "warning"   : "#FFB833",
        "error"     : "#EB1313"
    }
}