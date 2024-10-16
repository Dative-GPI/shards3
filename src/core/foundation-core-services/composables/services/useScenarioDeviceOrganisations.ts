import { type CreateManyScenarioDeviceOrganisationDTO, type CreateScenarioDeviceOrganisationDTO, ScenarioDeviceOrganisationDetails, type ScenarioDeviceOrganisationDetailsDTO, type ScenarioDeviceOrganisationFilters, ScenarioDeviceOrganisationInfos, type ScenarioDeviceOrganisationInfosDTO, type UpdateScenarioDeviceOrganisationDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";

import { SCENARIO_DEVICE_ORGANISATIONS_URL, SCENARIO_DEVICE_ORGANISATION_URL } from "../../config";

const ScenarioDeviceOrganisationServiceFactory = new ServiceFactory<ScenarioDeviceOrganisationDetailsDTO, ScenarioDeviceOrganisationDetails>("scenarioDeviceOrganisation", ScenarioDeviceOrganisationDetails).create(factory => factory.build(
  factory.addCreate<CreateScenarioDeviceOrganisationDTO>(SCENARIO_DEVICE_ORGANISATIONS_URL),
  factory.addGet(SCENARIO_DEVICE_ORGANISATION_URL),
  factory.addGetMany<ScenarioDeviceOrganisationInfosDTO, ScenarioDeviceOrganisationInfos, ScenarioDeviceOrganisationFilters>(SCENARIO_DEVICE_ORGANISATIONS_URL, ScenarioDeviceOrganisationInfos),
  factory.addUpdate<UpdateScenarioDeviceOrganisationDTO>(SCENARIO_DEVICE_ORGANISATION_URL),
  factory.addRemove(SCENARIO_DEVICE_ORGANISATION_URL),
  factory.addNotify(notifyService => ({
    ...ServiceFactory.addCustom("createMany", (axios, payload: CreateManyScenarioDeviceOrganisationDTO) => axios.put(SCENARIO_DEVICE_ORGANISATIONS_URL(), payload), () => {
      notifyService.notify("reset");
    })
  }))
));

export const useScenarioDeviceOrganisation = ComposableFactory.get(ScenarioDeviceOrganisationServiceFactory);
export const useScenarioDeviceOrganisations = ComposableFactory.getMany(ScenarioDeviceOrganisationServiceFactory);
export const useCreateScenarioDeviceOrganisation = ComposableFactory.create(ScenarioDeviceOrganisationServiceFactory);
export const useUpdateScenarioDeviceOrganisation = ComposableFactory.update(ScenarioDeviceOrganisationServiceFactory);
export const useRemoveScenarioDeviceOrganisation = ComposableFactory.remove(ScenarioDeviceOrganisationServiceFactory);
export const useCreateManyScenarioDeviceOrganisation = ComposableFactory.custom(ScenarioDeviceOrganisationServiceFactory.createMany);