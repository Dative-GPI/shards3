import { Ref, onUnmounted, readonly, ref } from "vue";

import { ApplicationDetails, ApplicationDetailsDTO } from "@dative-gpi/foundation-shared-ui-domain";
import { onEntityChanged, ServiceFactory } from "@dative-gpi/bones-ui";

import { APPLICATION_CURRENT_URL } from "../../config/urls";

const ApplicationServiceFactory = new ServiceFactory<ApplicationDetailsDTO, ApplicationDetails>("application", ApplicationDetails).create(factory => factory.build(
    factory.addNotify((notifyService) => ({
        getCurrent: async (): Promise<ApplicationDetails> => {
            const response = await ServiceFactory.http.get(APPLICATION_CURRENT_URL);
            const result = new ApplicationDetails(response.data);

            notifyService.notify("update", result);

            return result;
        }
    }))
));

export const useCurrentApplication = () => {
    const service = ApplicationServiceFactory();

    const fetching = ref(false);
    const fetched = ref<ApplicationDetails | null>(null) as Ref<ApplicationDetails | null>;

    const fetch = async () => {
        fetching.value = true;
        try {
            fetched.value = await service.getCurrent();
        }
        finally {
            fetching.value = false;
        }

        const subscriberId = service.subscribe("all", onEntityChanged(fetched))
        onUnmounted(() => service.unsubscribe(subscriberId));

        return readonly(fetched as Ref<ApplicationDetails>);
    }

    return {
        fetching: readonly(fetching),
        fetch,
        fetched: readonly(fetched)
    }
}