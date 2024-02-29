import { Ref, onUnmounted, readonly, ref } from "vue";

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

    const fetching = ref(false);
    const fetched = ref<LandingPageDetails | null>(null) as Ref<LandingPageDetails | null>;

    onUnmounted(() => {
        subscribersIds.forEach(id => service.unsubscribe(id));
        subscribersIds.length = 0;
    });

    const fetch = async () => {
        fetching.value = true;
        try {
            fetched.value = await service.getCurrent();
        }
        finally {
            fetching.value = false;
        }
        subscribersIds.push(service.subscribe("all", onEntityChanged(fetched)));
        return readonly(fetched as Ref<LandingPageDetails>);
    }

    return {
        fetching: readonly(fetching),
        fetch,
        fetched: readonly(fetched)
    }
}