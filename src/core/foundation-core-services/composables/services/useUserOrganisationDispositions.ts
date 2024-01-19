import { Ref, onUnmounted, readonly, ref } from "vue";

import { UpdateUserOrganisationDispositionDTO, UserOrganisationDispositionDetails, UserOrganisationDispositionDetailsDTO, UserOrganisationDispositionInfos, UserOrganisationDispositionInfosDTO } from "@dative-gpi/foundation-core-domain";
import { ComposableFactory, onEntityChanged, ServiceFactory } from "@dative-gpi/bones-ui";

import { USER_ORGANISATION_DISPOSITION_URL } from "../../config/urls";

const UserOrganisationDispositionServiceFactory = new ServiceFactory<UserOrganisationDispositionDetailsDTO, UserOrganisationDispositionDetails>("userOrganisationDisposition", UserOrganisationDispositionDetails).create(factory => factory.build(
    factory.addNotify((notifyService) => ({
        getTable: async (tableCode: string): Promise<UserOrganisationDispositionInfosDTO[]> => {
            const response = await ServiceFactory.http.get(USER_ORGANISATION_DISPOSITION_URL(tableCode));
            const result = response.data.map((dto: UserOrganisationDispositionInfosDTO) => new UserOrganisationDispositionInfos(dto));

            notifyService.notify("update", result);

            return result;
        },
        updateTable: async(tableCode: string, payload: UpdateUserOrganisationDispositionDTO[]): Promise<UserOrganisationDispositionInfosDTO[]> => {
            const response = await ServiceFactory.http.post(USER_ORGANISATION_DISPOSITION_URL(tableCode), payload);
            const result = response.data.map((dto: UserOrganisationDispositionInfosDTO) => new UserOrganisationDispositionInfos(dto));

            notifyService.notify("update", result);

            return result;
        }
    }))
));

export const useGetTable = () => {
    const service = UserOrganisationDispositionServiceFactory();

    const fetching = ref(false);
    const fetched = ref<UserOrganisationDispositionInfos[]>([]) as Ref<UserOrganisationDispositionInfos[]>;

    const fetch = async (tableCode: string) => {
        fetching.value = true;
        try {
            fetched.value = await service.getTable(tableCode);
        }
        finally {
            fetching.value = false;
        }

        return readonly(fetched as Ref<UserOrganisationDispositionInfos[]>);
    }

    return {
        fetching: readonly(fetching),
        fetch,
        fetched: readonly(fetched)
    }
}
export const useUpdateTable = () => {
    const service = UserOrganisationDispositionServiceFactory();

    const updating = ref(false);
    const updated = ref<UserOrganisationDispositionInfos[]>([]) as Ref<UserOrganisationDispositionInfos[]>;

    const update = async (tableCode: string, payload: UpdateUserOrganisationDispositionDTO[]) => {
        updating.value = true;
        try {
            updated.value = await service.updateTable(tableCode, payload);
        }
        finally {
            updating.value = false;
        }

        return readonly(updated as Ref<UserOrganisationDispositionInfos[]>);
    }

    return {
        updating: readonly(updating),
        update,
        updated: readonly(updated)
    }
}