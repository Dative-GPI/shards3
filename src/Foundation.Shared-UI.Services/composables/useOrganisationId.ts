import { computed } from "vue"

export const useOrganisationId = () => {
    const organisationId = computed(() => "test"); //todo replace with inject

    return {
        organisationId
    }
}