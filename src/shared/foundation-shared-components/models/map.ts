import { type Layer } from "leaflet";

import { type Address } from "@/shared/foundation-shared-domain";

export interface MapLayer {
  name : string;
  label: string;
  layer: Layer;
}

export interface FSLocation {
  id: string;
  label: string;
  icon: string;
  address: Address;
}