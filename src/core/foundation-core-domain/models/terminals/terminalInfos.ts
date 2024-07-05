import { utcToEpoch } from "@dative-gpi/foundation-shared-domain/tools";

export class TerminalInfos {
  id: string;
  userId: string;
  label: string;
  icon: string;
  key: string;
  lastConnection: number;

  constructor(params: TerminalInfosDTO) {
    this.id = params.id;
    this.userId = params.userId;
    this.label = params.label;
    this.icon = params.icon;
    this.key = params.key;
    this.lastConnection = utcToEpoch(params.lastConnection);
  }

}

export interface TerminalInfosDTO {
  id: string;
  userId: string;
  label: string;
  icon: string;
  key: string;
  lastConnection: string;
}

export interface TerminalFilters {
  key?: string | null;
}