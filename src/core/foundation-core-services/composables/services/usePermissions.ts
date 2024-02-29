import { ref } from "vue";

import { PermissionDetails, PermissionDetailsDTO, PermissionInfos } from "@dative-gpi/foundation-shared-domain/models";
import { ServiceFactory } from "@dative-gpi/bones-ui";

import { PERMISSIONS_CURRENT_URL } from "../../config/urls";

const PermissionServiceFactory = new ServiceFactory<PermissionDetailsDTO, PermissionDetails>("permission", PermissionDetails).create(factory => factory.build(
    factory.addNotify(() => ({
        getCurrent: async (): Promise<PermissionInfos[]> => {
            const response = await ServiceFactory.http.get(PERMISSIONS_CURRENT_URL());
            const result = response.data.map((dto: PermissionInfos) => new PermissionInfos(dto));

            return result;
        }
    }))
));

export const useCurrentPermissions = () => {
    const service = PermissionServiceFactory();

    const fetching = ref(false);
    const fetched = ref<PermissionInfos[] | null>(null);

    const fetch = async () => {
        fetching.value = true;
        try {
            fetched.value = await service.getCurrent();
        }
        finally {
            fetching.value = false;
        }
        return fetched;
    }

    return {
        fetching,
        fetch,
        fetched
    }
}