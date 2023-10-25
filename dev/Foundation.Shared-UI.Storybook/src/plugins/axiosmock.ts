import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { ORGANISATIONS_URL, ORGANISATION_URL } from '@dative-gpi/foundation-shared-ui-services'
import { OrganisationDetails } from '@dative-gpi/foundation-shared-ui-domain';
import { ServiceFactory } from '@dative-gpi/bones-ui';
import { organisation } from '@/mocks';

export function mockApp() {
    const mock = new MockAdapter(ServiceFactory.http);
    // const mock = new MockAdapter(axios);
    mock.onGet("/api/device").reply(200, { data: "Mocked device lr :)" });
}