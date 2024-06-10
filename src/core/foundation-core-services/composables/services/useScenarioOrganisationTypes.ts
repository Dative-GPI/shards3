import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";
import { CreateScenarioOrganisationTypeDTO, ScenarioOrganisationTypeDetails, ScenarioOrganisationTypeDetailsDTO, ScenarioOrganisationTypeFilters, ScenarioOrganisationTypeInfos, ScenarioOrganisationTypeInfosDTO, UpdateScenarioOrganisationTypeDTO } from "@dative-gpi/foundation-core-domain/models";
import { SCENARIO_ORGANISATION_TYPE_URL, SCENARIO_ORGANISATION_TYPES_URL } from "../../config/urls/scenarioOrganisationTypes";

const ScenarioOrganisationTypeServiceFactory = new ServiceFactory<ScenarioOrganisationTypeDetailsDTO, ScenarioOrganisationTypeDetails>("scenarioOrganisationType", ScenarioOrganisationTypeDetails)
    .create(factory => factory.build(
        factory.addGet(SCENARIO_ORGANISATION_TYPE_URL),
        factory.addGetMany<ScenarioOrganisationTypeInfosDTO, ScenarioOrganisationTypeInfos, ScenarioOrganisationTypeFilters>(SCENARIO_ORGANISATION_TYPES_URL, ScenarioOrganisationTypeInfos),
        factory.addCreate<CreateScenarioOrganisationTypeDTO>(SCENARIO_ORGANISATION_TYPES_URL),
        factory.addUpdate<UpdateScenarioOrganisationTypeDTO>(SCENARIO_ORGANISATION_TYPE_URL),
        factory.addRemove(SCENARIO_ORGANISATION_TYPE_URL),
        factory.addNotify()
    ));

export const useScenarioOrganisationType = ComposableFactory.get(ScenarioOrganisationTypeServiceFactory);
export const useScenarioOrganisationTypes = ComposableFactory.getMany(ScenarioOrganisationTypeServiceFactory);
export const useCreateScenarioOrganisationType = ComposableFactory.create(ScenarioOrganisationTypeServiceFactory);
export const useUpdateScenarioOrganisationType = ComposableFactory.update(ScenarioOrganisationTypeServiceFactory);
export const useRemoveScenarioOrganisationType = ComposableFactory.remove(ScenarioOrganisationTypeServiceFactory);