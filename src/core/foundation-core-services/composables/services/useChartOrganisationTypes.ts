import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";
import { CHART_ORGANISATION_TYPE_URL, CHART_ORGANISATION_TYPES_URL } from "../../config/urls";
import { ChartOrganisationTypeDetails, ChartOrganisationTypeDetailsDTO, ChartOrganisationTypeFilters, ChartOrganisationTypeInfos, ChartOrganisationTypeInfosDTO, CreateChartOrganisationTypeDTO, UpdateChartOrganisationTypeDTO } from "@dative-gpi/foundation-core-domain/models";


const ChartOrganisationTypeServiceFactory = new ServiceFactory<ChartOrganisationTypeDetailsDTO, ChartOrganisationTypeDetails>("chartOrganisationType", ChartOrganisationTypeDetails)
  .createComplete<ChartOrganisationTypeInfos, ChartOrganisationTypeInfosDTO, CreateChartOrganisationTypeDTO, UpdateChartOrganisationTypeDTO, ChartOrganisationTypeFilters>(CHART_ORGANISATION_TYPES_URL, CHART_ORGANISATION_TYPE_URL, ChartOrganisationTypeInfos);

const ChartOrganisationServiceFactoryIncomplete = new ServiceFactory("chartOrganisationType", ChartOrganisationTypeDetails)
  .create(factory => factory.build(
    factory.addNotify(notifyService => ({
      ...ServiceFactory.addCustom("chartOrganisationType", (axios, charOrganisationTypeId: string) => axios.patch(CHART_ORGANISATION_TYPE_URL(charOrganisationTypeId)), (dto: ChartOrganisationTypeDetailsDTO) => {
        const result = new ChartOrganisationTypeDetails(dto);
        notifyService.notify("update", result);
        return result;
      })
    }))
  ));

export const useChartOrganisationType = ComposableFactory.get(ChartOrganisationTypeServiceFactory);
export const useChartOrganisationTypes = ComposableFactory.getMany(ChartOrganisationTypeServiceFactory);
export const useCreateChartOrganisationType = ComposableFactory.create(ChartOrganisationTypeServiceFactory);
export const useUpdateChartOrganisationType = ComposableFactory.update(ChartOrganisationTypeServiceFactory);
export const useRemoveChartOrganisationType = ComposableFactory.remove(ChartOrganisationTypeServiceFactory);
export const useChangeDashboardOrganisation = ComposableFactory.custom(ChartOrganisationServiceFactoryIncomplete.chartOrganisationType);

