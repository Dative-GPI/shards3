import { onMounted, ref } from "vue";

import { useOrganisationId } from "@dative-gpi/foundation-core-services/composables";

let called = false;

const ready = ref(false);

export function useCore() {
    if (called) {
        return {
            ready
        };
    }

    called = true;

    const { ready: organisationIdReady } = useOrganisationId();

    onMounted(async () => {
        await organisationIdReady
        ready.value = true;
    });

    return {
        ready
    };
}