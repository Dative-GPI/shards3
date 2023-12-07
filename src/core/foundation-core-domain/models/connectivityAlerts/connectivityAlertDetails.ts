import { ConnectivityAlertInfos, ConnectivityAlertInfosDTO } from "./connectivityAlertInfos";

export class ConnectivityAlertDetails extends ConnectivityAlertInfos {
    constructor(params: ConnectivityAlertDetailsDTO) {
        super(params);
    }
}

export interface ConnectivityAlertDetailsDTO extends ConnectivityAlertInfosDTO {
}