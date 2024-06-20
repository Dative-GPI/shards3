import { ActionDetails, ActionDetailsDTO, ActionFilters, ActionInfos, ActionInfosDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";

import { ACTIONS_URL } from "../../config/urls";

const ActionServiceFactory = new ServiceFactory<ActionDetailsDTO, ActionDetails>("action", ActionDetails).create(factory => factory.build(
    factory.addGetMany<ActionInfosDTO, ActionInfos, ActionFilters>(ACTIONS_URL, ActionInfos),
    factory.addNotify()
));

export const useActions = ComposableFactory.getMany(ActionServiceFactory);