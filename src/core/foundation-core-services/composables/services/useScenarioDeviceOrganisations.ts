import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";
import type { CreateScenarioDeviceOrganisationDTO, ScenarioDeviceOrganisationDetailsDTO, ScenarioDeviceOrganisationFilters, ScenarioDeviceOrganisationInfosDTO, UpdateScenarioDeviceOrganisationDTO } from "@dative-gpi/foundation-core-domain/models";
import { ScenarioDeviceOrganisationDetails, ScenarioDeviceOrganisationInfos } from "@dative-gpi/foundation-core-domain/models";

import { SCENARIO_DEVICE_ORGANISATIONS_URL, SCENARIO_DEVICE_ORGANISATION_URL } from "../../config";

const ScenarioDeviceOrganisationServiceFactory = new ServiceFactory<ScenarioDeviceOrganisationDetailsDTO, ScenarioDeviceOrganisationDetails>("scenarioDeviceOrganisation", ScenarioDeviceOrganisationDetails)
  .createComplete<ScenarioDeviceOrganisationInfos, ScenarioDeviceOrganisationInfosDTO, CreateScenarioDeviceOrganisationDTO, UpdateScenarioDeviceOrganisationDTO, ScenarioDeviceOrganisationFilters>(SCENARIO_DEVICE_ORGANISATIONS_URL, SCENARIO_DEVICE_ORGANISATION_URL, ScenarioDeviceOrganisationInfos);

export const useScenarioDeviceOrganisation = ComposableFactory.get(ScenarioDeviceOrganisationServiceFactory);
export const useScenarioDeviceOrganisations = ComposableFactory.getMany(ScenarioDeviceOrganisationServiceFactory);
export const useCreateScenarioDeviceOrganisation = ComposableFactory.create(ScenarioDeviceOrganisationServiceFactory);
export const useUpdateScenarioDeviceOrganisation = ComposableFactory.update(ScenarioDeviceOrganisationServiceFactory);
export const useRemoveScenarioDeviceOrganisation = ComposableFactory.remove(ScenarioDeviceOrganisationServiceFactory);

