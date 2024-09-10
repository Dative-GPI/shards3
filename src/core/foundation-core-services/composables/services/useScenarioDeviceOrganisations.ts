import { type CreateManyScenarioDeviceOrganisationDTO, type CreateScenarioDeviceOrganisationDTO, ScenarioDeviceOrganisationDetails, type ScenarioDeviceOrganisationDetailsDTO, type ScenarioDeviceOrganisationFilters, ScenarioDeviceOrganisationInfos, type ScenarioDeviceOrganisationInfosDTO, type UpdateScenarioDeviceOrganisationDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";

import { SCENARIO_DEVICE_ORGANISATIONS_URL, SCENARIO_DEVICE_ORGANISATION_URL } from "../../config";

const ScenarioDeviceOrganisationServiceFactory = new ServiceFactory<ScenarioDeviceOrganisationDetailsDTO, ScenarioDeviceOrganisationDetails>("scenarioDeviceOrganisation", ScenarioDeviceOrganisationDetails)
  .createComplete<ScenarioDeviceOrganisationInfos, ScenarioDeviceOrganisationInfosDTO, CreateScenarioDeviceOrganisationDTO, UpdateScenarioDeviceOrganisationDTO, ScenarioDeviceOrganisationFilters>(SCENARIO_DEVICE_ORGANISATIONS_URL, SCENARIO_DEVICE_ORGANISATION_URL, ScenarioDeviceOrganisationInfos);

const ScenarioDeviceOrganisationServiceFactoryIncomplete = new ServiceFactory<ScenarioDeviceOrganisationInfosDTO, ScenarioDeviceOrganisationInfos>("notifications", ScenarioDeviceOrganisationDetails).create(factory => factory.build(
  factory.addNotify(() => ({
    ...ServiceFactory.addCustom("createMany", (axios, payload: CreateManyScenarioDeviceOrganisationDTO) => axios.put(SCENARIO_DEVICE_ORGANISATIONS_URL(), payload), () => {
    })
  }))
));

export const useScenarioDeviceOrganisation = ComposableFactory.get(ScenarioDeviceOrganisationServiceFactory);
export const useScenarioDeviceOrganisations = ComposableFactory.getMany(ScenarioDeviceOrganisationServiceFactory);
export const useCreateScenarioDeviceOrganisation = ComposableFactory.create(ScenarioDeviceOrganisationServiceFactory);
export const useUpdateScenarioDeviceOrganisation = ComposableFactory.update(ScenarioDeviceOrganisationServiceFactory);
export const useRemoveScenarioDeviceOrganisation = ComposableFactory.remove(ScenarioDeviceOrganisationServiceFactory);
export const useCreateManyScenarioDeviceOrganisation = ComposableFactory.custom(ScenarioDeviceOrganisationServiceFactoryIncomplete.createMany);