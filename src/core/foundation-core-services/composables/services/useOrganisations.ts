import { Ref, onUnmounted, readonly, ref } from "vue";

import { OrganisationDetails, OrganisationDetailsDTO } from "@dative-gpi/foundation-shared-domain";
import { ChangeOrganisationDashboardDTO } from "@dative-gpi/foundation-core-domain";
import { onEntityChanged , ServiceFactory } from "@dative-gpi/bones-ui";

import { ORGANISATION_DASHBOARD_URL } from "../../config/urls";

const OrganisationServiceFactory = new ServiceFactory<OrganisationDetailsDTO, OrganisationDetails>("organisation", OrganisationDetails).create(factory => factory.build(
    factory.addNotify((notifyService) => ({
        changeDashboard: async (payload: ChangeOrganisationDashboardDTO): Promise<OrganisationDetails> => {
            const response = await ServiceFactory.http.put(ORGANISATION_DASHBOARD_URL, payload);
            const result = new OrganisationDetails(response.data);

            notifyService.notify("update", result);

            return result;
        }
    }))
));

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