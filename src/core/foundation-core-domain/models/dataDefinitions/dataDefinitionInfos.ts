import type { DataDefinitionMappingInfosDTO } from "../dataDefinitionMappings/dataDefinitionMappingInfos";
import { DataDefinitionMappingInfos } from "../dataDefinitionMappings/dataDefinitionMappingInfos";
import type { DataTable } from "@dative-gpi/foundation-shared-domain/enums";

export class DataDefinitionInfos {
  id: string;
  modelId: string;
  dataCategoryId: string;
  dataCategoryCode: string;
  dataCategoryLabel: string;
  code: string;
  label: string;
  description: string;
  dataTable: DataTable;
  useOnlyMappings: boolean;
  unit: string;
  codes: string[];
  mappings: DataDefinitionMappingInfos[];

  constructor(params: DataDefinitionInfosDTO) {
    this.id = params.id;
    this.modelId = params.modelId;
    this.dataCategoryId = params.dataCategoryId;
    this.dataCategoryCode = params.dataCategoryCode;
    this.dataCategoryLabel = params.dataCategoryLabel;
    this.code = params.code;
    this.label = params.label;
    this.description = params.description;
    this.dataTable = params.dataTable;
    this.useOnlyMappings = params.useOnlyMappings;
    this.unit = params.unit;
    this.codes = params.codes.slice();
    this.mappings = params.mappings?.map(dto => new DataDefinitionMappingInfos(dto)) ?? [];
  }
}
  
export interface DataDefinitionInfosDTO {
  id: string;
  modelId: string;
  dataCategoryId: string;
  dataCategoryCode: string;
  dataCategoryLabel: string;
  code: string;
  label: string;
  description: string;
  dataTable: DataTable;
  useOnlyMappings: boolean;
  unit: string;
  codes: string[];
  mappings: DataDefinitionMappingInfosDTO[];
}
  
export interface DataDefinitionFilters {
  modelsIds?: string[] | null;
  dataCategoryId?: string | null;
  dataTable?: DataTable | null;
  search?: string | null;
}