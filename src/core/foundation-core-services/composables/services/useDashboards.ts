import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";

import type { DashboardDetailsDTO } from "@dative-gpi/foundation-core-domain/models";
import { DashboardDetails } from "@dative-gpi/foundation-core-domain/models";

import { DASHBOARD_CURRENT_URL } from "../../config";

const DashboardServiceFactory = new ServiceFactory<DashboardDetailsDTO, DashboardDetails>("dashboard", DashboardDetails).create(factory => factory.build(
    ServiceFactory.addCustom("getCurrent", (axios) => axios.get(DASHBOARD_CURRENT_URL()), (dto: DashboardDetailsDTO) => new DashboardDetails(dto))
));

export const useCurrentDashboard = ComposableFactory.custom(DashboardServiceFactory.getCurrent);