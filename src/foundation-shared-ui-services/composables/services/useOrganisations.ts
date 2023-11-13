import { Ref, onUnmounted, readonly, ref } from "vue";

import { ChangeOrganisationDashboardDTO, OrganisationDetails, OrganisationDetailsDTO, OrganisationFilters, OrganisationInfos, OrganisationInfosDTO, UpdateOrganisationDTO } from "@dative-gpi/foundation-shared-ui-domain";
import { ComposableFactory, onEntityChanged , ServiceFactory } from "@dative-gpi/bones-ui";

import { ORGANISATIONS_URL, ORGANISATION_URL } from "../../config/urls";

const OrganisationServiceFactory = new ServiceFactory<OrganisationDetailsDTO, OrganisationDetails>("organisation", OrganisationDetails).create(factory => factory.build(
    factory.addGet(ORGANISATION_URL),
    factory.addGetMany<OrganisationInfosDTO, OrganisationInfos, OrganisationFilters>(ORGANISATIONS_URL, OrganisationInfos),
    factory.addUpdate<UpdateOrganisationDTO>(ORGANISATION_URL),
    factory.addNotify((notifyService) => ({
        changeDashboard: async (payload: ChangeOrganisationDashboardDTO): Promise<OrganisationDetails> => {
            const response = await ServiceFactory.http.put(ORGANISATION_URL(), payload);
            const result = new OrganisationDetails(response.data);

            notifyService.notify("update", result);

            return result;
        }
    }))
));

export const useOrganisation = ComposableFactory.get(OrganisationServiceFactory);
export const useOrganisations = ComposableFactory.getMany(OrganisationServiceFactory);
export const useUpdateOrganisation = ComposableFactory.update(OrganisationServiceFactory);
export const useChangeDashboardOrganisation = () => {
    const service = OrganisationServiceFactory();

    const changing = ref(false);
    const changed = ref<OrganisationDetails | null>(null) as Ref<OrganisationDetails | null>;

    const change = async (payload: ChangeOrganisationDashboardDTO) => {
        changing.value = true;
        try {
            changed.value = await service.changeDashboard(payload);
        }
        finally {
            changing.value = false;
        }

        const subscriberId = service.subscribe("all", onEntityChanged(changed))
        onUnmounted(() => service.unsubscribe(subscriberId));

        return readonly(changed as Ref<OrganisationDetails>);
    }

    return {
        changing: readonly(changing),
        change,
        changed: readonly(changed)
    }
}