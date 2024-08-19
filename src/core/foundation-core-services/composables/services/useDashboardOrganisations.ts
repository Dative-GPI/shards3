import { type ChangeDashboardOrganisationFolderDTO, type CreateDashboardOrganisationDTO, DashboardOrganisationDetails, type DashboardOrganisationDetailsDTO, type DashboardOrganisationFilters, DashboardOrganisationInfos, type DashboardOrganisationInfosDTO, type LockDashboardOrganisationDTO, type UpdateDashboardOrganisationDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";

import { DASHBOARD_ORGANISATION_FOLDER_URL, DASHBOARD_ORGANISATION_LOCK_URL, DASHBOARD_ORGANISATION_URL, DASHBOARD_ORGANISATIONS_URL } from "../../config/urls";

const DashboardOrganisationServiceFactory = new ServiceFactory<DashboardOrganisationDetailsDTO, DashboardOrganisationDetails>("dashboardOrganisation", DashboardOrganisationDetails)
  .createComplete<DashboardOrganisationInfos, DashboardOrganisationInfosDTO, CreateDashboardOrganisationDTO, UpdateDashboardOrganisationDTO, DashboardOrganisationFilters>(DASHBOARD_ORGANISATIONS_URL, DASHBOARD_ORGANISATION_URL, DashboardOrganisationInfos);

const DashboardOrganisationServiceFactoryIncomplete = new ServiceFactory("dashboardOrganisation", DashboardOrganisationDetails).create(factory => factory.build(
  factory.addNotify(notifyService => ({
    ...ServiceFactory.addCustom("duplicate", (axios, dashboardOrganisationId: string) => axios.patch(DASHBOARD_ORGANISATION_URL(dashboardOrganisationId)), (dto: DashboardOrganisationDetailsDTO) => {
      const result = new DashboardOrganisationDetails(dto);
      notifyService.notify("update", result);
      return result;
    }),
    ...ServiceFactory.addCustom("lock", (axios, dashboardOrganisationId: string, payload: LockDashboardOrganisationDTO) => axios.put(DASHBOARD_ORGANISATION_LOCK_URL(dashboardOrganisationId), payload), (dto: DashboardOrganisationDetailsDTO) => {
      const result = new DashboardOrganisationDetails(dto);
      notifyService.notify("update", result);
      return result;
    }),
    ...ServiceFactory.addCustom("changeFolder", (axios, dashboardOrganisationId: string, payload: ChangeDashboardOrganisationFolderDTO) => axios.put(DASHBOARD_ORGANISATION_FOLDER_URL(dashboardOrganisationId), payload), (dto: DashboardOrganisationDetailsDTO) => {
      const result = new DashboardOrganisationDetails(dto);
      notifyService.notify("update", result);
      return result;
    })
  }))
));

export const useDashboardOrganisation = ComposableFactory.get(DashboardOrganisationServiceFactory);
export const useDashboardOrganisations = ComposableFactory.getMany(DashboardOrganisationServiceFactory);
export const useCreateDashboardOrganisation = ComposableFactory.create(DashboardOrganisationServiceFactory);
export const useUpdateDashboardOrganisation = ComposableFactory.update(DashboardOrganisationServiceFactory);
export const useRemoveDashboardOrganisation = ComposableFactory.remove(DashboardOrganisationServiceFactory);
export const useDuplicateDashboardOrganisation = ComposableFactory.custom(DashboardOrganisationServiceFactoryIncomplete.duplicate);
export const useLockDashboardOrganisation = ComposableFactory.custom(DashboardOrganisationServiceFactoryIncomplete.lock);
export const useChangeDashboardOrganisationFolder = ComposableFactory.custom(DashboardOrganisationServiceFactoryIncomplete.changeFolder);