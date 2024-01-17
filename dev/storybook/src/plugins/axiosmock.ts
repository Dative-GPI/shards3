import MockAdapter from 'axios-mock-adapter';

import { ServiceFactory } from '@dative-gpi/bones-ui';
import { IMAGES, TRANSLATIONS } from '@/mocks';

export function mockApp() {
    const mock = new MockAdapter(ServiceFactory.http, { delayResponse: 2000 });
    mock.onGet("/api/shared/v1/translations/fr-FR").reply(200, TRANSLATIONS);
    mock.onGet("/api/shared/v1/images/raw/1").reply(200, IMAGES[0].raw);
}