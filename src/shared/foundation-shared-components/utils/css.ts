export const sizeToVar = (value: string | number | null, nullValue: string = "fit-content", unit: "px" | "%" | "em"| "vw" | "vh" = "px"): string => {
    if (value == null) {
        return nullValue;
    }

    return typeof value === 'string' && isNaN(+value) ? value : `${value}${unit}`;
};

export const varToSize = (value: string): number => {
    const parsed = parseInt(value.replace(/[^0-9.]/g, ''));
    return isNaN(parsed) ? 0 : parsed;
}