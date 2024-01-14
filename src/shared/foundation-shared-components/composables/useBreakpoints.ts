export const useBreakpoints = () => {
    const isTouchScreenEnabled = (): boolean => {
        return navigator.maxTouchPoints > 0;
    };

    const isMobileSized = (): boolean => {
        return window.innerWidth < 1264;
    };

    return {
        isTouchScreenEnabled,
        isMobileSized
    };
}
