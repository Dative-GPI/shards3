import { ref, watch } from "vue";

let initialized = false;

const organisationId = ref<string | null>(null);

export const useOrganisationId = () => {
    const setOrganisationId = (payload: string) => {
        organisationId.value = payload;
    };

    initialized = true;

    const ready = new Promise((resolve) => {
        if (organisationId.value) {
            resolve(organisationId.value);
        }
        else {
            watch(organisationId, () => {
                if (organisationId.value) {
                    resolve(organisationId.value);
                }
            });
        }
    });

    return {
        ready,
        organisationId,
        setOrganisationId
    };
}