import MockAdapter from 'axios-mock-adapter';

import { ServiceFactory } from '@dative-gpi/bones-ui';

import { AUTHTOKENS, CUSTOMPROPERTIES, CONNECTIVITYSCENARIOS, SCENARIOORGANISATIONS, SCENARIOORGANISATIONTYPES, CUSTOMPROPERTYVALUES, DASHBOARDORGANISATIONS, DASHBOARDORGANISATIONTYPES, DASHBOARDSHALLOWS, DEVICEORGANISATIONS, FOLDERS, GROUPS, IMAGES, LANGUAGES, USERORGANISATIONTABLES, TIMEZONES, TRANSLATIONS, ORGANISATIONS, ROLEORGANISATIONS, ROLEORGANISATIONTYPES, LOCATIONS, MANUFACTURERS, USERORGANISATIONS, ORGANISATIONTYPES, MODELS, DATACATEGORIES, DATADEFINITIONS, ALERTS, COMMENTS, CHARTORGANISATIONS, CHARTORGANISATIONTYPES, SERVICEACCOUNTORGANISATIONS } from '@/mocks';

const mock = new MockAdapter((ServiceFactory.http as any), { delayResponse: 200 });

const generateRegExp = (endpoint: string) => {
    const escapedEndpoint = endpoint.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Escape special characters
    return new RegExp(`^${escapedEndpoint}(\\?.+)?$`);
};

const onGetWithRegex = (endpoint: string, data: any) => {
    const regex = generateRegExp(endpoint);
    mock.onGet(regex).reply(200, data);
};

export function mockApp() {
    onGetWithRegex("/api/foundation/shared/v1/translations/fr-FR", TRANSLATIONS);
    onGetWithRegex("/api/foundation/shared/v1/time-zones", TIMEZONES);
    onGetWithRegex("/api/foundation/shared/v1/organisations", ORGANISATIONS);
    onGetWithRegex("/api/foundation/shared/v1/languages", LANGUAGES);

    onGetWithRegex("/api/foundation/core/v1/organisations/dative/dashboard-organisations", DASHBOARDORGANISATIONS);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/dashboard-shallows", DASHBOARDSHALLOWS);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/dashboard-organisation-types", DASHBOARDORGANISATIONTYPES);

    onGetWithRegex("/api/foundation/core/v1/organisations/dative/dashboard-organisations/1", DASHBOARDORGANISATIONS[0]);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/dashboard-organisations/2", DASHBOARDORGANISATIONS[1]);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/dashboard-organisations/3", DASHBOARDORGANISATIONS[2]);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/dashboard-shallows/1", DASHBOARDSHALLOWS[0]);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/dashboard-shallows/2", DASHBOARDSHALLOWS[1]);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/dashboard-shallows/3", DASHBOARDSHALLOWS[2]);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/dashboard-organisation-types/1", DASHBOARDORGANISATIONTYPES[0]);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/dashboard-organisation-types/2", DASHBOARDORGANISATIONTYPES[1]);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/dashboard-organisation-types/3", DASHBOARDORGANISATIONTYPES[2]);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/device-organisations", DEVICEORGANISATIONS);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/device-organisations/1", DEVICEORGANISATIONS[0]);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/device-organisations/2", DEVICEORGANISATIONS[1]);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/device-organisations/3", DEVICEORGANISATIONS[2]);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/folders", FOLDERS);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/folders/1", FOLDERS[0]);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/folders/2", FOLDERS[1]);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/folders/3", FOLDERS[2]);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/groups", GROUPS);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/groups/1", GROUPS[0]);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/groups/2", GROUPS[1]);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/locations/1", LOCATIONS[0]);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/locations/2", LOCATIONS[1]);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/locations/3", LOCATIONS[2]);

    onGetWithRegex("/api/foundation/core/v1/organisations/dative/user-organisation-tables/alerts1", USERORGANISATIONTABLES[9]);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/user-organisation-tables/authTokens1", USERORGANISATIONTABLES[8]);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/user-organisation-tables/chartOrganisations1", USERORGANISATIONTABLES[10]);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/user-organisation-tables/chartOrganisationTypes1", USERORGANISATIONTABLES[10]);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/user-organisation-tables/charts1", USERORGANISATIONTABLES[10]);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/user-organisation-tables/dashboards1", USERORGANISATIONTABLES[6]);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/user-organisation-tables/dashboardOrganisationTypes1", USERORGANISATIONTABLES[6]);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/user-organisation-tables/dataCategories1", USERORGANISATIONTABLES[10]);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/user-organisation-tables/dataDefinitions1", USERORGANISATIONTABLES[12]);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/user-organisation-tables/devices1", USERORGANISATIONTABLES[2]);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/user-organisation-tables/devices2", USERORGANISATIONTABLES[3]);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/user-organisation-tables/folders1", USERORGANISATIONTABLES[7]);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/user-organisation-tables/groups1", USERORGANISATIONTABLES[0]);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/user-organisation-tables/locations1", USERORGANISATIONTABLES[1]);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/user-organisation-tables/models1", USERORGANISATIONTABLES[13]);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/user-organisation-tables/roleOrganisations1", USERORGANISATIONTABLES[14]);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/user-organisation-tables/roleOrganisationTypes1", USERORGANISATIONTABLES[14]);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/user-organisation-tables/serviceAccountOrganisations1", USERORGANISATIONTABLES[16]);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/user-organisation-tables/scenarioOrganisations1", USERORGANISATIONTABLES[15]);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/user-organisation-tables/scenarioOrganisationTypes1", USERORGANISATIONTABLES[15]);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/user-organisation-tables/users1", USERORGANISATIONTABLES[4]);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/user-organisation-tables/users2", USERORGANISATIONTABLES[5]);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/user-organisation-tables/connectivityScenarios1", USERORGANISATIONTABLES[17]);

    onGetWithRegex("/api/foundation/core/v1/organisations/dative/custom-properties", CUSTOMPROPERTIES);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/custom-property-values/1/1/code", CUSTOMPROPERTYVALUES);

    onGetWithRegex("/api/foundation/core/v1/organisations/dative/chart-organisation-types", CHARTORGANISATIONTYPES);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/role-organisation-types", ROLEORGANISATIONTYPES);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/chart-organisations", CHARTORGANISATIONS);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/role-organisations", ROLEORGANISATIONS);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/user-organisations", USERORGANISATIONS);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/organisation-types", ORGANISATIONTYPES);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/data-categories", DATACATEGORIES);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/data-definitions", DATADEFINITIONS);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/manufacturers", MANUFACTURERS);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/locations", LOCATIONS);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/languages", LANGUAGES);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/comments", COMMENTS);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/alerts", ALERTS);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/models", MODELS);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/groups", GROUPS);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/service-account-organisations", SERVICEACCOUNTORGANISATIONS);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/scenario-organisations", SCENARIOORGANISATIONS);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/scenario-organisation-types", SCENARIOORGANISATIONTYPES);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/service-account-role-organisations", ROLEORGANISATIONS);
    onGetWithRegex("/api/foundation/core/v1/organisations/dative/connectivity-scenarios", CONNECTIVITYSCENARIOS);

    // onGetWithRegex("/api/shared/v1/images/1/raw", IMAGES[0].raw);
    onGetWithRegex("/api/foundation/shared/v1/images/1", IMAGES[0]);

    onGetWithRegex("/api/foundation/shared/v1/pats", AUTHTOKENS);
}