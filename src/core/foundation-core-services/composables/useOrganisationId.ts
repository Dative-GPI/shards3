import { provide, ref, watch } from "vue";

import { ORGANISATION_ID } from "@dative-gpi/foundation-core-services/config/literals";

let initialized = false;

const organisationId = ref<string | null>(null);

export const useOrganisationId = () => {
    const setOrganisationId = (payload: string) => {
        organisationId.value = payload;
    };

    if (!initialized) {
        provide(ORGANISATION_ID, organisationId);
    }

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