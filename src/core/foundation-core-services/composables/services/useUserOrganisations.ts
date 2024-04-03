import { CreateUserOrganisationDTO, UpdateUserOrganisationDTO, UserOrganisationDetails, UserOrganisationDetailsDTO, UserOrganisationFilters, UserOrganisationInfos, UserOrganisationInfosDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";

import { USER_ORGANISATIONS_URL, USER_ORGANISATION_CURRENT_URL, USER_ORGANISATION_URL } from "../../config/urls";

const UserOrganisationServiceFactory = new ServiceFactory<UserOrganisationDetailsDTO, UserOrganisationDetails>("userOrganisation", UserOrganisationDetails).create(factory => factory.build(
    factory.addGet(USER_ORGANISATION_URL),
    factory.addGetMany<UserOrganisationInfosDTO, UserOrganisationInfos, UserOrganisationFilters>(USER_ORGANISATIONS_URL, UserOrganisationInfos),
    factory.addCreate<CreateUserOrganisationDTO>(USER_ORGANISATIONS_URL),
    factory.addUpdate<UpdateUserOrganisationDTO>(USER_ORGANISATION_URL),
    factory.addRemove(USER_ORGANISATION_URL),
    ServiceFactory.addCustom("getCurrent", (axios) => axios.get(USER_ORGANISATION_CURRENT_URL()), (dto: UserOrganisationDetailsDTO) => new UserOrganisationDetails(dto)),
    factory.addNotify(notifyService => ({
        ...ServiceFactory.addCustom("updateCurrent", (axios, payload: UpdateUserOrganisationDTO) => axios.post(USER_ORGANISATION_CURRENT_URL(), payload), (dto: UserOrganisationDetailsDTO) => {
            const result = new UserOrganisationDetails(dto)
            notifyService.notify("update", result);
            return result;
        }),
    }))
));

export const useTrackUserOrganisation = ComposableFactory.track(UserOrganisationServiceFactory);

export const useUserOrganisation = ComposableFactory.get(UserOrganisationServiceFactory);
export const useUserOrganisations = ComposableFactory.getMany(UserOrganisationServiceFactory);
export const useCreateUserOrganisation = ComposableFactory.create(UserOrganisationServiceFactory);
export const useUpdateUserOrganisation = ComposableFactory.update(UserOrganisationServiceFactory);
export const useRemoveUserOrganisation = ComposableFactory.remove(UserOrganisationServiceFactory);
export const useCurrentUserOrganisation = ComposableFactory.custom(UserOrganisationServiceFactory.getCurrent, () => {
    const { track } = useTrackUserOrganisation();
 
    return (userOrganisation) => {
        track(userOrganisation);
    }
});
export const useUpdateCurrentUserOrganisation = ComposableFactory.custom(UserOrganisationServiceFactory.updateCurrent);