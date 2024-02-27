import MockAdapter from 'axios-mock-adapter';

import { ServiceFactory } from '@dative-gpi/bones-ui';

import { DEVICEORGANISATIONS, GROUPS, IMAGES, TABLES, TRANSLATIONS } from '@/mocks';

export function mockApp() {
    const mock = new MockAdapter(ServiceFactory.http, { delayResponse: 2000 });
    mock.onGet("/api/shared/v1/translations/fr-FR").reply(200, TRANSLATIONS);
    mock.onGet("/api/shared/v1/images/raw/1").reply(200, IMAGES[0].raw);
    mock.onGet("/api/core/v1/organisations/dative/device-organisations/1").reply(200, DEVICEORGANISATIONS[0]);
    mock.onGet("/api/core/v1/organisations/dative/device-organisations/2").reply(200, DEVICEORGANISATIONS[1]);
    mock.onGet("/api/core/v1/organisations/dative/device-organisations/3").reply(200, DEVICEORGANISATIONS[2]);
    mock.onGet("/api/core/v1/organisations/dative/groups/1").reply(200, GROUPS[0]);
    mock.onGet("/api/core/v1/organisations/dative/groups/2").reply(200, GROUPS[1]);
    mock.onGet("/api/core/v1/organisations/dative/tables/groups1").reply(200, TABLES[0]);
}