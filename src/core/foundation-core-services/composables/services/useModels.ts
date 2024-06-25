import type { ModelDetailsDTO, ModelFilters, ModelInfosDTO } from "@dative-gpi/foundation-core-domain/models";
import { ModelDetails, ModelInfos } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";

import { MODELS_URL, MODEL_URL } from "../../config/urls";

const ModelServiceFactory = new ServiceFactory<ModelDetailsDTO, ModelDetails>("model", ModelDetails).create(factory => factory.build(
    factory.addGet(MODEL_URL),
    factory.addGetMany<ModelInfosDTO, ModelInfos, ModelFilters>(MODELS_URL, ModelInfos),
    factory.addNotify()
));

export const useModel = ComposableFactory.get(ModelServiceFactory);
export const useModels = ComposableFactory.getMany(ModelServiceFactory);