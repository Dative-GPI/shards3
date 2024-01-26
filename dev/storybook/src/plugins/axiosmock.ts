import MockAdapter from 'axios-mock-adapter';

import { ServiceFactory } from '@dative-gpi/bones-ui';
import { IMAGES, TRANSLATIONS } from '@/mocks';
import { DEVICEORGANISATIONS } from '@/mocks/deviceOrganisations.mock';

export function mockApp() {
    const mock = new MockAdapter(ServiceFactory.http, { delayResponse: 2000 });
    mock.onGet("/api/shared/v1/translations/fr-FR").reply(200, TRANSLATIONS);
    mock.onGet("/api/shared/v1/images/raw/1").reply(200, IMAGES[0].raw);
    mock.onGet("/api/core/v1/organisations/dative/device-organisations/1").reply(200, DEVICEORGANISATIONS[0]);
    mock.onGet("/api/core/v1/organisations/dative/device-organisations/2").reply(200, DEVICEORGANISATIONS[1]);
    mock.onGet("/api/core/v1/organisations/dative/device-organisations/3").reply(200, DEVICEORGANISATIONS[2]);
}