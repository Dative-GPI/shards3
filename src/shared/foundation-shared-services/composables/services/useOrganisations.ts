import type { OrganisationDetailsDTO, OrganisationFilters, OrganisationInfosDTO, UpdateOrganisationDTO } from "@dative-gpi/foundation-shared-domain/models";
import { OrganisationDetails, OrganisationInfos } from "@dative-gpi/foundation-shared-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";

import { ORGANISATIONS_URL, ORGANISATION_URL } from "../../config/urls";

const OrganisationServiceFactory = new ServiceFactory<OrganisationDetailsDTO, OrganisationDetails>("organisation", OrganisationDetails).create(factory => factory.build(
    factory.addGet(ORGANISATION_URL),
    factory.addGetMany<OrganisationInfosDTO, OrganisationInfos, OrganisationFilters>(ORGANISATIONS_URL, OrganisationInfos),
    factory.addUpdate<UpdateOrganisationDTO>(ORGANISATION_URL),
    factory.addNotify()
));

export const useOrganisation = ComposableFactory.get(OrganisationServiceFactory);
export const useOrganisations = ComposableFactory.getMany(OrganisationServiceFactory);
export const useUpdateOrganisation = ComposableFactory.update(OrganisationServiceFactory);