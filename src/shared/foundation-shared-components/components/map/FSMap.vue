<template>
  <FSCard
    class="fs-map"
    :width="$props.width"
    :height="$props.height"
    :style="style"
    v-bind="$attrs"
  >
    <div
      ref="leafletContainer"
      class="fs-leaflet-container"
    >
      <template
        v-if="map"
      >
        <FSMapTileLayer
          :layer="actualLayer"
        />
        <FSMapMarker 
          v-if="gpsPosition"
          variant="gps"
          :color="ColorEnum.Primary"
          :latlng="gpsPosition"
        />
  
        <FSMapFeatureGroup
          v-if="$props.areas"
          :expected-layers="$props.areas.length"
          @update:bounds="(bounds) => areaGroupBounds = bounds"
        >
          <FSMapPolygon
            v-for="area in areas"
            :key="area.id"
            :color="area.color"
            :latlngs="area.coordinates.map((coord) => ({lat: coord.latitude, lng: coord.longitude}))"
            @click="$emit('update:selectedAreaId', area.id)"
          />
        </FSMapFeatureGroup>
  
        <FSMapMarkerClusterGroup
          v-if="$props.locations"
          :expected-layers="$props.locations.length"
          @update:bounds="(bounds) => locationGroupBounds = bounds"
        >
          <FSMapMarker
            v-for="location in $props.locations"
            :selected="location.id === $props.selectedLocationId"
            :key="location.id"
            :color="location.color"
            :icon="location.icon"
            :latlng="{lat: location.address.latitude, lng: location.address.longitude}"
            @click="$emit('update:selectedLocationId', location.id)"
          />
        </FSMapMarkerClusterGroup>
      </template>
    </div>

    <FSMapLayerButton
      v-if="$props.allowedLayers?.length && $props.allowedLayers.length > 1"
      :layers="mapLayers.filter((layer) => $props.allowedLayers?.includes(layer.name) ?? true)"
      :modelValue="$props.currentLayer"
      @update:model-value="$emit('update:currentLayer', $event)"
    />

    <FSCol
      v-if="map"
      class="fs-map-control-buttons"
    >
      <FSButton
        v-if="$props.showMyLocation"
        icon="mdi-crosshairs-gps"
        color="primary"
        variant="full"
        :elevation="true"
        @click="() => map!.locate()"
      />
      <FSCard
        v-if="$props.showZoomButtons"
        :elevation="true"
      >
        <FSCol
          gap="0"
        >
          <FSButton
            class="fs-map-zoom-plus-button"
            icon="mdi-plus"
            @click="() => map!.zoomIn()"
            :border="false"
          />
          <FSButton
            class="fs-map-zoom-minus-button"
            icon="mdi-minus"
            @click="() => map!.zoomOut()"
            :border="false"
          />
        </FSCol>
      </FSCard>
    </FSCol>

    <FSMapOverlay
      v-if="$slots['overlay']"
      :mode="$props.overlayMode"
      @update:mode="$emit('update:overlayMode', $event)"
      @update:height="(height) => overlayHeight = height"
      @update:width="(width) => overlayWidth = width"
    >
      <template
        #body
      >
        <slot
          name="overlay"
        />
      </template>
    </FSMapOverlay>
  </FSCard>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, type Ref, provide, type PropType, ref, type StyleValue, watch } from "vue";

import type {} from "leaflet.markercluster";
import { map as createMap, control, tileLayer, latLngBounds, latLng, type LatLng, type LatLngBounds } from "leaflet";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import { type FSArea } from '@dative-gpi/foundation-shared-domain/models';

import { useBreakpoints, useColors } from "../../composables";
import { ColorEnum, type FSLocation, type MapLayer } from "../../models";

import FSMapLayerButton from "./FSMapLayerButton.vue";
import FSMapOverlay from "./FSMapOverlay.vue";
import FSButton from "../FSButton.vue";
import FSCard from "../FSCard.vue";
import FSCol from "../FSCol.vue";

import FSMapMarker from "./FSMapMarker.vue";
import FSMapTileLayer from "./FSMapTileLayer.vue";
import FSMapFeatureGroup from "./FSMapFeatureGroup.vue";
import FSMapMarkerClusterGroup from "./FSMapMarkerClusterGroup.vue";
import FSMapPolygon from "./FSMapPolygon.vue";

export default defineComponent({
  name: "FSMap",
  components: {
    FSMapMarker,
    FSMapTileLayer,
    FSMapFeatureGroup,
    FSMapMarkerClusterGroup,
    FSMapPolygon,

    FSMapLayerButton,
    FSMapOverlay,
    FSButton,
    FSCard,
    FSCol,
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
    locations: {
      type: Array as PropType<FSLocation[]>,
      required: false,
      default: () => [],
    },
    areas: {
      type: Array as PropType<FSArea[]>,
      required: false,
      default: () => [],
    },
    currentLayer: {
      type: String as PropType<"map" | "imagery">,
      required: false,
      default: "map"
    },
    allowedLayers: {
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
  emits: ["update:modelValue", "update:selectedLocationId", "update:selectedAreaId", 'update:overlayMode', 'update:currentLayer', "click:latlng"],
  setup(props, { emit }) {
    const { $tr } = useTranslationsProvider();
    const { getColors } = useColors();
    const { isExtraSmall } = useBreakpoints();

    const leafletContainer = ref<HTMLElement>();
    const locationGroupBounds = ref<LatLngBounds>();
    const areaGroupBounds = ref<LatLngBounds>();
    const gpsPosition : Ref<LatLng | null> = ref(null);
    const map: Ref<L.Map | null> = ref(null);
    const overlayHeight = ref<number>();
    const overlayWidth = ref<number>();

    const defaultZoom = 15;
    
    provide('map', map);

    const mapLayers: MapLayer[] = [
      {
        name: "map",
        label: $tr("ui.map.layer.map", "Map"),
        image: new URL("../../assets/images/map/map.png", import.meta.url).href,
        layer: tileLayer(`http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY ?? ""}`, {
          maxZoom: 22,
          subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
          attribution: '© Google Map Data'
        })
      },
      {
        name: "imagery",
        label: $tr("ui.map.layer.imagery", "Imagery"),
        image: new URL("../../assets/images/map/imagery.png", import.meta.url).href,
        layer: tileLayer(`http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY ?? ""}`, {
          maxZoom: 22,
          subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
          attribution: '© Google Map Data'
        })
      }
    ];

    const bottomMargin = computed(() => {
      let margin = 0;
      if (props.overlayMode !== 'expand' && overlayHeight.value && isExtraSmall.value) {
        margin += overlayHeight.value;
      }
      return margin;
    });

    const leftMargin = computed(() => {
      let margin = 0;
      if (overlayWidth.value && !isExtraSmall.value) {
        margin += overlayWidth.value;
      }
      return margin;
    });

    const style = computed((): StyleValue => ({
      "--fs-map-location-pin-color": getColors(ColorEnum.Primary).base,
      "--fs-map-mylocation-pin-color": getColors(ColorEnum.Primary).base,
      "--fs-map-mylocation-pin-color-alpha": getColors(ColorEnum.Primary).base + "50",
      "--fs-map-container-grayscale": props.grayscale ? '0.9' : '0',
      "--fs-map-control-buttons-margin-bottom": `${bottomMargin.value}px`,
    }));

    const actualLayer = computed(() => {
      return mapLayers.find((layer) => layer.name === props.currentLayer)?.layer ?? mapLayers[0].layer;
    });

    const calculateTargetPosition = (target: L.LatLng) => {
      if(!map.value) {
        return target;
      }
      const zoom = map.value.getZoom();
      const targetPoint = map.value.project(target, zoom).subtract([leftMargin.value / 2, -bottomMargin.value / 2]);
      return map.value.unproject(targetPoint, zoom);
    }

    onMounted(() => {
      if(!leafletContainer.value) {
        return;
      }

      const mapOptions = {
        zoomControl: false,
        scrollWheelZoom: props.enableScrollWheelZoom,
        minZoom: 2,
        maxZoom: 22,
        maxBounds: latLngBounds(latLng(-90, -180), latLng(90, 180)),
        maxBoundsViscosity: 1.0
      };

      map.value = createMap(leafletContainer.value, mapOptions)
        .setView(calculateTargetPosition(latLng(props.center[0], props.center[1])), defaultZoom);
      
      map.value.on('click', (e: L.LeafletMouseEvent) => {
        emit('click:latlng', e.latlng);
      });

      map.value.attributionControl.remove();
      // to display google attribution in bottom left corner
      control.attribution({ position: 'bottomleft' }).addTo(map.value);

      map.value.on('locationfound', (e: L.LocationEvent) => {
        if(!e.latlng) {
          return;
        }

        gpsPosition.value = e.latlng;

        if(!map.value) {
          return;
        }

        map.value.panTo(calculateTargetPosition(e.latlng));
      });
    });

    watch (() => props.center, (center) => {
      if(!map.value) {
        return;
      }
      map.value.setView(calculateTargetPosition(latLng(center[0], center[1])), defaultZoom);
    });

    watch (() => props.selectedLocationId, (selectedLocationId) => {
      if(!map.value) {
        return;
      }
      const selectedLocation = props.locations.find((location) => location.id === selectedLocationId);
      if(!selectedLocation) {
        return;
      }
      map.value.panTo(calculateTargetPosition(latLng(selectedLocation?.address.latitude, selectedLocation?.address.longitude)));
    }, { immediate: true });

    watch(() => props.selectedAreaId, (selectedAreaId) => {
      if(!map.value) {
        return;
      }
      const selectedArea = props.areas.find((area) => area.id === selectedAreaId);
      if(!selectedArea) {
        return;
      }
      const bounds = latLngBounds(selectedArea.coordinates.map((coord) => calculateTargetPosition(latLng(coord.latitude, coord.longitude))));
      map.value.fitBounds(bounds);
    }, { immediate: true });

    watch( () => [locationGroupBounds.value, areaGroupBounds.value], ([locationBounds, areaBounds]) => {
      if(!map.value) {
        return;
      }
      let bounds = locationBounds;
      if(bounds && areaBounds) {
        bounds.extend(areaBounds);
      } else if(areaBounds) {
        bounds = areaBounds;
      }
      if(!bounds) {
        return;
      }
      map.value.fitBounds(bounds, { maxZoom: defaultZoom });
    });

    return {
      ColorEnum,
      leafletContainer,
      locationGroupBounds,
      overlayHeight,
      overlayWidth,
      areaGroupBounds,
      map,
      actualLayer,
      mapLayers,
      gpsPosition,
      style
    };
  }
});
</script>