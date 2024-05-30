import { PermissionCategoryDetails, PermissionCategoryDetailsDTO, PermissionCategoryFilters, PermissionCategoryInfos, PermissionCategoryInfosDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";

import { PERMISSION_CATEGORIES_URL } from "../../config/urls";

const PermissionCategoryServiceFactory = new ServiceFactory<PermissionCategoryDetailsDTO, PermissionCategoryDetails>("permissionCategory", PermissionCategoryDetails).create(factory => factory.build(
    factory.addGetMany<PermissionCategoryInfosDTO, PermissionCategoryInfos, PermissionCategoryFilters>(PERMISSION_CATEGORIES_URL, PermissionCategoryInfos),
    factory.addNotify()
));

export const usePermissionCategories = ComposableFactory.getMany(PermissionCategoryServiceFactory);