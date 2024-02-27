import { AuthTokenDetails, AuthTokenDetailsDTO, CreateAuthTokenDTO } from "@dative-gpi/foundation-shared-domain";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";

import { AUTH_TOKENS_URL } from "../../config/urls";

const AuthTokenServiceFactory = new ServiceFactory<AuthTokenDetailsDTO, AuthTokenDetails>("authToken", AuthTokenDetails).create(factory => factory.build(
    factory.addCreate<CreateAuthTokenDTO>(AUTH_TOKENS_URL),
    factory.addNotify()
));

export const useCreateAuthToken = ComposableFactory.create(AuthTokenServiceFactory);