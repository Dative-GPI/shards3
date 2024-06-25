import type { ActionType } from "../enums/actionEnums";

export class ActionInfos {
    extensionId: string | null;
    actionType: ActionType;
    path: string;
    uri: string;
    label: string;
    icon: string;
    
    constructor(params: ActionInfosDTO) {
        this.extensionId = params.extensionId;
        this.actionType = params.actionType;
        this.path = params.path;
        this.uri = params.uri;
        this.label = params.label;
        this.icon = params.icon;
    }
}

export interface ActionInfosDTO {
    extensionId: string | null;
    actionType: ActionType;
    path: string;
    uri: string;
    label: string;
    icon: string;
}

export interface ActionFilters {
    path: string;
}