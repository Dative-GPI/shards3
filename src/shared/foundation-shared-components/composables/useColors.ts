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

    const getLight = () => {
        const base = new Color(theme.colors[ColorBase.Light]);
        const light = base.value(Math.max(base.value() - 20, 0));
        const dark = darken(base);

        return {
            light: light.hex(),
            base: base.hex(),
            dark: dark.hex()
        };
    };

    const getDark = () => {
        const base = new Color(theme.colors[ColorBase.Dark]);
        const light = base.saturationv(Math.max(base.saturationv() - 80, 0)).value(Math.min(base.value() + 40, 100));
        const dark = darken(base);

        return {
            light: light.hex(),
            base: base.hex(),
            dark: dark.hex()
        };
    };

    const getVariants = (color: ColorBase) => {
        const base = new Color(theme.colors[color]);
        const light = lighten(base);
        const dark = darken(base);

        return {
            light: light.hex(),
            base: base.hex(),
            dark: dark.hex()
        };
    };

    return {
        getBackground,
        getLight,
        getDark,
        getVariants
    };
}