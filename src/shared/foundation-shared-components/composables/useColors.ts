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
            lightContrast: getContrast(light.hex()),
            soft: soft.hex(),
            softContrast: getContrast(soft.hex()),
            base: base.hex(),
            baseContrast: getContrast(base.hex()),
            dark: dark.hex(),
            darkContrast: getContrast(dark.hex())
        };
    };

    const getContrast = (color: ColorBase): string => {
        let base = new Color(color);

        let result: Color = new Color(base);

        if(result.isDark()){
            if(result.lightness() == 0)
            {
                result = result.value(90);
            }
            else {
                result = result.lighten(75 / result.lightness());
            }
        }
        else{
            result = result.darken(0.8);
        }
        // if (base.saturationv() > 75 || base.saturationv() < 25) {
        //     result = base.saturationv(100 - base.saturationv());
        // }
        // else {
        //     result = new Color(base);
        // }

        // bright colors
        // if (base.value() >= 70) {
        //     result = result.value(Math.max(0, base.value() - 75))
        //     // powerfull colors
        //     if (base.saturationv() > 70) {
        //         result = result.saturationv(100 - base.saturationv());
        //     }
        //     // pastel colors
        //     else if (base.saturationv() < 30) {
        //         result = result.saturationv(100 - base.saturationv());
        //     }
        // }
        // // dark colors
        // else if (base.value() <= 30) {
        //     // result = result.value(Math.min(100, base.value() + 75))
        //     result = result.value(90)
        // }
        // // other colors
        // else {
        //     if (base.saturationv() > 40) {
        //         result = result.value(100)
        //     }
        //     else {
        //         result = result.value(0)
        //     }
        // }

        return result.hex();
    }

    const getContrasts = (color: ColorBase): ColorVariations => {
        const themed = (Object as any).values(ColorEnum).includes(color);

        let base = themed ? new Color(theme.colors[color as ColorEnum]) : new Color(color);

        if (isGrayScale(base)) {
            switch (color) {
                case ColorEnum.Light:
                    return getColors(ColorEnum.Dark);
                case ColorEnum.Dark:
                    return getColors(ColorEnum.Light);
                default:
                    if (base.value() > 50) {
                        base = base.value(Math.max(base.value() - 65, 0));
                    }
                    else {
                        base = base.value(Math.min(base.value() + 65, 100));
                    }
                    break;
            }
        }
        return getColors(base.hex());
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