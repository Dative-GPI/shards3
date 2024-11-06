import { type ChangeGroupParentDTO, type CreateGroupDTO, GroupDetails, type GroupDetailsDTO, type GroupFilters, GroupInfos, type GroupInfosDTO, type UpdateGroupDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";

import { GROUPS_URL, GROUP_URL } from "../../config/urls";

const GroupServiceFactory = new ServiceFactory<GroupDetailsDTO, GroupDetails>("group", GroupDetails).create(factory => factory.build(
  factory.addGet(GROUP_URL),
  factory.addGetMany<GroupInfosDTO, GroupInfos, GroupFilters>(GROUPS_URL, GroupInfos),
  factory.addCreate<CreateGroupDTO>(GROUPS_URL),
  factory.addUpdate<UpdateGroupDTO>(GROUP_URL),
  factory.addRemove(GROUP_URL),
  factory.addNotify(notifyService => ({
    ...ServiceFactory.addCustom("changeParent", (axios, groupdId: string, payload: ChangeGroupParentDTO) => axios.put(GROUP_URL(groupdId), payload), (dto: GroupDetailsDTO) => {
      const result = new GroupDetails(dto);
      notifyService.notify("update", result);
      return result;
    })
  }))
));

export const useSubscribeToGroups = ComposableFactory.subscribe(GroupServiceFactory);

export const useGroup = ComposableFactory.get(GroupServiceFactory);
export const useGroups = ComposableFactory.getMany(GroupServiceFactory);
export const useCreateGroup = ComposableFactory.create(GroupServiceFactory);
export const useUpdateGroup = ComposableFactory.update(GroupServiceFactory);
export const useRemoveGroup = ComposableFactory.remove(GroupServiceFactory);
export const useChangeGroupParent = ComposableFactory.custom(GroupServiceFactory.changeParent);