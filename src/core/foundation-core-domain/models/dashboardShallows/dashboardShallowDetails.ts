import { AutoRefresh } from "@dative-gpi/foundation-shared-domain/models";

import { CreateDashboardShallowEntityPresetDTO, DashboardShallowEntityPresetInfos, DashboardShallowEntityPresetInfosDTO } from "../dashboardShallowEntityPresets";
import { CreateDashboardShallowDatePresetDTO, DashboardShallowDatePresetInfos, DashboardShallowDatePresetInfosDTO } from "../dashboardShallowDatePresets";
import { CreateDashboardShallowVariableDTO, DashboardShallowVariableInfos, DashboardShallowVariableInfosDTO } from "../dashboardShallowVariables";
import { DashboardEntityPresetInfos, DashboardEntityPresetInfosDTO } from "../dashboardEntityPresets";
import { DashboardDatePresetInfos, DashboardDatePresetInfosDTO } from "../dashboardDatePresets";
import { DashboardVariableInfos, DashboardVariableInfosDTO } from "../dashboardVariables";
import { DashboardShallowInfos, DashboardShallowInfosDTO } from "./dashboardShallowInfos";
import { DashboardTranslation, DashboardTranslationDTO } from "../dashboards";
import { WidgetInfos, WidgetInfosDTO } from "../widgets/widgetInfos";
import { PathCrumb, PathCrumbDTO } from "../shared/pathCrumb";

export class DashboardShallowDetails extends DashboardShallowInfos {
  labelDefault: string;
  path: PathCrumb[];
  overrideUseAutoRefresh: boolean | null;
  overrideAutoRefresh: AutoRefresh | null;
  overrideSingleEntity: boolean | null;
  overrideEntityPresetCode: string | null;
  overrideDatePresetCode: string | null;
  overrideVariableCode: string | null;
  overrideDatePresets: DashboardShallowDatePresetInfos[];
  overrideEntityPresets: DashboardShallowEntityPresetInfos[];
  overrideVariables: DashboardShallowVariableInfos[];
  translations: DashboardTranslation[];
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

  constructor(params: DashboardShallowDetailsDTO) {
    super(params);

    this.labelDefault = params.labelDefault;
    this.path = params.path.map(dto => new PathCrumb(dto)).sort((a, b) => b.index - a.index);
    this.overrideUseAutoRefresh = params.overrideUseAutoRefresh;
    this.overrideAutoRefresh = params.overrideAutoRefresh;
    this.overrideSingleEntity = params.overrideSingleEntity;
    this.overrideEntityPresetCode = params.overrideEntityPresetCode;
    this.overrideDatePresetCode = params.overrideDatePresetCode;
    this.overrideVariableCode = params.overrideVariableCode;
    this.overrideDatePresets = params.overrideDatePresets.map(dto => new DashboardShallowDatePresetInfos(dto));
    this.overrideEntityPresets = params.overrideEntityPresets.map(dto => new DashboardShallowEntityPresetInfos(dto));
    this.overrideVariables = params.overrideVariables.map(dto => new DashboardShallowVariableInfos(dto));
    this.translations = params.translations.map(t => new DashboardTranslation(t));
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

export interface DashboardShallowDetailsDTO extends DashboardShallowInfosDTO {
  labelDefault: string;
  path: PathCrumbDTO[];
  overrideUseAutoRefresh: boolean | null;
  overrideAutoRefresh: number | null;
  overrideSingleEntity: boolean | null;
  overrideEntityPresetCode: string | null;
  overrideDatePresetCode: string | null;
  overrideVariableCode: string | null;
  overrideDatePresets: DashboardShallowDatePresetInfosDTO[];
  overrideEntityPresets: DashboardShallowEntityPresetInfosDTO[];
  overrideVariables: DashboardShallowVariableInfosDTO[];
  translations: DashboardTranslationDTO[];
  dashboardId: string;
  scope: number;
  useAutoRefresh: boolean;
  autoRefresh: AutoRefresh;
  singleEntity: boolean;
  entityPresetCode: string | null;
  datePresetCode: string | null;
  variableCode: string | null;
  datePresets: DashboardDatePresetInfosDTO[];
  entityPresets: DashboardEntityPresetInfosDTO[];
  variables: DashboardVariableInfosDTO[];
  widgets: WidgetInfosDTO[];
}

export interface CreateDashboardShallowDTO {
  dashboardOrganisationTypeId: string;
}

export interface UpdateDashboardShallowDTO {
  folderId: string | null;
  imageId: string | null;
  image: string | null;
  labelDefault: string;
  code: string;
  icon: string;
  tags: string[];
  overrideUseAutoRefresh: boolean | null;
  overrideAutoRefresh: number | null;
  overrideSingleEntity: boolean | null;
  overrideEntityPresetCode: string | null;
  overrideDatePresetCode: string | null;
  overrideVariableCode: string | null;
  overrideDatePresets: CreateDashboardShallowDatePresetDTO[];
  overrideEntityPresets: CreateDashboardShallowEntityPresetDTO[];
  overrideVariables: CreateDashboardShallowVariableDTO[];
  translations: DashboardTranslationDTO[];
}

export interface ChangeDashboardShallowFolderDTO {
  folderId: string | null;
}