import { GroupItemInfos, type GroupItemInfosDTO } from "./groupItemInfos";

export class GroupItemDetails extends GroupItemInfos {

  constructor(params: GroupItemDetailsDTO) {
    super(params);
  }
}

export interface GroupItemDetailsDTO extends GroupItemInfosDTO {
}