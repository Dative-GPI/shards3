import { useBreakpoints } from "../composables/useBreakpoints";

const { isMobileSized, isExtraSmall } = useBreakpoints();

export const sizeToVar = (value: string[] | number[] | string | number | null, nullValue: string = "fit-content", unit: "px" | "%" | "em"| "vw" | "vh" = "px"): string => {
    if (value == null) {
        return nullValue;
    }
    if (Array.isArray(value)) {
        if (isExtraSmall.value) {
            const extraSmallValue = value[2] ?? value[1] ?? value[0];
            if (typeof extraSmallValue === "string" && isNaN(+extraSmallValue)) {
                switch (extraSmallValue) {
                    case "s": return "14px";
                    case "m": return "16px";
                    case "l": return "20px";
                    default : return extraSmallValue;
                }
            }
            return `${extraSmallValue}${unit}`;
        }
        if (isMobileSized.value) {
            const mobileValue = value[1] ?? value[0];
            if (typeof mobileValue === "string" && isNaN(+mobileValue)) {
                switch (mobileValue) {
                    case "s": return "14px";
                    case "m": return "16px";
                    case "l": return "20px";
                    default : return mobileValue;
                }
            }
            return `${mobileValue}${unit}`;
        }
        if (typeof value[0] === "string" && isNaN(+value[0])) {
            switch (value[0]) {
                case "s": return "16px";
                case "m": return "20px";
                case "l": return "24px";
                default : return value[0];
            }
        }
        return `${value[0]}${unit}`;
    }
    if (typeof value === "string" && isNaN(+value)) {
        switch (value) {
            case "s": return isMobileSized.value ? "14px" : "16px";
            case "m": return isMobileSized.value ? "16px" : "20px";
            case "l": return isMobileSized.value ? "20px" : "24px";
            default : return value;
        }
    }
    return `${value}${unit}`;
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
};