import { computed, onMounted, onUnmounted, ref } from "vue";

export const useBreakpoints = () => {
    const windowWidth = ref(window.innerWidth);

    const onWidthChange = () => windowWidth.value = window.innerWidth;

    onMounted(() => {
        window.addEventListener("resize", onWidthChange);
    });

    onUnmounted(() => {
        window.removeEventListener("resize", onWidthChange);
    });

    const isTouchScreenEnabled = (): boolean => {
        return navigator.maxTouchPoints > 0;
    };

    const isMobileSized = computed((): boolean => {
        return windowWidth.value < 1264;
    });

    const isExtraSmall = computed((): boolean => {
        return windowWidth.value < 600;
    });

    return {
        isTouchScreenEnabled,
        isMobileSized,
        isExtraSmall
    };
}
