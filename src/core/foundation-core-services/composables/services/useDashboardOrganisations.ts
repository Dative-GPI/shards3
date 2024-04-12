import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";
import { DashboardOrganisationDetails, DashboardOrganisationDetailsDTO, DashboardOrganisationFilters, DashboardOrganisationInfos, DashboardOrganisationInfosDTO } from "@dative-gpi/foundation-core-domain/models";
import { DASHBOARD_ORGANISATION_URL, DASHBOARD_ORGANISATIONS_URL } from "../../config";

const DashboardOrganisationServiceFactory = new ServiceFactory<DashboardOrganisationDetailsDTO, DashboardOrganisationDetails>("dashboardOrganisation", DashboardOrganisationDetails)
  .create(factory => factory.build(
    factory.addGet(DASHBOARD_ORGANISATION_URL),
    factory.addGetMany<DashboardOrganisationInfosDTO, DashboardOrganisationInfos, DashboardOrganisationFilters>(DASHBOARD_ORGANISATIONS_URL, DashboardOrganisationInfos),
    factory.addNotify()
  ));

export const useDashboardOrganisation = ComposableFactory.get(DashboardOrganisationServiceFactory);
export const useDashboardOrganisations = ComposableFactory.getMany(DashboardOrganisationServiceFactory);

