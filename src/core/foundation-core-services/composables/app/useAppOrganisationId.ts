import { computed, ref } from "vue";

const organisationId = ref<string | null>(null);

export const useAppOrganisationId = () => {

    const setAppOrganisationId = (payload: string) => {
        organisationId.value = payload;
    };

    const ready = computed(() => organisationId.value !== null);

    return {
        ready,
        organisationId,
        setAppOrganisationId
    };
}