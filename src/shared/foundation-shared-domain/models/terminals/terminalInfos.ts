import { utcToEpoch } from "../../tools";

export class TerminalInfos {
  id: string;
  userId: string;
  label: string;
  icon: string;
  key: string;
  location: string;
  lastConnection: number;

  constructor(params: TerminalInfosDTO) {
    this.id = params.id;
    this.userId = params.userId;
    this.label = params.label;
    this.icon = params.icon;
    this.key = params.key;
    this.location = params.location;
    this.lastConnection = utcToEpoch(params.lastConnection);
  }

}

export interface TerminalInfosDTO {
  id: string;
  userId: string;
  label: string;
  icon: string;
  key: string;
  location: string;
  lastConnection: string;
}

export interface TerminalFilters {
  key?: string | null;
}