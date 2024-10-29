import { ModelStatusDetails, type ModelStatusDetailsDTO, type ModelStatusFilters, ModelStatusInfos, type ModelStatusInfosDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";

import { MODEL_STATUSES_URL, MODEL_STATUS_URL } from "../../config/urls";

const ModelStatusServiceFactory = new ServiceFactory<ModelStatusDetailsDTO, ModelStatusDetails>("model", ModelStatusDetails).create(factory => factory.build(
  factory.addGet(MODEL_STATUS_URL),
  factory.addGetMany<ModelStatusInfosDTO, ModelStatusInfos, ModelStatusFilters>(MODEL_STATUSES_URL, ModelStatusInfos),
  factory.addNotify()
));

export const useModelStatus = ComposableFactory.get(ModelStatusServiceFactory);
export const useModelStatuses = ComposableFactory.getMany(ModelStatusServiceFactory);