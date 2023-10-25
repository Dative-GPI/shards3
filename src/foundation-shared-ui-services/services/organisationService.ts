import { ServiceFactory, ComposableFactory } from '@dative-gpi/bones-ui';
import { ORGANISATIONS_URL, ORGANISATION_URL } from '../config';
import { OrganisationDetails, OrganisationInfos } from '@dative-gpi/foundation-shared-ui-domain';

const organisationServiceFactory = ServiceFactory.createComplete("organisation", 
    ORGANISATIONS_URL, 
    ORGANISATION_URL, 
    OrganisationDetails, 
    OrganisationInfos);

export const useOrganisation = ComposableFactory.get<OrganisationDetails>(organisationServiceFactory);
export const useOrganisations = ComposableFactory.getMany<OrganisationInfos, any>(organisationServiceFactory);