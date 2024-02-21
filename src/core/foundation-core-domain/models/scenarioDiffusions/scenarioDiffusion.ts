export class ScenarioDiffusion {
    id: string;
    scenarioId: string;
    warnDeviceManager: boolean;
    userOrganisationsIds: string[];
  
    constructor(params: ScenarioDiffusionDTO) {
        this.id = params.id;
        this.scenarioId = params.scenarioId;
        this.warnDeviceManager = params.warnDeviceManager;
        this.userOrganisationsIds = params.userOrganisationsIds.slice();
    }
}
  
export interface ScenarioDiffusionDTO {
    id: string;
    scenarioId: string;
    warnDeviceManager: boolean;
    userOrganisationsIds: string[];
}
  
export interface UpdateScenarioDiffusionDTO {
    warnDeviceManager: boolean;
    userOrganisationsIds: string[];
}