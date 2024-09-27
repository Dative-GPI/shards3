import { LegalInformationDetails, type LegalInformationDetailsDTO } from "@dative-gpi/foundation-shared-domain/models";
import { ComposableFactory,  ServiceFactory } from "@dative-gpi/bones-ui";

import { LEGAL_INFORMATION_CURRENT_URL } from "../../config/urls";

const LegalInformationServiceFactory = {
  ...ServiceFactory.addCustom("getCurrent", axios => axios.get(LEGAL_INFORMATION_CURRENT_URL()), (dto: LegalInformationDetailsDTO) => new LegalInformationDetails(dto))
};

export const useCurrentLegalInformation = ComposableFactory.custom(LegalInformationServiceFactory.getCurrent);