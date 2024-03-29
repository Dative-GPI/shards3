import { OrganisationDetails, OrganisationDetailsDTO } from "@dative-gpi/foundation-shared-domain/models";
import { ChangeOrganisationDashboardDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";

import { ORGANISATION_DASHBOARD_URL } from "../../config/urls";

const OrganisationServiceFactory = new ServiceFactory<OrganisationDetailsDTO, OrganisationDetails>("organisation", OrganisationDetails).create(factory => factory.build(
    factory.addCustom("changeDashboard", (axios, payload: ChangeOrganisationDashboardDTO) => axios.put(ORGANISATION_DASHBOARD_URL(), payload)),
    factory.addNotify()
));

export const useChangeDashboardOrganisation = ComposableFactory.custom(OrganisationServiceFactory, OrganisationServiceFactory.changeDashboard);