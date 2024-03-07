import { onUnmounted, ref } from "vue";

import { CreateUserLegalInformationDTO, UserLegalInformationDetails, UserLegalInformationDetailsDTO } from "@dative-gpi/foundation-shared-domain/models";
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
    const subscribersIds: number[] = [];

    const getting = ref(false);
    const entity = ref<UserLegalInformationDetails | null>(null);

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