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
          :disableClusteringAtZoom="defaultZoom"
          @update:bounds="(bounds) => locationGroupBounds = bounds"
        >
          <FSMapMarker
            v-for="location in $props.locations"
            :selected="location.id === $props.selectedLocationId"
            :key="location.id"
            :label="location.label"
            :color="location.color ?? ColorEnum.Primary"
            :icon="location.icon ?? 'mdi-map-marker'"
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
      :mode="$props.overlayMode"
      @update:mode="$emit('update:overlayMode', $event)"
      @update:height="(height) => overlayHeight = height"
      @update:width="(width) => overlayWidth = width"
    >
      <template
        v-for="(_, name) in overlaySlots"
        v-slot:[name]="slotData"
      >
        <slot
          :name="'overlay-' + name"
          v-bind="slotData"
        />
      </template>
    </FSMapOverlay>
  </FSCard>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, type Ref, provide, type PropType, ref, type StyleValue, watch, onUnmounted, markRaw } from "vue";

import type {} from "leaflet.markercluster";
import { map as createMap, control, tileLayer, latLngBounds, latLng, type LatLng, type FitBoundsOptions, type ZoomPanOptions, type LatLngBounds } from "leaflet";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import { type FSArea } from '@dative-gpi/foundation-shared-domain/models';

import { useBreakpoints, useColors, useSlots } from "../../composables";
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
    const { isExtraSmall } = useBreakpoints();
    const { getColors } = useColors();
    const { slots } = useSlots();

    const leafletContainer = ref<HTMLElement>();
    const locationGroupBounds = ref<LatLngBounds>();
    const areaGroupBounds = ref<LatLngBounds>();
    const gpsPosition : Ref<LatLng | null> = ref(null);
    const map: Ref<L.Map | null> = ref(null);
    const overlayHeight = ref<number>();
    const overlayWidth = ref<number>();

    provide('map', map);

    const defaultZoom = 16;
    const mapResizeObserver = new ResizeObserver(() => {
      if(!map.value) {
        return;
      }
      map.value.invalidateSize();
    });

    const mapLayers: MapLayer[] = [
      {
        name: "map",
        label: $tr("ui.map-layer.map", "Map"),
        image: new URL("../../assets/images/map/map.png", import.meta.url).href,
        layer: tileLayer(`https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY ?? ""}`, {
          maxZoom: 22,
          subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
          attribution: '© Google Map Data'
        })
      },
      {
        name: "imagery",
        label: $tr("ui.map-layer.imagery", "Imagery"),
        image: new URL("../../assets/images/map/imagery.png", import.meta.url).href,
        layer: tileLayer(`https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY ?? ""}`, {
          maxZoom: 22,
          subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
          attribution: '© Google Map Data'
        })
      }
    ];

    const bottomOffset = computed(() => {
      if (props.overlayMode !== 'expand' && overlayHeight.value && isExtraSmall.value) {
        return overlayHeight.value;
      }
      return 0;
    });

    const leftOffset = computed(() => {
      if (overlayWidth.value && !isExtraSmall.value) {
        return overlayWidth.value;
      }
      return 0;
    });

    const style = computed((): StyleValue => ({
      "--fs-map-location-pin-color": getColors(ColorEnum.Primary).base,
      "--fs-map-mylocation-pin-color": getColors(ColorEnum.Primary).base,
      "--fs-map-mylocation-pin-color-alpha": getColors(ColorEnum.Primary).base + "50",
      "--fs-map-container-grayscale": props.grayscale ? '0.9' : '0',
      "--fs-map-control-buttons-margin-bottom": `${bottomOffset.value}px`,
    }));

    const actualLayer = computed(() => {
      return mapLayers.find((layer) => layer.name === props.currentLayer)?.layer ?? mapLayers[0].layer;
    });

    const bounds = computed<LatLngBounds | null>(() => {
      if(!locationGroupBounds.value && !areaGroupBounds.value) {
        return null;
      }
      let bounds = locationGroupBounds.value;
      if(bounds && areaGroupBounds.value) {
        bounds.extend(areaGroupBounds.value);
      } else if(areaGroupBounds.value) {
        bounds = areaGroupBounds.value;
      }
      return bounds as LatLngBounds;
    });

    const overlaySlots = computed(() => {
      return Object.keys(slots).filter((slot) => slot.startsWith("overlay-")).reduce((acc, slot) => {
        acc[slot.replace("overlay-", "")] = slots[slot];
        return acc;
      }, {} as Record<string, unknown>);
    });

    const calculateTargetPosition = (target: L.LatLng, zoom?: number) => {
      if(!map.value) {
        return target;
      }
      zoom = zoom ?? map.value.getZoom();
      const targetPoint = map.value.project(target, zoom).subtract([leftOffset.value / 2, -bottomOffset.value / 2]);
      return map.value.unproject(targetPoint, zoom);
    }

    const flyTo = (lat: number, lng: number, zoom: number = defaultZoom, options?: ZoomPanOptions) => {
      if(!map.value) {
        return;
      }

      if(isExtraSmall.value) {
        // We wait for bottom offset to be calculated and stable to focus on the right position
        let tries = 0;
        let oldBottomOffset = bottomOffset.value;
        const interval = setInterval(() => {
          if(oldBottomOffset === bottomOffset.value || tries >= 30) {
            clearInterval(interval);
            map.value!.flyTo(calculateTargetPosition(latLng(lat, lng), zoom), zoom, options);
          }
          oldBottomOffset = bottomOffset.value;
          tries++;
        }, 20);
        
      } else {
        map.value.flyTo(calculateTargetPosition(latLng(lat, lng), zoom), zoom, options);
      }
      
    }

    const setView = (lat: number, lng: number, zoom: number) => {
      if(!map.value) {
        return;
      }
      map.value.setView(calculateTargetPosition(latLng(lat, lng)), zoom);
    }

    const fitBounds = (bounds: LatLngBounds, options?: FitBoundsOptions) => {
      if (!map.value) {return;}
      const paddingTopLeft: [number, number] = [
        leftOffset.value,
        0
      ];

      const paddingBottomRight: [number, number] = [
        0,
        bottomOffset.value
      ];
      const paddingOptions = {
        paddingTopLeft,
        paddingBottomRight,
        ...options,
      };

      map.value.fitBounds(bounds, paddingOptions);
    };

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

      map.value = markRaw(createMap(leafletContainer.value, mapOptions));
      setView(props.center[0], props.center[1], defaultZoom);
      
      map.value.on('click', (e: L.LeafletMouseEvent) => {
        emit('click:latlng', e.latlng);
      });

      map.value.attributionControl.remove();
      control.attribution({ position: 'bottomleft' }).addTo(map.value);

      map.value.on('locationfound', (e: L.LocationEvent) => {
        if(!e.latlng) {
          return;
        }

        gpsPosition.value = e.latlng;

        if(!map.value) {
          return;
        }

        flyTo(e.latlng.lat, e.latlng.lng);
      });
      
      mapResizeObserver.observe(leafletContainer.value);
    });

    onUnmounted(() => {
      mapResizeObserver.disconnect();
    });

    watch (() => props.center, (center) => {
      if(!map.value) {
        return;
      }
      setView(center[0], center[1], defaultZoom);
    });

    watch (() => props.selectedLocationId, (selectedLocationId) => {
      if(!map.value) {
        return;
      }
      const selectedLocation = props.locations.find((location) => location.id === selectedLocationId);
      if(!selectedLocation) {
        return;
      }
      flyTo(selectedLocation?.address.latitude, selectedLocation?.address.longitude, defaultZoom, { animate: false });
    }, { immediate: true });

    watch(() => props.selectedAreaId, (selectedAreaId) => {
      if(!map.value) {
        return;
      }
      const selectedArea = props.areas.find((area) => area.id === selectedAreaId);
      if(!selectedArea) {
        return;
      }
      const bounds = latLngBounds(selectedArea.coordinates.map((coord) => latLng(coord.latitude, coord.longitude)));
      fitBounds(bounds);
    }, { immediate: true });

    watch( () => bounds.value, (bounds) => {
      if(!map.value || !bounds) {
        return;
      }
      fitBounds(bounds, { maxZoom: defaultZoom });
    });

    return {
      ColorEnum,
      defaultZoom,
      leafletContainer,
      locationGroupBounds,
      overlayHeight,
      overlayWidth,
      areaGroupBounds,
      map,
      actualLayer,
      mapLayers,
      gpsPosition,
      style,
      overlaySlots
    };
  }
});
</script>