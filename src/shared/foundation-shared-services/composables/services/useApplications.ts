import { ApplicationDetails, ApplicationDetailsDTO } from "@dative-gpi/foundation-shared-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";

import { APPLICATION_CURRENT_URL } from "../../config/urls";

const ApplicationServiceFactory = {
    ...ServiceFactory.addCustom("getCurrent", (axios) => axios.get(APPLICATION_CURRENT_URL()), (dto: ApplicationDetailsDTO) => new ApplicationDetails(dto))
};

export const useCurrentApplication = ComposableFactory.custom(ApplicationServiceFactory.getCurrent);