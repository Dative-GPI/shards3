import { onMounted, provide, ref, watch } from "vue";
import { useRouter } from "vue-router";

import { setOrganisationId } from "../config/urls/urlFactory";
import { ORGANISATION_ID } from "../config/literals";

let initialized = false;

const organisationId = ref<string | null>(null);

export const useOrganisationId = () => {
    if (!initialized) {
        provide(ORGANISATION_ID, organisationId);

        const router = useRouter();

        watch(router, () => {
            organisationId.value = router.currentRoute.value.params[ORGANISATION_ID] as string | null;
            setOrganisationId(organisationId);
        });

        onMounted(() => {
            if (organisationId.value) {
                return;
            }
            try {
                organisationId.value = router.currentRoute.value.params[ORGANISATION_ID] as string | null;
                setOrganisationId(organisationId);
            }
            catch {
                // Do nothing
            }
        });
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

    const force = (forceId: string): void => {
        initialized = true;
        organisationId.value = forceId;
        setOrganisationId(organisationId);
    }

    return {
        ready,
        organisationId,
        force
    };
}