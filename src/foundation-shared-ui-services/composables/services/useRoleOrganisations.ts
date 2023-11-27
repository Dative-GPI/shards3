import { CreateRoleOrganisationDTO, RoleOrganisationDetails, RoleOrganisationDetailsDTO, RoleOrganisationFilters, RoleOrganisationInfos, RoleOrganisationInfosDTO, UpdateRoleOrganisationDTO } from "@dative-gpi/foundation-shared-ui-domain";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";

import { ROLE_ORGANISATIONS_URL, ROLE_ORGANISATION_URL } from "../../config/urls";

const RoleOrganisationServiceFactory = new ServiceFactory<RoleOrganisationDetailsDTO, RoleOrganisationDetails>("roleOrganisation", RoleOrganisationDetails)
    .createComplete<RoleOrganisationInfos, RoleOrganisationInfosDTO, CreateRoleOrganisationDTO, UpdateRoleOrganisationDTO, RoleOrganisationFilters>(ROLE_ORGANISATIONS_URL, ROLE_ORGANISATION_URL, RoleOrganisationInfos);

export const useRoleOrganisation = ComposableFactory.get(RoleOrganisationServiceFactory);
export const useRoleOrganisations = ComposableFactory.getMany(RoleOrganisationServiceFactory);
export const useCreateRoleOrganisation = ComposableFactory.create(RoleOrganisationServiceFactory);
export const useUpdateRoleOrganisation = ComposableFactory.update(RoleOrganisationServiceFactory);
export const useRemoveRoleOrganisation = ComposableFactory.remove(RoleOrganisationServiceFactory);