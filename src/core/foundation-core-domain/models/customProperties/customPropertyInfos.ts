import type { CustomPropertyColorDTO } from "./customPropertyColor";
import { CustomPropertyColor } from "./customPropertyColor";
import type { PropertyDataType, PropertyEntity } from "@dative-gpi/foundation-shared-domain/enums";

export class CustomPropertyInfos {
    id: string;
    code: string;
    label: string;
    categoryLabel: string;
    index: number;
    entity: PropertyEntity;
    dataType: PropertyDataType;
    addInInfos: boolean;
    readOnlyCore: boolean;
    readOnlyAdmin: boolean;
    defaultValue: string;
    history: boolean;
    historySize: number;
    colorful: boolean;
    colorMap: CustomPropertyColor[];
    useOnlyAllowedValues: boolean;
    allowedValues: { [key: string]: string };
  
    constructor(params: CustomPropertyInfosDTO) {
      this.id = params.id;
      this.code = params.code;
      this.label = params.label;
      this.categoryLabel = params.categoryLabel;
      this.index = params.index;
      this.entity = params.entity;
      this.dataType = params.dataType;
      this.addInInfos = params.addInInfos;
      this.readOnlyCore = params.readOnlyCore;
      this.readOnlyAdmin = params.readOnlyAdmin;
      this.defaultValue = params.defaultValue;
      this.history = params.history;
      this.historySize = params.historySize;
      this.colorful = params.colorful;
      this.colorMap = params.colorMap.map(dto => new CustomPropertyColor(dto));
      this.useOnlyAllowedValues = params.useOnlyAllowedValues;
      this.allowedValues = { ...params.allowedValues };
    }
  }
  
  export interface CustomPropertyInfosDTO {
    id: string;
    code: string;
    label: string;
    categoryLabel: string;
    index: number;
    entity: number;
    dataType: number;
    addInInfos: boolean;
    readOnlyCore: boolean;
    readOnlyAdmin: boolean;
    defaultValue: string;
    history: boolean;
    historySize: number;
    colorful: boolean;
    colorMap: CustomPropertyColorDTO[];
    useOnlyAllowedValues: boolean;
    allowedValues: { [key: string]: string };
  }
  
  export interface CustomPropertyFilters {
    entities?: PropertyEntity[] | null;
    editableCore?: boolean | null;
    search?: string | null;
  }