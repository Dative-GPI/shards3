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
    lightContrast?: string;
    soft: string;
    softContrast?: string;
    base: string;
    baseContrast?: string;
    dark: string;
    darkContrast?: string;
};

export type ColorBase = (string | ColorEnum);