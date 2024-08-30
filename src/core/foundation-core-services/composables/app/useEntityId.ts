import { ref, watch } from "vue";
import { useRouter } from "vue-router";

import { ENTITY_ID } from "../../config";

export const useEntityId = () => {
    const entityId = ref<string | null>(null);

    const router = useRouter();

    watch(router.currentRoute, () => {
        const id = router.currentRoute.value.params[ENTITY_ID] as string | null;
        if(id) {
            entityId.value = id;
        }
    }, { immediate: true })

    return { entityId }
}