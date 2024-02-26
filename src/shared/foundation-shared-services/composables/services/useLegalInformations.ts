import { Ref, onUnmounted, readonly, ref } from "vue";

import { LegalInformationDetails, LegalInformationDetailsDTO } from "@dative-gpi/foundation-shared-domain";
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

    const fetching = ref(false);
    const fetched = ref<LegalInformationDetails | null>(null) as Ref<LegalInformationDetails | null>;

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

        return readonly(fetched as Ref<LegalInformationDetails>);
    }

    return {
        fetching: readonly(fetching),
        fetch,
        fetched: readonly(fetched)
    }
}