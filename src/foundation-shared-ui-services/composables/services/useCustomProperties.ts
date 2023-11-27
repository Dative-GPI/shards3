import { CustomPropertyDetails, CustomPropertyDetailsDTO, CustomPropertyFilters, CustomPropertyInfos, CustomPropertyInfosDTO } from "@dative-gpi/foundation-shared-ui-domain";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";

import { CUSTOM_PROPERTIES_URL } from "../../config/urls";

const CustomPropertyServiceFactory = new ServiceFactory<CustomPropertyDetailsDTO, CustomPropertyDetails>("customProperty", CustomPropertyDetails).create(factory => factory.build(
    factory.addGetMany<CustomPropertyInfosDTO, CustomPropertyInfos, CustomPropertyFilters>(CUSTOM_PROPERTIES_URL, CustomPropertyInfos),
    factory.addNotify()
));

export const useCustomProperties = ComposableFactory.getMany(CustomPropertyServiceFactory);