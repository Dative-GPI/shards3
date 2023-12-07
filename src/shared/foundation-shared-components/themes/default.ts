import { ThemeDefinition } from "vuetify";

export enum ColorBase {
    Light   = "light",
    Dark    = "dark",
    Primary = "primary",
    Error   = "error",
    Warning = "warning",
    Success = "success",
    Text    = "text"
};

export const DefaultTheme: ThemeDefinition = {
    dark: false,
    colors: {
        "light"   : "#DEE0E3",
        "dark"    : "#010814",
        "primary" : "#0059E5",
        "success" : "#56CC1F",
        "warning" : "#FFB833",
        "error"   : "#EB1313",
        "text"    : "#4D4D4D"
    }
}