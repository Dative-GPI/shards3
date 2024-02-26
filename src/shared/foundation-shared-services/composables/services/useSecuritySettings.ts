import { Ref, onUnmounted, readonly, ref } from "vue";

import { SecuritySettingDetails, SecuritySettingDetailsDTO } from "@dative-gpi/foundation-shared-domain";
import { onEntityChanged, ServiceFactory } from "@dative-gpi/bones-ui";

import { SECURITY_SETTING_CURRENT_URL } from "../../config/urls";

const SecuritySettingServiceFactory = new ServiceFactory<SecuritySettingDetailsDTO, SecuritySettingDetails>("securitySetting", SecuritySettingDetails).create(factory => factory.build(
    factory.addNotify((notifyService) => ({
        getCurrent: async (): Promise<SecuritySettingDetails> => {
            const response = await ServiceFactory.http.get(SECURITY_SETTING_CURRENT_URL());
            const result = new SecuritySettingDetails(response.data);

            notifyService.notify("update", result);

            return result;
        }
    }))
));

export const useCurrentSecuritySettings = () => {
    const service = SecuritySettingServiceFactory();

    const fetching = ref(false);
    const fetched = ref<SecuritySettingDetails | null>(null) as Ref<SecuritySettingDetails | null>;

    const fetch = async () => {
        fetching.value = true;
        try {
            fetched.value = await service.getCurrent();
        }
        finally {
            fetching.value = false;
        }

        const subscriberId = service.subscribe("all", onEntityChanged(fetched))
        onUnmounted(() => service.unsubscribe(subscriberId));

        return readonly(fetched as Ref<SecuritySettingDetails>);
    }

    return {
        fetching: readonly(fetching),
        fetch,
        fetched: readonly(fetched)
    }
}