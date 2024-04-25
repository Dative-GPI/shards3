export class PathCrumb {
  id: string;
  label: string;
  index: number;

  constructor (params: PathCrumbDTO) {
    this.id = params.id;
    this.label = params.label;
    this.index = params.index;
  }
}
  
export interface PathCrumbDTO {
  id: string;
  label: string;
  index: number;
}