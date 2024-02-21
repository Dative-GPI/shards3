import { UpdateUserDTO, UserDetails, UserDetailsDTO } from "@dative-gpi/foundation-shared-domain";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";

import { USER_URL } from "../../config/urls";

const UserServiceFactory = new ServiceFactory<UserDetailsDTO, UserDetails>("user", UserDetails).create(factory => factory.build(
    factory.addGet(USER_URL),
    factory.addUpdate<UpdateUserDTO>(USER_URL),
    factory.addRemove(USER_URL),
    factory.addNotify()
));

export const useUser = ComposableFactory.get(UserServiceFactory);
export const useUpdateUser = ComposableFactory.update(UserServiceFactory);
export const useRemoveUser = ComposableFactory.remove(UserServiceFactory);