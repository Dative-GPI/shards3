import { CreateUserOrganisationDTO, UpdateUserOrganisationDTO, UserOrganisationDetails, UserOrganisationDetailsDTO, UserOrganisationFilters, UserOrganisationInfos, UserOrganisationInfosDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";

import { USER_ORGANISATIONS_URL, USER_ORGANISATION_CURRENT_URL, USER_ORGANISATION_URL } from "../../config/urls";

const UserOrganisationServiceFactory = new ServiceFactory<UserOrganisationDetailsDTO, UserOrganisationDetails>("userOrganisation", UserOrganisationDetails).create(factory => factory.build(
    factory.addGet(USER_ORGANISATION_URL),
    factory.addGetMany<UserOrganisationInfosDTO, UserOrganisationInfos, UserOrganisationFilters>(USER_ORGANISATIONS_URL, UserOrganisationInfos),
    factory.addCreate<CreateUserOrganisationDTO>(USER_ORGANISATIONS_URL),
    factory.addUpdate<UpdateUserOrganisationDTO>(USER_ORGANISATION_URL),
    factory.addRemove(USER_ORGANISATION_URL),
    factory.addCustom("getCurrent", (axios) => axios.get(USER_ORGANISATION_CURRENT_URL())),
    factory.addCustom("updateCurrent", (axios, payload: UpdateUserOrganisationDTO) => axios.post(USER_ORGANISATION_CURRENT_URL(), payload)),
    factory.addNotify()
));

export const useUserOrganisation = ComposableFactory.get(UserOrganisationServiceFactory);
export const useUserOrganisations = ComposableFactory.getMany(UserOrganisationServiceFactory);
export const useCreateUserOrganisation = ComposableFactory.create(UserOrganisationServiceFactory);
export const useUpdateUserOrganisation = ComposableFactory.update(UserOrganisationServiceFactory);
export const useRemoveUserOrganisation = ComposableFactory.remove(UserOrganisationServiceFactory);
export const useCurrentUserOrganisation = ComposableFactory.custom(UserOrganisationServiceFactory, UserOrganisationServiceFactory.getCurrent);
export const useUpdateCurrentUserOrganisation = ComposableFactory.custom(UserOrganisationServiceFactory, UserOrganisationServiceFactory.updateCurrent);