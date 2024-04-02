import { ChangeGroupParentDTO, CreateGroupDTO, GroupDetails, GroupDetailsDTO, GroupFilters, GroupInfos, GroupInfosDTO, UpdateGroupDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";

import { GROUPS_URL, GROUP_URL } from "../../config/urls";

const GroupServiceFactory = new ServiceFactory<GroupDetailsDTO, GroupDetails>("group", GroupDetails).create(factory => factory.build(
    factory.addGet(GROUP_URL),
    factory.addGetMany<GroupInfosDTO, GroupInfos, GroupFilters>(GROUPS_URL, GroupInfos),
    factory.addCreate<CreateGroupDTO>(GROUPS_URL),
    factory.addUpdate<UpdateGroupDTO>(GROUP_URL),
    factory.addRemove(GROUP_URL),
    factory.addCustom("changeParent", (axios, groupdId: string, payload: ChangeGroupParentDTO) => axios.put(GROUP_URL(groupdId), payload)),
    factory.addNotify()
));

export const useGroup = ComposableFactory.get(GroupServiceFactory);
export const useGroups = ComposableFactory.getMany(GroupServiceFactory);
export const useCreateGroup = ComposableFactory.create(GroupServiceFactory);
export const useUpdateGroup = ComposableFactory.update(GroupServiceFactory);
export const useRemoveGroup = ComposableFactory.remove(GroupServiceFactory);
export const useChangeGroupParent = ComposableFactory.custom(GroupServiceFactory, GroupServiceFactory.changeParent);