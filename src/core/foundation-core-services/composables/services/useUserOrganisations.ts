import { Ref, onUnmounted, readonly, ref } from "vue";

import { CreateUserOrganisationDTO, UpdateUserOrganisationDTO, UserOrganisationDetails, UserOrganisationDetailsDTO, UserOrganisationFilters, UserOrganisationInfos, UserOrganisationInfosDTO } from "@dative-gpi/foundation-core-domain";
import { ComposableFactory, onEntityChanged, ServiceFactory } from "@dative-gpi/bones-ui";

import { USER_ORGANISATIONS_URL, USER_ORGANISATION_CURRENT_URL, USER_ORGANISATION_URL } from "../../config/urls";

const UserOrganisationServiceFactory = new ServiceFactory<UserOrganisationDetailsDTO, UserOrganisationDetails>("userOrganisation", UserOrganisationDetails).create(factory => factory.build(
    factory.addGet(USER_ORGANISATION_URL),
    factory.addGetMany<UserOrganisationInfosDTO, UserOrganisationInfos, UserOrganisationFilters>(USER_ORGANISATIONS_URL, UserOrganisationInfos),
    factory.addCreate<CreateUserOrganisationDTO>(USER_ORGANISATIONS_URL),
    factory.addUpdate<UpdateUserOrganisationDTO>(USER_ORGANISATION_URL),
    factory.addRemove(USER_ORGANISATION_URL),
    factory.addNotify((notifyService) => ({
        getCurrent: async (): Promise<UserOrganisationDetails> => {
            const response = await ServiceFactory.http.get(USER_ORGANISATION_CURRENT_URL());
            const result = new UserOrganisationDetails(response.data);

            notifyService.notify("update", result);

            return result;
        },
        updateCurrent: async(payload: UpdateUserOrganisationDTO): Promise<UserOrganisationDetails> => {
            const response = await ServiceFactory.http.post(USER_ORGANISATION_CURRENT_URL(), payload);
            const result = new UserOrganisationDetails(response.data);

            notifyService.notify("update", result);

            return result;
        }
    }))
));

export const useUserOrganisation = ComposableFactory.get(UserOrganisationServiceFactory);
export const useUserOrganisations = ComposableFactory.getMany(UserOrganisationServiceFactory);
export const useCreateUserOrganisation = ComposableFactory.create(UserOrganisationServiceFactory);
export const useUpdateUserOrganisation = ComposableFactory.update(UserOrganisationServiceFactory);
export const useRemoveUserOrganisation = ComposableFactory.remove(UserOrganisationServiceFactory);
export const useCurrentUserOrganisation = () => {
    const service = UserOrganisationServiceFactory();
    const subscribersIds: number[] = [];

    const fetching = ref(false);
    const fetched = ref<UserOrganisationDetails | null>(null) as Ref<UserOrganisationDetails | null>;

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
        return readonly(fetched as Ref<UserOrganisationDetails>);
    }

    return {
        fetching: readonly(fetching),
        fetch,
        fetched: readonly(fetched)
    }
}
export const useUpdateCurrentUserOrganisation = () => {
    const service = UserOrganisationServiceFactory();
    const subscribersIds: number[] = [];

    const updating = ref(false);
    const updated = ref<UserOrganisationDetails | null>(null) as Ref<UserOrganisationDetails | null>;

    onUnmounted(() => {
        subscribersIds.forEach(id => service.unsubscribe(id));
        subscribersIds.length = 0;
    });

    const update = async (payload: UpdateUserOrganisationDTO) => {
        updating.value = true;
        try {
            updated.value = await service.updateCurrent(payload);
        }
        finally {
            updating.value = false;
        }
        subscribersIds.push(service.subscribe("all", onEntityChanged(updated)));
        return readonly(updated as Ref<UserOrganisationDetails>);
    }

    return {
        updating: readonly(updating),
        update,
        updated: readonly(updated)
    }
}