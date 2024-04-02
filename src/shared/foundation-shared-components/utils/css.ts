import { useBreakpoints } from "../composables/useBreakpoints";

const { isMobileSized, isExtraSmall } = useBreakpoints();

export const sizeToVar = (value: string[] | number[] | string | number | null, nullValue: string = "fit-content", unit: "px" | "%" | "em"| "vw" | "vh" = "px"): string => {
    if (value == null) {
        return nullValue;
    }
    if (Array.isArray(value)) {
        if (isExtraSmall.value) {
            const extraSmallValue = value[2] ?? value[1] ?? value[0];
            return typeof extraSmallValue === 'string' && isNaN(+extraSmallValue) ? extraSmallValue : `${extraSmallValue}${unit}`;
        }
        if (isMobileSized.value) {
            const mobileValue = value[1] ?? value[0];
            return typeof mobileValue === 'string' && isNaN(+mobileValue) ? mobileValue : `${mobileValue}${unit}`;
        }
        return typeof value[0] === 'string' && isNaN(+value[0]) ? value[0] : `${value[0]}${unit}`;
    }
    return typeof value === 'string' && isNaN(+value) ? value : `${value}${unit}`;
};

export const varToSize = (value: string[] | number[] | string | number | null): number => {
    if (value == null) {
        return 0;
    }
    if (Array.isArray(value)) {
        if (isExtraSmall.value) {
            const extraSmallValue = value[2] ?? value[1] ?? value[0];
            if (typeof extraSmallValue === 'number') {
                return extraSmallValue;
            }
            const parsed = parseInt(extraSmallValue.replace(/[^0-9.]/g, ''));
            return isNaN(parsed) ? 0 : parsed;
        }
        if (isMobileSized.value) {
            const mobileValue = value[1] ?? value[0];
            if (typeof mobileValue === 'number') {
                return mobileValue;
            }
            const parsed = parseInt(mobileValue.replace(/[^0-9.]/g, ''));
            return isNaN(parsed) ? 0 : parsed;
        }
        if (typeof value[0] === 'number') {
            return value[0];
        }
        const parsed = parseInt(value[0].replace(/[^0-9.]/g, ''));
        return isNaN(parsed) ? 0 : parsed;
    }
    if (typeof value === 'number') {
        return value;
    }
    const parsed = parseInt(value.replace(/[^0-9.]/g, ''));
    return isNaN(parsed) ? 0 : parsed;
}