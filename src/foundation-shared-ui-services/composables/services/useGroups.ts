import { Ref, onUnmounted, readonly, ref } from "vue";

import { ChangeGroupParentDTO, CreateGroupDTO, GroupDetails, GroupDetailsDTO, GroupFilters, GroupInfos, GroupInfosDTO, UpdateGroupDTO } from "@dative-gpi/foundation-shared-ui-domain";
import { ComposableFactory, onEntityChanged , ServiceFactory } from "@dative-gpi/bones-ui";

import { GROUPS_URL, GROUP_URL } from "../../config/urls";

const GroupServiceFactory = new ServiceFactory<GroupDetailsDTO, GroupDetails>("group", GroupDetails).create(factory => factory.build(
    factory.addGet(GROUP_URL),
    factory.addGetMany<GroupInfosDTO, GroupInfos, GroupFilters>(GROUPS_URL, GroupInfos),
    factory.addCreate<CreateGroupDTO>(GROUPS_URL),
    factory.addUpdate<UpdateGroupDTO>(GROUP_URL),
    factory.addRemove(GROUP_URL),
    factory.addNotify((notifyService) => ({
        changeParent: async (groupId: string, payload: ChangeGroupParentDTO): Promise<GroupDetails> => {
            const response = await ServiceFactory.http.put(GROUP_URL(groupId), payload);
            const result = new GroupDetails(response.data);

            notifyService.notify("update", result);

            return result;
        }
    }))
));

export const useGroup = ComposableFactory.get(GroupServiceFactory);
export const useGroups = ComposableFactory.getMany(GroupServiceFactory);
export const useCreateGroup = ComposableFactory.create(GroupServiceFactory);
export const useUpdateGroup = ComposableFactory.update(GroupServiceFactory);
export const useRemoveGroup = ComposableFactory.remove(GroupServiceFactory);
export const useChangeGroupParent = () => {
    const service = GroupServiceFactory();

    const changing = ref(false);
    const changed = ref<GroupDetails | null>(null) as Ref<GroupDetails | null>;

    const change = async (groupId: string, payload: ChangeGroupParentDTO) => {
        changing.value = true;
        try {
            changed.value = await service.changeParent(groupId, payload);
        }
        finally {
            changing.value = false;
        }

        const subscriberId = service.subscribe("all", onEntityChanged(changed))
        onUnmounted(() => service.unsubscribe(subscriberId));

        return readonly(changed as Ref<GroupDetails>);
    }

    return {
        changing: readonly(changing),
        change,
        changed: readonly(changed)
    }
}