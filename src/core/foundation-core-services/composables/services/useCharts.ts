
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";
import { CHART_URL } from "../../config/urls";
import { ChartDetails, ChartDetailsDTO } from "@dative-gpi/foundation-core-domain/models";

const ChartServiceFactory = new ServiceFactory<ChartDetailsDTO, ChartDetails>("chart", ChartDetails).create(factory => factory.build(
  factory.addGet(CHART_URL),
  factory.addNotify()
));

export const useChart = ComposableFactory.get(ChartServiceFactory);