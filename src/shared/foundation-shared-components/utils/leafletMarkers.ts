export const locationMarkerHtml = (icon: string, color: string, label: string = '') => {
  const iconHtml = `
  <div title="${label}" style="--fs-map-location-pin-color-alpha:${color}50;--fs-map-location-pin-color: ${color}">
    <i class="${icon} mdi notranslate v-theme--DefaultTheme fs-icon" aria-hidden="true" style="--fs-icon-font-size: 22px;" />
  </div>`;

  return iconHtml;
}

export const clusterMarkerHtml = (label: string) => {
  const iconHtml = `
  <div class="fs-map-cluster">
    <span>${label}</span>
  </div>`;

  return iconHtml;
}

export const gpsMarkerHtml = () => {
  const iconHtml = `<div class="fs-map-mylocation-pin" />`;

  return iconHtml;
}

export const pinMarkerHtml = (color: string, label: string = "") => {
  const iconHtml = `<div title="${label}" style="--fs-map-point-pin-color:${color}" class="fs-map-point-pin" />`;

  return iconHtml;
}