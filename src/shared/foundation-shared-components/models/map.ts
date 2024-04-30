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

export const mapLayers: MapLayer[] = [
  {
    name: "osm",
    label: "OpenStreetMap",
    layer: L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    })
  },
  {
    name: "imagery",
    label: "Imagery",
    layer: L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.jpg', {
      maxZoom: 20,
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
    }),
  },
  {
    name: "light",
    label: "Light",
    layer: L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
      maxZoom: 20,
      attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    })
  }
];
