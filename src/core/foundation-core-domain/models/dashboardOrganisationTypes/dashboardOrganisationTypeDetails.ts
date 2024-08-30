import type { CreateDashboardEntityPresetDTO, DashboardEntityPresetInfosDTO } from "../dashboardEntityPresets";
import { DashboardEntityPresetInfos } from "../dashboardEntityPresets";
import type { CreateDashboardDatePresetDTO, DashboardDatePresetInfosDTO } from "../dashboardDatePresets";
import { DashboardDatePresetInfos } from "../dashboardDatePresets";
import type { CreateDashboardVariableDTO, DashboardVariableInfosDTO } from "../dashboardVariables";
import { DashboardVariableInfos } from "../dashboardVariables";
import type { DashboardOrganisationTypeInfosDTO } from "./dashboardOrganisationTypeInfos";
import { DashboardOrganisationTypeInfos } from "./dashboardOrganisationTypeInfos";
import type { DashboardTranslationDTO } from "../dashboards";
import { DashboardTranslation } from "../dashboards";
import type { WidgetInfosDTO } from "../widgets/widgetInfos";
import { WidgetInfos } from "../widgets/widgetInfos";
import type { CreateWidgetDTO } from "../widgets/widgetDetails";

export class DashboardOrganisationTypeDetails extends DashboardOrganisationTypeInfos {
  labelDefault: string;
  translations: DashboardTranslation[];
  
  widgets: WidgetInfos[];

  entityPresetCode: string | null;
  datePresetCode: string | null;
  variableCode: string | null;
  datePresets: DashboardDatePresetInfos[];
  entityPresets: DashboardEntityPresetInfos[];
  variables: DashboardVariableInfos[];

  constructor(params: DashboardOrganisationTypeDetailsDTO) {
    super(params);

    this.labelDefault = params.labelDefault;
    this.translations = params.translations.map(t => new DashboardTranslation(t));
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
  colors: string[];
  icon: string;
  tags: string[];
  translations: DashboardTranslationDTO[];
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