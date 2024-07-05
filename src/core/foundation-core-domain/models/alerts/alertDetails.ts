import { AlertInfos, type AlertInfosDTO } from "./alertInfos";

export class AlertDetails extends AlertInfos {
  description: string;

  constructor(params: AlertDetailsDTO) {
    super(params);

    this.description = params.description;
  }
}

export interface AlertDetailsDTO extends AlertInfosDTO {
  description: string;
}