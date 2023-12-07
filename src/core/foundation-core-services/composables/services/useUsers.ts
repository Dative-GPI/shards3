import { Ref, onUnmounted, readonly, ref } from "vue";

import { UpdateUserDTO, UserDetails, UserDetailsDTO, UserFilters, UserInfos, UserInfosDTO } from "@dative-gpi/foundation-core-domain";
import { ComposableFactory, onEntityChanged, ServiceFactory } from "@dative-gpi/bones-ui";

import { USERS_URL, USER_CURRENT_URL, USER_URL } from "../../config/urls";

const UserServiceFactory = new ServiceFactory<UserDetailsDTO, UserDetails>("user", UserDetails).create(factory => factory.build(
    factory.addGet(USER_URL),
    factory.addGetMany<UserInfosDTO, UserInfos, UserFilters>(USERS_URL, UserInfos),
    factory.addUpdate<UpdateUserDTO>(USER_URL),
    factory.addRemove(USER_URL),
    factory.addNotify((notifyService) => ({
        getCurrent: async (): Promise<UserDetails> => {
            const response = await ServiceFactory.http.get(USER_CURRENT_URL);
            const result = new UserDetails(response.data);

            notifyService.notify("update", result);

            return result;
        },
        updateCurrent: async(payload: UpdateUserDTO): Promise<UserDetails> => {
            const response = await ServiceFactory.http.post(USER_CURRENT_URL, payload);
            const result = new UserDetails(response.data);

            notifyService.notify("update", result);

            return result;
        }
    }))
));

export const useUser = ComposableFactory.get(UserServiceFactory);
export const useUsers = ComposableFactory.getMany(UserServiceFactory);
export const useUpdateUser = ComposableFactory.update(UserServiceFactory);
export const useRemoveUser = ComposableFactory.remove(UserServiceFactory);
export const useCurrentUser = () => {
    const service = UserServiceFactory();

    const fetching = ref(false);
    const fetched = ref<UserDetails | null>(null) as Ref<UserDetails | null>;

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

        return readonly(fetched as Ref<UserDetails>);
    }

    return {
        fetching: readonly(fetching),
        fetch,
        fetched: readonly(fetched)
    }
}
export const useUpdateCurrentUser = () => {
    const service = UserServiceFactory();

    const updating = ref(false);
    const updated = ref<UserDetails | null>(null) as Ref<UserDetails | null>;

    const update = async (payload: UpdateUserDTO) => {
        updating.value = true;
        try {
            updated.value = await service.updateCurrent(payload);
        }
        finally {
            updating.value = false;
        }

        const subscriberId = service.subscribe("all", onEntityChanged(updated))
        onUnmounted(() => service.unsubscribe(subscriberId));

        return readonly(updated as Ref<UserDetails>);
    }

    return {
        updating: readonly(updating),
        update,
        updated: readonly(updated)
    }
}