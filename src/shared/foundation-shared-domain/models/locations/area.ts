export class AreaDetails {
  id: string;
  organisationId: string;
  label: string;
  color: string;
  coordinates: Coordinate[];

  constructor(params: AreaDTO) {
    this.id = params.id;
    this.organisationId = params.organisationId;
    this.label = params.label;
    this.color = params.color;
    this.coordinates = params.coordinates.map((coordinate) => ({ latitude: coordinate[0], longitude: coordinate[1] }));
  }
}

export interface AreaDTO {
  id: string;
  organisationId: string;
  label: string;
  color: string;
  coordinates: number[][];
}

export class AreaInfos extends AreaDetails {
}

export interface AreaInfosDTO extends AreaDTO {
}



interface Coordinate {
  latitude: number;
  longitude: number;
}

