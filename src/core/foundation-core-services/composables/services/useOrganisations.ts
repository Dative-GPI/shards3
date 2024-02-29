import { onUnmounted, ref } from "vue";

import { OrganisationDetails, OrganisationDetailsDTO } from "@dative-gpi/foundation-shared-domain/models";
import { ChangeOrganisationDashboardDTO } from "@dative-gpi/foundation-core-domain/models";
import { onEntityChanged , ServiceFactory } from "@dative-gpi/bones-ui";

import { ORGANISATION_DASHBOARD_URL } from "../../config/urls";

const OrganisationServiceFactory = new ServiceFactory<OrganisationDetailsDTO, OrganisationDetails>("organisation", OrganisationDetails).create(factory => factory.build(
    factory.addNotify((notifyService) => ({
        changeDashboard: async (payload: ChangeOrganisationDashboardDTO): Promise<OrganisationDetails> => {
            const response = await ServiceFactory.http.put(ORGANISATION_DASHBOARD_URL(), payload);
            const result = new OrganisationDetails(response.data);

            notifyService.notify("update", result);

            return result;
        }
    }))
));

export const useChangeDashboardOrganisation = () => {
    const service = OrganisationServiceFactory();
    const subscribersIds: number[] = [];

    const changing = ref(false);
    const changed = ref<OrganisationDetails | null>(null);

    onUnmounted(() => {
        subscribersIds.forEach(id => service.unsubscribe(id));
        subscribersIds.length = 0;
    });

    const change = async (payload: ChangeOrganisationDashboardDTO) => {
        changing.value = true;
        try {
            changed.value = await service.changeDashboard(payload);
        }
        finally {
            changing.value = false;
        }
        subscribersIds.push(service.subscribe("all", onEntityChanged(changed)));
        return changed;
    }

    return {
        changing,
        change,
        changed
    }
}