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
        class="fs-map-overlay-layer-choice"
        gap="2px"
      >
        <FSChip
          v-for="mapLayer in mapLayers.filter((layer) => selectableLayers.includes(layer.name))"
          variant="full"
          :color="innerSelectedLayer === mapLayer.name ? 'dark' : 'light'"
          :label="mapLayer.label"
          :key="mapLayer.name"
          :editable="true"
          @click="setMapBaseLayer(mapLayer.name as 'osm' | 'imagery')"
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
      <FSCol :style="style">
        <div
          class="fs-leaflet-container"
          :id="mapId"
        />
      </FSCol>

      <FSCol
        class="fs-map-overlay-container"
        align="center-center"
      >
        <FSCol
          class="fs-map-zoom-overlay"
          align="bottom-center"
          width="hug"
        >
          <FSButton
            v-if="$props.showMyLocation"
            prependIcon="mdi-crosshairs-gps"
            color="primary"
            variant="full"
            :elevation="true"
            :border="false"
            @click="locate"
          />
          <FSCol
            v-if="$props.showZoomButtons"
            gap="0"
          >
            <FSButton
              class="fs-map-zoom-plus"
              prependIcon="mdi-plus"
              :elevation="true"
              :border="false"
              @click="zoomIn"
            />
            <FSButton
              class="fs-map-zoom-minus"
              prependIcon="mdi-minus"
              :elevation="true"
              :border="false"
              @click="zoomOut"
            />
          </FSCol>
        </FSCol>
        <FSMapEditPointAddressOverlay
          v-if="editingLocation"
          :label="$tr('ui.map.address', 'Address')"
          :modelValue="(innerModelValue.find((loc) => loc.id === $props.selectedLocationId))?.address"
          @update:locationCoordinates="($event: Address) => onNewCoordEntered($event.latitude, $event.longitude)"
          @update:modelValue="($event: Address) => onNewAddressEntered($event)"
          @cancel="onCancel"
          @submit="onSubmit"
        />
      </FSCol>
    </FSCol>
  </FSCard>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, type PropType, ref, watch } from "vue";
import { v4 as uuidv4 } from "uuid";

import { MarkerClusterGroup } from "leaflet.markercluster";
import * as L from "leaflet";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";

import { type Address, type SiteInfos } from '@dative-gpi/foundation-shared-domain/models';

import { ColorEnum, type FSLocation, type MapLayer } from "../../models";
import { useColors, useAddress } from "../../composables";

import FSMapEditPointAddressOverlay from "./FSMapEditPointAddressOverlay.vue";
import FSButton from "../FSButton.vue";
import FSCard from "../FSCard.vue";
import FSChip from "../FSChip.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSMap",
  components: {
    FSMapEditPointAddressOverlay,
    FSButton,
    FSCard,
    FSChip,
    FSCol,
    FSRow
  },
  props: {
    height: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: '400px'
    },
    width: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: '100%'
    },
    sites: {
      type: Array as PropType<SiteInfos[]>,
      required: false,
      default: () => [],
    },
    center: {
      type: Array as PropType<number[]>,
      required: false,
      default: () => [45.71, 5.07]
    },
    selectedLayer: {
      type: String as PropType<"osm" | "imagery">,
      required: false,
      default: "osm"
    },
    selectableLayers: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => ["osm", "imagery"]
    },
    selectedLocationId: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    selectedSiteId: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    modelValue: {
      type: Array as PropType<FSLocation[]>,
      required: false,
      default: () => [],
    },
    editable: {
      type: Boolean,
      required: false,
      default: false
    },
    showMyLocation: {
      type: Boolean,
      required: false,
      default: true
    },
    showZoomButtons: {
      type: Boolean,
      required: false,
      default: true
    },
    grayscale: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:modelValue", "update:selectedLocationId", "update:selectedSiteId"],
  setup(props, { emit }) {
    const { reverseSearch } = useAddress();
    const { getColors } = useColors();
    const { $tr } = useTranslationsProvider();

    const innerSelectedLayer = ref(props.selectedLayer);
    const innerModelValue = ref(props.modelValue);
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
    }
    else {
      markerLayerGroup = new MarkerClusterGroup({
        spiderfyOnMaxZoom: false,
        showCoverageOnHover: false,
        disableClusteringAtZoom: 17,
        iconCreateFunction: function (cluster: any) {
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
        label: $tr("ui.map.layer.osm", "Map"),
        layer: L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 20,
          attribution: '© OpenStreetMap'
        })
      },
      {
        name: "imagery",
        label: $tr("ui.map.layer.imagery", "Imagery"),
        layer: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
          attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
          maxZoom: 19
        }),
      }
    ];

    const style = computed((): { [key: string]: string | undefined } => {
      return {
        "--fs-map-location-pin-color": getColors(ColorEnum.Primary).base,
        "--fs-map-mylocation-pin-color-alpha": getColors(ColorEnum.Primary).base + "50",
        "--fs-map-leaflet-container-height": props.height as string,
        "--fs-map-container-grayscale": props.grayscale ? '0.9' : '0'
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
        marker.on('click', () => emit('update:selectedLocationId', location.id));

      });
    };

    const displaySites = () => {
      siteLayerGroup.clearLayers();
      props.sites.forEach((site) => {
        const sitePolygon = L.polygon(site.coordinates.map((coord) => [coord.latitude, coord.longitude]), {
          color: site.color,
          fillColor: site.color + "50",
          fillOpacity: 0.5,
          className: 'fs-map-site',
        }).addTo(siteLayerGroup);

        sites[site.id] = sitePolygon;
        sitePolygon.on('click', () => emit('update:selectedSiteId', site.id));
      });
    }

    const modifyLocationAddress = (locationId: string, newAddress: Address) => {
      const location = innerModelValue.value.find((loc) => loc.id === locationId);
      if (!location) {
        return;
      }
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

    const setMapBaseLayer = (layerName: 'osm' | 'imagery') => {
      innerSelectedLayer.value = layerName;
      const layer = mapLayers.find((mapLayer) => mapLayer.name === layerName) ?? mapLayers[0];
      baseLayerGroup.clearLayers();
      layer.layer.addTo(baseLayerGroup);
    };

    const onNewAddressEntered = (address: Address) => {
      if (!props.selectedLocationId) {
        return;
      }
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
      }
      else {
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
      }
      else {
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

      if (!props.selectedLocationId) {
        return;
      }
      const marker = markers[props.selectedLocationId];
      marker.getElement()?.classList.add('fs-map-location-selected');
      map?.flyTo(marker.getLatLng(), 17);
    })

    watch(() => props.selectedSiteId, () => {
      if (!props.selectedSiteId) {
        return;
      }
      const site = sites[props.selectedSiteId];
      if (site) {
        map?.fitBounds(site.getBounds(), { maxZoom: 17 });
      }
    });

    return {
      innerSelectedLayer,
      editingLocation,
      innerModelValue,
      mapLayers,
      mapId,
      style,
      onNewAddressEntered,
      onNewCoordEntered,
      setMapBaseLayer,
      onCancel,
      onSubmit,
      zoomOut,
      locate,
      zoomIn
    };
  },
});
</script>