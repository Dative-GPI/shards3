import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { ORGANISATIONS_URL, ORGANISATION_URL } from '@dative-gpi/foundation-core-services'
import { OrganisationDetails } from '@dative-gpi/foundation-core-domain';
import { ServiceFactory } from '@dative-gpi/bones-ui';
import { organisation } from '@/mocks';

export function mockApp() {
    const mock = new MockAdapter(ServiceFactory.http);
    mock.onGet("/api/core/v1/organisations/testId").reply(200, { data: "Mocked organisation lr :)" });
}