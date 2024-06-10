export class WidgetInfos {
    id: string;
    templateId: string;
    code: string;
    hideBorders: boolean;
    width: number;
    height: number;
    x: number;
    y: number;
    targetScreenSize: "s" | "m" | "l" | "xl" | null;
    meta: { [key: string]: string };

    constructor(params: WidgetInfosDTO) {
        this.id = params.id;
        this.templateId = params.templateId;
        this.code = params.code;
        this.hideBorders = params.hideBorders;
        this.width = params.width;
        this.height = params.height;
        this.x = params.x;
        this.y = params.y;
        this.targetScreenSize = params.targetScreenSize;
        this.meta = { ...params.meta };
    }
}
  
export interface WidgetInfosDTO {
    id: string;
    templateId: string;
    code: string;
    hideBorders: boolean;
    width: number;
    height: number;
    x: number;
    y: number;
    targetScreenSize: "s" | "m" | "l" | "xl" | null;
    meta: { [key: string]: string };
}