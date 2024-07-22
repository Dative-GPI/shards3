export const locationMarkerHtml = (icon: string, color: string) => {
  const iconHtml = `
  <div style="--fs-map-mylocation-pin-color-alpha:${color}50;--fs-map-location-pin-color: ${color}">
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

export const myLocationMarkerHtml = () => {
  const iconHtml = `<div class="fs-map-mylocation-pin" />`;

  return iconHtml;
}