export const locationMarker = (icon: string, color: string, L: any, size = 36) => {
  const iconHtml = `
  <div style="--fs-map-mylocation-pin-color-alpha:${color}50;--fs-map-location-pin-color: ${color}">
    <i class="${icon} mdi notranslate v-theme--DefaultTheme fs-icon" aria-hidden="true" style="--fs-icon-font-size: 22px;" />
  </div>`;

  return L.divIcon({
    html: iconHtml,
    iconSize: [size, size],
    className: 'fs-map-location',
    iconAnchor: [size / 2, size / 2],
  });
}

export const clusterMarker = (label: string, L: any, size = 36) => {
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

export const myLocationMarker = (L: any, size = 16) => {
  const iconHtml = `<div class="fs-map-mylocation-pin" />`;

  return L.divIcon({
    html: iconHtml,
    className: 'fs-map-mylocation',
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
}