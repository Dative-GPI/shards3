import { AutoRefresh } from "@dative-gpi/foundation-shared-domain/models";

import { DashboardEntityPresetInfos, DashboardEntityPresetInfosDTO } from "../dashboardEntityPresets";
import { DashboardDatePresetInfos, DashboardDatePresetInfosDTO } from "../dashboardDatePresets";
import { DashboardVariableInfos, DashboardVariableInfosDTO } from "../dashboardVariables";
import { DashboardInfos, DashboardInfosDTO } from "./dashboardInfos";
import { WidgetInfos, WidgetInfosDTO } from "../widgets/widgetInfos";

export class DashboardDetails extends DashboardInfos {
  useAutoRefresh: boolean;
  autoRefresh: AutoRefresh;
  singleEntity: boolean;
  entityPresetCode: string | null;
  datePresetCode: string | null;
  variableCode: string | null;
  datePresets: DashboardDatePresetInfos[];
  entityPresets: DashboardEntityPresetInfos[];
  variables: DashboardVariableInfos[];
  widgets: WidgetInfos[];

  constructor(params: DashboardDetailsDTO) {
    super(params);

    this.useAutoRefresh = params.useAutoRefresh;
    this.autoRefresh = params.autoRefresh;
    this.singleEntity = params.singleEntity;
    this.entityPresetCode = params.entityPresetCode;
    this.datePresetCode = params.datePresetCode;
    this.variableCode = params.variableCode;
    this.datePresets = params.datePresets.map(dto => new DashboardDatePresetInfos(dto));
    this.entityPresets = params.entityPresets.map(dto => new DashboardEntityPresetInfos(dto));
    this.variables = params.variables.map(dto => new DashboardVariableInfos(dto));
    this.widgets = params.widgets.map(dto => new WidgetInfos(dto));
  }
}

export interface DashboardDetailsDTO extends DashboardInfosDTO {
  useAutoRefresh: boolean;
  autoRefresh: number;
  singleEntity: boolean;
  entityPresetCode: string | null;
  datePresetCode: string | null;
  variableCode: string | null;
  datePresets: DashboardDatePresetInfosDTO[];
  entityPresets: DashboardEntityPresetInfosDTO[];
  variables: DashboardVariableInfosDTO[];
  widgets: WidgetInfosDTO[];
}