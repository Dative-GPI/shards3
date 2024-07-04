export class SiteDetails {
  id: string;
  organisationId: string;
  label: string;
  color: string;
  coordinates: Coordinate[];

  constructor(params: SiteDTO) {
    this.id = params.id;
    this.organisationId = params.organisationId;
    this.label = params.label;
    this.color = params.color;
    this.coordinates = params.coordinates.map((coordinate) => ({ latitude: coordinate[0], longitude: coordinate[1] }));
  }
}

export interface SiteDTO {
  id: string;
  organisationId: string;
  label: string;
  color: string;
  coordinates: number[][];
}

export class SiteInfos extends SiteDetails {
}

export interface SiteInfosDTO extends SiteDTO {
}



interface Coordinate {
  latitude: number;
  longitude: number;
}

