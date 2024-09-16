import type { PathCrumbDTO } from "../shared/pathCrumb";
import { PathCrumb } from "../shared/pathCrumb";

export class FolderInfos {
  id: string;
  organisationId: string;
  parentId: string | null;
  parentLabel: string | null;
  parentIcon: string | null;
  label: string;
  icon: string;
  code: string;
  tags: string[];
  colors: string[];
  imageId: string | null;
  path: PathCrumb[];

  constructor(params: FolderInfosDTO) {
    this.id = params.id;
    this.organisationId = params.organisationId;
    this.parentId = params.parentId;
    this.parentLabel = params.parentLabel;
    this.parentIcon = params.parentIcon;
    this.label = params.label;
    this.icon = params.icon;
    this.code = params.code;
    this.tags = params.tags.slice();
    this.colors = params.colors.slice();
    this.imageId = params.imageId;
    this.path = params.path.map(dto => new PathCrumb(dto)).sort((a, b) => b.index - a.index);
  }
}

export interface FolderInfosDTO {
  id: string;
  organisationId: string;
  parentId: string | null;
  parentLabel: string | null;
  parentIcon: string | null;
  label: string;
  icon: string;
  code: string;
  tags: string[];
  colors: string[];
  imageId: string | null;
  path: PathCrumbDTO[];
}

export interface FolderFilters {
  parentId?: string | null;
  root?: boolean | null;
  search?: string | null;
  foldersIds?: string[] | null;
}