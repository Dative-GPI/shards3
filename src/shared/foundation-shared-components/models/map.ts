import { Layer } from "leaflet";

export interface MapLayer {
  name:string;
  label:string;
  layer: Layer;
}

export interface PinnedLocation {
  name: string;
  label: string;
  lat: number;
  lng: number;
  icon: string;
  color: string;
}
