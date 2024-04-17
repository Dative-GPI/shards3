import { computed, ref } from "vue";

const jwt = ref<string | undefined>(undefined);

export const useExtensionJwt = () => {
    const setExtensionJwt = (payload: string) => {
        jwt.value = payload;
    };

    const ready = computed(() => jwt.value !== null);

    return {
        jwt,
        ready,
        setExtensionJwt
    };
}