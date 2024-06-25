import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";
import type { CreateConnectivityScenarioDTO, ConnectivityScenarioDetailsDTO, ConnectivityScenarioFilters, ConnectivityScenarioInfosDTO, UpdateConnectivityScenarioDTO } from "@dative-gpi/foundation-core-domain/models";
import { ConnectivityScenarioDetails, ConnectivityScenarioInfos } from "@dative-gpi/foundation-core-domain/models";

import { CONNECTIVITY_SCENARIOS_URL, CONNECTIVITY_SCENARIO_URL } from "../../config";

const ConnectivityScenarioServiceFactory = new ServiceFactory<ConnectivityScenarioDetailsDTO, ConnectivityScenarioDetails>("ConnectivityScenario", ConnectivityScenarioDetails)
  .createComplete<ConnectivityScenarioInfos, ConnectivityScenarioInfosDTO, CreateConnectivityScenarioDTO, UpdateConnectivityScenarioDTO, ConnectivityScenarioFilters>(CONNECTIVITY_SCENARIOS_URL, CONNECTIVITY_SCENARIO_URL, ConnectivityScenarioInfos);

export const useConnectivityScenario = ComposableFactory.get(ConnectivityScenarioServiceFactory);
export const useConnectivityScenarios = ComposableFactory.getMany(ConnectivityScenarioServiceFactory);
export const useCreateConnectivityScenario = ComposableFactory.create(ConnectivityScenarioServiceFactory);
export const useUpdateConnectivityScenario = ComposableFactory.update(ConnectivityScenarioServiceFactory);
export const useRemoveConnectivityScenario = ComposableFactory.remove(ConnectivityScenarioServiceFactory);

