import type { ServiceAccountOrganisationAuthTokenDetailsDTO, ServiceAccountOrganisationAuthTokenFilters, CreateServiceAccountOrganisationAuthTokenDTO } from "@dative-gpi/foundation-core-domain/models";
import { ServiceAccountOrganisationAuthTokenDetails } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";

import { SERVICE_ACCOUNT_ORGANISATION_AUTH_TOKENS_URL, SERVICE_ACCOUNT_ORGANISATION_AUTH_TOKEN_URL } from "../../config/urls";

const ServiceAccountOrganisationAuthTokenServiceFactory = new ServiceFactory<ServiceAccountOrganisationAuthTokenDetailsDTO, ServiceAccountOrganisationAuthTokenDetails>("serviceAccountOrganisationAuthToken", ServiceAccountOrganisationAuthTokenDetails).create(factory => factory.build(
    ServiceFactory.addCustom("getMany", (axios, serviceAccountOrganisationId: string, filters: ServiceAccountOrganisationAuthTokenFilters) => axios.get(SERVICE_ACCOUNT_ORGANISATION_AUTH_TOKENS_URL(serviceAccountOrganisationId), filters), (dtos: ServiceAccountOrganisationAuthTokenDetailsDTO[]) => dtos.map((dto: ServiceAccountOrganisationAuthTokenDetailsDTO) => new ServiceAccountOrganisationAuthTokenDetails(dto))),
    factory.addNotify(notifyService => ({
        ...ServiceFactory.addCustom("create", (axios, serviceAccountOrganisationId: string, data: CreateServiceAccountOrganisationAuthTokenDTO) => axios.post(SERVICE_ACCOUNT_ORGANISATION_AUTH_TOKENS_URL(serviceAccountOrganisationId), data), (dto: ServiceAccountOrganisationAuthTokenDetailsDTO) => {
            const result = new ServiceAccountOrganisationAuthTokenDetails(dto);
            notifyService.notify("add", result);
        }),
        ...ServiceFactory.addCustom("remove", (axios, serviceAccountOrganisationId: string, authTokenId: string) => axios.delete(SERVICE_ACCOUNT_ORGANISATION_AUTH_TOKEN_URL(serviceAccountOrganisationId, authTokenId)), () => {})
    }))
));

export const useServiceAccountOrganisationAuthTokens = ComposableFactory.custom(ServiceAccountOrganisationAuthTokenServiceFactory.getMany);
export const useCreateServiceAccountOrganisationAuthToken = ComposableFactory.custom(ServiceAccountOrganisationAuthTokenServiceFactory.create);
export const useRemoveServiceAccountOrganisationAuthToken = ComposableFactory.custom(ServiceAccountOrganisationAuthTokenServiceFactory.remove);