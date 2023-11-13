import { FamilyDetails, FamilyDetailsDTO, FamilyFilters, FamilyInfos, FamilyInfosDTO } from "@dative-gpi/foundation-shared-ui-domain";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";

import { FAMILIES_URL, FAMILY_URL } from "../../config/urls";

const FamilieserviceFactory = new ServiceFactory<FamilyDetailsDTO, FamilyDetails>("family", FamilyDetails).create(factory => factory.build(
    factory.addGet(FAMILY_URL),
    factory.addGetMany<FamilyInfosDTO, FamilyInfos, FamilyFilters>(FAMILIES_URL, FamilyInfos),
    factory.addNotify()
));

export const useFamily = ComposableFactory.get(FamilieserviceFactory);
export const useFamilies = ComposableFactory.getMany(FamilieserviceFactory);