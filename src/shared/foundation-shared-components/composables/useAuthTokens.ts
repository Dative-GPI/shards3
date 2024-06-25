import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";
import type { AuthTokenDetailsDTO, AuthTokenFilters, AuthTokenInfosDTO, CreateAuthTokenDTO } from "@dative-gpi/foundation-shared-domain/models";
import { AuthTokenDetails, AuthTokenInfos } from "@dative-gpi/foundation-shared-domain/models";
import { AUTH_TOKENS_URL, AUTH_TOKEN_URL } from "../../foundation-shared-services/config/urls";

const AuthTokenServiceFactory = new ServiceFactory<AuthTokenDetailsDTO, AuthTokenDetails>("authToken", AuthTokenDetails).create(factory => factory.build(
    factory.addGetMany<AuthTokenInfosDTO, AuthTokenInfos, AuthTokenFilters>(AUTH_TOKENS_URL, AuthTokenInfos),
    factory.addCreate<CreateAuthTokenDTO>(AUTH_TOKENS_URL),
    factory.addRemove(AUTH_TOKEN_URL),
    factory.addNotify()
));

export const useAuthTokens = ComposableFactory.getMany(AuthTokenServiceFactory);
export const useCreateAuthToken = ComposableFactory.create(AuthTokenServiceFactory);
export const useRemoveAuthToken = ComposableFactory.remove(AuthTokenServiceFactory);