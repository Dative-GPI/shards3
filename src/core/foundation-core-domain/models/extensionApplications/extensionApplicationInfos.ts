export class ExtensionApplicationInfos {
    id: string;
    label: string;
    description: string;
  
    constructor(params: ExtensionApplicationInfosDTO) {
        this.id = params.id;
        this.label = params.label;
        this.description = params.description;
    }
}
  
export interface ExtensionApplicationInfosDTO {
    id: string;
    label: string;
    description: string;
}
  