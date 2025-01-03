import { AlertInfos, type AlertInfosDTO } from "./alertInfos";

export class AlertDetails extends AlertInfos {
  description: string;
  comments: string;

  constructor(params: AlertDetailsDTO) {
    super(params);
    this.comments = params.comments;
    this.description = params.description;
  }
}

export interface AlertDetailsDTO extends AlertInfosDTO {
  description: string;
  comments: string;
}