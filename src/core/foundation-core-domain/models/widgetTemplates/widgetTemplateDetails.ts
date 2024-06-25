import type { WidgetTemplateInfosDTO } from "./widgetTemplateInfos";
import { WidgetTemplateInfos } from "./widgetTemplateInfos";

export class WidgetTemplateDetails extends WidgetTemplateInfos {
    constructor(params: WidgetTemplateDetailsDTO) {
        super(params);
    }
}

export interface WidgetTemplateDetailsDTO extends WidgetTemplateInfosDTO {
}