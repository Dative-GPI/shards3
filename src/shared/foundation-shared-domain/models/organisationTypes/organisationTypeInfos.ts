import { type DashboardType } from "../../enums/dashboards";

export class OrganisationTypeInfos {
  id: string;
  mainDashboardId: string | null;
  mainDashboardType: DashboardType;
  code: string;
  label: string;

  constructor(params: OrganisationTypeInfosDTO) {
    this.id = params.id;
    this.mainDashboardId = params.mainDashboardId;
    this.mainDashboardType = params.mainDashboardType;
    this.code = params.code;
    this.label = params.label;
  }
}

export interface OrganisationTypeInfosDTO {
  id: string;
  mainDashboardId: string | null;
  mainDashboardType: DashboardType;
  code: string;
  label: string;
}

export interface OrganisationTypeFilters {
  search?: string | null;
}