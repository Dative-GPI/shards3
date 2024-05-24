export enum ColorEnum {
    Background = "background",
    Light      = "light",
    Dark       = "dark",
    Primary    = "primary",
    Error      = "error",
    Warning    = "warning",
    Success    = "success"
}

export interface ColorVariations {
    light: string;
    lightContrast?: string | null;
    soft: string;
    softContrast?: string | null;
    base: string;
    baseContrast?: string | null;
    dark: string;
    darkContrast?: string | null;
}

export type ColorBase = (string | ColorEnum);