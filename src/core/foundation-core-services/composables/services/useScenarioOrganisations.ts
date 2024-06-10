import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";
import { CreateScenarioOrganisationDTO, ScenarioOrganisationDetails, ScenarioOrganisationDetailsDTO, ScenarioOrganisationFilters, ScenarioOrganisationInfos, ScenarioOrganisationInfosDTO, UpdateScenarioOrganisationDTO } from "@dative-gpi/foundation-core-domain/models";
import { SCENARIO_ORGANISATION_URL, SCENARIO_ORGANISATIONS_URL } from "../../config/urls/scenarioOrganisations";

const ScenarioOrganisationServiceFactory = new ServiceFactory<ScenarioOrganisationDetailsDTO, ScenarioOrganisationDetails>("scenarioOrganisation", ScenarioOrganisationDetails)
    .create(factory => factory.build(
        factory.addGet(SCENARIO_ORGANISATION_URL),
        factory.addGetMany<ScenarioOrganisationInfosDTO, ScenarioOrganisationInfos, ScenarioOrganisationFilters>(SCENARIO_ORGANISATIONS_URL, ScenarioOrganisationInfos),
        factory.addCreate<CreateScenarioOrganisationDTO>(SCENARIO_ORGANISATIONS_URL),
        factory.addUpdate<UpdateScenarioOrganisationDTO>(SCENARIO_ORGANISATION_URL),
        factory.addRemove(SCENARIO_ORGANISATION_URL),
        factory.addNotify()
    ));

export const useScenarioOrganisation = ComposableFactory.get(ScenarioOrganisationServiceFactory);
export const useScenarioOrganisations = ComposableFactory.getMany(ScenarioOrganisationServiceFactory);
export const useCreateScenarioOrganisation = ComposableFactory.create(ScenarioOrganisationServiceFactory);
export const useUpdateScenarioOrganisation = ComposableFactory.update(ScenarioOrganisationServiceFactory);
export const useRemoveScenarioOrganisation = ComposableFactory.remove(ScenarioOrganisationServiceFactory);