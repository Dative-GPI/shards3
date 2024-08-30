import { type CreateScenarioOrganisationTypeDTO, ScenarioOrganisationTypeDetails, type ScenarioOrganisationTypeDetailsDTO, type ScenarioOrganisationTypeFilters, ScenarioOrganisationTypeInfos, type ScenarioOrganisationTypeInfosDTO, type UpdateScenarioOrganisationTypeDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";

import { SCENARIO_ORGANISATION_TYPE_URL, SCENARIO_ORGANISATION_TYPES_URL } from "../../config/urls/scenarioOrganisationTypes";

const ScenarioOrganisationTypeServiceFactory = new ServiceFactory<ScenarioOrganisationTypeDetailsDTO, ScenarioOrganisationTypeDetails>("scenarioOrganisationType", ScenarioOrganisationTypeDetails).create(factory => factory.build(
  factory.addGet(SCENARIO_ORGANISATION_TYPE_URL),
  factory.addGetMany<ScenarioOrganisationTypeInfosDTO, ScenarioOrganisationTypeInfos, ScenarioOrganisationTypeFilters>(SCENARIO_ORGANISATION_TYPES_URL, ScenarioOrganisationTypeInfos),
  factory.addUpdate<UpdateScenarioOrganisationTypeDTO>(SCENARIO_ORGANISATION_TYPE_URL),
  factory.addRemove(SCENARIO_ORGANISATION_TYPE_URL),
  factory.addRemove(SCENARIO_ORGANISATION_TYPE_URL),
  factory.addNotify(notifyService => ({
    ...ServiceFactory.addCustom("duplicate", (axios, scenarioOrganisationTypeId: string) => axios.patch(SCENARIO_ORGANISATION_TYPE_URL(scenarioOrganisationTypeId)), (dto: ScenarioOrganisationTypeDetailsDTO) => {
      const result = new ScenarioOrganisationTypeDetails(dto);
      notifyService.notify("update", result);
      return result;
    }),
    ...ServiceFactory.addCustom("publish", (axios, payload: CreateScenarioOrganisationTypeDTO) => axios.post(SCENARIO_ORGANISATION_TYPES_URL(), payload), (dto: ScenarioOrganisationTypeDetailsDTO) => {
      const result = new ScenarioOrganisationTypeDetails(dto);
      notifyService.notify("add", result);
      return result;
    })
  }))
));

export const useScenarioOrganisationType = ComposableFactory.get(ScenarioOrganisationTypeServiceFactory);
export const useScenarioOrganisationTypes = ComposableFactory.getMany(ScenarioOrganisationTypeServiceFactory);
export const useUpdateScenarioOrganisationType = ComposableFactory.update(ScenarioOrganisationTypeServiceFactory);
export const useRemoveScenarioOrganisationType = ComposableFactory.remove(ScenarioOrganisationTypeServiceFactory);
export const useDuplicateScenarioOrganisationType = ComposableFactory.custom(ScenarioOrganisationTypeServiceFactory.duplicate);
export const usePublishScenarioOrganisationType = ComposableFactory.custom(ScenarioOrganisationTypeServiceFactory.publish);