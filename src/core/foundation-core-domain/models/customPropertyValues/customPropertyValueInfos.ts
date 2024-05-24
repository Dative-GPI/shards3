import { DatesTools } from "@dative-gpi/foundation-shared-domain/tools";

export class CustomPropertyValueInfos {
  value: string;
  timestamp?: number | null;

  constructor(params: CustomPropertyValueInfosDTO) {
    this.value = params.value;
    this.timestamp = params.timestamp ?
      DatesTools.utcToEpoch(params.timestamp) : undefined;
  }
}

export interface CustomPropertyValueInfosDTO {
  value: string;
  timestamp?: string | null;
}