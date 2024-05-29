import { CreateRoleOrganisationDTO, RoleOrganisationDetails, RoleOrganisationDetailsDTO, RoleOrganisationFilters, RoleOrganisationInfos, RoleOrganisationInfosDTO, UpdateRoleOrganisationDTO, UpdateRoleOrganisationPermissionsDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";

import { ROLE_ORGANISATIONS_URL, ROLE_ORGANISATION_URL } from "../../config/urls";

const RoleOrganisationServiceFactory = new ServiceFactory<RoleOrganisationDetailsDTO, RoleOrganisationDetails>("roleOrganisation", RoleOrganisationDetails)
  .createComplete<RoleOrganisationInfos, RoleOrganisationInfosDTO, CreateRoleOrganisationDTO, UpdateRoleOrganisationDTO, RoleOrganisationFilters>(ROLE_ORGANISATIONS_URL, ROLE_ORGANISATION_URL, RoleOrganisationInfos);
  
const RoleOrganisationServiceFactoryIncomplete = new ServiceFactory("roleOrganisation", RoleOrganisationDetails)
  .create(factory => factory.build(
    factory.addNotify(notifyService => ({
      ...ServiceFactory.addCustom("updatePermissions", (axios, roleOrganisationId: string, payload: UpdateRoleOrganisationPermissionsDTO) => axios.patch(ROLE_ORGANISATION_URL(roleOrganisationId), payload), (dto: RoleOrganisationDetailsDTO) => {
        const result = new RoleOrganisationDetails(dto);
        notifyService.notify("update", result);
        return result;
      })
    }))
  ));

export const useRoleOrganisation = ComposableFactory.get(RoleOrganisationServiceFactory);
export const useRoleOrganisations = ComposableFactory.getMany(RoleOrganisationServiceFactory);
export const useCreateRoleOrganisation = ComposableFactory.create(RoleOrganisationServiceFactory);
export const useUpdateRoleOrganisation = ComposableFactory.update(RoleOrganisationServiceFactory);
export const useRemoveRoleOrganisation = ComposableFactory.remove(RoleOrganisationServiceFactory);
export const useUpdateRoleOrganisationPermissions = ComposableFactory.custom(RoleOrganisationServiceFactoryIncomplete.updatePermissions);