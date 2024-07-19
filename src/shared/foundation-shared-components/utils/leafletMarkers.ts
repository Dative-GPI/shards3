import L from 'leaflet';

export const locationMarker = (icon: string, color: string, size = 36) => {
  const iconHtml = `
  <div style="--fs-map-mylocation-pin-color-alpha:${color}50;--fs-map-location-pin-color: ${color}">
    <div class="fs-map-location-pin">
      <i class="${icon} mdi v-icon notranslate v-theme--DefaultTheme fs-icon" aria-hidden="true" style="--fs-icon-font-size: 22px;" />
    </div>
  </div>`;

  return L.divIcon({
    html: iconHtml,
    iconSize: [size, size],
    className: 'fs-map-location',
    iconAnchor: [size / 2, size / 2],
  });
}

export const clusterMarker = (label: string, size = 36) => {
  const iconHtml = `
  <div class="fs-map-cluster">
    <span>${label}</span>
  </div>`;

  return L.divIcon({
    html: iconHtml,
    className: 'fs-map-location fs-map-location-full',
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  })
}

export const myLocationMarker = (size = 16) => {
  const iconHtml = `<div class="fs-map-mylocation-pin" />`;

  return L.divIcon({
    html: iconHtml,
    className: 'fs-map-mylocation',
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
}