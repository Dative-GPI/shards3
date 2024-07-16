import { type Layer } from "leaflet";

import { type Address } from "@dative-gpi/foundation-shared-domain/models";

export interface MapLayer {
  name : string;
  label: string;
  image: string;
  layer: Layer;
}

export interface FSLocation {
  id: string;
  label: string;
  icon: string;
  address: Address;
  color: string;
}