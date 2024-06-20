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
  overrideSingleEntity: boolean | null;
  overrideDynamicEntities: boolean | null;
  overrideEntityPresetCode: string | null;
  overrideDynamicDates: boolean | null;
  overrideDatePresetCode: string | null;
  overrideUseAutoRefresh: boolean | null;
  overrideAutoRefresh: AutoRefresh | null;
  overrideDatePresets: DashboardShallowDatePresetInfos[] | null;
  overrideEntityPresets: DashboardShallowEntityPresetInfos[] | null;
  overrideVariables: DashboardShallowVariableInfos[] | null;
  translations: DashboardTranslation[];
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

  constructor(params: DashboardShallowDetailsDTO) {
    super(params);

    this.labelDefault = params.labelDefault;
    this.path = params.path.map(dto => new PathCrumb(dto)).sort((a, b) => b.index - a.index);
    this.overrideSingleEntity = params.overrideSingleEntity;
    this.overrideDynamicEntities = params.overrideDynamicEntities;
    this.overrideEntityPresetCode = params.overrideEntityPresetCode;
    this.overrideDynamicDates = params.overrideDynamicDates;
    this.overrideDatePresetCode = params.overrideDatePresetCode;
    this.overrideUseAutoRefresh = params.overrideUseAutoRefresh;
    this.overrideAutoRefresh = params.overrideAutoRefresh;
    this.overrideDatePresets = params.overrideDatePresets?.map(dto => new DashboardShallowDatePresetInfos(dto)) ?? null;
    this.overrideEntityPresets = params.overrideEntityPresets?.map(dto => new DashboardShallowEntityPresetInfos(dto)) ?? null;
    this.overrideVariables = params.overrideVariables?.map(dto => new DashboardShallowVariableInfos(dto)) ?? null;
    this.translations = params.translations.map(t => new DashboardTranslation(t));
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

export interface DashboardShallowDetailsDTO extends DashboardShallowInfosDTO {
  labelDefault: string;
  path: PathCrumbDTO[];
  overrideSingleEntity: boolean | null;
  overrideDynamicEntities: boolean | null;
  overrideEntityPresetCode: string | null;
  overrideDynamicDates: boolean | null;
  overrideDatePresetCode: string | null;
  overrideUseAutoRefresh: boolean | null;
  overrideAutoRefresh: number | null;
  overrideDatePresets: DashboardShallowDatePresetInfosDTO[] | null;
  overrideEntityPresets: DashboardShallowEntityPresetInfosDTO[] | null;
  overrideVariables: DashboardShallowVariableInfosDTO[] | null;
  translations: DashboardTranslationDTO[];
  dashboardId: string;
  scope: number;
  singleEntity: boolean;
  dynamicEntities: boolean;
  entityPresetCode: string | null;
  dynamicDates: boolean;
  datePresetCode: string | null;
  useAutoRefresh: boolean;
  autoRefresh: AutoRefresh;
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
  overrideSingleEntity: boolean | null;
  overrideDynamicEntities: boolean | null;
  overrideEntityPresetCode: string | null;
  overrideDynamicDates: boolean | null;
  overrideDatePresetCode: string | null;
  overrideUseAutoRefresh: boolean | null;
  overrideAutoRefresh: number | null;
  overrideDatePresets: CreateDashboardShallowDatePresetDTO[] | null;
  overrideEntityPresets: CreateDashboardShallowEntityPresetDTO[] | null;
  overrideVariables: CreateDashboardShallowVariableDTO[] | null;
  translations: DashboardTranslationDTO[];
}

export interface ChangeDashboardShallowFolderDTO {
  folderId: string | null;
}