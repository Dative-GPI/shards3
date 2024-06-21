import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";
import { CreateDashboardShallowDTO, DashboardShallowDetails, DashboardShallowDetailsDTO, DashboardShallowFilters, DashboardShallowInfos, DashboardShallowInfosDTO, UpdateDashboardShallowDTO } from "@dative-gpi/foundation-core-domain/models";
import { DASHBOARD_SHALLOW_URL, DASHBOARD_SHALLOWS_URL } from "../../config/urls/dashboardShallows";

const DashboardShallowServiceFactory = new ServiceFactory<DashboardShallowDetailsDTO, DashboardShallowDetails>("dashboardShallow", DashboardShallowDetails)
    .create(factory => factory.build(
        factory.addGet(DASHBOARD_SHALLOW_URL),
        factory.addGetMany<DashboardShallowInfosDTO, DashboardShallowInfos, DashboardShallowFilters>(DASHBOARD_SHALLOWS_URL, DashboardShallowInfos),
        factory.addCreate<CreateDashboardShallowDTO>(DASHBOARD_SHALLOWS_URL),
        factory.addUpdate<UpdateDashboardShallowDTO>(DASHBOARD_SHALLOW_URL),
        factory.addRemove(DASHBOARD_SHALLOW_URL),
        factory.addNotify()
    ));

export const useDashboardShallow = ComposableFactory.get(DashboardShallowServiceFactory);
export const useDashboardShallows = ComposableFactory.getMany(DashboardShallowServiceFactory);
export const useCreateDashboardShallow = ComposableFactory.create(DashboardShallowServiceFactory);
export const useUpdateDashboardShallow = ComposableFactory.update(DashboardShallowServiceFactory);
export const useRemoveDashboardShallow = ComposableFactory.remove(DashboardShallowServiceFactory);