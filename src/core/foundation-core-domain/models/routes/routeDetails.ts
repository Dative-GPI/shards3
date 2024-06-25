import type { RouteInfosDTO } from "./routeInfos";
import { RouteInfos } from "./routeInfos";

export class RouteDetails extends RouteInfos {
    constructor(params: RouteDetailsDTO) {
        super(params);
    }
}

export interface RouteDetailsDTO extends RouteInfosDTO {
}