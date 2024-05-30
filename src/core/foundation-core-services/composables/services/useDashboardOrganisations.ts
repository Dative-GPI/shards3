import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";
import { CreateDashboardOrganisationDTO, DashboardOrganisationDetails, DashboardOrganisationDetailsDTO, DashboardOrganisationFilters, DashboardOrganisationInfos, DashboardOrganisationInfosDTO, UpdateDashboardOrganisationDTO } from "@dative-gpi/foundation-core-domain/models";
import { DASHBOARD_ORGANISATION_URL, DASHBOARD_ORGANISATIONS_URL } from "../../config";

const DashboardOrganisationServiceFactory = new ServiceFactory<DashboardOrganisationDetailsDTO, DashboardOrganisationDetails>("dashboardOrganisation", DashboardOrganisationDetails)
  .create(factory => factory.build(
    factory.addGet(DASHBOARD_ORGANISATION_URL),
    factory.addGetMany<DashboardOrganisationInfosDTO, DashboardOrganisationInfos, DashboardOrganisationFilters>(DASHBOARD_ORGANISATIONS_URL, DashboardOrganisationInfos),
    factory.addCreate<CreateDashboardOrganisationDTO>(DASHBOARD_ORGANISATIONS_URL),
    factory.addUpdate<UpdateDashboardOrganisationDTO>(DASHBOARD_ORGANISATION_URL),
    factory.addRemove(DASHBOARD_ORGANISATION_URL),
    factory.addNotify()
  ));

export const useDashboardOrganisation = ComposableFactory.get(DashboardOrganisationServiceFactory);
export const useDashboardOrganisations = ComposableFactory.getMany(DashboardOrganisationServiceFactory);
export const useCreateDashboardOrganisation = ComposableFactory.create(DashboardOrganisationServiceFactory);
export const useUpdateDashboardOrganisation = ComposableFactory.update(DashboardOrganisationServiceFactory);
export const useRemoveDashboardOrganisation = ComposableFactory.remove(DashboardOrganisationServiceFactory);

