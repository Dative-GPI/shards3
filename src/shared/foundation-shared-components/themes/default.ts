import { ThemeDefinition } from "vuetify";

export const DefaultTheme: ThemeDefinition = {
    dark: false,
    colors: {
        "background": "#F9F9F9",
        "light"     : "#E1E2E3", // hsv(216, 1,   89)
        "dark"      : "#3F4040", // hsv(211, 1,   25)
        "primary"   : "#0059E5", // hsv(217, 100, 90)
        "success"   : "#6DE038", // hsv(101, 75,  88)
        "warning"   : "#E6A52E", // hsv(39,  80,  90)
        "error"     : "#E01212"  // hsv(0,   92,  88)
    }
}