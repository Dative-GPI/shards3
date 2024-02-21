import { CreateOrganisationDTO, OrganisationDetails, OrganisationDetailsDTO, OrganisationInfos, OrganisationInfosDTO, UpdateOrganisationDTO } from "@dative-gpi/foundation-shared-domain";
import { ComposableFactory , ServiceFactory } from "@dative-gpi/bones-ui";

import { ORGANISATIONS_URL, ORGANISATION_URL } from "../../config/urls";

const OrganisationServiceFactory = new ServiceFactory<OrganisationDetailsDTO, OrganisationDetails>("organisation", OrganisationDetails).create(factory => factory.build(
    factory.addGet(ORGANISATION_URL),
    factory.addGetMany<OrganisationInfosDTO, OrganisationInfos, OrganisationInfos>(ORGANISATIONS_URL, OrganisationInfos),
    factory.addCreate<CreateOrganisationDTO>(ORGANISATIONS_URL),
    factory.addUpdate<UpdateOrganisationDTO>(ORGANISATION_URL),
    factory.addNotify()
));

export const useOrganisation = ComposableFactory.get(OrganisationServiceFactory);
export const useOrganisations = ComposableFactory.getMany(OrganisationServiceFactory);
export const useCreateOrganisation = ComposableFactory.create(OrganisationServiceFactory);
export const useUpdateOrganisation = ComposableFactory.update(OrganisationServiceFactory);