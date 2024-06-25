import type { ExtensionApplicationInfosDTO } from "./extensionApplicationInfos";
import { ExtensionApplicationInfos } from "./extensionApplicationInfos";

export class ExtensionApplicationDetails extends ExtensionApplicationInfos {
    host: string;
    extensionId: string;

    constructor(params: ExtensionApplicationDetailsDTO) {
        super(params);
        this.extensionId = params.extensionId;
        this.host = params.host
    }
}

export interface ExtensionApplicationDetailsDTO extends ExtensionApplicationInfosDTO {
    extensionId: string;
    host: string;
}
