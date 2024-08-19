import { OrganisationDetails, type OrganisationDetailsDTO } from "@dative-gpi/foundation-shared-domain/models";
import { type ChangeOrganisationDashboardDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";

import { ORGANISATION_DASHBOARD_URL } from "../../config/urls";

const OrganisationServiceFactory = new ServiceFactory<OrganisationDetailsDTO, OrganisationDetails>("organisation", OrganisationDetails).create(factory => factory.build(
  factory.addNotify(notifyService => ({
    ...ServiceFactory.addCustom("changeDashboard", (axios, payload: ChangeOrganisationDashboardDTO) => axios.put(ORGANISATION_DASHBOARD_URL(), payload), (dto: OrganisationDetailsDTO) => {
      const result = new OrganisationDetails(dto);
      notifyService.notify("update", result);
      return result;
    })
  }))
));

export const useChangeDashboardOrganisation = ComposableFactory.custom(OrganisationServiceFactory.changeDashboard);