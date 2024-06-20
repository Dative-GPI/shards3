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

  constructor(params: DashboardOrganisationTypeDetailsDTO) {
    super(params);

    this.labelDefault = params.labelDefault;
    this.translations = params.translations.map(t => new DashboardTranslation(t));
    this.singleEntity = params.singleEntity;
    this.dynamicEntities = params.dynamicEntities;
    this.entityPresetCode = params.entityPresetCode;
    this.dynamicDates = params.dynamicDates;
    this.datePresetCode = params.datePresetCode;
    this.useAutoRefresh = params.useAutoRefresh;
    this.autoRefresh = params.autoRefresh;
    this.variables = params.variables.map(dto => new DashboardVariableInfos(dto));
    this.widgets = params.widgets.map(dto => new WidgetInfos(dto));
  }
}

export interface DashboardOrganisationTypeDetailsDTO extends DashboardOrganisationTypeInfosDTO {
  labelDefault: string;
  translations: DashboardTranslationDTO[];
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

export interface CreateDashboardOrganisationTypeDTO {
  dashboardOrganisationId: string;
  organisationTypeId: string | null;
}

export interface UpdateDashboardOrganisationTypeDTO {
  imageId: string | null;
  image: string | null;
  labelDefault: string;
  code: string;
  icon: string;
  tags: string[];
  translations: DashboardTranslationDTO[];
  singleEntity: boolean;
  dynamicEntities: boolean;
  entityPresetCode: string | null;
  dynamicDates: boolean;
  datePresetCode: string | null;
  useAutoRefresh: boolean;
  autoRefresh: number;
  datePresets: CreateDashboardDatePresetDTO[];
  entityPresets: CreateDashboardEntityPresetDTO[];
  variables: CreateDashboardVariableDTO[];
  widgets: CreateWidgetDTO[];
}

export interface LockDashboardOrganisationTypeDTO {
  locked: boolean;
}