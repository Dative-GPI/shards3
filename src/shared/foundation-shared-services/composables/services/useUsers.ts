import { UpdateUserDTO, UserDetails, UserDetailsDTO } from "@dative-gpi/foundation-shared-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";

import { USER_CURRENT_URL } from "../../config/urls";

const UserServiceFactory = new ServiceFactory<UserDetailsDTO, UserDetails>("user", UserDetails).create(factory => factory.build(
    ServiceFactory.addCustom("getCurrent", (axios) => axios.get(USER_CURRENT_URL()), (dto: UserDetailsDTO) => new UserDetails(dto)),
    factory.addNotify(notify => ({
        ...ServiceFactory.addCustom("updateCurrent", (axios, payload: UpdateUserDTO) => axios.post(USER_CURRENT_URL(), payload), (dto: UserDetailsDTO) => {
            const result = new UserDetails(dto);
            notify.notify("update", result);
            return result;
        })
    }))
));

export const useTrackUser = ComposableFactory.track(UserServiceFactory);

export const useCurrentUser = ComposableFactory.custom(UserServiceFactory.getCurrent, () => {
    const { track } = useTrackUser();
 
    return (user) => {
        track(user);
    }
});
export const useUpdateCurrentUser = ComposableFactory.custom(UserServiceFactory.updateCurrent);