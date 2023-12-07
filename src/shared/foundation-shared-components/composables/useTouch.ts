export const useTouch = () => {
    const isEnabled = (): boolean => {
        return navigator.maxTouchPoints > 0;
    };

    return {
        isEnabled
    };
}
