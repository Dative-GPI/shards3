import { onUnmounted, ref } from "vue";

import { ApplicationDetails, ApplicationDetailsDTO } from "@dative-gpi/foundation-shared-domain/models";
import { onEntityChanged, ServiceFactory } from "@dative-gpi/bones-ui";

import { APPLICATION_CURRENT_URL } from "../../config/urls";

const ApplicationServiceFactory = new ServiceFactory<ApplicationDetailsDTO, ApplicationDetails>("application", ApplicationDetails).create(factory => factory.build(
    factory.addNotify((notifyService) => ({
        getCurrent: async (): Promise<ApplicationDetails> => {
            const response = await ServiceFactory.http.get(APPLICATION_CURRENT_URL());
            const result = new ApplicationDetails(response.data);

            notifyService.notify("update", result);

            return result;
        }
    }))
));

export const useCurrentApplication = () => {
    const service = ApplicationServiceFactory();
    const subscribersIds: number[] = [];

    const fetching = ref(false);
    const fetched = ref<ApplicationDetails | null>(null);

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
        return fetched;
    }

    return {
        fetching,
        fetch,
        fetched
    }
}