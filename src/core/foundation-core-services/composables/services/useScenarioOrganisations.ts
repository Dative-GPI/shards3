import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";
import { CreateScenarioOrganisationDTO, ScenarioOrganisationDetails, ScenarioOrganisationDetailsDTO, ScenarioOrganisationFilters, ScenarioOrganisationInfos, ScenarioOrganisationInfosDTO, UpdateScenarioOrganisationDTO } from "@dative-gpi/foundation-core-domain/models";
import { SCENARIO_ORGANISATION_URL, SCENARIO_ORGANISATIONS_URL } from "../../config/urls/scenarioOrganisations";


const ScenarioOrganisationServiceFactory = new ServiceFactory<ScenarioOrganisationDetailsDTO, ScenarioOrganisationDetails>("scenarioOrganisation", ScenarioOrganisationDetails)
  .createComplete<ScenarioOrganisationInfos, ScenarioOrganisationInfosDTO, CreateScenarioOrganisationDTO, UpdateScenarioOrganisationDTO, ScenarioOrganisationFilters>(SCENARIO_ORGANISATIONS_URL, SCENARIO_ORGANISATION_URL, ScenarioOrganisationInfos);
  
const ScenarioOrganisationServiceFactoryIncomplete = new ServiceFactory<ScenarioOrganisationDetailsDTO, ScenarioOrganisationDetails>("scenarioOrganisation", ScenarioOrganisationDetails)
    .create(factory => factory.build(
        factory.addNotify(notifyService => ({
            ...ServiceFactory.addCustom("duplicate", (axios, scenarioOrganisationId: string) => axios.patch(SCENARIO_ORGANISATION_URL(scenarioOrganisationId)), (dto: ScenarioOrganisationDetailsDTO) => {
              const result = new ScenarioOrganisationDetails(dto);
              notifyService.notify("add", result);
              return result;
            })
        })
    )));

export const useScenarioOrganisation = ComposableFactory.get(ScenarioOrganisationServiceFactory);
export const useScenarioOrganisations = ComposableFactory.getMany(ScenarioOrganisationServiceFactory);
export const useCreateScenarioOrganisation = ComposableFactory.create(ScenarioOrganisationServiceFactory);
export const useUpdateScenarioOrganisation = ComposableFactory.update(ScenarioOrganisationServiceFactory);
export const useRemoveScenarioOrganisation = ComposableFactory.remove(ScenarioOrganisationServiceFactory);
export const useDuplicateScenarioOrganisation = ComposableFactory.custom(ScenarioOrganisationServiceFactoryIncomplete.duplicate);