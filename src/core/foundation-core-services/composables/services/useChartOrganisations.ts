import { ChartOrganisationDetails, type ChartOrganisationDetailsDTO, type ChartOrganisationFilters, ChartOrganisationInfos, type ChartOrganisationInfosDTO, type CreateChartOrganisationDTO, type UpdateChartOrganisationDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";

import { CHART_ORGANISATION_URL, CHART_ORGANISATIONS_URL } from "../../config/urls";

const ChartOrganisationServiceFactory = new ServiceFactory<ChartOrganisationDetailsDTO, ChartOrganisationDetails>("chartOrganisation", ChartOrganisationDetails)
  .createComplete<ChartOrganisationInfos, ChartOrganisationInfosDTO, CreateChartOrganisationDTO, UpdateChartOrganisationDTO, ChartOrganisationFilters>(CHART_ORGANISATIONS_URL, CHART_ORGANISATION_URL, ChartOrganisationInfos);

const ChartOrganisationServiceFactoryIncomplete = new ServiceFactory("chartOrganisation", ChartOrganisationDetails).create(factory => factory.build(
  factory.addNotify(notifyService => ({
    ...ServiceFactory.addCustom("duplicate", (axios, chartOrganisationId: string) => axios.patch(CHART_ORGANISATION_URL(chartOrganisationId)), (dto: ChartOrganisationDetailsDTO) => {
      const result = new ChartOrganisationDetails(dto);
      notifyService.notify("update", result);
      return result;
    })
  }))
));

export const useChartOrganisation = ComposableFactory.get(ChartOrganisationServiceFactory);
export const useChartOrganisations = ComposableFactory.getMany(ChartOrganisationServiceFactory);
export const useCreateChartOrganisation = ComposableFactory.create(ChartOrganisationServiceFactory);
export const useUpdateChartOrganisation = ComposableFactory.update(ChartOrganisationServiceFactory);
export const useRemoveChartOrganisation = ComposableFactory.remove(ChartOrganisationServiceFactory);
export const useDuplicateChartOrganisation = ComposableFactory.custom(ChartOrganisationServiceFactoryIncomplete.duplicate);