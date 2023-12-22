import { useTheme } from "vuetify";

import Color from "color";

import { ColorBase } from "@dative-gpi/foundation-shared-components/themes";

export const useColors = () => {
    const theme = useTheme().current.value;

    const lighten = (color: ColorBase, base: Color): Color => {
        switch (color) {
            case ColorBase.Light:
            case ColorBase.Dark: return base.value(Math.min(base.value() + 10, 100));
            default: return base.saturationv(10).value(Math.min(base.value() + 10, 100));
        }
    };

    const darken = (base: Color): Color => {
        return base.value(Math.max(base.value() - 15, 0));
    };

    const getColors = (color: ColorBase | String) => {
        const themed = (Object as any).values(ColorBase).includes(color);

        const base = themed ? new Color(theme.colors[color as ColorBase]) : new Color(color);
        const light = lighten(color as ColorBase, base);
        const dark = darken(base);

        return {
            light: light.hex(),
            base: base.hex(),
            dark: dark.hex()
        };
    };

    const getContrasts = (color: ColorBase | string) => {
        switch (color) {
            case ColorBase.Light: {
                const base = new Color(theme.colors[ColorBase.Dark]);
                return {
                    light: base.hex(),
                    base: base.hex(),
                    dark: base.hex()
                };
            }
            default: {
                return getColors(color);
            }
        }
    }

    return {
        getColors,
        getContrasts
    };
}