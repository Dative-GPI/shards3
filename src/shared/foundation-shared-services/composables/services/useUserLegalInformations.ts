import { type CreateUserLegalInformationDTO, UserLegalInformationDetails, type UserLegalInformationDetailsDTO } from "@dative-gpi/foundation-shared-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";

import { USER_LEGAL_INFORMATIONS_URL } from "../../config/urls";

const UserLegalInformationServiceFactory = new ServiceFactory<UserLegalInformationDetailsDTO, UserLegalInformationDetails>("userLegalInformation", UserLegalInformationDetails).create(factory => factory.build(
  factory.addCreate<CreateUserLegalInformationDTO>(USER_LEGAL_INFORMATIONS_URL),
  factory.addNotify()
));

export const useCreateUserLegalInformation = ComposableFactory.create(UserLegalInformationServiceFactory);