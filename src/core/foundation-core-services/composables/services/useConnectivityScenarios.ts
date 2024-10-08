import { ConnectivityScenarioDetails, type ConnectivityScenarioDetailsDTO, type ConnectivityScenarioFilters, ConnectivityScenarioInfos, type ConnectivityScenarioInfosDTO, type UpsertConnectivityScenarioDTO, type UpdateConnectivityScenarioDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";

import { CONNECTIVITY_SCENARIOS_URL, CONNECTIVITY_SCENARIO_URL } from "../../config";


const ConnectivityScenarioServiceFactory = new ServiceFactory<ConnectivityScenarioDetailsDTO, ConnectivityScenarioDetails>("ConnectivityScenario", ConnectivityScenarioDetails).create(factory => factory.build(
  factory.addGet(CONNECTIVITY_SCENARIO_URL),
  factory.addGetMany<ConnectivityScenarioInfosDTO, ConnectivityScenarioInfos, ConnectivityScenarioFilters>(CONNECTIVITY_SCENARIOS_URL, ConnectivityScenarioInfos),
  factory.addUpdate<UpdateConnectivityScenarioDTO>(CONNECTIVITY_SCENARIO_URL),
  factory.addRemove(CONNECTIVITY_SCENARIO_URL),
  factory.addNotify(notifyService => ({
    ...ServiceFactory.addCustom("upsert", (axios, payload: UpsertConnectivityScenarioDTO) => axios.post(CONNECTIVITY_SCENARIOS_URL(), payload), () => {
      notifyService.notify("reset");
    })
  }))
));


export const useConnectivityScenario = ComposableFactory.get(ConnectivityScenarioServiceFactory);
export const useConnectivityScenarios = ComposableFactory.getMany(ConnectivityScenarioServiceFactory);
export const useUpdateConnectivityScenario = ComposableFactory.update(ConnectivityScenarioServiceFactory);
export const useRemoveConnectivityScenario = ComposableFactory.remove(ConnectivityScenarioServiceFactory);
export const useUpsertConnectivityScenario = ComposableFactory.custom(ConnectivityScenarioServiceFactory.upsert);

