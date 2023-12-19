import { useTheme } from "vuetify";

import Color from "color";

import { ColorBase } from "@dative-gpi/foundation-shared-components/themes";

export const useColors = () => {
    const theme = useTheme().current.value;

    const lighten = (color: Color): Color => color.saturationv(10).value(100);

    const darken = (color: Color): Color => color.value(Math.max(color.value() - 30, 0));

    const getBackground = () => {
        const base = new Color(theme.colors[ColorBase.Background]);

        return {
            base: base.hex()
        };
    }

    const getLight = (color: ColorBase, base: Color): Color => {
        switch (color) {
            case ColorBase.Light: return base.value(Math.max(base.value() - 20, 0));
            case ColorBase.Dark: return base.saturationv(Math.max(base.saturationv() - 80, 0)).value(Math.min(base.value() + 40, 100));
            default: return lighten(base);
        }
    };

    const getVariants = (color: ColorBase | String) => {
        const themed = (Object as any).values(ColorBase).includes(color);

        const base = themed ? new Color(theme.colors[color as ColorBase]) : new Color(color);
        const light = themed ? getLight(color as ColorBase, base) : lighten(base);
        const dark = darken(base);

        return {
            light: light.hex(),
            base: base.hex(),
            dark: dark.hex()
        };
    };

    return {
        getBackground,
        getVariants
    };
}