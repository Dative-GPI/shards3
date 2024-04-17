import MockAdapter from 'axios-mock-adapter';

import { ServiceFactory } from '@dative-gpi/bones-ui';

import { DASHBOARDORGANISATIONS, DASHBOARDORGANISATIONTYPES, DASHBOARDSHALLOWS, DEVICEORGANISATIONS, FOLDERS, GROUPS, IMAGES, LANGUAGES, USERORGANISATIONTABLES, TIMEZONES, TRANSLATIONS } from '@/mocks';

export function mockApp() {
    const mock = new MockAdapter((ServiceFactory.http as any), { delayResponse: 2000 });
    mock.onGet("/api/foundation/shared/v1/translations/fr-FR").reply(200, TRANSLATIONS);
    mock.onGet("/api/foundation/shared/v1/time-zones").reply(200, TIMEZONES);
    mock.onGet("/api/foundation/core/v1/organisations/dative/dashboard-organisations/1").reply(200, DASHBOARDORGANISATIONS[0]);
    mock.onGet("/api/foundation/core/v1/organisations/dative/dashboard-organisations/2").reply(200, DASHBOARDORGANISATIONS[1]);
    mock.onGet("/api/foundation/core/v1/organisations/dative/dashboard-organisations/3").reply(200, DASHBOARDORGANISATIONS[2]);
    mock.onGet("/api/foundation/core/v1/organisations/dative/dashboard-shallows/1").reply(200, DASHBOARDSHALLOWS[0]);
    mock.onGet("/api/foundation/core/v1/organisations/dative/dashboard-shallows/2").reply(200, DASHBOARDSHALLOWS[1]);
    mock.onGet("/api/foundation/core/v1/organisations/dative/dashboard-shallows/3").reply(200, DASHBOARDSHALLOWS[2]);
    mock.onGet("/api/foundation/core/v1/organisations/dative/dashboard-organisation-types/1").reply(200, DASHBOARDORGANISATIONTYPES[0]);
    mock.onGet("/api/foundation/core/v1/organisations/dative/dashboard-organisation-types/2").reply(200, DASHBOARDORGANISATIONTYPES[1]);
    mock.onGet("/api/foundation/core/v1/organisations/dative/dashboard-organisation-types/3").reply(200, DASHBOARDORGANISATIONTYPES[2]);
    mock.onGet("/api/foundation/core/v1/organisations/dative/device-organisations/1").reply(200, DEVICEORGANISATIONS[0]);
    mock.onGet("/api/foundation/core/v1/organisations/dative/device-organisations/2").reply(200, DEVICEORGANISATIONS[1]);
    mock.onGet("/api/foundation/core/v1/organisations/dative/device-organisations/3").reply(200, DEVICEORGANISATIONS[2]);
    mock.onGet("/api/foundation/core/v1/organisations/dative/folders/1").reply(200, FOLDERS[0]);
    mock.onGet("/api/foundation/core/v1/organisations/dative/folders/2").reply(200, FOLDERS[1]);
    mock.onGet("/api/foundation/core/v1/organisations/dative/folders/3").reply(200, FOLDERS[2]);
    mock.onGet("/api/foundation/core/v1/organisations/dative/groups/1").reply(200, GROUPS[0]);
    mock.onGet("/api/foundation/core/v1/organisations/dative/groups/2").reply(200, GROUPS[1]);
    mock.onGet("/api/foundation/core/v1/organisations/dative/user-organisation-tables/groups1").reply(200, USERORGANISATIONTABLES[0]);
    mock.onGet("/api/foundation/core/v1/organisations/dative/languages").reply(200, LANGUAGES);

    mock.onGet("/api/shared/v1/images/raw/1").reply(200, IMAGES[0].raw);
    mock.onGet("/api/shared/v1/images/blurHash/1").reply(200, IMAGES[0].blurHash);
}