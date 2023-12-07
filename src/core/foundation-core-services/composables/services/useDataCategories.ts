import { DataCategoryDetails, DataCategoryDetailsDTO, DataCategoryFilters, DataCategoryInfos, DataCategoryInfosDTO } from "@dative-gpi/foundation-core-domain";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";

import { DATA_CATEGORIES_URL, DATA_CATEGORY_URL } from "../../config/urls";

const DataCategoryServiceFactory = new ServiceFactory<DataCategoryDetailsDTO, DataCategoryDetails>("dataCategory", DataCategoryDetails).create(factory => factory.build(
    factory.addGet(DATA_CATEGORY_URL),
    factory.addGetMany<DataCategoryInfosDTO, DataCategoryInfos, DataCategoryFilters>(DATA_CATEGORIES_URL, DataCategoryInfos),
    factory.addNotify()
));

export const useDataCategory = ComposableFactory.get(DataCategoryServiceFactory);
export const useDataCategories = ComposableFactory.getMany(DataCategoryServiceFactory);