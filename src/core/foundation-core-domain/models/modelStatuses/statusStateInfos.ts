export class StatusStateInfos {
    id: string;
    modelStatusId: string;
    condition: string;
    icon: string;
    color: string;
    delay?: number;
    priority: number;
    label: string;

    constructor(params: StatusStateInfosDTO) {
        this.id = params.id;
        this.modelStatusId = params.modelStatusId;
        this.condition = params.condition;
        this.icon = params.icon;
        this.color = params.color;
        this.delay = params.delay;
        this.priority = params.priority;
        this.label = params.label;
    }
}

export interface StatusStateInfosDTO {
    id: string;
    modelStatusId: string;
    condition: string;
    icon: string;
    color: string;
    delay?: number;
    priority: number;
    label: string;
}