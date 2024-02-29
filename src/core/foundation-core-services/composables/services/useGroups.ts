import { onUnmounted, ref } from "vue";

import { ChangeGroupParentDTO, CreateGroupDTO, GroupDetails, GroupDetailsDTO, GroupFilters, GroupInfos, GroupInfosDTO, UpdateGroupDTO } from "@dative-gpi/foundation-core-domain/models";
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
    const subscriberIds: number[] = [];

    const changing = ref(false);
    const changed = ref<GroupDetails | null>(null);

    onUnmounted(() => {
        subscriberIds.forEach(id => service.unsubscribe(id));
        subscriberIds.length = 0;
    });

    const change = async (groupId: string, payload: ChangeGroupParentDTO) => {
        changing.value = true;
        try {
            changed.value = await service.changeParent(groupId, payload);
        }
        finally {
            changing.value = false;
        }
        subscriberIds.push(service.subscribe("all", onEntityChanged(changed)));
        return changed;
    }

    return {
        changing,
        change,
        changed
    }
}