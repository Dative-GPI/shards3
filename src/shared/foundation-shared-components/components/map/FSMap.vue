<template>
  <FSCard
    :width="$props.width"
    :style="style"
    v-bind="$attrs"
  >
    <FSCol
      v-if="L"
      width="fill"
      :class="['fs-map', { 'fs-map-fullscreen': fullScreen }]"
    >
      <FSMapOverlay
        v-if="$slots['leftoverlay-header'] || $slots['leftoverlay-body']"
        :mode="$props.overlayMode"
        :height="$props.height"
        :mapId="mapId"
        @update:mode="$emit('update:overlayMode', $event)"
      >
        <template
          v-slot:leftoverlay-header
        >
          <slot
            name="leftoverlay-header"
          />
        </template>
        <template
          v-slot:leftoverlay-body
        >
          <slot
            name="leftoverlay-body"
          />
        </template>
      </FSMapOverlay>
      <FSRow
        v-if="$props.editable && !editingLocation && $props.selectedLocationId !== null"
        class="fs-map-overlay-edit-button"
      >
        <FSButton
          prependIcon="mdi-pencil-outline"
          :label="$tr('ui.map.modify', 'Modify')"
          @click="editingLocation = true"
        />
      </FSRow>
      <FSCol>
        <div
          class="fs-leaflet-container"
          :id="mapId"
        />
      </FSCol>
      <FSCol
        class="fs-map-overlay-right-top"
        align="center-center"
      >
        <slot
          name="toprightoverlay"
        >
          <FSRow
            gap="2px"
          >
            <FSMapLayerButton
              v-if="$props.selectableLayers?.length && $props.selectableLayers.length > 1"
              :layers="mapLayers.filter((layer) => $props.selectableLayers?.includes(layer.name) ?? true)"
              v-model="innerSelectedLayer"
            />
            <FSButton
              v-if="$props.showFullScreen"
              prependIcon="mdi-fullscreen"
              :elevation="true"
              @click="fullScreen = !fullScreen"
            />
          </FSRow>
        </slot>
      </FSCol>
      <FSCol
        class="fs-map-overlay-right-bottom"
        align="center-center"
      >
        <slot
          name="bottomrightoverlay"
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
        </slot>
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
import { computed, defineComponent, onMounted, onUnmounted, type PropType, ref, watch } from "vue";

import * as L from "leaflet";
import "leaflet.markercluster";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import { type Address, type FSArea } from '@dative-gpi/foundation-shared-domain/models';

import { clusterMarker, locationMarker, myLocationMarker } from "../../utils";
import { ColorEnum, type FSLocation, type MapLayer } from "../../models";
import { useColors, useAddress, useBreakpoints } from "../../composables";

import FSMapEditPointAddressOverlay from "./FSMapEditPointAddressOverlay.vue";
import FSMapLayerButton from "./FSMapLayerButton.vue";
import FSMapOverlay from "./FSMapOverlay.vue";
import FSButton from "../FSButton.vue";
import FSCard from "../FSCard.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSMap",
  components: {
    FSMapEditPointAddressOverlay,
    FSMapLayerButton,
    FSMapOverlay,
    FSButton,
    FSCard,
    FSCol,
    FSRow
  },
  props: {
    height: {
      type: [String, Number] as PropType<string | number | null>,
      required: false,
      default: '400px'
    },
    width: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: '100%'
    },
    grayscale: {
      type: Boolean,
      required: false,
      default: false
    },
    editable: {
      type: Boolean,
      required: false,
      default: false
    },
    overlayMode: {
      type: String as PropType<'collapse' | 'half' | 'expand'>,
      required: false,
      default: 'collapse'
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
    showFullScreen: {
      type: Boolean,
      required: false,
      default: false
    },
    enableScrollWheelZoom: {
      type: Boolean,
      required: false,
      default: false
    },
    center: {
      type: Array as PropType<number[]>,
      required: false,
      default: () => [45.71, 5.07]
    },
    modelValue: {
      type: Array as PropType<FSLocation[]>,
      required: false,
      default: () => [],
    },
    areas: {
      type: Array as PropType<FSArea[]>,
      required: false,
      default: () => [],
    },
    selectedLayer: {
      type: String as PropType<"map" | "imagery">,
      required: false,
      default: "map"
    },
    selectableLayers: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => ["map", "imagery"]
    },
    selectedLocationId: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    selectedAreaId: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    }
  },
  emits: ["update:modelValue", "update:selectedLocationId", "update:selectedAreaId", 'update:overlayMode'],
  setup(props, { emit }) {
    const { $tr } = useTranslationsProvider();
    const { reverseSearch } = useAddress();
    const { getColors } = useColors();
    const { isExtraSmall } = useBreakpoints();

    const LL = window.L;

    const innerSelectedLayer = ref(props.selectedLayer);
    const innerModelValue = ref(props.modelValue);
    const editingLocation = ref(false);
    const fullScreen = ref(false);
    const leftOverlayHeight = ref<number>();
    const resizeObserver = ref<ResizeObserver | null>(null);

    const mapId = `map-${Math.random().toString(36).substring(7)}`;
    const defaultZoom = 15;
    const markers: { [key: string]: L.Marker } = {};
    const areas: { [key: string]: L.Polygon } = {};
    const areaLayerGroup = new LL.FeatureGroup();
    const baseLayerGroup = new LL.LayerGroup();
    const myLocationLayerGroup = new LL.LayerGroup();

    let map: L.Map;
    let markerLayerGroup: L.FeatureGroup | any;

    if (props.editable) {
      markerLayerGroup = new LL.FeatureGroup();
    }
    else {
      markerLayerGroup = new LL.MarkerClusterGroup({
        spiderfyOnMaxZoom: false,
        showCoverageOnHover: false,
        disableClusteringAtZoom: 17,
        iconCreateFunction: function (cluster: any) {
          return clusterMarker(cluster.getChildCount(), L);
        }
      });
    }
    const mapLayers: MapLayer[] = [
      {
        name: "map",
        label: $tr("ui.map.layer.map", "Map"),
        image: new URL("../../assets/images/map/map.png", import.meta.url).href,
        layer: LL.tileLayer(`http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY ?? ""}`, {
          maxZoom: 22,
          subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
          attribution: '© Google Map Data'
        })
      },
      {
        name: "imagery",
        label: $tr("ui.map.layer.imagery", "Imagery"),
        image: new URL("../../assets/images/map/imagery.png", import.meta.url).href,
        layer: LL.tileLayer(`http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY ?? ""}`, {
          maxZoom: 22,
          subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
          attribution: '© Google Map Data'
        })
      }
    ];

    const bottomMargin = computed(() => {
      let margin = 0;
      if(props.overlayMode !== 'expand' && leftOverlayHeight.value && isExtraSmall.value) {
        margin += leftOverlayHeight.value;
      }
      return `${margin}px`;
    });

    const style = computed((): { [key: string]: string | undefined } => {
      return {
        "--fs-map-location-pin-color": getColors(ColorEnum.Primary).base,
        "--fs-map-mylocation-pin-color": getColors(ColorEnum.Primary).base,
        "--fs-map-mylocation-pin-color-alpha": getColors(ColorEnum.Primary).base + "50",
        "--fs-map-leaflet-container-height": props.height as string,
        "--fs-map-leaflet-bottom-overlay-margin": bottomMargin.value,
        "--fs-map-container-grayscale": props.grayscale ? '0.9' : '0'
      };
    });

    const displayLocations = () => {
      markerLayerGroup.clearLayers();
      innerModelValue.value.forEach((location) => {
        const icon = locationMarker(location.icon, getColors(location.color).base, L);
        const marker = LL.marker([location.address.latitude, location.address.longitude], { icon }).addTo(markerLayerGroup);
        markers[location.id] = marker;
        marker.on('click', () => emit('update:selectedLocationId', location.id));
      });
    };

    const displayAreas = () => {
      areaLayerGroup.clearLayers();
      props.areas.forEach((area) => {
        const areaPolygon = LL.polygon(area.coordinates.map((coord) => [coord.latitude, coord.longitude]), {
          color: area.color,
          fillColor: area.color + "50",
          fillOpacity: 0.5,
          className: 'fs-map-area',
        }).addTo(areaLayerGroup);

        areas[area.id] = areaPolygon;
        areaPolygon.on('click', () => emit('update:selectedAreaId', area.id));
      });
    };

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
        scrollWheelZoom: props.enableScrollWheelZoom,
        minZoom: 2,
        maxBounds: LL.latLngBounds(LL.latLng(-90, -180), LL.latLng(90, 180)),
        maxBoundsViscosity: 1.0
      };
      map = LL.map(mapId, mapOptions).setView([props.center[0], props.center[1]], defaultZoom);
      map.attributionControl.remove();
      LL.control.attribution({ position: 'bottomleft' }).addTo(map);

      baseLayerGroup.addTo(map);
      areaLayerGroup.addTo(map);
      myLocationLayerGroup.addTo(map);
      setMapBaseLayer(innerSelectedLayer.value);
      displayAreas();
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

    const setMapBaseLayer = (layerName: 'map' | 'imagery') => {
      const layer = mapLayers.find((mapLayer) => mapLayer.name === layerName) ?? mapLayers[0];
      baseLayerGroup.clearLayers();
      layer.layer.addTo(baseLayerGroup);
    };

    const onNewAddressEntered = (address: Address) => {
      if (!props.selectedLocationId || !map) {
        return;
      }
      modifyLocationAddress(props.selectedLocationId, address);
      map.panTo([address.latitude, address.longitude]);
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
      if (!map) {
        return;
      }
      map.zoomIn();
    };

    const zoomOut = () => {
      if (!map) {
        return;
      }
      map.zoomOut();
    };

    const locate = () => {
      if (!map) {
        return;
      }
      map.locate();
      map.on('locationfound', (e: L.LocationEvent) => {
        map.panTo(e.latlng);
        const icon = myLocationMarker(L);
        myLocationLayerGroup.clearLayers();
        LL.marker(e.latlng, { icon }).addTo(myLocationLayerGroup);
      });
    };

    const onCancel = () => {
      editingLocation.value = false;
      innerModelValue.value = props.modelValue;
      if (!map) {
        return;
      }
      displayLocations();
      if (innerModelValue.value.length > 0) {
        map.fitBounds(markerLayerGroup.getBounds(), { maxZoom: defaultZoom });
      }
      else {
        map.panTo([props.center[0], props.center[1]]);
      }
      if (props.modelValue.length > 1) {
        emit('update:selectedLocationId', null);
      }
    };

    const onSubmit = () => {
      emit('update:modelValue', innerModelValue.value);
      if (!map) {
        return;
      }
      editingLocation.value = false;
      if (innerModelValue.value.length > 0) {
        map.fitBounds(markerLayerGroup.getBounds(), { maxZoom: defaultZoom });
      }
      else {
        map.flyTo([props.center[0], props.center[1]], map.getZoom() ?? defaultZoom, { animate: false });
      }
      if (props.modelValue.length > 1) {
        emit('update:selectedLocationId', null);
      }
    };

    onMounted(() => {
      initMap();
      if (props.selectedLocationId && props.modelValue.length === 1) {
        editingLocation.value = true;
      }

      resizeObserver.value = new ResizeObserver(entries => {
        entries.forEach((entry) => {
          leftOverlayHeight.value = entry.contentRect.height;
        });
      });
      if (document.querySelector(`#left-overlay-mobile-${mapId}`)) {
        resizeObserver.value.observe(document.querySelector(`#left-overlay-mobile-${mapId}`)!);
      }
    });

    onUnmounted((): void => {
      if (resizeObserver.value) {
        resizeObserver.value.disconnect();
      }
    });

    watch(() => innerModelValue.value, () => {
      displayLocations();
    });

    watch(() => props.selectedLocationId, () => {
      if (!props.selectedLocationId || !map) {
        return;
      }

      Object.values(markers).forEach((marker) => {
        marker.getElement()?.classList.remove('fs-map-location-selected');
      });

      const marker = markers[props.selectedLocationId];
      map.flyTo(marker.getLatLng(), 17, { animate: false });
      marker.getElement()?.classList.add('fs-map-location-selected');
    })

    watch(() => props.selectedAreaId, () => {
      if (!props.selectedAreaId || !map) {
        return;
      }
      const area = areas[props.selectedAreaId];
      if (area) {
        map.fitBounds(area.getBounds(), { maxZoom: 17 });
      }
    });

    watch(innerSelectedLayer, () => {
      setMapBaseLayer(innerSelectedLayer.value);
    });

    return {
      bottomMargin,
      editingLocation,
      fullScreen,
      innerModelValue,
      innerSelectedLayer,
      mapLayers,
      mapId,
      style,
      L,
      onNewAddressEntered,
      onNewCoordEntered,
      setMapBaseLayer,
      onCancel,
      onSubmit,
      zoomOut,
      locate,
      zoomIn
    };
  }
});
</script>