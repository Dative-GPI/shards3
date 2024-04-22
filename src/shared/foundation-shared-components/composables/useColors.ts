import { useTheme } from "vuetify";

import Color from "color";

import { ColorBase, ColorEnum, ColorVariations } from "@dative-gpi/foundation-shared-components/models";

export const useColors = () => {
    const theme = useTheme().current.value;
    const baseMinSaturation = 55;
    const baseFixedBrightness = 90;

    const isGrayScale = (color: Color): boolean => {
        const maxDiff = Math.max(
            Math.abs(color.red() - color.green()),
            Math.abs(color.green() - color.blue()),
            Math.abs(color.blue() - color.red())
        );
        return maxDiff < 10;
    };

    const isPastel = (color: Color): boolean => {
        return color.saturationv() <= 15 && color.value() >= 85;
    };

    const getLight = (base: Color): Color => {
        if (isGrayScale(base)) {
            return base.value(Math.min(base.value() + 10, 100));
        }
        return base.saturationv(10).value(100);
    };

    const getSoft = (base: Color): Color => {
        return base.value(Math.min(base.value() + 10, 100));
    };

    const getBase = (base: Color): Color => {
        if (isGrayScale(base)) {
            return base.saturationv(1);
        }
        const saturation = base.saturationv() > baseMinSaturation ? base.saturationv() : baseMinSaturation;
        return base.saturationv(saturation).value(baseFixedBrightness);
    };

    const getDark = (base: Color): Color => {
        return base.value(Math.max(base.value() - 15, 0));
    };

    const getContrast = (color: Color, fallback: Color): Color => {
        if (isGrayScale(color)) {
            if (color.value() > 50) {
                return color.value(Math.max(0, color.value() - 75));
            }
            else {
                return color.value(Math.min(100, color.value() + 75));
            }
        }
        return fallback;
    }

    const getColors = (color: ColorBase): ColorVariations => {
        const themed = (Object as any).values(ColorEnum).includes(color);

        const seed = themed ? new Color(theme.colors[color as ColorEnum]) : new Color(color);

        const base = getBase(seed);
        const light = getLight(base);
        const soft = getSoft(base);
        const dark = getDark(base);

        if (isPastel(seed)) {
            return {
                light: getLight(seed).hex(),
                lightContrast: getContrast(light, dark).hex(),
                soft: getSoft(seed).hex(),
                softContrast: getContrast(seed, dark).hex(),
                base: seed.hex(),
                baseContrast: getContrast(seed, dark).hex(),
                dark: dark.hex(),
                darkContrast: getContrast(dark, light).hex()
            };
        }

        switch (color) {
            case ColorEnum.Background: return {
                light: base.hex(),
                lightContrast: getContrast(base, base).hex(),
                soft: base.hex(),
                softContrast: getContrast(base, base).hex(),
                base: base.hex(),
                baseContrast: getContrast(base, base).hex(),
                dark: dark.hex(),
                darkContrast: getContrast(dark, base).hex()
            };
            default: return {
                light: light.hex(),
                lightContrast: getContrast(light, dark).hex(),
                soft: soft.hex(),
                softContrast: getContrast(soft, light).hex(),
                base: base.hex(),
                baseContrast: getContrast(base, light).hex(),
                dark: dark.hex(),
                darkContrast: getContrast(dark, light).hex()
            };
        }
    };

    const getGradients = (colors: ColorBase | ColorBase[], rotation: number = 90): ColorVariations => {
        const variations = Array.isArray(colors) ? colors.map(getColors) : [getColors(colors)];

        if (variations.length === 1) {
            return variations[0];
        }
        return {
            light: `linear-gradient(${rotation}deg, ${variations.map(v => v.light).join(", ")})`,
            soft: `linear-gradient(${rotation}deg, ${variations.map(v => v.soft).join(", ")})`,
            base: `linear-gradient(${rotation}deg, ${variations.map(v => v.base).join(", ")})`,
            dark: `linear-gradient(${rotation}deg, ${variations.map(v => v.dark).join(", ")})`,
        };
    }

    const getBasePaletteColors = (): string[][] => {
        const columnCount = 5
        const colors: string[][] = [];
        for (let saturation = baseMinSaturation; saturation <= 100; saturation += (100 - baseMinSaturation) / (columnCount - 1)) {
            let colorsRow = [];
            for (let hue = 0; hue < 360; hue += 15) {
                const color = new Color({ h: hue, s: saturation, v: baseFixedBrightness });
                colorsRow.push(color.hex());
            }
            colors.push(colorsRow)
        }
        let i = 0;
        for (let brightness = 5; brightness <= 95; brightness += (90 / (columnCount - 1))) {
            const color = new Color({ h: 0, s: 1, v: 100 - brightness });
            colors[i].unshift(color.hex());
            i++;
        }
        return colors;
    }


    return {
        getColors,
        getGradients,
        getBasePaletteColors
    };
}