import { onUnmounted, ref } from "vue";

import { LandingPageDetails, LandingPageDetailsDTO } from "@dative-gpi/foundation-shared-domain/models";
import { onEntityChanged, ServiceFactory } from "@dative-gpi/bones-ui";

import { LANDING_PAGE_CURRENT_URL } from "../../config/urls";

const LandingPageServiceFactory = new ServiceFactory<LandingPageDetailsDTO, LandingPageDetails>("landingPage", LandingPageDetails).create(factory => factory.build(
    factory.addNotify((notifyService) => ({
        getCurrent: async (): Promise<LandingPageDetails> => {
            const response = await ServiceFactory.http.get(LANDING_PAGE_CURRENT_URL());
            const result = new LandingPageDetails(response.data);

            notifyService.notify("update", result);

            return result;
        }
    }))
));

export const useCurrentLandingPage = () => {
    const service = LandingPageServiceFactory();
    const subscribersIds: number[] = [];

    const getting = ref(false);
    const entity = ref<LandingPageDetails | null>(null);

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