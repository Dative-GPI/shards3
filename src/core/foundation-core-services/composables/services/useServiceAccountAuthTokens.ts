import { ServiceAccountAuthTokenDetails, ServiceAccountAuthTokenDetailsDTO, ServiceAccountAuthTokenFilters, ServiceAccountAuthTokenInfos, ServiceAccountAuthTokenInfosDTO, CreateServiceAccountAuthTokenDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";

import { SERVICE_ACCOUNT_AUTH_TOKENS_URL, SERVICE_ACCOUNT_AUTH_TOKEN_URL } from "../../config/urls";

const ServiceAccountAuthTokenServiceFactory = new ServiceFactory<ServiceAccountAuthTokenDetailsDTO, ServiceAccountAuthTokenDetails>("serviceAccountAuthToken", ServiceAccountAuthTokenDetails).create(factory => factory.build(
    ServiceFactory.addCustom("getMany", (axios, serviceAccountId: string, filters: ServiceAccountAuthTokenFilters) => axios.get(SERVICE_ACCOUNT_AUTH_TOKENS_URL(serviceAccountId), filters), (dtos: ServiceAccountAuthTokenDetailsDTO[]) => dtos.map((dto: ServiceAccountAuthTokenDetailsDTO) => new ServiceAccountAuthTokenDetails(dto))),
    factory.addNotify(notifyService => ({
        ...ServiceFactory.addCustom("create", (axios, serviceAccountId: string, data: CreateServiceAccountAuthTokenDTO) => axios.post(SERVICE_ACCOUNT_AUTH_TOKENS_URL(serviceAccountId), data), (dto: ServiceAccountAuthTokenDetailsDTO) => {
            const result = new ServiceAccountAuthTokenDetails(dto);
            notifyService.notify("add", result);
        }),
        ...ServiceFactory.addCustom("remove", (axios, serviceAccountId: string, authTokenId: string) => axios.delete(SERVICE_ACCOUNT_AUTH_TOKEN_URL(serviceAccountId, authTokenId)), () => {})
    }))
));

export const useServiceAccountAuthTokens = ComposableFactory.custom(ServiceAccountAuthTokenServiceFactory.getMany);
export const useCreateServiceAccountAuthToken = ComposableFactory.custom(ServiceAccountAuthTokenServiceFactory.create);
export const useRemoveServiceAccountAuthToken = ComposableFactory.custom(ServiceAccountAuthTokenServiceFactory.remove);