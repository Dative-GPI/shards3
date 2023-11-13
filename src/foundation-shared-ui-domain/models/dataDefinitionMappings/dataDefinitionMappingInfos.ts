export class DataDefinitionMappingInfos {
    id: string;
    inputValue: string;
    outputValue: string;
  
    constructor(params: DataDefinitionMappingInfosDTO) {
      this.id = params.id;
      this.inputValue = params.inputValue;
      this.outputValue = params.outputValue;
    }
  }
  
  export interface DataDefinitionMappingInfosDTO {
    id: string;
    inputValue: string;
    outputValue: string;
  }