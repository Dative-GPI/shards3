import { AutoRefresh } from "@dative-gpi/foundation-shared-domain/models";

import { CreateDashboardEntityPresetDTO, DashboardEntityPresetInfos, DashboardEntityPresetInfosDTO } from "../dashboardEntityPresets";
import { CreateDashboardDatePresetDTO, DashboardDatePresetInfos, DashboardDatePresetInfosDTO } from "../dashboardDatePresets";
import { CreateDashboardVariableDTO, DashboardVariableInfos, DashboardVariableInfosDTO } from "../dashboardVariables";
import { DashboardOrganisationTypeInfos, DashboardOrganisationTypeInfosDTO } from "./dashboardOrganisationTypeInfos";
import { DashboardTranslation, DashboardTranslationDTO } from "../dashboards";
import { WidgetInfos, WidgetInfosDTO } from "../widgets/widgetInfos";
import { CreateWidgetDTO } from "../widgets/widgetDetails";

export class DashboardOrganisationTypeDetails extends DashboardOrganisationTypeInfos {
  labelDefault: string;
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

  constructor(params: DashboardOrganisationTypeDetailsDTO) {
    super(params);

    this.labelDefault = params.labelDefault;
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

export interface DashboardOrganisationTypeDetailsDTO extends DashboardOrganisationTypeInfosDTO {
  labelDefault: string;
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

export interface UpdateDashboardOrganisationTypeDTO {
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

export interface PublishDashboardOrganisationTypeDTO {
  dashboardOrganisationId: string;
  organisationTypeId: string | null;
}

export interface LockDashboardOrganisationTypeDTO {
  locked: boolean;
}