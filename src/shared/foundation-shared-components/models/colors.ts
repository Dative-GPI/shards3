export enum ColorEnum {
    Background = "background",
    Light      = "light",
    Dark       = "dark",
    Primary    = "primary",
    Error      = "error",
    Warning    = "warning",
    Success    = "success"
};

export interface ColorVariations {
    light: string;
    soft: string;
    base: string;
    dark: string;
};

export type ColorBase = (String | ColorEnum);