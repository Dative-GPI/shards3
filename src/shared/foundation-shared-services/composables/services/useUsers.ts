import { UpdateUserDTO, UserDetails, UserDetailsDTO } from "@dative-gpi/foundation-shared-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";

import { USER_CURRENT_URL } from "../../config/urls";

const UserServiceFactory = new ServiceFactory<UserDetailsDTO, UserDetails>("user", UserDetails).create(factory => factory.build(
    factory.addCustom("getCurrent", (axios) => axios.get(USER_CURRENT_URL())),
    factory.addCustom("updateCurrent", (axios, payload: UpdateUserDTO) => axios.post(USER_CURRENT_URL(), payload)),
    factory.addNotify()
));

export const useCurrentUser = ComposableFactory.custom(UserServiceFactory, UserServiceFactory.getCurrent);
export const useUpdateCurrentUser = ComposableFactory.custom(UserServiceFactory, UserServiceFactory.updateCurrent);