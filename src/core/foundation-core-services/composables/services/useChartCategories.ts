import type { CreateChartCategoryDTO, ChartCategoryDetailsDTO, ChartCategoryFilters, ChartCategoryInfosDTO, UpdateChartCategoryDTO } from "@dative-gpi/foundation-core-domain/models";
import { ChartCategoryDetails, ChartCategoryInfos } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";

import { CHART_CATEGORIES_URL, CHART_CATEGORY_URL } from "../../config/urls";

const ChartCategoryServiceFactory = new ServiceFactory<ChartCategoryDetailsDTO, ChartCategoryDetails>("chartCategory", ChartCategoryDetails)
  .createComplete<ChartCategoryInfos, ChartCategoryInfosDTO, CreateChartCategoryDTO, UpdateChartCategoryDTO, ChartCategoryFilters>(CHART_CATEGORIES_URL, CHART_CATEGORY_URL, ChartCategoryInfos);

export const useChartCategory = ComposableFactory.get(ChartCategoryServiceFactory);
export const useChartCategories = ComposableFactory.getMany(ChartCategoryServiceFactory);
export const useCreateChartCategory = ComposableFactory.create(ChartCategoryServiceFactory);
export const useUpdateChartCategory = ComposableFactory.update(ChartCategoryServiceFactory);
export const useRemoveChartCategory = ComposableFactory.remove(ChartCategoryServiceFactory);