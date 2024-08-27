import { translate } from "@dative-gpi/foundation-shared-services/tools";

import type { CreateDashboardEntityPresetDTO, DashboardEntityPresetInfosDTO } from "../dashboardEntityPresets";
import { DashboardEntityPresetInfos } from "../dashboardEntityPresets";
import type { CreateDashboardDatePresetDTO, DashboardDatePresetInfosDTO } from "../dashboardDatePresets";
import { DashboardDatePresetInfos } from "../dashboardDatePresets";
import type { CreateDashboardVariableDTO, DashboardVariableInfosDTO } from "../dashboardVariables";
import { DashboardVariableInfos } from "../dashboardVariables";
import type { DashboardOrganisationInfosDTO } from "./dashboardOrganisationInfos";
import { DashboardOrganisationInfos } from "./dashboardOrganisationInfos";
import type { DashboardTranslationDTO } from "../dashboards";
import { DashboardTranslation } from "../dashboards";
import type { WidgetInfosDTO } from "../widgets/widgetInfos";
import { WidgetInfos } from "../widgets/widgetInfos";
import type { PathCrumbDTO } from "../shared/pathCrumb";
import { PathCrumb } from "../shared/pathCrumb";
import type { CreateWidgetDTO } from "../widgets/widgetDetails";

export class DashboardOrganisationDetails extends DashboardOrganisationInfos {
  labelDefault: string;
  path: PathCrumb[];
  translations: DashboardTranslation[];

  // @ts-expect-error ts(2611)
  get label() {
    return translate(this.translations, t => t.label, this.labelDefault);
  }

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
  colors: string[];
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

export interface LockDashboardOrganisationDTO {
  locked: boolean;
}

export interface ChangeDashboardOrganisationFolderDTO {
  folderId: string | null;
}