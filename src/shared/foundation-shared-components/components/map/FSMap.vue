<template>
  <FSCard
    :width="$props.width"
    v-bind="$attrs"
  >
    <FSCol
      class="fs-map"
      width="fill"
    >
      <FSRow
        v-if="selectableLayers.length > 1"
        gap="2px"
        class="fs-map-overlay-layer-choice"
      >
        <FSChip
          v-for="mapLayer in mapLayers.filter((layer) => selectableLayers.includes(layer.name))"
          :key="mapLayer.name"
          :label="mapLayer.label"
          :editable="true"
          :color="innerSelectedLayer === mapLayer.name ? 'dark' : 'light'"
          variant="full"
          @click="setMapBaseLayer(mapLayer.name)"
        />
      </FSRow>
      <FSRow
        v-if="$props.editable && !editingLocation && $props.selectedLocationId !== null"
        class="fs-map-overlay-edit-button"
      >
        <FSButton
          prepend-icon="mdi-pencil"
          :label="$tr('ui.map.modify', 'Modify')"
          @click="editingLocation = true"
        />
      </FSRow>
      <FSCol
        :style="style"
      >
        <div
          class="fs-leaflet-container"
          :id="mapId"
        ></div>
      </FSCol>

      <FSCol
        class="fs-map-overlay-container"
        align="center-center"
      >
        <FSCol
          width="hug"
          class="fs-map-zoom-overlay"
          align="bottom-center"
        >
          <FSButton
            v-if="$props.showMyLocation"
            :elevation="true"
            :border="false"
            color="primary"
            variant="full"
            prepend-icon="mdi-crosshairs-gps"
            @click="locate"
          />
          <FSCol
            v-if="$props.showZoomButtons"
            gap="0"
          >
            <FSButton
              :elevation="true"
              class="fs-map-zoom-plus"
              prepend-icon="mdi-plus"
              @click="zoomIn"
              :border="false"
            />
            <FSButton
              :elevation="true"
              class="fs-map-zoom-minus"
              prepend-icon="mdi-minus"
              :border="false"
              @click="zoomOut"
            />
          </FSCol>
        </FSCol>
        <FSMapEditPointAddressOverlay
          v-if="editingLocation"
          :label="$tr('ui.map.address', 'Address')"
          :modelValue="(innerModelValue.find((loc) => loc.id === $props.selectedLocationId))?.address"
          @update:locationCoord="($event: Address) => onNewCoordEntered($event.latitude, $event.longitude)"
          @update:modelValue="($event: Address) => onNewAddressEntered($event)"
          @cancel="onCancel"
          @submit="onSubmit"
        />
      </FSCol>
    </FSCol>
  </FSCard>
</template>

<script lang="ts">
import type { PropType } from "vue";
import { computed, defineComponent, onMounted, ref, watch } from "vue";
import { v4 as uuidv4 } from "uuid";

import { useAddress } from "../../composables/useAddress";

import FSCard from '../FSCard.vue'
import FSCol from '../FSCol.vue'
import FSRow from '../FSRow.vue'
import FSButton from '../FSButton.vue'
import FSChip from '../FSChip.vue'
import FSMapEditPointAddressOverlay from "./FSMapEditPointAddressOverlay.vue";

import * as L from 'leaflet';
import { MarkerClusterGroup } from 'leaflet.markercluster';

import type { MapLayer } from "../../models";
import type { SiteInfos, Address } from '@dative-gpi/foundation-shared-domain/models';
import { LocationInfos } from '@dative-gpi/foundation-shared-domain/models';
import { ColorEnum } from "../../models";
import { useColors } from "../../composables";

export default defineComponent({
  name: "FSMap",
  components: {
    FSCard,
    FSCol,
    FSRow,
    FSButton,
    FSChip,
    FSMapEditPointAddressOverlay,
  },
  props: {
    height: {
      type: [String, Number] as PropType<string | number>,
      required: false,
      default: '400px'
    },
    width: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: '100%'
    },
    editable: {
      type: Boolean,
      required: false,
      default: false,
    },
    modelValue: {
      type: Array<LocationInfos>,
      required: false,
      default: () => [],
    },
    sites: {
      type: Array<SiteInfos>,
      required: false,
      default: () => [],
    },
    center: {
      type: Array<number>,
      default: [45.71, 5.07],
      required: false
    },
    selectedLayer: {
      type: String,
      default: "osm",
    },
    selectableLayers: {
      type: Array<string>,
      default: ["osm", "imagery"],
    },
    showMyLocation: {
      type: Boolean,
      required: false,
      default: true,
    },
    showZoomButtons: {
      type: Boolean,
      required: false,
      default: true,
    },
    selectedLocationId: {
      type: String,
      required: false,
      default: null,
    },
    selectedSiteId: {
      type: String,
      required: false,
      default: null,
    },
  },
  emits: ['update:modelValue', 'update:selectedLocationId', 'update:selectedSiteId'],
  setup(props, { emit }) {
    const { reverseSearch } = useAddress();
    const { getColors } = useColors();
    
    const innerModelValue = ref(props.modelValue);
    const innerSelectedLayer = ref(props.selectedLayer);
    const editingLocation = ref(false);
    
    const mapId = `map-${uuidv4()}`;
    const defaultZoom = 15;
    const markers: { [key: string]: L.Marker } = {};
    const sites: { [key: string]: L.Polygon } = {};
    const siteLayerGroup = new L.FeatureGroup();
    const baseLayerGroup = new L.LayerGroup();
    const myLocationLayerGroup = new L.LayerGroup();
    let map: L.Map;
    let markerLayerGroup: L.FeatureGroup | MarkerClusterGroup;
    if (props.editable) {
      markerLayerGroup = new L.FeatureGroup();
    }else {
      markerLayerGroup = new MarkerClusterGroup({
        spiderfyOnMaxZoom: false,
        showCoverageOnHover: false,
        disableClusteringAtZoom: 17,
        iconCreateFunction: function(cluster: any) {
          return L.divIcon({
            html: `<div>
                <span>${cluster.getChildCount()}</span>
              </div>`,
            className: 'fs-map-location fs-map-location-full',
            iconSize: [36, 36],
            iconAnchor: [18, 18],
          });
        }
      });
    }
    const mapLayers: MapLayer[] = [
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

    const style = computed((): { [key: string]: string | undefined } => {
      return {
        "--fs-map-location-pin-color": getColors(ColorEnum.Primary).base,
        "--fs-map-mylocation-pin-color-alpha": getColors(ColorEnum.Primary).base + "50",
        "--fs-map-leaflet-container-height": props.height as string,
      };
    });

    const displayLocations = () => {
      markerLayerGroup.clearLayers();
      innerModelValue.value.forEach((location) => {
        const iconHtml = `<div class="fs-map-location-pin"><i class="${location.icon} mdi v-icon notranslate v-theme--DefaultTheme fs-icon" aria-hidden="true" style="--fs-icon-font-size: 22px;"  ></i></div>`;
        const icon = L.divIcon({
          html: iconHtml,
          className: 'fs-map-location',
          iconSize: [36, 36],
          iconAnchor: [18, 18],
        });
        const marker = L.marker([location.address.latitude, location.address.longitude], { icon }).addTo(markerLayerGroup);
        markers[location.id] = marker;
        marker.on('click', () => {
          emit('update:selectedLocationId', location.id);
        });
        
      });
    };

    const displaySites = () => {
      siteLayerGroup.clearLayers();
      props.sites.forEach((site) => {
        const sitePolygon = L.polygon(site.coordinates.map(
          (coord) => [coord.latitude, coord.longitude]
        ), {
          color: site.color,
          fillColor: site.color + "50",
          fillOpacity: 0.5,
          className: 'fs-map-site',
        }).addTo(siteLayerGroup);
        sites[site.id] = sitePolygon;
        sitePolygon.on('click', () => {
          emit('update:selectedSiteId', site.id);
        });
      });
    }

    const modifyLocationAddress = (locationId: string, newAddress: Address) => {
      const location = innerModelValue.value.find((loc) => loc.id === locationId);
      if (!location) { return; }
      const newLocation = {
        ...location,
        address: {
          ...newAddress
        },
      };
      innerModelValue.value = innerModelValue.value.map((loc) => loc.id === locationId ? newLocation : loc);
    };

    const initMap = () => {
      const mapOptions = {
        zoomControl: false,
        scrollWheelZoom: false,
        minZoom: 2,
        maxBounds: L.latLngBounds(L.latLng(-90, -180), L.latLng(90, 180)),
        maxBoundsViscosity: 1.0
      };
      map = L.map(mapId, mapOptions).setView([props.center[0], props.center[1]], defaultZoom);
      map.attributionControl.remove();
      L.control.attribution({ position: 'bottomleft' }).addTo(map);

      baseLayerGroup.addTo(map);
      siteLayerGroup.addTo(map);
      myLocationLayerGroup.addTo(map);
      setMapBaseLayer(props.selectedLayer);
      displaySites();
      displayLocations();
      markerLayerGroup.addTo(map);

      if (innerModelValue.value.length > 0) {
        map.fitBounds(markerLayerGroup.getBounds(), { maxZoom: defaultZoom });
      }

      map.on('click', (e: L.LeafletMouseEvent) => {
        if (editingLocation.value) {
          onNewCoordEntered(+e.latlng.lat.toFixed(6), +e.latlng.lng.toFixed(6));
        }
      });
    };

    const setMapBaseLayer = (layerName: string) => {
      innerSelectedLayer.value = layerName;
      const layer = mapLayers.find((mapLayer) => mapLayer.name === layerName) ?? mapLayers[0];
      baseLayerGroup.clearLayers();
      layer.layer.addTo(baseLayerGroup);
    };

    const onNewAddressEntered = (address: Address) => {
      if (!props.selectedLocationId) { return; }
      modifyLocationAddress(props.selectedLocationId, address);
      map?.flyTo([address.latitude, address.longitude], map?.getZoom() ?? defaultZoom);
    };

    const onNewCoordEntered = async (lat: number, lng: number) => {
      const address = await reverseSearch(lat, lng);

      onNewAddressEntered({
        ...address,
        latitude: lat,
        longitude: lng,
      });
    };

    const zoomIn = () => {
      map?.zoomIn();
    };

    const zoomOut = () => {
      map?.zoomOut();
    };

    const locate = () => {
      map?.locate();
      map?.on('locationfound', (e: L.LocationEvent) => {
        map?.flyTo(e.latlng, map?.getZoom() ?? defaultZoom);
        const iconHtml = `<div class="fs-map-mylocation-pin"></div>`;
        const icon = L.divIcon({
          html: iconHtml,
          className: 'fs-map-mylocation',
          iconSize: [16, 16],
          iconAnchor: [8, 8],
        });
        myLocationLayerGroup.clearLayers();
        L.marker(e.latlng, { icon }).addTo(myLocationLayerGroup);
      });
    };

    const onCancel = () => {
      editingLocation.value = false;
      innerModelValue.value = props.modelValue;
      displayLocations();
      if (innerModelValue.value.length > 0) {
        map?.fitBounds(markerLayerGroup.getBounds(), { maxZoom: defaultZoom });
      } else {
        map?.flyTo([props.center[0], props.center[1]], map?.getZoom() ?? defaultZoom);
      }
      if (props.modelValue.length > 1) {
        emit('update:selectedLocationId', null);
      }
    };

    const onSubmit = () => {
      emit('update:modelValue', innerModelValue.value);
      editingLocation.value = false;
      if (innerModelValue.value.length > 0) {
        map?.fitBounds(markerLayerGroup.getBounds(), { maxZoom: defaultZoom });
      } else {
        map?.flyTo([props.center[0], props.center[1]], map?.getZoom() ?? defaultZoom);
      }
      if (props.modelValue.length > 1) {
        emit('update:selectedLocationId', null);
      }
    };

    onMounted(() => {
      initMap();
    });

    watch(() => innerModelValue.value, () => {
      displayLocations();
    });

    watch(() => props.selectedLocationId, () => {
      Object.values(markers).forEach((marker) => {
        marker.getElement()?.classList.remove('fs-map-location-selected');
      });

      if (!props.selectedLocationId) { return; }
      const marker = markers[props.selectedLocationId];
      marker.getElement()?.classList.add('fs-map-location-selected');
      map?.flyTo(marker.getLatLng(), 17);
    })

    watch(() => props.selectedSiteId, () => {
      if (!props.selectedSiteId) { return; }
      const site = sites[props.selectedSiteId];
      if (site) {
        map?.fitBounds(site.getBounds(), { maxZoom: 17 });
      }
    });

    return {
      locate,
      onNewAddressEntered,
      onNewCoordEntered,
      onCancel,
      onSubmit,
      setMapBaseLayer,
      zoomIn,
      zoomOut,
      editingLocation,
      innerModelValue,
      innerSelectedLayer,
      mapId,
      mapLayers,
      style
    };
  },
});
</script>