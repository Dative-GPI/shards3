<template>

  <FSCol class="fs-map">
    <FSRow
      v-if="showLayerChoice"
      gap="2px"
      class="fs-map-overlay-layer-choice"
    >
      <FSChip
        v-for="mapLayer in mapLayers"
        :key="mapLayer"
        :label="mapLayer.label"
        :editable="true"
        :color="innerSelectedLayer === mapLayer.name ? 'dark' : 'light'"
        variant="full"
        @click="setMapBaseLayer(mapLayer.name)"
      />
    </FSRow>
    <FSCol :style="style">
      <div
        :id="mapId"
        :style="{ height: $props.height, width: '100%' }"
      ></div>
    </FSCol>
    <FSCol
      class="fs-map-overlay-container"
      align="center-center"
    >
      <FSMapEditPointLocationOverlay
        v-if="$props.editable"
        :modelValue="selectedPinnedLocation"
        @update:locationCoord="($event) => onNewCoordEntered($event)"
      />
    </FSCol>
  </FSCol>
</template>

<script lang="ts">
import { PropType, computed, defineComponent, onMounted, ref, watch } from "vue";
import { v4 as uuidv4 } from "uuid"; // Import the UUID library

import FSCard from '../FSCard.vue'
import FSCol from '../FSCol.vue'
import FSRow from '../FSRow.vue'
import FSText from '../FSText.vue'
import FSButton from '../FSButton.vue'
import FSChip from '../FSChip.vue'

import FSMapEditPointLocationOverlay from "./FSMapEditPointLocationOverlay.vue";

import L from "leaflet";
import { PinnedLocation, mapLayers } from "../../models/map";
import { ColorEnum } from "../../models";
import { useColors } from "../../composables";


export default defineComponent({
  name: "FSMap",
  components: {
    FSCard,
    FSCol,
    FSRow,
    FSText,
    FSButton,
    FSChip,
    FSMapEditPointLocationOverlay,
  },
  props: {
    selectedLayer: {
      type: String,
      default: "osm",
    },
    height: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: '400px'
    },
    showLayerChoice: {
      type: Boolean,
      required: false,
      default: true,
    },
    editable: {
      type: Boolean,
      required: false,
      default: false,
    },
    modelValue: {
      type: Array<PinnedLocation>,
      required: false,
      default: () => [],
    },
    center: {
      type: Array<number>,
      default: [45.71, 5.07],
      required: false
    },
    singlePoint: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {

    const innerModelValue = ref(props.modelValue);
    const innerSelectedLayer = ref(props.selectedLayer);
    const map = ref<L.Map>();
    const selectedPinnedLocation = ref<PinnedLocation | null>(null);

    const mapId = `map-${uuidv4()}`;
    const pinLayerGroup = new L.LayerGroup();
    const baseLayerGroup = new L.LayerGroup();

    const { getColors } = useColors();

    if (props.singlePoint && props.modelValue.length >= 1) {
      selectedPinnedLocation.value = props.modelValue[0];
    }

    const style = computed((): { [key: string]: string | undefined } => {
      return {
        "--fs-map-location-pin-color": getColors(ColorEnum.Primary).base
      };
    });

    const displayPinnedLocations = () => {
      pinLayerGroup.clearLayers();
      innerModelValue.value.forEach((pinnedLocation) => {
        const iconHtml = `<div class="fs-map-location-pin"><i class="${pinnedLocation.icon} mdi v-icon notranslate v-theme--DefaultTheme fs-icon" aria-hidden="true" style="--fs-icon-font-size: 20px;"  ></i></div>`;

        const icon = L.divIcon({
          html: iconHtml,
          className: 'fs-map-location',
          iconSize: [40, 50],
          iconAnchor: [15, 42],
        });

        L.marker([pinnedLocation.lat, pinnedLocation.lng], { icon }).addTo(pinLayerGroup).bindPopup(pinnedLocation.label);
      });
    };

    const initMap = () => {
      map.value = L.map(mapId, {zoomAnimation: false}).setView([props.center[0], props.center[1]], 13);

      map.value.zoomControl.remove();

      baseLayerGroup.addTo(map.value);
      pinLayerGroup.addTo(map.value);
      setMapBaseLayer(props.selectedLayer);
      displayPinnedLocations();

      map.value.on('click', (e) => {
        if (props.editable) {
          if(props.singlePoint){
            innerModelValue.value = [
              {
                ...innerModelValue.value[0],
                lat: e.latlng.lat,
                lng: e.latlng.lng,
              },
            ];
            selectedPinnedLocation.value = innerModelValue.value[0];
          }else{
            // Not implemented
            alert('Not implemented');
          }
        }
      });
    };

    const setMapBaseLayer = (layerName: string) => {
      innerSelectedLayer.value = layerName;
      const layer = mapLayers.find((mapLayer) => mapLayer.name === layerName) ?? mapLayers[0];
      baseLayerGroup.clearLayers();
      layer.layer.addTo(baseLayerGroup);
    };

    const onNewCoordEntered = (newCoord: PinnedLocation) => {
      selectedPinnedLocation.value = newCoord;
      console.log('newCoord', newCoord)
      if(props.singlePoint){
        innerModelValue.value= [newCoord];
        map.value?.flyTo([newCoord.lat, newCoord.lng], 13);
      }else{
        // Not implemented
        alert('Not implemented');
      }
    };

    onMounted(() => {
      initMap();
    });

    watch(() => innerModelValue.value, () => {
      displayPinnedLocations();
    });

    return {
      onNewCoordEntered,
      setMapBaseLayer,
      innerSelectedLayer,
      mapId,
      style,
      selectedPinnedLocation,
      mapLayers,
    };
  },
});
</script>