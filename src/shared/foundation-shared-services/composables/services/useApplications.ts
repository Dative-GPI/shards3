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

    const getting = ref(false);
    const entity = ref<ApplicationDetails | null>(null);

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