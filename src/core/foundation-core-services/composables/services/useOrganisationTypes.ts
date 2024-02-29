import { OrganisationTypeDetails, OrganisationTypeDetailsDTO, OrganisationTypeFilters, OrganisationTypeInfos, OrganisationTypeInfosDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";

import { ORGANISATION_TYPES_URL, ORGANISATION_TYPE_URL } from "../../config/urls";

const OrganisationTypeServiceFactory = new ServiceFactory<OrganisationTypeDetailsDTO, OrganisationTypeDetails>("organisationType", OrganisationTypeDetails).create(factory => factory.build(
    factory.addGet(ORGANISATION_TYPE_URL),
    factory.addGetMany<OrganisationTypeInfosDTO, OrganisationTypeInfos, OrganisationTypeFilters>(ORGANISATION_TYPES_URL, OrganisationTypeInfos),
    factory.addNotify()
));

export const useOrganisationType = ComposableFactory.get(OrganisationTypeServiceFactory);
export const useOrganisationTypes = ComposableFactory.getMany(OrganisationTypeServiceFactory);