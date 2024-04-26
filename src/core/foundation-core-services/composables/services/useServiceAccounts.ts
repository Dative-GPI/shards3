import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";
import { CreateServiceAccountDTO, UpdateServiceAccountDTO, ServiceAccountDetails, ServiceAccountDetailsDTO, ServiceAccountFilters, ServiceAccountInfos, ServiceAccountInfosDTO } from "@dative-gpi/foundation-core-domain/models";

import { SERVICE_ACCOUNTS_URL, SERVICE_ACCOUNT_URL } from "../../config/urls";

const ServiceAccountServiceFactory = new ServiceFactory<ServiceAccountDetailsDTO, ServiceAccountDetails>("serviceAccount", ServiceAccountDetails)
.createComplete<ServiceAccountInfos, ServiceAccountInfosDTO, CreateServiceAccountDTO, UpdateServiceAccountDTO, ServiceAccountFilters>(SERVICE_ACCOUNTS_URL, SERVICE_ACCOUNT_URL, ServiceAccountInfos);

export const useServiceAccount = ComposableFactory.get(ServiceAccountServiceFactory);
export const useServiceAccounts = ComposableFactory.getMany(ServiceAccountServiceFactory);
export const useCreateServiceAccount = ComposableFactory.create(ServiceAccountServiceFactory);
export const useUpdateServiceAccount = ComposableFactory.update(ServiceAccountServiceFactory);
export const useRemoveServiceAccount = ComposableFactory.remove(ServiceAccountServiceFactory);