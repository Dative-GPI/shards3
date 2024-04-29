import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";
import { ChartOrganisationDetails, ChartOrganisationDetailsDTO, ChartOrganisationFilters, ChartOrganisationInfos, ChartOrganisationInfosDTO, CreateChartOrganisationDTO, UpdateChartOrganisationDTO } from "@dative-gpi/foundation-core-domain/models";
import { CHART_ORGANISATION_URL, CHART_ORGANISATIONS_URL } from "../../config/urls";
import { Ref, ref } from "vue";


const ChartOrganisationServiceFactory = new ServiceFactory<ChartOrganisationDetailsDTO, ChartOrganisationDetails>("chartOrganisation", ChartOrganisationDetails)
  .createComplete<ChartOrganisationInfos, ChartOrganisationInfosDTO, CreateChartOrganisationDTO, UpdateChartOrganisationDTO, ChartOrganisationFilters>(CHART_ORGANISATIONS_URL, CHART_ORGANISATION_URL, ChartOrganisationInfos);

const ChartOrganisationServiceFactoryIncomplete = new ServiceFactory("chartOrganisation", ChartOrganisationDetails)
  .create(factory => factory.build(
    factory.addNotify(notifier => (
      {
        patch: async (chartOrganisationId: string): Promise<ChartOrganisationDetails> => {
          const response = await ServiceFactory.http.patch(CHART_ORGANISATION_URL(chartOrganisationId));
          const dto: ChartOrganisationDetailsDTO = response.data;
          const result = new ChartOrganisationDetails(dto);
          return result;
        }
      }))
  ));

export const useChartOrganisation = ComposableFactory.get(ChartOrganisationServiceFactory);
export const useChartOrganisations = ComposableFactory.getMany(ChartOrganisationServiceFactory);
export const useCreateChartOrganisation = ComposableFactory.create(ChartOrganisationServiceFactory);
export const useUpdateChartOrganisation = ComposableFactory.update(ChartOrganisationServiceFactory);
export const useRemoveChartOrganisation = ComposableFactory.remove(ChartOrganisationServiceFactory);

export const useDuplicateChartOrganisation = () => {

  const service = ChartOrganisationServiceFactoryIncomplete;

  const patched = ref<ChartOrganisationDetails>() as Ref<ChartOrganisationDetails>;
  const patching = ref(false);

  const patch = async (chartOrganisationId: string) => {
    patching.value = true;
    try {
      patched.value = await service.patch(chartOrganisationId);
    }
    finally {
      patching.value = false;
    }
  }

  return {
    patch,
    patching,
    patched
  }
}

