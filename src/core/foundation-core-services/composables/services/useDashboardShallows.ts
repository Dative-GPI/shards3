import type { ChangeDashboardShallowFolderDTO, CreateDashboardShallowDTO, DashboardShallowDetailsDTO, DashboardShallowFilters, DashboardShallowInfosDTO, UpdateDashboardShallowDTO } from "@dative-gpi/foundation-core-domain/models";
import { DashboardShallowDetails, DashboardShallowInfos } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";

import { DASHBOARD_SHALLOW_FOLDER_URL, DASHBOARD_SHALLOW_URL, DASHBOARD_SHALLOWS_URL } from "../../config/urls/dashboardShallows";

const DashboardShallowServiceFactory = new ServiceFactory<DashboardShallowDetailsDTO, DashboardShallowDetails>("dashboardShallow", DashboardShallowDetails)
  .createComplete<DashboardShallowInfos, DashboardShallowInfosDTO, CreateDashboardShallowDTO, UpdateDashboardShallowDTO, DashboardShallowFilters>(DASHBOARD_SHALLOWS_URL, DASHBOARD_SHALLOW_URL, DashboardShallowInfos);

const DashboardShallowServiceFactoryIncomplete = new ServiceFactory("dashboardShallow", DashboardShallowDetails)
  .create(factory => factory.build(
    factory.addNotify(notifyService => ({
      ...ServiceFactory.addCustom("duplicate", (axios, dashboardShallowId: string) => axios.patch(DASHBOARD_SHALLOW_URL(dashboardShallowId)), (dto: DashboardShallowDetailsDTO) => {
        const result = new DashboardShallowDetails(dto);
        notifyService.notify("update", result);
        return result;
      }),
      ...ServiceFactory.addCustom("changeFolder", (axios, dashboardShallowId: string, payload: ChangeDashboardShallowFolderDTO) => axios.put(DASHBOARD_SHALLOW_FOLDER_URL(dashboardShallowId), payload), (dto: DashboardShallowDetailsDTO) => {
        const result = new DashboardShallowDetails(dto);
        notifyService.notify("update", result);
        return result;
      })
    }))
  ));

export const useDashboardShallow = ComposableFactory.get(DashboardShallowServiceFactory);
export const useDashboardShallows = ComposableFactory.getMany(DashboardShallowServiceFactory);
export const useCreateDashboardShallow = ComposableFactory.create(DashboardShallowServiceFactory);
export const useUpdateDashboardShallow = ComposableFactory.update(DashboardShallowServiceFactory);
export const useRemoveDashboardShallow = ComposableFactory.remove(DashboardShallowServiceFactory);
export const useDuplicateDashboardShallow = ComposableFactory.custom(DashboardShallowServiceFactoryIncomplete.duplicate);
export const useChangeDashboardShallowFolder = ComposableFactory.custom(DashboardShallowServiceFactoryIncomplete.changeFolder);