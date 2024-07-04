import type { Layer } from "leaflet";

export interface MapLayer {
  name:string;
  label:string;
  layer: Layer;
}
