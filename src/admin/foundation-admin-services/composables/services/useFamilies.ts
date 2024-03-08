import { FamilyDetails, FamilyDetailsDTO, FamilyFilters, FamilyInfos, FamilyInfosDTO } from "@dative-gpi/foundation-admin-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";

import { FAMILIES_URL, FAMILY_URL } from "../../config/urls";

const FamilyserviceFactory = new ServiceFactory<FamilyDetailsDTO, FamilyDetails>("family", FamilyDetails).create(factory => factory.build(
    factory.addGet(FAMILY_URL),
    factory.addGetMany<FamilyInfosDTO, FamilyInfos, FamilyFilters>(FAMILIES_URL, FamilyInfos),
    factory.addNotify()
));

export const useFamily = ComposableFactory.get(FamilyserviceFactory);
export const useFamilies = ComposableFactory.getMany(FamilyserviceFactory);