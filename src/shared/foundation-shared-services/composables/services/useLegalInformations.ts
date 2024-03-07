import { onUnmounted, ref } from "vue";

import { LegalInformationDetails, LegalInformationDetailsDTO } from "@dative-gpi/foundation-shared-domain/models";
import { onEntityChanged, ServiceFactory } from "@dative-gpi/bones-ui";

import { LEGAL_INFORMATION_CURRENT_URL } from "../../config/urls";

const LegalInformationServiceFactory = new ServiceFactory<LegalInformationDetailsDTO, LegalInformationDetails>("legalInformation", LegalInformationDetails).create(factory => factory.build(
    factory.addNotify((notifyService) => ({
        getCurrent: async (): Promise<LegalInformationDetails> => {
            const response = await ServiceFactory.http.get(LEGAL_INFORMATION_CURRENT_URL());
            const result = new LegalInformationDetails(response.data);

            notifyService.notify("update", result);

            return result;
        }
    }))
));

export const useCurrentLegalInformation = () => {
    const service = LegalInformationServiceFactory();
    const subscribersIds: number[] = [];

    const getting = ref(false);
    const entity = ref<LegalInformationDetails | null>(null);

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