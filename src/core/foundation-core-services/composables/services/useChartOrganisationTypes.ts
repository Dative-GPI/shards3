import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";
import { ChartOrganisationTypeDetails, ChartOrganisationTypeDetailsDTO, ChartOrganisationTypeFilters, ChartOrganisationTypeInfos, ChartOrganisationTypeInfosDTO, CreateChartOrganisationTypeDTO, UpdateChartOrganisationTypeDTO } from "@dative-gpi/foundation-core-domain/models";
import { CHART_ORGANISATION_TYPE_URL, CHART_ORGANISATION_TYPES_URL } from "../../config/urls";
import { Ref, ref } from "vue";


const ChartOrganisationTypeServiceFactory = new ServiceFactory<ChartOrganisationTypeDetailsDTO, ChartOrganisationTypeDetails>("chartOrganisationType", ChartOrganisationTypeDetails)
  .createComplete<ChartOrganisationTypeInfos, ChartOrganisationTypeInfosDTO, CreateChartOrganisationTypeDTO, UpdateChartOrganisationTypeDTO, ChartOrganisationTypeFilters>(CHART_ORGANISATION_TYPES_URL, CHART_ORGANISATION_TYPE_URL, ChartOrganisationTypeInfos);

const ChartOrganisationTypeServiceFactoryIncomplete = new ServiceFactory("chartOrganisationType", ChartOrganisationTypeDetails)
  .create(factory => factory.build(
    factory.addNotify(notifier => (
      {
        patch: async (chartOrganisationTypeId: string): Promise<ChartOrganisationTypeDetails> => {
          const response = await ServiceFactory.http.patch(CHART_ORGANISATION_TYPE_URL(chartOrganisationTypeId));
          const dto: ChartOrganisationTypeDetailsDTO = response.data;
          const result = new ChartOrganisationTypeDetails(dto);
          return result;
        }
      }))
  ));

export const useChartOrganisationType = ComposableFactory.get(ChartOrganisationTypeServiceFactory);
export const useChartOrganisationTypes = ComposableFactory.getMany(ChartOrganisationTypeServiceFactory);
export const useCreateChartOrganisationType = ComposableFactory.create(ChartOrganisationTypeServiceFactory);
export const useUpdateChartOrganisationType = ComposableFactory.update(ChartOrganisationTypeServiceFactory);
export const useRemoveChartOrganisationType = ComposableFactory.remove(ChartOrganisationTypeServiceFactory);

export const useDuplicateChartOrganisationType = () => {
  const service = ChartOrganisationTypeServiceFactoryIncomplete;

  const patched = ref<ChartOrganisationTypeDetails>() as Ref<ChartOrganisationTypeDetails>;
  const patching = ref(false);

  const patch = async (chartOrganisationTypeId: string) => {
    patching.value = true;
    try {
      patched.value = await service.patch(chartOrganisationTypeId);
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

