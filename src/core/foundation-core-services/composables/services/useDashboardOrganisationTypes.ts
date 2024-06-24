import { DashboardOrganisationTypeDetails, DashboardOrganisationTypeDetailsDTO, DashboardOrganisationTypeFilters, DashboardOrganisationTypeInfos, DashboardOrganisationTypeInfosDTO, LockDashboardOrganisationTypeDTO, PublishDashboardOrganisationTypeDTO, UpdateDashboardOrganisationTypeDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";

import { DASHBOARD_ORGANISATION_TYPE_LOCK_URL, DASHBOARD_ORGANISATION_TYPE_URL, DASHBOARD_ORGANISATION_TYPES_URL } from "../../config";

const DashboardOrganisationTypeServiceFactory = new ServiceFactory<DashboardOrganisationTypeDetailsDTO, DashboardOrganisationTypeDetails>("dashboardOrganisationType", DashboardOrganisationTypeDetails)
  .create(factory => factory.build(
    factory.addGet(DASHBOARD_ORGANISATION_TYPE_URL),
    factory.addGetMany<DashboardOrganisationTypeInfosDTO, DashboardOrganisationTypeInfos, DashboardOrganisationTypeFilters>(DASHBOARD_ORGANISATION_TYPES_URL, DashboardOrganisationTypeInfos),
    factory.addUpdate<UpdateDashboardOrganisationTypeDTO>(DASHBOARD_ORGANISATION_TYPE_URL),
    factory.addRemove(DASHBOARD_ORGANISATION_TYPE_URL),
    factory.addNotify(notifyService => ({
      ...ServiceFactory.addCustom("publish", (axios, payload: PublishDashboardOrganisationTypeDTO) => axios.post(DASHBOARD_ORGANISATION_TYPES_URL(), payload), (dto: DashboardOrganisationTypeDetailsDTO) => {
        const result = new DashboardOrganisationTypeDetails(dto);
        notifyService.notify("update", result);
        return result;
      }),
      ...ServiceFactory.addCustom("duplicate", (axios, dashboardOrganisationTypeId: string) => axios.patch(DASHBOARD_ORGANISATION_TYPE_URL(dashboardOrganisationTypeId)), (dto: DashboardOrganisationTypeDetailsDTO) => {
        const result = new DashboardOrganisationTypeDetails(dto);
        notifyService.notify("update", result);
        return result;
      }),
      ...ServiceFactory.addCustom("lock", (axios, dashboardOrganisationTypeId: string, payload: LockDashboardOrganisationTypeDTO) => axios.put(DASHBOARD_ORGANISATION_TYPE_LOCK_URL(dashboardOrganisationTypeId), payload), (dto: DashboardOrganisationTypeDetailsDTO) => {
        const result = new DashboardOrganisationTypeDetails(dto);
        notifyService.notify("update", result);
        return result;
      })
    }))
  ));

export const useDashboardOrganisationType = ComposableFactory.get(DashboardOrganisationTypeServiceFactory);
export const useDashboardOrganisationTypes = ComposableFactory.getMany(DashboardOrganisationTypeServiceFactory);
export const useUpdateDashboardOrganisationType = ComposableFactory.update(DashboardOrganisationTypeServiceFactory);
export const useRemoveDashboardOrganisationType = ComposableFactory.remove(DashboardOrganisationTypeServiceFactory);
export const usePublishDashboardOrganisationType = ComposableFactory.custom(DashboardOrganisationTypeServiceFactory.publish);
export const useDuplicateDashboardOrganisationType = ComposableFactory.custom(DashboardOrganisationTypeServiceFactory.duplicate);
export const useLockDashboardOrganisationType = ComposableFactory.custom(DashboardOrganisationTypeServiceFactory.lock);

