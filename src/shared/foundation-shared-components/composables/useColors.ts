import { useTheme } from "vuetify";

import Color from "color";

import { ColorBase, ColorEnum, ColorVariations } from "@dative-gpi/foundation-shared-components/models";

export const useColors = () => {
    const theme = useTheme().current.value;

    const isGrayScale = (color: Color): boolean => {
        const maxDiff = Math.max(
            Math.abs(color.red() - color.green()),
            Math.abs(color.green() - color.blue()),
            Math.abs(color.blue() - color.red())
        );
        return maxDiff < 10;
    };

    const lighten = (base: Color): Color => {
        if (isGrayScale(base)) {
            return base.value(Math.min(base.value() + 10, 100));
        }
        return base.saturationv(10).value(100);
    };

    const soften = (base: Color): Color => {
        return base.value(Math.min(base.value() + 10, 100));
    };

    const darken = (base: Color): Color => {
        return base.value(Math.max(base.value() - 15, 0));
    };

    const getColors = (color: ColorBase): ColorVariations => {
        const themed = (Object as any).values(ColorEnum).includes(color);

        const base = themed ? new Color(theme.colors[color as ColorEnum]) : new Color(color);
        const light = lighten(base);
        const soft = soften(base);
        const dark = darken(base);

        return {
            light: light.hex(),
            soft: soft.hex(),
            base: base.hex(),
            dark: dark.hex()
        };
    };

    const getContrasts = (color: ColorBase): ColorVariations => {
        const themed = (Object as any).values(ColorEnum).includes(color);

        const base = themed ? new Color(theme.colors[color as ColorEnum]) : new Color(color);

        if (isGrayScale(base)) {
            switch (color) {
                case ColorEnum.Light:
                    return getColors(ColorEnum.Dark);
                case ColorEnum.Dark:
                    return getColors(ColorEnum.Light);
                default:
                    if (base.value() > 50) {
                        base.value(Math.max(base.value() - 65, 0));
                    }
                    else {
                        base.value(Math.min(base.value() + 65, 100));
                    }
                    break;
            }
        }
        return getColors(color);
    };

    const getGradients = (colors: ColorBase | ColorBase[]): ColorVariations => {
        const variations = Array.isArray(colors) ? colors.map(getColors) : [getColors(colors)];

        if (variations.length === 1) {
            return variations[0];
        }
        return {
            light: `linear-gradient(90deg, ${variations.map(v => v.light).join(", ")})`,
            soft: `linear-gradient(90deg, ${variations.map(v => v.soft).join(", ")})`,
            base: `linear-gradient(90deg, ${variations.map(v => v.base).join(", ")})`,
            dark: `linear-gradient(90deg, ${variations.map(v => v.dark).join(", ")})`,
        };
    }

    return {
        getColors,
        getContrasts,
        getGradients
    };
}