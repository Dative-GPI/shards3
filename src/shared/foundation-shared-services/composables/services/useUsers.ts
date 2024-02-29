import { onUnmounted, ref } from "vue";

import { UpdateUserDTO, UserDetails, UserDetailsDTO } from "@dative-gpi/foundation-shared-domain/models";
import { onEntityChanged, ServiceFactory } from "@dative-gpi/bones-ui";

import { USER_CURRENT_URL } from "../../config/urls";

const UserServiceFactory = new ServiceFactory<UserDetailsDTO, UserDetails>("user", UserDetails).create(factory => factory.build(
    factory.addNotify((notifyService) => ({
        getCurrent: async (): Promise<UserDetails> => {
            const response = await ServiceFactory.http.get(USER_CURRENT_URL());
            const result = new UserDetails(response.data);

            notifyService.notify("update", result);

            return result;
        },
        updateCurrent: async (payload: UpdateUserDTO): Promise<UserDetails> => {
            const response = await ServiceFactory.http.post(USER_CURRENT_URL(), payload);
            const result = new UserDetails(response.data);

            notifyService.notify("update", result);

            return result;
        }
    }))
));

export const useCurrentUser = () => {
    const service = UserServiceFactory();
    const subscribersIds: number[] = [];

    const fetching = ref(false);
    const fetched = ref<UserDetails | null>(null);

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
export const useUpdateCurrentUser = () => {
    const service = UserServiceFactory();
    const subscribersIds: number[] = [];

    const updating = ref(false);
    const updated = ref<UserDetails | null>(null);

    onUnmounted(() => {
        subscribersIds.forEach(id => service.unsubscribe(id));
        subscribersIds.length = 0;
    });

    const update = async (payload: UpdateUserDTO) => {
        updating.value = true;
        try {
            updated.value = await service.updateCurrent(payload);
        }
        finally {
            updating.value = false;
        }
        subscribersIds.push(service.subscribe("all", onEntityChanged(updated)));
        return updated;
    }

    return {
        updating,
        update,
        updated
    }
}