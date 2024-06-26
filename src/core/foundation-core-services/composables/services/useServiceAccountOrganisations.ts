import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";
import type { CreateServiceAccountOrganisationDTO, UpdateServiceAccountOrganisationDTO, ServiceAccountOrganisationDetailsDTO, ServiceAccountOrganisationFilters, ServiceAccountOrganisationInfosDTO } from "@dative-gpi/foundation-core-domain/models";
import { ServiceAccountOrganisationDetails, ServiceAccountOrganisationInfos } from "@dative-gpi/foundation-core-domain/models";

import { SERVICE_ACCOUNT_ORGANISATIONS_URL, SERVICE_ACCOUNT_ORGANISATION_URL } from "../../config/urls";

const ServiceAccountOrganisationServiceFactory = new ServiceFactory<ServiceAccountOrganisationDetailsDTO, ServiceAccountOrganisationDetails>("serviceAccountOrganisation", ServiceAccountOrganisationDetails)
.createComplete<ServiceAccountOrganisationInfos, ServiceAccountOrganisationInfosDTO, CreateServiceAccountOrganisationDTO, UpdateServiceAccountOrganisationDTO, ServiceAccountOrganisationFilters>(SERVICE_ACCOUNT_ORGANISATIONS_URL, SERVICE_ACCOUNT_ORGANISATION_URL, ServiceAccountOrganisationInfos);

export const useServiceAccountOrganisation = ComposableFactory.get(ServiceAccountOrganisationServiceFactory);
export const useServiceAccountOrganisations = ComposableFactory.getMany(ServiceAccountOrganisationServiceFactory);
export const useCreateServiceAccountOrganisation = ComposableFactory.create(ServiceAccountOrganisationServiceFactory);
export const useUpdateServiceAccountOrganisation = ComposableFactory.update(ServiceAccountOrganisationServiceFactory);
export const useRemoveServiceAccountOrganisation = ComposableFactory.remove(ServiceAccountOrganisationServiceFactory);