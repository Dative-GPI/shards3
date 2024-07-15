import { TerminalInfos, type TerminalInfosDTO } from "./terminalInfos";

export class TerminalDetails extends TerminalInfos {
  constructor(params: TerminalDetailsDTO) {
    super(params);
  }
}

export interface TerminalDetailsDTO extends TerminalInfosDTO {
}

export interface CreateTerminalDTO {
  label: string;
  icon: string;
  key: string;
  location: string;
}

export interface UpdateTerminalDTO {
  label: string;
  icon: string;
  location: string;
}