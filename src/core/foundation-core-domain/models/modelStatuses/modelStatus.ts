export class ModelStatus {
    id: string;
    modelId: string;
    dataCategoryId: string;
    dataCategoryLabel: string;
    dataDefinitionId: string;
    dataDefinitionLabel: string;
    groupById: string;
    groupByLabel: string;
    label: string;
    index: number;
    lifetime: number;
    timeToLive: number;
    showDefault: boolean;
    iconDefault: string;
    colorDefault: string;
  
    constructor(params: ModelStatusDTO) {
        this.id = params.id;
        this.modelId = params.modelId;
        this.dataCategoryId = params.dataCategoryId;
        this.dataCategoryLabel = params.dataCategoryLabel;
        this.dataDefinitionId = params.dataDefinitionId;
        this.dataDefinitionLabel = params.dataDefinitionLabel;
        this.groupById = params.groupById;
        this.groupByLabel = params.groupByLabel;
        this.label = params.label;
        this.index = params.index;
        this.lifetime = params.lifetime;
        this.timeToLive = params.timeToLive;
        this.showDefault = params.showDefault;
        this.iconDefault = params.iconDefault;
        this.colorDefault = params.colorDefault;
    }
}
  
export interface ModelStatusDTO {
    id: string;
    modelId: string;
    dataCategoryId: string;
    dataCategoryLabel: string;
    dataDefinitionId: string;
    dataDefinitionLabel: string;
    groupById: string;
    groupByLabel: string;
    label: string;
    index: number;
    lifetime: number;
    timeToLive: number;
    showDefault: boolean;
    iconDefault: string;
    colorDefault: string;
}