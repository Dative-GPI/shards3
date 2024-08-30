import { NotificationInfos, type NotificationInfosDTO } from "./notificationInfos";

export class NotificationDetails extends NotificationInfos {
  constructor(params: NotificationDetailsDTO) {
    super(params);
  }
}

export interface NotificationDetailsDTO extends NotificationInfosDTO {
}