import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";
import { CHART_ORGANISATION_URL, CHART_ORGANISATIONS_URL } from "../../config/urls";
import { ChartOrganisationDetails, ChartOrganisationDetailsDTO, ChartOrganisationFilters, ChartOrganisationInfos, ChartOrganisationInfosDTO, CreateChartOrganisationDTO, UpdateChartOrganisationDTO } from "@dative-gpi/foundation-core-domain/models";


const ChartOrganisationServiceFactory = new ServiceFactory<ChartOrganisationDetailsDTO, ChartOrganisationDetails>("chartOrganisation", ChartOrganisationDetails)
  .createComplete<ChartOrganisationInfos, ChartOrganisationInfosDTO, CreateChartOrganisationDTO, UpdateChartOrganisationDTO, ChartOrganisationFilters>(CHART_ORGANISATIONS_URL, CHART_ORGANISATION_URL, ChartOrganisationInfos);

const ChartOrganisationServiceFactoryIncomplete = new ServiceFactory("chartOrganisation", ChartOrganisationDetails)
  .create(factory => factory.build(
    factory.addNotify(notifyService => ({
      ...ServiceFactory.addCustom("chartOrganisation", (axios, chartOrganisationId: string) => axios.patch(CHART_ORGANISATION_URL(chartOrganisationId)), (dto: ChartOrganisationDetailsDTO) => {
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
export const useDuplicateChartOrganisation = ComposableFactory.custom(ChartOrganisationServiceFactoryIncomplete.chartOrganisation);

