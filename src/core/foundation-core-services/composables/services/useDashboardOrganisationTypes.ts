import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";
import { DashboardOrganisationTypeDetails, DashboardOrganisationTypeDetailsDTO, DashboardOrganisationTypeFilters, DashboardOrganisationTypeInfos, DashboardOrganisationTypeInfosDTO } from "@dative-gpi/foundation-core-domain/models";
import {  } from "../../config";
import { DASHBOARD_ORGANISATION_TYPE_URL, DASHBOARD_ORGANISATION_TYPES_URL } from "../../config/urls/dashboardOrganisationTypes";

const DashboardOrganisationTypeServiceFactory = new ServiceFactory<DashboardOrganisationTypeDetailsDTO, DashboardOrganisationTypeDetails>("dashboardOrganisationType", DashboardOrganisationTypeDetails)
  .create(factory => factory.build(
    factory.addGet(DASHBOARD_ORGANISATION_TYPE_URL),
    factory.addGetMany<DashboardOrganisationTypeInfosDTO, DashboardOrganisationTypeInfos, DashboardOrganisationTypeFilters>(DASHBOARD_ORGANISATION_TYPES_URL, DashboardOrganisationTypeInfos),
    factory.addNotify()
  ));

export const useDashboardOrganisationType = ComposableFactory.get(DashboardOrganisationTypeServiceFactory);
export const useDashboardOrganisationTypes = ComposableFactory.getMany(DashboardOrganisationTypeServiceFactory);

