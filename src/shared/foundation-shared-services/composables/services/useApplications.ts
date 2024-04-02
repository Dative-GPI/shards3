import { ApplicationDetails, ApplicationDetailsDTO } from "@dative-gpi/foundation-shared-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";

import { APPLICATION_CURRENT_URL } from "../../config/urls";

const ApplicationServiceFactory = new ServiceFactory<ApplicationDetailsDTO, ApplicationDetails>("application", ApplicationDetails).create(factory => factory.build(
    factory.addCustom("getCurrent", (axios) => axios.get(APPLICATION_CURRENT_URL())),
    factory.addNotify()
));

export const useCurrentApplication = ComposableFactory.custom(ApplicationServiceFactory, ApplicationServiceFactory.getCurrent);