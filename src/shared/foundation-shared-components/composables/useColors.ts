import { useTheme } from "vuetify";

import Color from "color";

import { ColorBase } from "@dative-gpi/foundation-shared-components/themes";

export const useColors = () => {
    const theme = useTheme().current.value;

    const lighten = (color: Color): Color => color.saturationv(10).value(100);

    const darken = (color: Color): Color => color.value(Math.max(color.value() - 30, 0));

    const getLight = (color: ColorBase, base: Color): Color => {
        switch (color) {
            case ColorBase.Light: return base.value(Math.min(base.value() + 20, 100));
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

    const getTexts = (color: ColorBase | string, textColor: ColorBase | string) => {
        const backgrounds = getVariants(color);
        const texts = Object.keys(getVariants(textColor)).map(key => getVariants(textColor)[key]);

        const maxContrast = (background: string, texts: string[]): string =>
            texts.reduce((prev, curr) => Color(curr).contrast(Color(background)) > Color(prev).contrast(Color(background)) ? curr : prev);

        return {
            light: maxContrast(backgrounds.light, texts),
            base: maxContrast(backgrounds.base, texts),
            dark: maxContrast(backgrounds.dark, texts)
        }
    };

    const testChatGPT = (color: ColorBase | string) => {
        const themed = (Object as any).values(ColorBase).includes(color);
        const base = themed ? new Color(theme.colors[color as ColorBase]) : new Color(color);

        return {
            light: base.value(Math.min(100, base.value() + 20)).hex(),
            base: base.hex(),
            dark: base.value(Math.min(100, base.value() - 20)).hex(),
            lightText: base.value(90).hex(),
            baseText: base.value(50).hex(),
            darkText: base.value(10).hex()
        }
    }

    return {
        getVariants,
        getTexts,
        testChatGPT
    };
}