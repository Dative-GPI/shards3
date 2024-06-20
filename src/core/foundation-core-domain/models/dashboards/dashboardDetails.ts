import { AutoRefresh } from "@dative-gpi/foundation-shared-domain/models";

import { DashboardEntityPresetInfos, DashboardEntityPresetInfosDTO } from "../dashboardEntityPresets";
import { DashboardDatePresetInfos, DashboardDatePresetInfosDTO } from "../dashboardDatePresets";
import { DashboardVariableInfos, DashboardVariableInfosDTO } from "../dashboardVariables";
import { DashboardInfos, DashboardInfosDTO } from "./dashboardInfos";
import { WidgetInfos, WidgetInfosDTO } from "../widgets/widgetInfos";

export class DashboardDetails extends DashboardInfos {
  singleEntity: boolean;
  dynamicEntities: boolean;
  entityPresetCode: string | null;
  dynamicDates: boolean;
  datePresetCode: string | null;
  useAutoRefresh: boolean;
  autoRefresh: AutoRefresh;
  datePresets: DashboardDatePresetInfos[];
  entityPresets: DashboardEntityPresetInfos[];
  variables: DashboardVariableInfos[];
  widgets: WidgetInfos[];

  constructor(params: DashboardDetailsDTO) {
    super(params);

    this.singleEntity = params.singleEntity;
    this.dynamicEntities = params.dynamicEntities;
    this.entityPresetCode = params.entityPresetCode;
    this.dynamicDates = params.dynamicDates;
    this.datePresetCode = params.datePresetCode;
    this.useAutoRefresh = params.useAutoRefresh;
    this.autoRefresh = params.autoRefresh;
    this.datePresets = params.datePresets.map(dto => new DashboardDatePresetInfos(dto));
    this.entityPresets = params.entityPresets.map(dto => new DashboardEntityPresetInfos(dto));
    this.variables = params.variables.map(dto => new DashboardVariableInfos(dto));
    this.widgets = params.widgets.map(dto => new WidgetInfos(dto));
  }
}

export interface DashboardDetailsDTO extends DashboardInfosDTO {
  singleEntity: boolean;
  dynamicEntities: boolean;
  entityPresetCode: string | null;
  dynamicDates: boolean;
  datePresetCode: string | null;
  useAutoRefresh: boolean;
  autoRefresh: number;
  datePresets: DashboardDatePresetInfosDTO[];
  entityPresets: DashboardEntityPresetInfosDTO[];
  variables: DashboardVariableInfosDTO[];
  widgets: WidgetInfosDTO[];
}