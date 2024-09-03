import { isoToEpoch } from "../../tools";

export class TerminalInfos {
  id: string;
  userId: string;
  label: string;
  icon: string;
  key: string;
  location: string;
  lastConnection: number;
  token: string;

  constructor(params: TerminalInfosDTO) {
    this.id = params.id;
    this.userId = params.userId;
    this.label = params.label;
    this.icon = params.icon;
    this.key = params.key;
    this.location = params.location;
    this.lastConnection = isoToEpoch(params.lastConnection);
    this.token = params.token;
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
  token: string;
}

export interface TerminalFilters {
  token?: string | null;
}