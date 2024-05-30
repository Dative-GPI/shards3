import { ActionDetails, ActionDetailsDTO, ActionInfos, ActionInfosDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";

import { ACTIONS_URL } from "../../config/urls";

const ActionServiceFactory = new ServiceFactory<ActionDetailsDTO, ActionDetails>("action", ActionDetails).create(factory => factory.build(
    factory.addGetMany<ActionInfosDTO, ActionInfos, string>(ACTIONS_URL, ActionInfos),
    factory.addNotify()
));

export const useActions = ComposableFactory.getMany(ActionServiceFactory);