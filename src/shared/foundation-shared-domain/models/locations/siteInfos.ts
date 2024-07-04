import { type Coordinates } from "./coordinates";

export interface SiteInfosDTO {
  id: string;
  organisationId: string;
  label: string;
  color: string;
  coordinates: number[][];
}

export class SiteInfos {
  id: string;
  organisationId: string;
  label: string;
  color: string;
  coordinates: Coordinates[];

  constructor(params: SiteInfosDTO) {
    this.id = params.id;
    this.organisationId = params.organisationId;
    this.label = params.label;
    this.color = params.color;
    this.coordinates = params.coordinates.map((coordinate) => ({ latitude: coordinate[0], longitude: coordinate[1] }));
  }
}