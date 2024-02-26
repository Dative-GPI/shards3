import { Ref, onUnmounted, readonly, ref } from "vue";

import { CreateUserLegalInformationDTO, UserLegalInformationDetails, UserLegalInformationDetailsDTO } from "@dative-gpi/foundation-shared-domain";
import { ComposableFactory, onEntityChanged, ServiceFactory } from "@dative-gpi/bones-ui";

import { USER_LEGAL_INFORMATIONS_URL, USER_LEGAL_INFORMATION_CURRENT_URL } from "../../config/urls";

const UserLegalInformationServiceFactory = new ServiceFactory<UserLegalInformationDetailsDTO, UserLegalInformationDetails>("userLegalInformation", UserLegalInformationDetails).create(factory => factory.build(
    factory.addCreate<CreateUserLegalInformationDTO>(USER_LEGAL_INFORMATIONS_URL),
    factory.addNotify((notifyService) => ({
        getCurrent: async (): Promise<UserLegalInformationDetails> => {
            const response = await ServiceFactory.http.get(USER_LEGAL_INFORMATION_CURRENT_URL());
            const result = new UserLegalInformationDetails(response.data);

            notifyService.notify("update", result);

            return result;
        }
    }))
));

export const useCreateUserLegalInformation = ComposableFactory.create(UserLegalInformationServiceFactory);
export const useCurrentUserLegalInformation = () => {
    const service = UserLegalInformationServiceFactory();

    const fetching = ref(false);
    const fetched = ref<UserLegalInformationDetails | null>(null) as Ref<UserLegalInformationDetails | null>;

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

        return readonly(fetched as Ref<UserLegalInformationDetails>);
    }

    return {
        fetching: readonly(fetching),
        fetch,
        fetched: readonly(fetched)
    }
}