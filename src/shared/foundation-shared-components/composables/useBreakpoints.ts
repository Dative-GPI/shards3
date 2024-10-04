import { computed, ref } from "vue";

let initialized = false;

const windowHeight = ref(window.outerHeight);
const windowWidth = ref(window.outerWidth);

export const useBreakpoints = () => {
    const onSizeChange = (): void => {
        windowHeight.value = window.outerHeight;
        windowWidth.value = window.outerWidth;
    };

    const isTouchScreenEnabled = computed((): boolean => {
        return navigator.maxTouchPoints > 0;
    });

    const isMobileSized = computed((): boolean => {
        return windowWidth.value < 1264;
    });

    const isExtraSmall = computed((): boolean => {
        return windowWidth.value < 600;
    });

    if (!initialized) {
        window.addEventListener("resize", onSizeChange);
        initialized = true;
    }

    const fontStyles = computed(() => ({
        "--fs-font-h1-font-size"           : isMobileSized.value ? "28px" : "36px",
        "--fs-font-h1-line-height"         : isMobileSized.value ? "32px" : "40px",
        "--fs-font-h1-letter-spacing"      : isMobileSized.value ? "-1.4px" : "-0.72px",
        "--fs-font-h2-font-size"           : isMobileSized.value ? "22px" : "26px",
        "--fs-font-h2-line-height"         : isMobileSized.value ? "24px" : "32px",
        "--fs-font-h2-letter-spacing"      : isMobileSized.value ? "-0.88px" : "-0.78px",
        "--fs-font-h3-font-size"           : isMobileSized.value ? "16px" : "20px",
        "--fs-font-h3-line-height"         : isMobileSized.value ? "20px" : "24px",
        "--fs-font-h3-letter-spacing"      : isMobileSized.value ? "-0.48px" : "-0.6px",
        "--fs-font-button-font-size"       : isMobileSized.value ? "12px" : "14px",
        "--fs-font-button-line-height"     : isMobileSized.value ? "16px" : "20px",
        "--fs-font-button-letter-spacing"  : isMobileSized.value ? "-0.36px" : "-0.42px",
        "--fs-font-overline-font-size"     : isMobileSized.value ? "10px" : "12px",
        "--fs-font-overline-line-height"   : isMobileSized.value ? "16px" : "16px",
        "--fs-font-overline-letter-spacing": isMobileSized.value ? "0" : "0",
        ...bodyStyle.value
    }));

    const bodyStyle = computed(() => ({
        "--fs-font-body-font-size"     : isMobileSized.value ? "12px" : "14px",
        "--fs-font-body-line-height"   : isMobileSized.value ? "16px" : "20px",
        "--fs-font-body-letter-spacing": isMobileSized.value ? "-0.36px" : "-0.42px",
    }));

    return {
        isTouchScreenEnabled,
        isMobileSized,
        isExtraSmall,
        windowHeight,
        windowWidth,
        fontStyles,
        bodyStyle
    };
}
