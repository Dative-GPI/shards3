import { translate } from "@dative-gpi/foundation-shared-services/tools";

import type { CreateDashboardShallowEntityPresetDTO, DashboardShallowEntityPresetInfosDTO } from "../dashboardShallowEntityPresets";
import { DashboardShallowEntityPresetInfos } from "../dashboardShallowEntityPresets";
import type { CreateDashboardShallowDatePresetDTO, DashboardShallowDatePresetInfosDTO } from "../dashboardShallowDatePresets";
import { DashboardShallowDatePresetInfos } from "../dashboardShallowDatePresets";
import type { CreateDashboardShallowVariableDTO, DashboardShallowVariableInfosDTO } from "../dashboardShallowVariables";
import { DashboardShallowVariableInfos } from "../dashboardShallowVariables";
import type { DashboardEntityPresetInfosDTO } from "../dashboardEntityPresets";
import { DashboardEntityPresetInfos } from "../dashboardEntityPresets";
import type { DashboardDatePresetInfosDTO } from "../dashboardDatePresets";
import { DashboardDatePresetInfos } from "../dashboardDatePresets";
import type { DashboardVariableInfosDTO } from "../dashboardVariables";
import { DashboardVariableInfos } from "../dashboardVariables";
import type { DashboardShallowInfosDTO } from "./dashboardShallowInfos";
import { DashboardShallowInfos } from "./dashboardShallowInfos";
import type { DashboardTranslationDTO } from "../dashboards";
import { DashboardTranslation } from "../dashboards";
import type { WidgetInfosDTO } from "../widgets/widgetInfos";
import { WidgetInfos } from "../widgets/widgetInfos";
import type { PathCrumbDTO } from "../shared/pathCrumb";
import { PathCrumb } from "../shared/pathCrumb";


export class DashboardShallowDetails extends DashboardShallowInfos {
  labelDefault: string;
  translations: DashboardTranslation[];
  path: PathCrumb[];
  
  // @ts-expect-error ts(2611)
  get label() {
    return translate(this.translations, t => t.label, this.labelDefault);
  }
  
  widgets: WidgetInfos[];
  
  defaultEntityPresetCode: string | null;
  defaultDatePresetCode: string | null;
  defaultVariableCode: string | null;
  defaultDatePresets: DashboardDatePresetInfos[];
  defaultEntityPresets: DashboardEntityPresetInfos[];
  defaultVariables: DashboardVariableInfos[];
  
  overrideEntityPresetCode: string | null;
  overrideDatePresetCode: string | null;
  overrideVariableCode: string | null;
  overrideDatePresets: DashboardShallowDatePresetInfos[];
  overrideEntityPresets: DashboardShallowEntityPresetInfos[];
  overrideVariables: DashboardShallowVariableInfos[];
  
  get entityPresetCode() {
    return this.overrideEntityPresetCode ?? this.defaultEntityPresetCode;
  }

  get datePresetCode() {
    return this.overrideDatePresetCode ?? this.defaultDatePresetCode;
  }

  get variableCode() {
    return this.overrideVariableCode ?? this.defaultVariableCode;
  }

  get datePresets() : DashboardDatePresetInfos[] {
    return this.defaultDatePresets.map(d => {
      const override = this.overrideDatePresets.find(od => od.hiddenCode === d.hiddenCode);
      return override ? new DashboardDatePresetInfos({ ...d, ...override }) : d;
    })
  }

  get entityPresets() {
    return this.defaultEntityPresets.map(d => {
      const override = this.overrideEntityPresets.find(od => od.hiddenCode === d.hiddenCode);
      return override ? new DashboardEntityPresetInfos({ ...d, ...override }) : d;
    })
  }

  get variables() {
    return this.defaultVariables.map(d => {
      const override = this.overrideVariables.find(od => od.hiddenCode === d.hiddenCode);
      return override ? new DashboardVariableInfos({ ...d, ...override }) : d;
    })
  }

  constructor(params: DashboardShallowDetailsDTO) {
    super(params);
    
    this.labelDefault = params.labelDefault;
    this.path = params.path.map(dto => new PathCrumb(dto)).sort((a, b) => b.index - a.index);
    this.translations = params.translations.map(t => new DashboardTranslation(t));
    this.widgets = params.widgets.map(dto => new WidgetInfos(dto));
    
    this.overrideEntityPresetCode = params.overrideEntityPresetCode;
    this.overrideDatePresetCode = params.overrideDatePresetCode;
    this.overrideVariableCode = params.overrideVariableCode;
    this.overrideDatePresets = params.overrideDatePresets.map(dto => new DashboardShallowDatePresetInfos(dto));
    this.overrideEntityPresets = params.overrideEntityPresets.map(dto => new DashboardShallowEntityPresetInfos(dto));
    this.overrideVariables = params.overrideVariables.map(dto => new DashboardShallowVariableInfos(dto));

    this.defaultEntityPresetCode = params.defaultEntityPresetCode;
    this.defaultDatePresetCode = params.defaultDatePresetCode;
    this.defaultVariableCode = params.defaultVariableCode;
    this.defaultDatePresets = params.defaultDatePresets.map(dto => new DashboardDatePresetInfos(dto));
    this.defaultEntityPresets = params.defaultEntityPresets.map(dto => new DashboardEntityPresetInfos(dto));
    this.defaultVariables = params.defaultVariables.map(dto => new DashboardVariableInfos(dto));
  }
}

export interface DashboardShallowDetailsDTO extends DashboardShallowInfosDTO {
  labelDefault: string;
  path: PathCrumbDTO[];
  overrideEntityPresetCode: string | null;
  overrideDatePresetCode: string | null;
  overrideVariableCode: string | null;
  overrideDatePresets: DashboardShallowDatePresetInfosDTO[];
  overrideEntityPresets: DashboardShallowEntityPresetInfosDTO[];
  overrideVariables: DashboardShallowVariableInfosDTO[];
  translations: DashboardTranslationDTO[];
  dashboardId: string;
  scope: number;
  defaultEntityPresetCode: string | null;
  defaultDatePresetCode: string | null;
  defaultVariableCode: string | null;
  defaultDatePresets: DashboardDatePresetInfosDTO[];
  defaultEntityPresets: DashboardEntityPresetInfosDTO[];
  defaultVariables: DashboardVariableInfosDTO[];
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
  colors: string[];
  icon: string;
  tags: string[];
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