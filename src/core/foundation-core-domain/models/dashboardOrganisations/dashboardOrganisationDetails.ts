import { AutoRefresh } from "@dative-gpi/foundation-shared-domain/models";

import { CreateDashboardEntityPresetDTO, DashboardEntityPresetInfos, DashboardEntityPresetInfosDTO } from "../dashboardEntityPresets";
import { CreateDashboardDatePresetDTO, DashboardDatePresetInfos, DashboardDatePresetInfosDTO } from "../dashboardDatePresets";
import { CreateDashboardVariableDTO, DashboardVariableInfos, DashboardVariableInfosDTO } from "../dashboardVariables";
import { DashboardOrganisationInfos, DashboardOrganisationInfosDTO } from "./dashboardOrganisationInfos";
import { DashboardTranslation, DashboardTranslationDTO } from "../dashboards";
import { WidgetInfos, WidgetInfosDTO } from "../widgets/widgetInfos";
import { PathCrumb, PathCrumbDTO } from "../shared/pathCrumb";
import { CreateWidgetDTO } from "../widgets/widgetDetails";

export class DashboardOrganisationDetails extends DashboardOrganisationInfos {
  labelDefault: string;
  path: PathCrumb[];
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

  constructor(params: DashboardOrganisationDetailsDTO) {
    super(params);

    this.labelDefault = params.labelDefault;
    this.path = params.path.map(dto => new PathCrumb(dto)).sort((a, b) => b.index - a.index);
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

export interface DashboardOrganisationDetailsDTO extends DashboardOrganisationInfosDTO {
  labelDefault: string;
  path: PathCrumbDTO[];
  translations: DashboardTranslationDTO[];
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

export interface CreateDashboardOrganisationDTO {
  folderId: string | null;
  image: string | null;
  labelDefault: string;
  code: string;
  icon: string;
  tags: string[];
  translations: DashboardTranslationDTO[];
}

export interface UpdateDashboardOrganisationDTO {
  folderId: string | null;
  imageId: string | null;
  image: string | null;
  labelDefault: string;
  code: string;
  icon: string;
  tags: string[];
  translations: DashboardTranslationDTO[];
  useAutoRefresh: boolean;
  autoRefresh: number;
  singleEntity: boolean;
  entityPresetCode: string | null;
  datePresetCode: string | null;
  variableCode: string | null;
  datePresets: CreateDashboardDatePresetDTO[];
  entityPresets: CreateDashboardEntityPresetDTO[];
  variables: CreateDashboardVariableDTO[];
  widgets: CreateWidgetDTO[];
}

export interface LockDashboardOrganisationDTO {
  locked: boolean;
}

export interface ChangeDashboardOrganisationFolderDTO {
  folderId: string | null;
}