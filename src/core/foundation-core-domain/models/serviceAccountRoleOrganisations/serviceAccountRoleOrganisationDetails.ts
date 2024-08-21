import { ServiceAccountRoleOrganisationInfos, type ServiceAccountRoleOrganisationInfosDTO } from "./serviceAccountRoleOrganisationInfos";

export class ServiceAccountRoleOrganisationDetails extends ServiceAccountRoleOrganisationInfos {
  description: string;

  constructor(params: ServiceAccountRoleOrganisationDetailsDTO) {
    super(params);

    this.description = params.description;
  }
}

export interface ServiceAccountRoleOrganisationDetailsDTO extends ServiceAccountRoleOrganisationInfosDTO {
  description: string;
}

export interface CreateServiceAccountRoleOrganisationDTO {
  roleTemplateId: string | null;
  icon: string;
  code: string;
  label: string;
  description: string;
  tags: string[];
}

export interface UpdateServiceAccountRoleOrganisationDTO {
  icon: string;
  code: string;
  label: string;
  description: string;
  tags: string[];
  permissionsIds: string[];
}