import { computed, onMounted, onUnmounted, ref } from "vue";

let initialized = false;

export const useBreakpoints = () => {
    const windowWidth = ref(window.innerWidth);

    const onSizeChange = (): void => {
        windowWidth.value = window.innerWidth;
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

    return {
        isTouchScreenEnabled,
        isMobileSized,
        isExtraSmall
    };
}
