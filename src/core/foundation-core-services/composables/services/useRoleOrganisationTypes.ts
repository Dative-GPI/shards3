import { RoleOrganisationTypeDetails, RoleOrganisationTypeDetailsDTO, RoleOrganisationTypeFilters, RoleOrganisationTypeInfos, RoleOrganisationTypeInfosDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";

import { ROLE_ORGANISATION_TYPES_URL, ROLE_ORGANISATION_TYPE_URL } from "../../config/urls";

const RoleOrganisationTypeServiceFactory = new ServiceFactory<RoleOrganisationTypeDetailsDTO, RoleOrganisationTypeDetails>("roleOrganisationType", RoleOrganisationTypeDetails).create(factory => factory.build(
    factory.addGet(ROLE_ORGANISATION_TYPE_URL),
    factory.addGetMany<RoleOrganisationTypeInfosDTO, RoleOrganisationTypeInfos, RoleOrganisationTypeFilters>(ROLE_ORGANISATION_TYPES_URL, RoleOrganisationTypeInfos),
    factory.addNotify()
));

export const useRoleOrganisationType = ComposableFactory.get(RoleOrganisationTypeServiceFactory);
export const useRoleOrganisationTypes = ComposableFactory.getMany(RoleOrganisationTypeServiceFactory);