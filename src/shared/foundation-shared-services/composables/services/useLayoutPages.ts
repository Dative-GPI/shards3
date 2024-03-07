import { onUnmounted, ref } from "vue";

import { LayoutPageDetails, LayoutPageDetailsDTO } from "@dative-gpi/foundation-shared-domain/models";
import { onEntityChanged, ServiceFactory } from "@dative-gpi/bones-ui";

import { LAYOUT_PAGE_CURRENT_URL } from "../../config/urls";

const LayoutPageServiceFactory = new ServiceFactory<LayoutPageDetailsDTO, LayoutPageDetails>("layoutPage", LayoutPageDetails).create(factory => factory.build(
    factory.addNotify((notifyService) => ({
        getCurrent: async (): Promise<LayoutPageDetails> => {
            const response = await ServiceFactory.http.get(LAYOUT_PAGE_CURRENT_URL());
            const result = new LayoutPageDetails(response.data);

            notifyService.notify("update", result);

            return result;
        }
    }))
));

export const useCurrentLayoutPage = () => {
    const service = LayoutPageServiceFactory();
    const subscribersIds: number[] = [];

    const getting = ref(false);
    const entity = ref<LayoutPageDetails | null>(null);

    onUnmounted(() => {
        subscribersIds.forEach(id => service.unsubscribe(id));
        subscribersIds.length = 0;
    });

    const get = async () => {
        getting.value = true;
        try {
            entity.value = await service.getCurrent();
        }
        finally {
            getting.value = false;
        }
        subscribersIds.push(service.subscribe("all", onEntityChanged(entity)));
        return entity;
    }

    return {
        getting,
        get,
        entity
    }
}