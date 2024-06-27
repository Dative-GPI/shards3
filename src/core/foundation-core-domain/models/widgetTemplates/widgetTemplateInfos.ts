import type { WidgetCategory } from "@dative-gpi/foundation-shared-domain/models";

export class WidgetTemplateInfos {
    id: string;
    label: string;
    code: string;
    icon: string;
    description: string;
    category: WidgetCategory;
    defaultWidth: number;
    defaultHeight: number;
    defaultMeta: { [key: string]: string }
  
    constructor(params: WidgetTemplateInfosDTO) {
        this.id = params.id;
        this.label = params.label;
        this.code = params.code;
        this.icon = params.icon;
        this.description = params.description;
        this.category = params.category;
        this.defaultWidth = params.defaultWidth;
        this.defaultHeight = params.defaultHeight;
        this.defaultMeta = params.defaultMeta;
    }
}
  
export interface WidgetTemplateInfosDTO {
    id: string;
    label: string;
    code: string;
    icon: string;
    description: string;
    category: WidgetCategory;
    defaultWidth: number;
    defaultHeight: number;
    defaultMeta: { [key: string]: string }
}
  
export interface WidgetTemplateFilters {
    search?: string | null;
}