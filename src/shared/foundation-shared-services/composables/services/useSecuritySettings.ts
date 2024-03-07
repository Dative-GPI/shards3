import { onUnmounted, ref } from "vue";

import { SecuritySettingDetails, SecuritySettingDetailsDTO } from "@dative-gpi/foundation-shared-domain/models";
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
    const subscribersIds: number[] = [];

    const getting = ref(false);
    const entity = ref<SecuritySettingDetails | null>(null);

    onUnmounted(() => {
        subscribersIds.forEach(id => service.unsubscribe(id));
        subscribersIds.length = 0;
    });

    const get = async () => {
        getting.value = true;
        try {
            entity.value = await service.getCurrent();
        }
        finally {
            getting.value = false;
        }
        subscribersIds.push(service.subscribe("all", onEntityChanged(entity)));
        return entity;
    }

    return {
        getting,
        get,
        entity
    }
}