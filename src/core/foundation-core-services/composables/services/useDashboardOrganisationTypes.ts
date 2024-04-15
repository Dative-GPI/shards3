import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";
import { CreateDashboardOrganisationTypeDTO, DashboardOrganisationTypeDetails, DashboardOrganisationTypeDetailsDTO, DashboardOrganisationTypeFilters, DashboardOrganisationTypeInfos, DashboardOrganisationTypeInfosDTO, UpdateDashboardOrganisationTypeDTO } from "@dative-gpi/foundation-core-domain/models";

import { DASHBOARD_ORGANISATION_TYPE_URL, DASHBOARD_ORGANISATION_TYPES_URL } from "../../config";

const DashboardOrganisationTypeServiceFactory = new ServiceFactory<DashboardOrganisationTypeDetailsDTO, DashboardOrganisationTypeDetails>("dashboardOrganisationType", DashboardOrganisationTypeDetails)
  .create(factory => factory.build(
    factory.addGet(DASHBOARD_ORGANISATION_TYPE_URL),
    factory.addGetMany<DashboardOrganisationTypeInfosDTO, DashboardOrganisationTypeInfos, DashboardOrganisationTypeFilters>(DASHBOARD_ORGANISATION_TYPES_URL, DashboardOrganisationTypeInfos),
    factory.addCreate<CreateDashboardOrganisationTypeDTO>(DASHBOARD_ORGANISATION_TYPES_URL),
    factory.addUpdate<UpdateDashboardOrganisationTypeDTO>(DASHBOARD_ORGANISATION_TYPE_URL),
    factory.addRemove(DASHBOARD_ORGANISATION_TYPE_URL),
    factory.addNotify()
  ));

export const useDashboardOrganisationType = ComposableFactory.get(DashboardOrganisationTypeServiceFactory);
export const useDashboardOrganisationTypes = ComposableFactory.getMany(DashboardOrganisationTypeServiceFactory);
export const useCreateDashboardOrganisationType = ComposableFactory.create(DashboardOrganisationTypeServiceFactory);
export const useUpdateDashboardOrganisationType = ComposableFactory.update(DashboardOrganisationTypeServiceFactory);
export const useRemoveDashboardOrganisationType = ComposableFactory.remove(DashboardOrganisationTypeServiceFactory);

