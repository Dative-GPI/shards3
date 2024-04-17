import { Ref } from "vue";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";
import { UpdateUserDTO, UserDetails, UserDetailsDTO } from "@dative-gpi/foundation-shared-domain/models";

import { USER_CURRENT_URL } from "../../config/urls";

const UserServiceFactory = new ServiceFactory<UserDetailsDTO, UserDetails>("user", UserDetails).create(factory => factory.build(
    ServiceFactory.addCustom("getCurrent", (axios) => axios.get(USER_CURRENT_URL()), (dto: UserDetailsDTO) => new UserDetails(dto)),
    factory.addNotify(notifyService => ({
        ...ServiceFactory.addCustom("updateCurrent", (axios, payload: UpdateUserDTO) => axios.post(USER_CURRENT_URL(), payload), (dto: UserDetailsDTO) => {
            const result = new UserDetails(dto);
            notifyService.notify("update", result);
            return result;
        })
    }))
));

export const useTrackUser = ComposableFactory.track(UserServiceFactory);
export const useTrackUserRef = ComposableFactory.trackRef(UserServiceFactory);

const trackUser = () => {
    const { track } = useTrackUserRef();

    return (user: Ref<UserDetails>) => {
        track(user);
    }
}

export const useCurrentUser = ComposableFactory.custom(UserServiceFactory.getCurrent, trackUser);
export const useUpdateCurrentUser = ComposableFactory.custom(UserServiceFactory.updateCurrent, trackUser);